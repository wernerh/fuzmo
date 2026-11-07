# The Fuzmo factory

An hourly scheduled agent run builds Fuzmo by walking Matt Pocock's skill chain: **grill with docs → spec → tickets → implement → retro**. Each run does **one step** and then stops. The owner (@wernerh, referred to below as "the owner") steers through GitHub: answering grill rounds, approving with `/approve`, and merging PRs.

The skills live in `.claude/skills/`. Most are user-invoked (`disable-model-invocation`), so a factory run follows them by reading the skill's `SKILL.md` directly and doing what it says, adapted to the async rules below.

## Run protocol

Every run, in this order:

1. **Sync.** `git fetch origin main` and work from the latest `main`. Read `CLAUDE.md`, then this file.
2. **Pause check.** If `PAUSE` exists at the repo root on `main`, or an open issue carries `factory:pause`, post nothing and exit.
3. **Pick the first step below whose condition holds.** Do that one step, log it, exit. If none holds, exit quietly without logging.

### Step selection (first match wins)

| # | Condition | Step |
| --- | --- | --- |
| 1 | An open `factory:pr` PR has owner review comments not yet answered, or failing CI | **Fix the PR**: address the comments or the failure on its branch, push, reply on each thread |
| 2 | The `factory:grill` issue is open and its newest comment is the owner's | **Grill round**: next round of `grilling` + `domain-modeling` |
| 3 | No `factory:grill` issue exists (open or closed) | **Start grill**: open the issue and post round 1 |
| 4 | The grill is closed and no `factory:spec` issue exists | **Spec**: run `to-spec` |
| 5 | The `factory:spec` issue has the owner's `/approve` and no ticket breakdown has been posted | **Ticket proposal**: post the `to-tickets` breakdown as a comment on the spec issue |
| 6 | The owner replied to the breakdown with `/approve` and the tickets are not yet published | **Publish tickets**: create them with blocking edges, label `ready-for-agent` |
| 7 | The owner replied to the breakdown with changes | **Revise breakdown**: post an updated breakdown |
| 8 | Fewer than 2 open `factory:pr` PRs, and a `ready-for-agent` ticket has no open blockers and no open PR | **Implement** the lowest-numbered such ticket |
| 9 | 5 or more `factory:pr` PRs merged since the last `factory:retro` PR (or since the start) | **Retro** |

A step that is waiting on the owner never blocks a later independent step. For example, implementation continues while a new grill round waits for answers.

## The steps

### Grill (`grill-with-docs`)

- Inputs: `docs/product-brief.md`, `docs/strategy.md`, `GLOSSARY.md`, `docs/adr/`, the code.
- Round 1 opens an issue titled `Grill: <topic>` with labels `factory:grill` and `needs-info`, and posts the round in the `grilling` format: numbered questions, each with a recommended answer, worded so "yes" accepts it.
- The owner answers in a comment (for example `1 yes, 2 no: weekends later, 3 yes`).
- The next run folds the answers in via `domain-modeling`: it updates `GLOSSARY.md`, writes ADRs only when all three ADR tests pass, and updates `docs/product-brief.md`. It opens a `factory:docs` PR with those changes, then posts the next round.
- When the frontier is empty, it posts a summary and asks the owner to confirm shared understanding. When the owner confirms, it closes the issue and removes `needs-info`.
- Facts are the factory's job: it never asks the owner something it can look up.

### Spec (`to-spec`)

- Synthesises the closed grill, the brief, the glossary and the ADRs into a spec using the skill's template.
- The skill asks to check test seams with the user. The factory states the proposed seams in the spec under "Testing Decisions" instead, and the owner's `/approve` covers them.
- Publishes the spec as an issue titled `Spec: <feature>` with labels `factory:spec` and `needs-info`. On `/approve` the owner's approval is recorded and `needs-info` is removed.

### Tickets (`to-tickets`)

- Breaks the approved spec into tracer-bullet vertical slices that each fit one fresh context window, with blocking edges.
- The skill's "quiz the user" step happens as a comment on the spec issue: the numbered breakdown (title, blocked by, what it delivers) plus the skill's three questions. The owner replies `/approve` or with changes.
- On approval it publishes one issue per ticket in dependency order, as sub-issues of the spec where possible, with the `ready-for-agent` label and native blocking edges (see `docs/agents/issue-tracker.md`; the installed `gh` is older than 2.94, so use the API fallbacks there).
- The first ticket must always be a walking skeleton: a Gradle project with `app/` and `engine/` modules, one passing engine test, and CI green.

### Implement (`implement`, which uses `tdd` and `code-review`)

- Branch `factory/<issue-number>-<slug>` from the latest `main`.
- Red-green-refactor at the seams named in the spec. Run the module's tests often and the full suite at the end.
- Run `code-review` on the diff and fix what it finds.
- Open a PR using the `pr` skill's body shape, with `Closes #<n>`, label `factory:pr`, and the owner as reviewer. **Never merge.**
- If a ticket turns out to be under-specified, comment on it, swap `ready-for-agent` for `needs-info` and pick nothing else this run.

### Retro (`retro`)

- Primary sources: the PRs merged since the last retro, their review comments, CI failures and the factory log.
- Writes `docs/retros/<YYYY-MM-DD>.md` with the candidates in severity order. Opens a `factory:retro` PR that applies the safe ones (new checks, `CODING_STANDARDS.md` rules, navigation pointers). Anything that changes this file or `CLAUDE.md` is proposed, never applied.

## Logging

Every run that does a step appends one comment to the pinned issue labelled `factory:log`: the time, the step, and links to what it touched. Every comment the factory posts starts with the marker line `<!-- fuzmo-factory -->`. A comment without that marker counts as the owner's.

## Labels

| Label | Meaning |
| --- | --- |
| `factory:grill` | The grill issue |
| `factory:spec` | A spec issue |
| `factory:pr` | A PR opened by the factory |
| `factory:docs` | A PR carrying glossary, ADR or brief updates from a grill round |
| `factory:retro` | A retro PR |
| `factory:log` | The pinned run log |
| `factory:pause` | On any open issue: the factory does nothing |
| `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix` | The skills' triage roles |

## Owner gates

- Answering grill rounds and confirming the grill is finished.
- `/approve` on the spec and on the ticket breakdown.
- Merging every PR. Auto-merge for green, low-risk PRs can be enabled later by editing this section.
- Anything touching signing, Play Console, billing products, privacy text or this file.

## Safety

- One step per run; no step runs longer than it needs.
- Never push to `main`, never merge, never force-push, never delete branches you did not create.
- Never commit secrets. The repo is public.
- When unsure, ask in an issue with `needs-info` rather than guess.
