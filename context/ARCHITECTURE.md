# Architecture

## Architecture Goal

MCP Maker is a web application plus generation pipeline. The web app coordinates repository import, analysis, human validation, generation, validation, and export. The generated artifact is a separate TypeScript MCP server project.

## Repository Shape

Target shape after initialization:

```text
.
|-- README.md
|-- package.json
|-- pnpm-workspace.yaml
|-- context/
|   |-- AGENTS.md
|   |-- PROMPT.md
|   |-- PROJECT_TRACKER.md
|   |-- ARCHITECTURE.md
|   |-- SECURITY.md
|   |-- MEMORY.md
|   |-- CONTRIBUTING.md
|   |-- DESIGN.md
|   |-- PROMPT_DESIGN_1.md
|   |-- PROMPT_DESIGN_2.md
|   `-- CLAUDE_WORKFLOW.md
|-- docs/
|   `-- MCP_Maker_MVP_Specification.pdf
|-- apps/
|   `-- web/
|       |-- src/
|       |   |-- app/
|       |   |-- lib/
|       |   |-- modules/
|       |   `-- styles/
|       |-- drizzle.config.ts
|       |-- biome.json
|       |-- next.config.ts
|       |-- package.json
|       `-- tsconfig.json
|-- packages/
|   |-- domain/
|   |-- security/
|   |-- generator/
|   `-- templates/
`-- generated-artifacts/
    `-- .gitkeep
```

This is a pnpm monorepo. `apps/web` was scaffolded with `pnpm create next-app@latest apps/web`; do not recreate it manually.

## Workspace Boundaries

The pnpm workspace owns application and shared source code:

- `apps/*`: runnable applications.
- `packages/*`: shared libraries that are intentionally reused by apps or tests.
- `generated-artifacts/`: temporary generated output and ZIP artifacts, not source packages.

Generated MCP server projects are export artifacts by default. Do not add them to `pnpm-workspace.yaml` unless the user explicitly asks for a generated server to become a maintained workspace package.

Initial workspace packages:

- `@mcp-maker/domain`: shared domain contracts, object shapes, and cross-module types.
- `@mcp-maker/security`: risk scoring, secret detection, and permission helpers.
- `@mcp-maker/generator`: generated MCP server orchestration and code generation.
- `@mcp-maker/templates`: generated server templates and static assets.

## Application Modules

All feature code lives under `apps/web/src/modules`.

Required modules:

- `auth`: Better Auth configuration, route integration, server session helpers, protected action helpers.
- `workspace`: workspace membership, roles, settings, workspace switching, workspace-scoped queries.
- `project`: imported repository projects, lifecycle status, repository metadata, project settings.
- `discovery`: GitHub URL validation, repository metadata, clone orchestration, project creation.
- `context-engine`: file tree extraction, safe file reading, context windows, summarization boundaries.
- `architecture`: stack detection, routes, services, schemas, scripts, and code structure analysis.
- `capability-discovery`: capability candidates extracted from analysis.
- `tool-designer`: MCP tool drafts, names, descriptions, schemas, examples.
- `security`: risk scoring, secret detection, permission gates, dangerous operation blocking.
- `validation`: generated project checks, schema tests, build reports, patch attempt policy.
- `generation`: template registry, TypeScript MCP server generation, README, `.env.example`.
- `export`: ZIP packaging and artifact cleanup.
- `agent-workspace`: generated project workspace state and file previews.
- `agent-config`: selected tools, user edits, generated server mode.
- `overview`: project dashboard and status.
- `onboarding`: first-run guidance.
- `landing`: marketing surface.
- `shell`: app shell and navigation.
- `design-system`: shared components and tokens.
- `node-config`: package and Node configuration helpers.
- `canvas`: optional visualization of tool candidates and generation flow.

Each module follows:

```text
module-name/
|-- @types/
|-- config/
|-- hooks/
|-- server/
`-- ui/
    |-- components/
    `-- views/
```

If a module has no UI, omit `ui`. If it has no hooks, omit `hooks`.

## Data Flow

