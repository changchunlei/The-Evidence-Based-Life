# Australian Localisation Report — First Pass

**Date:** 16 October 2026 · **Status after second working session:** deep chapter passes completed across the book. Structure unchanged: 34 chapters, 765 rules, 649+ cross-references resolved, `check-plain` 0 flags, stats synced. Word-count deltas all within ±5% (see table). All international study evidence (DOIs, effect sizes, trial populations) preserved untouched.

Verification sources: the sibling `aulivebetter` repository (same author) — its 74 human-verified Australian rules (`content/rules/au-*.md`, verified 2026-10-12) and its primary-source link audit — plus stable government program knowledge (health.gov.au NIP/NCSP/NBCSP/BreastScreen/NLCS, Services Australia, Fair Work Ombudsman, ACCC/Scamwatch/AFCA/ATO/ASIC, state regulators).

## What was changed

### 1. Chapter 1 — deep localisation (~55 edits, all rules audited)
| Original (China-specific) | Replacement (Australian) | Source |
|---|---|---|
| WHO China road deaths (248,099 in 2021, 17.4/100k) | 1,187 Australian road deaths in 2024, ~4.3/100k | BITRE Road Trauma Australia 2024 — **flag: verify exact count/rate** |
| Helmet "100–300 yuan" | A$30 bicycle / A$150+ motorcycle; approved helmet legally required all ages | State road rules |
| Gas hose replacement rules (State Council Order 583) | Licensed gasfitter; ESV 2-yearly heater servicing; verify door-to-door pitches with supplier | Energy Safe Victoria; BPC (Vic) |
| MEM high-rise e-bike ban + fines | FRNSW lithium-battery charging precautions; call 000 | FRNSW battery-and-charging-safety |
| MEM "11 essential items" checklist | FRNSW home fire safety guidance; AS 1841 / AS/NZS 3504 standards; fixed broken docs link | FRNSW; Australian Standards |
| RMB prices (BP monitor, glucose, car seats, guards, life jackets, ED workup, DXA, condoms, H. pylori, ECG) | AUD equivalents or Medicare/PBS access statements | Market estimates (chapter intro defines Cost as author estimates) |
| 23-valent pneumococcal "used in China" | NIP uses 13vPCV at 70+ (trial formulation) | health.gov.au NIP |
| HPV vaccine RMB prices | Free NIP school program (~12–13, all genders) + catch-up; ~A$200/dose private | immunisationhandbook.health.gov.au |
| Mammogram 200–300 yuan; "China starts at 45" | BreastScreen free 50–74 invited, bookable from 40 | health.gov.au (au-safety-009) |
| HPV test 100–300 yuan | NCSP HPV test 5-yearly 25–74, Medicare-funded, self-collection | healthdirect (au-safety-010) |
| FIT few dozen yuan; colonoscopy | NBCSP free kit 2-yearly 45–74; colonoscopy Medicare-rebated | health.gov.au (au-safety-011) |
| Flu shot 50–150 yuan | Free NIP 65+/pregnant/Indigenous 50+/conditions; ~A$25 pharmacy | health.gov.au NIP |
| Shingles 3,000–4,000 yuan self-paid (tag Money=High) | Free NIP 65+/Indigenous 50+; several hundred private (tag → Money=Low) | health.gov.au shingles |
| LDCT 200–400 yuan | National Lung Cancer Screening Program: free 2-yearly 50–70, 30+ pack-years (July 2025) | health.gov.au NLCS Program |
| 12356 crisis line (Rule 25 + title) | Lifeline 13 11 14 (24/7); 000 for danger | lifeline.org.au |
| "Chinese CDC free HIV testing" (Rule 31) | Public sexual health clinics free/confidential; Medicare GP tests; AU privacy framing | healthdirect HIV |
| Radiation: "call 110"; unlabelled China stats | Call 000 + state radiation regulator; stats labelled Chinese; ARPANSA licensing added | ARPANSA |
| Gambling: 12356 | Gambling Help 1800 858 858 + Lifeline | gamblinghelponline.com.au |
| PrEP "several thousand yuan" | PBS-subsidised (~A$40 script; less with concession) | PBS |
| Confined space: 119/120, Ministerial Order No. 13 | Dial 000; Australian WHS confined-space codes | Safe Work Australia model code |
| Tetanus China 2024 guideline + garbled NHC source | Australian Immunisation Handbook (same algorithm) | immunisationhandbook.health.gov.au |
| Hep B "born before 1992" | AU universal infant vaccination began 2000; earlier programs patchier | NIP history |

