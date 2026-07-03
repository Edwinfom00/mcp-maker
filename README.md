# MCP Server Maker

MCP Server Maker, also called MCP Maker, is a security-first generator that turns a public GitHub JavaScript or TypeScript repository into a reviewed, documented, validated TypeScript MCP server.

The product does not promise perfect automatic generation. It analyzes a repository, proposes MCP tools, scores risk, lets the developer validate the exposed surface, generates a TypeScript server, validates it, and packages it as a ZIP.

## Current Status

Foundation context is ready. The application is not scaffolded yet.

The repository is a pnpm monorepo:

```text
.
|-- README.md
|-- package.json
|-- pnpm-workspace.yaml
|-- context/
|-- docs/
|-- apps/
|-- packages/
`-- generated-artifacts/
```

## Context

All project planning and agent handoff documents live in `context/`.

Start here:

1. `context/AGENTS.md`
2. `context/PROMPT.md`
3. `context/PROJECT_TRACKER.md`
4. `context/ARCHITECTURE.md`
5. `context/SECURITY.md`
6. `context/DESIGN.md`
7. `context/CONTRIBUTING.md`

## Product Model

MCP Maker is organized around:

- Users authenticated with Better Auth.
- Workspaces that group people, projects, settings, and generated artifacts.
- Projects that represent one imported GitHub repository and its MCP generation lifecycle.
- Generated MCP servers that remain export artifacts unless explicitly promoted into workspace packages.

## MVP Scope

- Public GitHub repositories.
- JavaScript and TypeScript priority.
- TypeScript MCP server generation.
- Stdio transport first.
- Human validation before generation.
- Read-only mode by default.
- Dangerous tools disabled by default.
- ZIP export.

Out of scope for MVP:

- Marketplace.
- Cloud deployment.
- Multi-language generators.
- Telemetry.

## Planned Scaffold

Do not create `apps/web` manually.

When approved:

```bash
pnpm create next-app@latest apps/web
```

Project dependencies require explicit approval before installation.

## Security

MCP Maker treats analyzed repositories as untrusted input.

It must not:

- Copy secrets.
- Dump sensitive file contents in logs.
- Execute repository scripts during analysis.
- Enable write, destructive, or system tools without explicit validation.
- Include telemetry or analytics.

## Development

After the app is scaffolded, root commands will delegate to the web app:

```bash
pnpm dev
pnpm build
pnpm typecheck
pnpm test
pnpm lint
```

See `context/CONTRIBUTING.md` for branch, commit, push, and verification rules.