1. User signs in through Better Auth.
2. User selects or creates a workspace.
3. User creates a project by submitting a GitHub URL and server mode.
4. `discovery` validates URL and creates a project record scoped to the product workspace.
5. Repo worker clones into a temporary isolated directory.
6. `context-engine` builds a safe file tree and filters sensitive paths.
7. `architecture` detects stack and important files.
8. `capability-discovery` creates capability candidates.
9. `tool-designer` converts candidates into MCP tool drafts.
10. `security` scores tools and disables dangerous defaults.
11. User validates selected tools.
12. `generation` creates the MCP server project artifact.
13. `validation` runs install, build, typecheck, and schema tests.
14. `export` packages the result into a ZIP.

## Authentication Architecture

Use Better Auth with the Next.js App Router.

Target module shape:

```text
auth/
|-- @types/
|-- config/
|-- server/
|   |-- auth.ts
|   |-- get-current-session.ts
|   |-- require-session.ts
|   `-- require-workspace-access.ts
`-- ui/
    |-- components/
    `-- views/
```

Better Auth integration target:

- App Router catch-all route at `apps/web/src/app/api/auth/[...all]/route.ts`.
- Server auth configuration in `apps/web/src/modules/auth/server/auth.ts`.
- Client auth helper in `apps/web/src/modules/auth/config/auth-client.ts` only when client UI needs it.
- Drizzle adapter when persistence is introduced.
- Better Auth schema managed through generated Drizzle migrations, not hand-edited SQL.

References:

- Better Auth Next.js integration: https://better-auth.com/docs/integrations/next
- Better Auth installation: https://www.better-auth.com/docs/installation
- Better Auth Drizzle adapter: https://better-auth.com/docs/adapters/drizzle

## Workspace And Project Architecture

Workspace is the top-level product boundary. Project is the unit of repository analysis and MCP generation.

Minimum relationships:

```text
User 1..n WorkspaceMember
Workspace 1..n WorkspaceMember
Workspace 1..n Project
Project 1..n ProjectAnalysis
Project 1..n GenerationJob
GenerationJob 1..1 ValidationReport
GenerationJob 1..n GeneratedArtifact
```

Workspace rules:

- A signed-in user can belong to multiple workspaces.
- Every project belongs to exactly one workspace.
- Workspace membership must be checked before reading or mutating a project.
- Roles begin with `owner` and `member`.
- Future roles can add `admin`, `viewer`, and billing-related permissions.

Project rules:

- A project represents one imported repository plus its generation state.
- A project owns analysis, candidates, selected tools, security findings, generation jobs, validation reports, and artifacts.
- Project deletion must never delete source repositories.
- Project deletion must clean local artifacts only after explicit confirmation.

## Domain Objects

Core object names from the MVP spec:

- `User`
- `Session`
- `Workspace`
- `WorkspaceMember`
- `Project`
- `ProjectAnalysis`
- `CapabilityCandidate`
- `McpToolDraft`
- `SecurityFinding`
- `GenerationJob`
- `ValidationReport`
- `GeneratedArtifact`

## Generated Server Shape

Generated projects should use:

```text
generated-server/
|-- src/
|   |-- server.ts
|   |-- tools/
|   |-- lib/
|   |-- schemas/
|   `-- config/
|-- tests/
|-- README.md
|-- .env.example
|-- package.json
|-- tsconfig.json
`-- vitest.config.ts
```

The generated server must be independent from the web app.

## MCP Server Baseline

Initial generated server:

- TypeScript.
- Stdio transport.
- Zod schemas.
- Named tool registration files.
- Explicit error handling.
- No copied secrets.
- No enabled write or destructive tool unless validated by user.

Planned later:

- Streamable HTTP transport.
- OAuth-ready deployment templates.
- Multiple language generators.
- Cloud deployment.

## Storage Policy

MVP can start with local storage for temporary filesystem workspaces and generated ZIP files. Database persistence can be added with Drizzle when required.

Temporary directories must be:

- Isolated per project.
- Excluded from ZIP.
- Cleaned after export or failure.
- Never logged with sensitive content.