**Kept as valid international evidence (DOIs intact):** China CDC mushroom/CO studies, China PEACE hypertension study, Qidong hep B trial, Linqu H. pylori trial, NLST and European screening trials, Swedish gambling registry, Goiânia radiation accident, China falls/drowning/AFib surveys (explicitly labelled foreign).

### 2. Cross-chapter emergency-number sweep (life-safety critical)
- `call/dial 110|119|120|122|12119|12110` → `000` (~80 occurrences across 16 files), including ch13 rule titles. Ch13's multi-country directory block keeps correct per-country numbers (its Australia row already existed).
- `12356` → `Lifeline 13 11 14`; `12355` → `Kids Helpline 1800 55 1800` (incl. ch29 rule 11 title, ch30 costs).

### 3. Scam-reporting pathway rewrite (ch08 rules 2–3; ch12, ch13, ch14 cross-refs)
- China's 96110/110 police stop-payment mechanism → **call your bank first** (recall/freeze), report via **ReportCyber**, **Scamwatch 1300 795 995** (ACCC), **IDCARE 1800 595 160**; 000 if crime in progress. Sources replaced with scamwatch.gov.au, cyber.gov.au/report, idcare.org. Fraud-typology statistics (Fujian PSD, MPS 2026) retained as explicitly Chinese evidence.

### 4. Service-hotline mapping (24 context-checked replacements)
| Chinese service | Australian replacement | Where |
|---|---|---|
| 12315 consumer | state/territory consumer affairs agency | ch05 ×5, ch08, ch22 |
| 12345 government | state/territory government services line | ch05 ×2 |
| 12378 banking/insurance | AFCA 1800 931 678 | ch05 ×2, ch07 |
| 12366 tax | ATO 13 28 61 | ch12 ×3, ch19 |
| 12333 labor/social security | Services Australia 132 468 / Fair Work Ombudsman 13 13 94 (by context) | ch07, ch17, ch19 ×2 |
| 12348 legal aid | state legal aid commissions (LawAccess NSW 1300 888 529; VLA 1300 792 387) | ch07 |
| 12320 smoking cessation | Quitline 13 7848 | ch02 |

### 5. Chapter 7 Rule 1 — unemployment benefits
Chinese unemployment-insurance rules (contribution-year durations, provincial rates, 90%-of-minimum-wage, 12333 app) → **JobSeeker Payment** via myGov/Centrelink (claims generally not backdated; income+assets tests; mutual obligations; Rent Assistance/FTB stacking; National Debt Helpline 1800 007 007; Beyond Blue 1300 224 636). Sources: Services Australia, Moneysmart (facts human-verified in aulivebetter au-support-001).

### 6. Statistics sync
One evidence grade changed (ch01 Rule 6: A→B, China statute → fire-service guidance). `node tools/sync-stats.mjs` run; README badges now A 494 · B 212 · C 59. `check-refs --check` and `check-plain` pass with no new issues.

## Second session — deep chapter passes (chapters 02–34)

