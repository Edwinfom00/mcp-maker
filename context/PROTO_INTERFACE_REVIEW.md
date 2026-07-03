# Prototype Interface Review

Last updated: 2026-07-03

## Verdict

The `_proto` prototype is a strong fit for the MCP Maker product direction. It covers the correct MVP interface sequence and communicates the core positioning clearly: authenticated workspace scope, project scope, repository import, analysis, tool proposal, security review, human validation, generation, validation, and ZIP export.

The prototype should be treated as the visual and flow reference, not as production code. Production implementation must rebuild the screens through the Next.js module architecture, TypeScript rules, Better Auth context, workspace/project access model, and `react-icons`.

## Prototype Files Reviewed

- `_proto/MCP Maker.html`
- `_proto/design-canvas.jsx`
- `_proto/mcp-maker/theme.jsx`
- `_proto/mcp-maker/ui.jsx`
- `_proto/mcp-maker/shell.jsx`
- `_proto/mcp-maker/screens/auth.jsx`
- `_proto/mcp-maker/screens/dashboard.jsx`
- `_proto/mcp-maker/screens/analysis.jsx`
- `_proto/mcp-maker/screens/tools.jsx`
- `_proto/mcp-maker/screens/validation.jsx`
- `_proto/mcp-maker/screens/mobile-and-dark.jsx`

## Interface Coverage

| Product area | Prototype coverage | Verdict |
|---|---:|---|
| Sign in | Email/password, GitHub CTA, Better Auth trust note | Good |
| Workspace selection | Workspace list, selected workspace, create workspace affordance | Good |
| App shell | Product logo, workspace switcher, project switcher, nav, avatar, theme control | Good |
| Project dashboard | Project list, statuses, risk, search, filter, new project | Good |
| Repository import | GitHub URL, server mode, preview metadata, analyze action | Good |
| Analysis progress | Stepper, live findings, secret-safe filter, source references | Good |
| Architecture summary | framework, scripts, important files, confidence, warning copy | Good |
| Tool proposal | Candidate list, risk badges, toggles, schema preview, source references | Good |
| Security review | Risk justifications, blocked tool treatment, gated dangerous actions | Good |
| Human validation | Editing, toggles, confirmation phrase, validation summary | Good |
| Generation/export | Validation report, server contents, stepper, disabled ZIP until ready | Good |
| Mobile | Key responsive states for auth, dashboard, tool proposal | Good |
| Dark mode | Dashboard color direction | Good |

## Required Corrections Before Implementation

1. Replace generic placeholder names such as `Acme Corp` with project-safe seeded examples, for example `Aster Labs`, `Personal`, and `Northwind Labs`.
2. Replace `acme/*` repository examples with neutral examples such as `aster/stripe-webhook-router`.
3. Do not show Prisma as a preferred stack in MCP Maker itself. Prisma may appear only as an analyzed target repository dependency. The product stack remains Drizzle.
4. Translate all inline prototype styles into reusable design-system components, CSS variables, Tailwind utility composition, or CSS modules.
5. Replace hand-rolled prototype SVG icons with `react-icons`.
6. Preserve the prototype risk language, but align risk taxonomy with the domain model: `read`, `write`, `destructive`, `system`, and UI display aliases such as `Read-only` and `Blocked`.
7. Add explicit loading, empty, invalid, unauthorized, and failed states that the prototype only implies.
8. Connect every workspace and project view to the Better Auth session model, even when using temporary mock data before persistence.
9. Keep source references visible on every candidate, risk review, and validation card.
10. Preserve dark mode and mobile behavior as first-class implementation requirements, not afterthoughts.

## Visual Direction To Preserve

- Restrained developer-tool UI.
- Neutral graphite accent.
- Semantic risk colors are the only saturated colors.
- Dense, scannable screens rather than marketing composition.
- Compact shell with visible workspace and project scope.
- Risk badges use icon plus label and never rely on color alone.
- Cards are used for individual units, not nested decorative sections.
- Tables are used only when comparison matters, especially project overview.
- Monospace is reserved for repository names, file paths, schemas, scripts, and tool names.

## Implementation Readiness

The prototype is ready to guide implementation. The next agent should implement the interface from `_proto` using `context/PROMPT_DESIGN_2.md` as the authoritative prompt and this review as the acceptance reference.
