# Prompt Design 2 - Pixel-Faithful Interface Implementation

Use this prompt for Claude Code after `_proto` exists. The goal is to implement MCP Maker interfaces in Next.js App Router with TypeScript while matching the prototype at production quality.

## Role

You are the implementation agent for MCP Maker. Your job is to turn the `_proto` screens into production interfaces inside the existing pnpm monorepo, without weakening security, architecture, or TypeScript rules.

Build the real application screens, not a marketing shell and not a loose reinterpretation.

## Required Reading Before Coding

Read these files in this order before making changes:

1. `context/AGENTS.md`
2. `context/DESIGN.md`
3. `context/ARCHITECTURE.md`
4. `context/SECURITY.md`
5. `context/PROJECT_TRACKER.md`
6. `context/MEMORY.md`
7. `context/PROTO_INTERFACE_REVIEW.md`
8. `_proto/MCP Maker.html`
9. `_proto/design-canvas.jsx`
10. `_proto/mcp-maker/theme.jsx`
11. `_proto/mcp-maker/ui.jsx`
12. `_proto/mcp-maker/shell.jsx`
13. `_proto/mcp-maker/screens/auth.jsx`
14. `_proto/mcp-maker/screens/dashboard.jsx`
15. `_proto/mcp-maker/screens/analysis.jsx`
16. `_proto/mcp-maker/screens/tools.jsx`
17. `_proto/mcp-maker/screens/validation.jsx`
18. `_proto/mcp-maker/screens/mobile-and-dark.jsx`

Treat `_proto` as the visual source of truth and `context/AGENTS.md` as the engineering authority. If they conflict, `context/AGENTS.md` wins.

## Product Rules

- MCP Maker is a security-first developer tool.
- It uses Better Auth for authentication and session management.
- It scopes all data by workspace.
- It scopes repository analysis and generation by project.
- It analyzes public GitHub JavaScript and TypeScript repositories first.
- It proposes MCP tool drafts from discovered capabilities.
- It scores each proposed tool for risk.
- It requires human validation before generation.
- It generates a TypeScript MCP server.
- It validates build, typecheck, schemas, and docs.
- It exports a ZIP.
- It never claims perfect automation.
- It never enables destructive tools by default.

## Prototype Fidelity Contract

Implement the following prototype screens with high visual fidelity:

1. Sign in.
2. Workspace selection and creation entry.
3. App shell with workspace switcher and project switcher.
4. Project dashboard.
5. New project / GitHub repository import.
6. Analysis progress.
7. Architecture summary.
8. Proposed tools.
9. Security review.
10. Human validation.
11. Generation progress.
12. Validation report and ZIP export.
13. Mobile versions of auth, dashboard, and proposed tools.
14. Dark-mode dashboard direction.

Preserve:

- Layout hierarchy.
- Screen order.
- Density.
- Component proportions.
- Border radii.
- Risk badge language.
- Stepper language.
- Source file references.
- Validation report structure.
- Export state.
- Workspace/project scope visibility.
- Human validation gates.

Do not preserve prototype mistakes:

- Do not copy inline styles.
- Do not copy comments into production code.
- Do not hand-roll SVG icons.
- Do not use `Acme Corp` or `acme/*` placeholders.
- Do not imply Prisma is MCP Maker's ORM. Prisma may appear only as an analyzed target repository dependency.
- Do not use prototype globals such as `window.MCP`.
- Do not use fake terminal hero sections.

## Required Route Shape

Implement the interface using App Router routes that map to product state:

- `/sign-in`
- `/workspaces`
- `/projects`
- `/projects/new`
- `/projects/[projectId]`
- `/projects/[projectId]/analysis`
- `/projects/[projectId]/architecture`
- `/projects/[projectId]/tools`
- `/projects/[projectId]/security`
- `/projects/[projectId]/validation`
- `/projects/[projectId]/generation`

If the current scaffold needs route groups, keep URLs stable and use route groups only for layout organization.

## Module Placement

Use the existing module structure under `apps/web/src/modules`.

- `auth`: sign-in UI, session helpers, Better Auth integration boundary.
- `workspace`: workspace selection, creation entry, membership scope helpers.
- `project`: project dashboard, project lifecycle state, project shell metadata.
- `discovery`: repository import form and metadata preview.
- `architecture`: architecture summary UI and analysis display types.
- `capability-discovery`: capability candidate types and discovery display.
- `tool-designer`: proposed tools, editable tool details, schemas.
- `security`: risk badges, security review, blocked tool UI, risk justifications.
- `validation`: human validation gates and confirmation phrase flows.
- `generation`: generation progress, validation report, ZIP export UI.
- `shell`: app shell, top nav, workspace switcher, project switcher.
- `design-system`: shared primitives reconstructed from `_proto/mcp-maker/ui.jsx`.

Server-only logic stays in `server/` directories. UI stays in `ui/`. Shared types stay in `@types/`.

## Design System Translation

Recreate the prototype primitives as production components:

- `Button`
- `Card`
- `Field`
- `Pill`
- `RiskBadge`
- `SegmentedControl`
- `Stepper`
- `SourceRow`
- `SchemaPreview`
- `Toggle`
- `Avatar`
- `TopNav`
- `AppShell`

Implementation constraints:

- One component per file.
- Named exports only, except required Next.js App Router entry defaults.
- Explicit prop types.
- No `React.FC`.
- No `any`.
- No inline styles.
- Use `react-icons` for all icons.
- Use semantic HTML controls for buttons, inputs, toggles, and forms.
- Use visible focus states.
- Risk must use icon plus label, never color alone.
- Buttons must not wrap at desktop.

## Visual Tokens

Translate `_proto/mcp-maker/theme.jsx` into production tokens:

- Use CSS variables for light and dark mode.
- Use Tailwind classes or CSS modules that consume the variables.
- Preserve the graphite accent.
- Preserve semantic colors for read/write/destructive/blocked states.
- Keep saturated colors reserved for risk and status.
- Use radius around 6px for controls and 10px for panels, matching the prototype.
- Use modern sans via `next/font`.
- Use monospace only for repository names, file paths, schemas, scripts, IDs, and tool names.

Do not make the UI purple, gradient-heavy, beige-heavy, or marketing-like.

## Data And Copy Rules

Use seeded example data only until real persistence exists.

Replace prototype placeholders:

- `Acme Corp` -> `Aster Labs`
- `acme/stripe-webhook-router` -> `aster/stripe-webhook-router`
- Keep `Personal` and `Northwind Labs` as workspace examples.
- Keep realistic developer names only if needed for avatar examples.

Copy must remain honest:

- "Reviewed MCP server", not "perfect MCP server".
- "Confidence reflects pattern match", not runtime certainty.
- "Read-only by default", but still show write/destructive candidates as disabled or gated.
- "MCP Maker does not manage production deployment or runtime credentials."

## Auth, Workspace, And Project Context

Every protected screen must assume these invariants:

- A signed-in user is required.
- A workspace must be selected before projects are visible.
- A project must belong to the active workspace.
- Project access requires workspace membership.
- Better Auth is the authentication boundary.

If Better Auth dependencies are not installed yet, create typed adapter boundaries and UI placeholders only. Do not install dependencies without explicit approval.

## Required UI States

Repository import:

- Signed out.
- Missing workspace.
- Empty URL.
- Invalid URL.
- Loading metadata.
- Repository unavailable.
- Metadata preview ready.
- Analysis submitted.

Analysis:

- Queued.
- Running.
- Partial result.
- Secret-safe filter active.
- Failed.
- Complete.

Tool review:

- No candidates.
- Read-only candidates enabled by default.
- Write candidates disabled or requiring approval.
- Destructive candidates disabled by default.
- Blocked candidates cannot be enabled.
- Expanded schema preview.
- Edited tool name.
- Edited model-facing description.

Security review:

- Risk justification visible.
- Required safeguard visible.
- Blocked reason visible.
- No color-only risk communication.

Human validation:

- Pending confirmations.
- Confirmation phrase required for sensitive tools.
- Invalid confirmation phrase.
- Tool disabled.
- Tool enabled after explicit validation.

Generation:

- Pending.
- Generating.
- Build running.
- Typecheck running.
- Schema tests running.
- Documentation generation running.
- Validation failed.
- Patch attempted once.
- Passed.
- ZIP ready.
- ZIP export disabled until validation passes.

## Pixel QA Checklist

Before finishing, compare the implementation against `_proto` and verify:

- Desktop sign-in keeps the 45/55 split and compact form width.
- Workspace cards keep avatar, role/project count, plan pill, and selected outline.
- Top nav keeps product, workspace switcher, optional project switcher, nav items, theme control, and avatar.
- Project table keeps six columns on desktop and converts to cards on mobile.
- New project form keeps repository URL, server mode segmented control, preview block, and right-aligned actions.
- Analysis progress keeps two-column layout on desktop and stacked layout on mobile.
- Architecture summary keeps confidence, detected framework, scripts, important files, and warning panel.
- Proposed tools keep toggle, mono tool name, risk badge, description, source row, schema expansion, and edit action.
- Security review keeps justification cards and blocked-by-default panel.
- Human validation keeps editable fields, confirmation phrase panel, and sticky summary/action area where appropriate.
- Generation keeps validation stepper, report panel, server contents panel, and disabled export until ready.
- Mobile auth/dashboard/tool proposal match the prototype hierarchy.
- Dark mode preserves the `_proto` dashboard contrast and semantic colors.

## Final Verification

Before finishing:

- Run `pnpm typecheck`.
- Run `pnpm lint`.
- Run `pnpm test`.
- Run `pnpm build` when routes, global styles, or app config changed.
- Check desktop and mobile layouts with browser tooling if available.
- Check that no `any`, `React.FC`, inline styles, copied SVG icon maps, production `console.log`, frontend secrets, or default exports outside required Next entry files were introduced.
- Update `context/PROJECT_TRACKER.md`.
- Update `context/MEMORY.md` for durable decisions.
