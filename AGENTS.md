# AGENTS.md — Codex guardrails (minimal)

## Goal
Build features with the fewest necessary steps. Do not repeat work.

## Do-not-repeat rules (strict)
- If you already tried something and it failed, DO NOT retry the same command/config unchanged.
- Before running any command, check whether its output already exists in the repo or in the last logs.
- Never re-install dependencies unless package.json/lockfile changed or the install clearly failed.
- Never re-run format/lint/test loops more than once per change. Fix all findings, then run once.

## Workflow (always)
1) **Plan (2–6 bullets max)**: say what files you will touch.
2) **Edit**: make the smallest change that can work.
3) **Verify once**:
   - Prefer: `npm test` (if exists) OR `npm run build` OR `npm run lint` (pick the most relevant).
4) **Stop**: summarize what changed and what to do next.

## Git + file hygiene
- Don’t rename/move files unless required.
- Don’t add new tools/libraries unless explicitly needed.
- Keep diffs small and focused.
- If a new config file is added, explain why.

## Decisions
- If multiple approaches exist, pick the simplest conventional one.
- If blocked by ambiguity, make one reasonable assumption and proceed; don’t ask multiple questions.

## Output style
- No long explanations.
- No repeating the same instructions.
- When proposing commands, give a single copy-pastable block.