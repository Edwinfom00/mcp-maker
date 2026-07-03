# Project Tracker

Last updated: 2026-07-03

## Current Phase

Foundation context complete. Monorepo scaffold initialized. Prototype interface audit complete.

The repository currently contains:

- `package.json`
- `pnpm-workspace.yaml`
- `README.md`
- `context/AGENTS.md`
- `docs/MCP_Maker_MVP_Specification.pdf`
- Project context files generated for Claude Code handoff

The Next.js app exists at `apps/web`.

## Phase Roadmap

| Phase | Goal | Status |
|---|---|---|
| Foundation | Context files, agent workflow, architecture plan, security baseline | Complete |
| Scaffold | Initialize `apps/web` with `pnpm create next-app@latest apps/web` | Complete |
| Prototype Audit | Review `_proto` interface direction and update implementation prompt | Complete |
| Auth | Better Auth session model, protected routes, workspace access helpers | Pending |
| Workspace | Workspace CRUD, membership, roles, workspace switcher | Pending |
| Project | Project CRUD, repository metadata, project lifecycle | Pending |
| F1 | Import GitHub repo and create analysis project | Pending |
| F2 | Static codebase analysis | Pending |
| F3 | Capability discovery | Pending |
| F4 | MCP tool designer | Pending |
| F5 | Security scoring and permissions | Pending |
| F6 | Human validation before generation | Pending |
| F7 | TypeScript MCP server generation | Pending |
| F8 | Documentation and client config generation | Pending |
| F9 | Technical validation runner | Pending |
| F10 | ZIP export | Pending |

## MVP Acceptance Checklist

- [ ] User can submit a valid public GitHub URL.
- [ ] User can sign in through Better Auth.
- [ ] User can create or select a workspace.
- [ ] Every project belongs to one workspace.
- [ ] Project access requires workspace membership.
- [ ] Repository metadata is fetched safely.
- [ ] Repository is cloned into a temporary filesystem workspace.
- [ ] Sensitive files are excluded from logs and generated output.
- [ ] Stack, important files, routes, services, scripts, and schemas are detected.
- [ ] Capability candidates include source file references.
- [ ] Capabilities are classified as `read`, `write`, `destructive`, or `system`.
- [ ] MCP tool drafts include name, description, input schema, output example, risk level, and default enabled state.
- [ ] Dangerous tools are disabled by default.
- [ ] User can select, rename, edit, and validate tools before generation.
- [ ] Generated server builds in TypeScript.
- [ ] Generated server starts in stdio mode.
- [ ] Generated server includes README and `.env.example`.
- [ ] Validation runner executes install, build, typecheck, and schema tests.
- [ ] ZIP excludes secrets, `.git`, `node_modules`, temporary files, and source repository secrets.

## Dependency Decisions

Only scaffold dependencies have been installed for `apps/web`.

Business dependencies such as Better Auth, Drizzle, Zod, Vitest, react-icons, DeepSeek, and MCP SDK are not installed yet.

Next.js scaffold has been run for `apps/web`.

The root pnpm monorepo files exist:

- `package.json`
- `pnpm-workspace.yaml`
- `packageManager` is pinned to `pnpm@10.33.3`.
- `pnpm-lock.yaml`
- `apps/web`
- `packages/domain`
- `packages/security`
- `packages/generator`
- `packages/templates`

Auth decision:

- Better Auth is selected for authentication and session management.
- Better Auth is not installed yet.
- Better Auth must use Drizzle when persistence is introduced.
- Installation still requires an explicit dependency approval step before code implementation.

Before adding any dependency, create a short proposal with:

- Package name and purpose.
- Why it is necessary.
- Alternatives considered.
- Approximate bundle or runtime impact.
- Whether it affects `apps/web`, a package, or generated output.

## Known Constraints

- Initial scope is public GitHub repositories.
- Signed-in user context is required for workspace and project data.
- Workspaces group projects, members, settings, and artifacts.
- Projects represent imported GitHub repositories and their generation lifecycle.
- Initial analysis priority is JavaScript, TypeScript, Node.js, and common web frameworks.
- Generated MCP servers are TypeScript only.
- First generated server transport is stdio.
- Streamable HTTP is planned but not required for the first generated server.
- No cloud deploy or marketplace in MVP.
- No telemetry.

## Immediate Next Tasks

1. Use `context/PROMPT_DESIGN_2.md` to implement the `_proto` interfaces faithfully.
2. Add Better Auth, Drizzle, Zod, Vitest, react-icons, DeepSeek, and MCP SDK dependencies only after explicit dependency approval.
3. Implement auth, workspace, and project foundations before F1.
4. Implement F1 using module-first structure.

## Verification Notes

- Context files were checked for non-ASCII characters and corrected.
- App scaffold was created with Next.js App Router, TypeScript, Tailwind, Biome, and pnpm.
- Markdown context files have been moved into `context/`.
- `README.md` was created at the repository root as the shared GitHub entry point.
- Better Auth, workspace, and project context were added.
- `apps/.gitkeep` and `packages/.gitkeep` preserve monorepo folders before scaffold.
- Modular directories were created under `apps/web/src/modules`.
- Workspace packages were initialized under `packages/*`.
- `pnpm install` completed at the monorepo root.
- `pnpm typecheck` passed.
- `pnpm lint` passed after Biome formatting.
- `pnpm build` passed.
- `pnpm test` passed with the current placeholder script.
- pnpm reported ignored build scripts for `sharp@0.34.5`; no approval was granted yet.
- Listing remote curated skills through `skill-installer` failed because Python certificate verification failed against GitHub.
- Local installed skills already include multiple frontend, design, brand, and skill-management skills.
- `_proto` was reviewed as the visual source of truth for the MVP interface.
- `context/PROTO_INTERFACE_REVIEW.md` records the interface verdict, required corrections, and implementation readiness.
- `context/PROMPT_DESIGN_2.md` was upgraded into a pixel-faithful implementation prompt for Claude Code.
- `context/SKILLS.md` records the local skill stack required for design and implementation handoff.
