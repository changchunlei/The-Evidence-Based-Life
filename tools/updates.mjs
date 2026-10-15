// Recent Updates Tracker: Scans git history of book/ chapters, records when each rule was added or last modified,
// and outputs updates.json for the web reader to display "New" and "Updated" badges and sidebar filters.
//
// Usage:
//   node tools/updates.mjs            # Regenerate updates.json (called automatically by sync-stats.mjs)
//   node tools/updates.mjs --check    # Check only, exits with code 1 if stale (for CI with fetch-depth: 0)
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './lib/book.mjs';

const CHECK = process.argv.includes('--check');
const SINCE = '2026-10-10';
const OUT = 'updates.json';
const FIELDS = ['Title', 'Cost', 'In plain terms', 'Benefit', 'Evidence grade', 'Notes'];

const day = sec => new Intl.DateTimeFormat('sv-SE', { timeZone: 'UTC' }).format(new Date(sec * 1000));
const git = (args, input) => {
  const r = spawnSync('git', ['-c', 'core.quotepath=false', ...args], { cwd: ROOT, input, maxBuffer: 1 << 30 });
  if (r.status !== 0) throw new Error(`git ${args.join(' ')} failed: ${r.stderr}`);
  return r.stdout;
};

// Normalize cross-references and spacing before comparison
const norm = s => s.toLowerCase().replace(/\s+/g, ' ')
  .replace(/\b(chapter|section|rule|item)\s+\d+\b/gi, '$1 #');

