# Fuzmo

Android-only virtual pet for adults: Fuzmo goes to sleep when your phone does, and each morning tells you how the night went. Product truth lives in `docs/product-brief.md`; the full strategy and research behind it is in `docs/strategy.md`.

## Navigation

- `docs/product-brief.md`: what we are building now (read first)
- `GLOSSARY.md`: domain language; use its terms in code, tests, issues and PRs
- `docs/adr/`: decisions that are hard to reverse
- `docs/factory/FACTORY.md`: how the hourly agent factory runs, its stages and its gates
- `design/`: Fuzmo's art. `design/fuzmo/*.svg` are the mood states; `design/tools/render-fuzmo.mjs` regenerates them

## Hard rules

- Agents never push to `main`, never merge a PR and never force-push. All change goes through PRs the owner merges.
- Never commit secrets, keystores, signing configs or `google-services.json`. This repo is public.
- Never use AccessibilityService, `QUERY_ALL_PACKAGES`, location or Health Connect (see `docs/adr/`).
- Keep `engine/` free of Android imports.

## Agent skills

### Issue tracker

GitHub Issues on `wernerh/fuzmo`, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` at the root and `docs/adr/`. See `docs/agents/domain.md`.
