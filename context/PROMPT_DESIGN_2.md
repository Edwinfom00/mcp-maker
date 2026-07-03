# Prompt Design 2 - Interface Implementation From Prototype

Use this prompt for Claude Code after a design prototype exists.

## Prompt

You are implementing MCP Maker interfaces in Next.js App Router with TypeScript.

Before coding, read:

1. `context/AGENTS.md`
2. `context/DESIGN.md`
3. `context/ARCHITECTURE.md`
4. `context/SECURITY.md`
5. `context/PROJECT_TRACKER.md`
6. The current prototype reference

Your task is to implement the interface faithfully from the prototype while preserving the product rules.

## Product Rules

- MCP Maker is a security-first developer tool.
- It uses Better Auth for user authentication.
- It scopes work by workspace.
- It scopes repository analysis and generation by project.
- It analyzes public GitHub JS/TS repositories.
- It proposes MCP tool drafts.
- It scores risk.
- It requires human validation.
- It generates a TypeScript MCP server.
- It validates build, typecheck, schemas, and docs.
- It exports a ZIP.

## Implementation Rules

- Use existing modules under `apps/web/src/modules`.
- Auth UI and server logic belong in `auth`.
- Workspace UI and server logic belong in `workspace`.
- Project UI and server logic belong in `project`.
- One component per file.
- Named exports only.
- No `React.FC`.
- No `any`.
- No inline styles.
- No frontend secrets.
- No production `console.log`.
- Use `react-icons` for icons.
- Use Server Components by default.
- Use Client Components only for interactivity.
- Validate all server action inputs.
- Handle loading, empty, error, and success states.

## Prototype Fidelity Rules

- Preserve layout hierarchy.
- Preserve risk visual language.
- Preserve screen order.
- Preserve auth state.
- Preserve workspace scope.
- Preserve project scope.
- Preserve human validation gates.
- Preserve source file references.
- Preserve mode selection.
- Preserve validation report structure.
- Preserve export state.

If the prototype conflicts with security rules, security wins.

## Required UI States

For repository import:

- Signed-out state redirects or prompts sign-in.
- Missing workspace prompts workspace creation.
- Missing project opens project creation flow.
- Empty URL.
- Invalid URL.
- Loading metadata.
- Repo unavailable.
- Success.

For analysis:

- Queued.
- Running.
- Partial result.
- Failed.
- Complete.

For tool review:

- No candidates.
- Candidates with low, medium, high, and critical risk.
- Disabled dangerous tool.
- User-edited name and description.
- Explicit confirmation for sensitive tool.

For generation:

- Pending.
- Generating.
- Validation failed.
- Patch attempted once.
- Passed.
- ZIP ready.

## Final Verification

Before finishing:

- Run typecheck if available.
- Run tests if available.
- Run build when routes or global config changed.
- Check responsive layout manually or with browser tooling if available.
- Update `context/PROJECT_TRACKER.md`.
- Update `context/MEMORY.md` for durable decisions.
