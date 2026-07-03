# Contributing

## Work Style

MCP Maker is built in small, verified increments. Every change must preserve security-first defaults and update the context files when decisions change.

## Before Coding

Read:

1. `context/AGENTS.md`
2. `context/PROMPT.md`
3. `context/PROJECT_TRACKER.md`
4. `context/ARCHITECTURE.md`
5. `context/SECURITY.md`
6. `context/MEMORY.md`

Then inspect the existing files you plan to touch.

## Branch And Commit Policy

This repository is not initialized as Git yet. Once Git is initialized:

- Use small commits.
- Keep generated artifacts out of Git unless explicitly needed.
- Never commit secrets.
- Never commit temporary filesystem workspaces.
- Never commit `node_modules`.

## Push Conventions

Use this flow when the remote repository exists:

1. Confirm the working tree with `git status --short`.
2. Review changes with `git diff`.
3. Run the smallest useful verification command before committing.
4. Stage only intentional files.
5. Commit with a conventional commit message.
6. Pull with rebase before pushing when the remote already has commits.
7. Push the current branch.

Commit message format:

```text
type(scope): summary
```

Allowed types:

- `chore`: repository setup, tooling, context, maintenance.
- `docs`: documentation only.
- `feat`: user-facing feature.
- `fix`: bug fix.
- `refactor`: behavior-preserving code change.
- `test`: tests only.
- `security`: security hardening.

Examples:

```text
docs(context): add auth workspace project model
chore(repo): initialize pnpm workspace
feat(auth): add better auth session helpers
security(project): enforce workspace access checks
```

Initial repository push convention:

```bash
git init
git add .
git commit -m "chore(repo): initialize mcp maker workspace"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Do not push until:

- `git status --short` has only intentional files.
- No secret files are staged.
- The commit message follows the convention.
- The owner confirms the remote URL.

## Code Rules

- Named exports only.
- No `any`.
- No `React.FC`.
- No class components.
- No production `console.log`.
- No frontend secrets.
- No comments in code unless the owner changes `context/AGENTS.md`.
- Inputs validated at server boundaries.
- Errors handled explicitly.
- Constants live in module `config` directories.

## Feature Workflow

For each feature:

1. Define types in `@types`.
2. Define config constants.
3. Implement server logic.
4. Implement hooks only when UI state requires them.
5. Implement UI components.
6. Add integration route or view.
7. Add focused tests.
8. Run verification.
9. Update `context/PROJECT_TRACKER.md`.
10. Update `context/MEMORY.md` if a durable decision changed.

## Verification Expectations

Use the smallest useful command:

- Type check when TypeScript changes.
- Test when logic changes.
- Build when routing, config, or generated output changes.
- Security review when repository analysis, generation, filesystem, ZIP, or command execution changes.

If a command cannot run, record why in the final handoff.

## Dependency Policy

No new dependency without explicit approval.

Proposal format:

```text
Dependency proposal:
- Package:
- Purpose:
- Why needed:
- Alternatives:
- Runtime or bundle impact:
- Scope:
```

## Documentation Updates

Update docs in the same change when:

- Architecture changes.
- Security policy changes.
- Feature status changes.
- New dependency is approved.
- Generated server contract changes.
- Agent workflow changes.
