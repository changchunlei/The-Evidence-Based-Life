# Contributing to The Evidence-Based Life

Thank you for your interest in contributing! This project is an open-source, evidence-based manual designed to help people make high-ROI decisions for longevity, finances, emergency response, and legal boundaries.

Every single rule in this repository must meet strict standards of scientific or statutory verification. We do not accept personal anecdotes, folk wisdom, generic lifestyle advice, or commercial product promotions.

---

## How You Can Contribute

1. **Fact-Checking & Auditing**: Review existing citations, check if a trial has been superseded by newer Cochrane meta-analyses, or report broken DOI/PubMed links.
2. **Local Legal & Statutory Adaptation**: Improve statutory citations for consumer rights, labor law, or tenant protections in specific jurisdictions.
3. **Proposing New Rules**: Suggest new high-ROI interventions that meet our evidence criteria.
4. **Clarity & Language Improvements**: Improve readability in the "In plain terms" summaries so complex clinical statistics remain crystal clear to non-technical readers.
5. **Tooling & Reader Enhancements**: Enhance `index.html` (interactive reader), EPUB/PDF generation scripts, or validation tooling in `tools/`.

---

## Evidence Standards

Every proposed rule must be assigned an **Evidence Grade**:

| Grade | Requirement | Examples |
| :---: | :--- | :--- |
| **A** | Quantified outcomes from comprehensive meta-analyses, large-scale multi-year prospective cohorts, or randomized controlled trials (RCTs) with clear effect sizes (RR, HR, percentage risk difference). | Cochrane reviews, NEJM / Lancet RCTs, UK Biobank cohorts. |
| **B** | Supported by peer-reviewed literature, but based on smaller cohorts, observational associations, or lacking multi-center replication. | Observational case-control studies, single-center clinical trials. |
| **C** | Authoritative statutory frameworks, government agency consensus, or clinical heuristics without direct epidemiological trials. | Labor law statutes, CDC/WHO emergency response protocols. |

---

## Rule Formatting Standard

Every rule in `book/*.md` must strictly follow this format:

```markdown
### [Number]. [Clear, direct, actionable headline]
<!-- Cost Tag: Money=[0|Low|High] Time=[Low|Med|High] Willpower=[No|Some|Yes] Benefit=[High|Med|Low] Metric=[Mortality|Money|Time|Freedom] -->
- Cost: [Money, time, and willpower consumed. Be specific.]
- In plain terms: [1-3 sentences in simple human language explaining the practical takeaway and quantified impact.]
- Benefit: [Exact clinical or statutory data: sample size, duration, effect sizes (RR, HR, CI), and statistical endpoints.]
- Evidence grade: [A, B, or C]
- Sources: [Author (Year). Title. Journal. https://doi.org/... or official statutory document link.]
- Notes: [Limitations, contraindications, ongoing controversies, or high-risk demographics.]
```

### Writing Principles

- **No vague claims**: Never write *"improves health significantly"* or *"saves a lot of money"*. Write *"reduces 5-year stroke risk by 14%"* or *"prevents statutory penalties of up to double monthly wages"*.
- **Plain terms clarity**: The "In plain terms" field must be readable by anyone without a medical or legal degree. Run `node tools/check-plain.mjs` to audit clarity.
- **Transparent controversies**: If an intervention is debated (e.g., salt substitution in patients with severe renal failure), you must document the controversy in the `- Notes:` line.

---

## Local Verification Workflow

Before submitting a Pull Request, ensure all local tests pass:

```bash
# Run all automated verification checks at once:
npm test

# Or run individual checks:
npm run check:stats  # Verify rule counts, grade tallies, and source links
npm run check:plain  # Verify plain English readability and jargon avoidance
npm run check:refs   # Verify cross-reference citations and anchor links

# If you add or modify rules, synchronize stats across README and index.html:
npm run sync:stats
```

---

## Submitting a Pull Request

- **Branch naming**: Use descriptive branches like `feat/add-rule-ch02`, `fix/broken-citation-ch14`, or `docs/update-readme`.
- **Commit messages**: Use Conventional Commits (e.g., `feat(ch02): add rule on potassium salt substitution`, `fix(tools): resolve regex edge case in sync-stats`).
- **Scope**: Keep Pull Requests focused and modular. A PR addressing one chapter or fixing a specific set of citations is reviewed and merged much faster than a massive multi-chapter diff.

Thank you for helping build the most rigorous, high-ROI life manual on the internet!
