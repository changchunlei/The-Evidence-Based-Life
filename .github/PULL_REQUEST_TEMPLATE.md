## Summary

<!-- Briefly describe the purpose of this Pull Request and what changes were made. -->

## Type of Change

- [ ] 💡 New evidence-based rule proposal
- [ ] 🔍 Citation correction or DOI/PubMed update
- [ ] 📝 Plain-English readability refinement
- [ ] ⚖️ Statutory or legal boundary update
- [ ] 💻 Web reader (`index.html`) or tooling improvement
- [ ] 📚 Documentation / README update

## Pre-Submission Checklist

- [ ] All rules adhere to the format outlined in [CONTRIBUTING.md](CONTRIBUTING.md).
- [ ] Every rule specifies a valid Cost Tag (`Money=`, `Time=`, `Willpower=`, `Benefit=`, `Metric=`).
- [ ] An Evidence Grade (`A`, `B`, or `C`) is assigned with a valid primary source citation (DOI, PubMed, or official statute).
- [ ] The "In plain terms" summary avoids dense jargon and communicates the practical takeaway clearly.
- [ ] Local verification commands pass:
  - [ ] `node tools/sync-stats.mjs --check`
  - [ ] `node tools/check-plain.mjs`
  - [ ] `node tools/check-refs.mjs --check`