function parse(text) {
  const out = [];
  let sec = null, e = null;
  for (const line of text.split(/\r?\n/)) {
    let m;
    if ((m = /^#{1,2} (\d+)\. /.exec(line))) { sec = String(Number(m[1])); continue; }
    if ((m = /^### (\d+)\. (.+)$/.exec(line)) && sec) {
      e = { key: `${sec}-${m[1]}`, f: { Title: m[2].trim() } };
      out.push(e); continue;
    }
    if (!e) continue;
    if ((m = /^- (Cost|In plain terms|Benefit|Evidence grade|Notes):\s*(.*)$/.exec(line))) {
      e.f[m[1]] = m[2].trim();
    }
  }
  for (const x of out) x.n = Object.fromEntries(FIELDS.map(k => [k, norm(x.f[k] ?? '')]));
  return out;
}

const words = s => new Set(s.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean));
function dice(a, b) {
  if (!a.size || !b.size) return 0;
  let n = 0; for (const x of a) if (b.has(x)) n++;
  return 2 * n / (a.size + b.size);
}

function step(prev, cur, date) {
  const next = new Array(cur.length);
  const byTitle = new Map();
  prev.forEach((p, i) => { const k = p.e.n.Title; if (!byTitle.has(k)) byTitle.set(k, []); byTitle.get(k).push(i); });
  const used = new Set();

  // 1. Exact title match
  cur.forEach((c, j) => {
    const cand = (byTitle.get(c.n.Title) ?? []).filter(i => !used.has(i));
    if (!cand.length) return;
    const sec = c.key.split('-')[0];
    const i = cand.find(i => prev[i].e.key.split('-')[0] === sec) ?? cand[0];
    used.add(i); next[j] = { ...prev[i], e: c };
  });

  // 2. Fuzzy match for slightly reworded titles
  const restP = prev.map((p, i) => i).filter(i => !used.has(i));
  const restC = cur.map((c, j) => j).filter(j => !next[j]);
  if (restP.length && restC.length) {
    const sig = e => ({ t: words(e.n.Title), b: words((e.n['In plain terms'] || '') + ' ' + (e.n['Benefit'] || '')) });
    const sp = new Map(restP.map(i => [i, sig(prev[i].e)]));
    const pairs = [];
    for (const j of restC) {
      const sc = sig(cur[j]);
      for (const i of restP) {
        const s = Math.max(dice(sc.t, sp.get(i).t), dice(sc.b, sp.get(i).b) * 0.9);
        if (s >= 0.4) pairs.push([s, i, j]);
      }
    }
    pairs.sort((a, b) => b[0] - a[0]);
    for (const [, i, j] of pairs) {
      if (used.has(i) || next[j]) continue;
      used.add(i); next[j] = { ...prev[i], e: cur[j] };
    }
  }

  cur.forEach((c, j) => { if (!next[j]) next[j] = { e: c, added: date, changed: null, fields: [] }; });
  return next;
}

const nums = s => (s.match(/\d+(?:\.\d+)?/g) ?? []).sort().join();
function real(k, a, b) {
  if (a === b) return false;
  if (k === 'Title' || k === 'Evidence grade') return true;
  return nums(a) !== nums(b) || b.length - a.length >= Math.max(60, a.length / 4);
}

function advance(prev, cur, date) {
  const next = step(prev, cur, date);
  const old = new Map(prev.map(p => [p.id, p.e]));
  for (const t of next) {
    if (t.id === undefined) { t.id = SEQ++; continue; }
    const o = old.get(t.id);
    const diff = FIELDS.filter(k => real(k, o.n[k], t.e.n[k]));
    if (!diff.length || t.added === date) continue;
    t.fields = t.changed === date ? [...new Set([...t.fields, ...diff])] : diff;
    t.changed = date;
  }
  return next;
}
let SEQ = 0;

// ---------- Extract Git History ----------
const sinceTs = Math.floor(new Date(`${SINCE}T00:00:00Z`).getTime() / 1000);
const base = git(['rev-list', '-1', '--first-parent', `--before=${sinceTs}`, 'HEAD']).toString().trim();
if (!base) throw new Error(`Could not find base commit before ${SINCE}. On CI checkout ensure fetch-depth: 0`);

const log = git(['log', '--first-parent', '--reverse', '--diff-merges=first-parent', '--name-only',
  '--format=@%H %ct', `${base}..HEAD`, '--', 'book/']).toString();
const commits = [];
for (const line of log.split('\n')) {
  if (line.startsWith('@')) { const [h, t] = line.slice(1).split(' '); commits.push({ h, date: day(Number(t)), files: [] }); continue; }
  if (/^book\/.+\.md$/.test(line.trim())) commits.at(-1).files.push(line.trim());
}

const baseFiles = git(['ls-tree', '--name-only', base, 'book/']).toString().split('\n').filter(f => f.endsWith('.md'));
const reqs = [...baseFiles.map(f => `${base}:${f}`), ...commits.flatMap(c => c.files.map(f => `${c.h}:${f}`))];
const blob = git(['cat-file', '--batch'], reqs.join('\n') + '\n');
const got = new Map();
let pos = 0;
for (const r of reqs) {
  const nl = blob.indexOf(10, pos);
  const head = blob.subarray(pos, nl).toString();
  pos = nl + 1;
  if (head.endsWith(' missing')) { got.set(r, null); continue; }
  const size = Number(head.split(' ')[2]);
  got.set(r, blob.subarray(pos, pos + size).toString('utf8'));
  pos += size + 1;
}

// ---------- Step Through Commits ----------
const files = new Map(baseFiles.map(f => [f, got.get(`${base}:${f}`)]));
const snapshot = () => [...files.keys()].sort().flatMap(f => files.get(f) ? parse(files.get(f)) : []);
let track = advance([], snapshot(), null);
for (const c of commits) {
  for (const f of c.files) files.set(f, got.get(`${c.h}:${f}`));
  track = advance(track, snapshot(), c.date);
}

// Handle working directory uncommitted modifications
const disk = readdirSync(join(ROOT, 'book')).filter(f => f.endsWith('.md')).map(f => `book/${f}`);
const dirty = disk.some(f => readFileSync(join(ROOT, f), 'utf8').replace(/\r\n/g, '\n') !== files.get(f)?.replace(/\r\n/g, '\n'))
  || [...files.keys()].some(f => files.get(f) && !disk.includes(f));
if (dirty) {
  files.clear();
  for (const f of disk) files.set(f, readFileSync(join(ROOT, f), 'utf8'));
  track = advance(track, snapshot(), day(Date.now() / 1000));
}

// ---------- Build Output ----------
const items = {};
for (const t of track) {
  if (t.added) items[t.e.key] = { added: t.added };
  else if (t.changed) items[t.e.key] = { changed: t.changed, fields: FIELDS.filter(k => t.fields.includes(k)) };
}
const keys = Object.keys(items).sort((a, b) => {
  const [x1, y1] = a.split('-').map(Number), [x2, y2] = b.split('-').map(Number);
  return x1 - x2 || y1 - y2;
});

const json = `{\n  "since": "${SINCE}",\n  "items": {\n${keys.map(k => `    ${JSON.stringify(k)}: ${JSON.stringify(items[k])}`).join(',\n')}\n  }\n}\n`;

const nAdd = keys.filter(k => items[k].added).length, nChg = keys.length - nAdd;
console.log(`Recent updates: since ${SINCE}, ${nAdd} rules added, ${nChg} rules modified (scanned ${commits.length} commits${dirty ? ' + working tree' : ''})`);

const strip = s => JSON.stringify(Object.fromEntries(Object.entries(JSON.parse(s).items)
  .map(([k, v]) => [k, v.added ? 'added' : v.fields.join()])));
const old = existsSync(join(ROOT, OUT)) ? readFileSync(join(ROOT, OUT), 'utf8') : '';
if (CHECK) {
  if (old && strip(old) === strip(json)) { console.log('updates.json check passed.'); process.exit(0); }
  console.log('updates.json is out of date. Run "node tools/sync-stats.mjs" (or "node tools/updates.mjs") to update.');
  process.exit(1);
}
if (old.replace(/\r\n/g, '\n') !== json) writeFileSync(join(ROOT, OUT), json);