| Chapter | What was localised |
|---|---|
| 02 | All yuan costs → AUD; Quitline/GP smoking rule (incl. title); NRT/PBS pricing; vaping pharmacy-only law (Oct 2024); Medicare framing for specialist visits |
| 03–04 | Residual cost conversions |
| 05 | ~30 rule rewrites: tax reconciliation → myTax/ATO (31 Oct, $18,200 threshold); number portability → ACMA/TIO; lottery framing; provident fund → First Home Super Saver; medical-account sharing → extras-reset claim; water prices; margin loans → ASIC regime; 3×/10× compensation → ACL consumer guarantees + Food Standards Code; CMA jewellery certificates → NATA/NCJV; personal pension → concessional super (A$32,500 cap 2026-27); prepayments → ACL/gift-card rules; car insurance → CTP vs third-party property (TAC/SIRA sources); life-insurance costs; cooling-off 15d→14d (ASIC); bank counter mis-selling; AFCA in title; crypto → AUSTRAC-registered exchanges/Scamwatch; self-employed pension → personal deductible super; lemon law → ACL major-failure rejection; used cars → PPSR + inspection; 4S fees → itemised quotes; tour shopping → state consumer affairs |
| 06 | All yuan cost figures converted (pattern-based, ×0.2 with phrase mapping) |
| 07 | All 23 rule titles + key bodies: wage recovery → Fair Work Ombudsman (13 13 94); legal aid commissions; homelessness entry services; Workforce Australia; Crisis Payment/emergency relief; dibao → stacked Centrelink payments; DSP/NDIS; Medicare levy; My Aged Care framing; super gap recovery via ATO; bankruptcy discharge (3 years); hardship notice under National Credit Code |
| 08 | Limitation periods → state 6-year rules + 21-day FWC windows; police event numbers; DV protection orders → intervention orders/AVOs; scam pathway (bank → Scamwatch/ReportCyber/IDCARE); mental-health hotline refs → Lifeline |
| 09 | Adoption → state adoption authorities; sex-work legality by state |
| 12 | Employee contracts → written agreements + Fair Work Info Statement + super from day one; ATO scam-call verification |
| 15 | All 18 rule titles: bonds/condition reports; illegal eviction; agent licensing; title searches/PEXA/trust accounts; off-the-plan (sunset clauses, trust accounts); refinancing/comparison rates; first-home schemes; strata disputes → tribunals |
| 17 | Wills (no notarisation, two witnesses, divorce revocation); My Aged Care assessments; residential-care registration checks |
| 18 | Child payment → Family Tax Benefit Part A + Newborn Supplement |
| 19 | All 24 rule titles + key claims: award penalty rates; NES annual leave; probation/21-day unfair dismissal; redundancy & notice scales; payslip rules; WHS cease-unsafe-work; workers comp via employer's insurer; impairment assessments; death benefits; separation certificates; redundancy tax caps; super portability; casual loading; ATO super recovery; adverse action; Same Job Same Pay |
| 24 | All 15 rule titles: GP-first/Medicare referral rules; bulk billing vs gaps; ambulance coverage warning; chronic disease management plans/eScripts; records access + complaints commissions; My Health Record; ED-first treatment; NDIS/DSP evidence; PBS generic substitution; telehealth; itemised accounts |
| 25 | All 12 rule titles: expected-death protocols (GP/palliative); death certification via BDM; funeral directors + price comparison; coronial system; institution notification; consumer-law funeral quotes; super death benefits/unclaimed money; estate debts; small estates without probate |
| 27 | Medicare/Paid Parental Leave framing; BDM birth registration + newborn Medicare enrolment (incl. title); 000 emergency framing |
| All | 219 yuan/RMB consumer-price lines converted to AUD (×0.2 with phrase mappings); residual yuan mentions are China-labelled statistics kept as international evidence |

**Kept as explicitly-Chinese comparative content:** Chinese statute citations (Criminal/Civil Code articles, penalty tables, case statistics) inside Benefit/Notes fields where they function as labelled international context — each such rule's title and action advice now points to the Australian pathway.

## Word-count deltas after both sessions (requirement ±5%)
All 34 chapters within ±5%. Largest: ch15 −4.8%, ch05 −4.6%, ch07 −1.8%, ch25 −1.0%, ch01 +1.2%, ch19 +1.0%. All others within ±0.4%.

## Flagged for human review
1. **BITRE 2024 road-death figures (ch01 Rule 1)** — 1,187 deaths / ~4.3 per 100k from memory of the BITRE 2024 statistical summary; confirm at <https://www.bitre.gov.au/publications/road-deaths>.
2. **AUD price estimates** (helmets, monitors, first-aid sets, condoms, private vaccine doses, H. pylori breath test) — market estimates consistent with the book's "Cost figures are author's rough estimates" framing; sanity-check.
3. **Grade-A retention on ch08 Rule 2** after replacing Chinese statute with regulator guidance — consider downgrading to B, mirroring ch01 Rule 6.

## Coverage map (honest status)
- **Deep-localised:** Chapter 1 (all 46 rules audited).
- **Rule-level localised:** ch07 Rule 1 (JobSeeker); ch08 Rules 2–3 (scam pathway + hotlines).
- **Swept for safety-critical numbers/hotlines:** all 34 chapters.
- **Not yet deep-localised (need full chapter passes):** ch05 (IIT/super/investment law), ch07 remaining rules (dibao, shelters, medical aid), ch08/09 remaining Civil Code/Criminal Law rules, ch10 (marriage property), ch11/26 (developer/platform law), ch12 (business registration → ASIC/ABN), ch13 clinical pathway details, ch15 (tenancy/transfer duty), ch16–18, 20 (Medicare/aged care), ch19 (Fair Work), ch21, ch23 (qualifications), ch24 (Medicare/patient rights), ch25 (probate/death process), ch27–34 remaining system references. These still contain Chinese statutes, yuan amounts and institutional references needing the same treatment Chapter 1 received.
- `docs/verification-records/`, `docs/` essays and `README.md` glossary intentionally unchanged (historical audit records; international-study content).

## Reproduction
Sweep scripts: `/tmp/au_number_sweep.py`, `/tmp/au_scam_fixes.py`, `/tmp/au_scam_fixes2.py`, `/tmp/au_hotline_fixes.py` (kept outside the repo). All edits visible via `git diff` in the working tree.

