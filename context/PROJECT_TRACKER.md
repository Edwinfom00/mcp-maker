# Project Tracker

Last updated: 2026-07-03

## Current Phase

Foundation context complete before project scaffold.

The repository currently contains:

- `package.json`
- `pnpm-workspace.yaml`
- `README.md`
- `context/AGENTS.md`
- `docs/MCP_Maker_MVP_Specification.pdf`
- Project context files generated for Claude Code handoff

There is no initialized Next.js app yet.

## Phase Roadmap

| Phase | Goal | Status |
|---|---|---|
| Foundation | Context files, agent workflow, architecture plan, security baseline | Complete |
| Scaffold | Initialize `apps/web` with `pnpm create next-app@latest apps/web` | Pending approval |
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

No application dependencies have been installed yet.

No Next.js scaffold has been run yet.

The root pnpm monorepo files exist:

- `package.json`
- `pnpm-workspace.yaml`
- `packageManager` is pinned to `pnpm@10.33.3`.

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

1. Review generated context files with the project owner.
2. Approve or adjust scaffold command for `apps/web`.
3. Run `pnpm create next-app@latest apps/web` only after approval.
4. Add strict TypeScript, Biome, Drizzle, Zod, Vitest, Better Auth, DeepSeek, and MCP SDK dependencies only after explicit dependency approval.
5. Implement auth, workspace, and project foundations before F1.
6. Implement F1 using module-first structure.

## Verification Notes

- Context files were checked for non-ASCII characters and corrected.
- No app build or typecheck can run yet because the application has not been scaffolded.
- Markdown context files have been moved into `context/`.
- `README.md` was created at the repository root as the shared GitHub entry point.
- Better Auth, workspace, and project context were added.
- `apps/.gitkeep` and `packages/.gitkeep` preserve monorepo folders before scaffold.
- Listing remote curated skills through `skill-installer` failed because Python certificate verification failed against GitHub.
- Local installed skills already include multiple frontend, design, brand, and skill-management skills.
