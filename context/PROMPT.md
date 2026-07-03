# MCP Maker Master Prompt

You are Claude Code working on MCP Server Maker, also called MCP Maker.

Your mission is to build a production-grade application that transforms a public GitHub JavaScript or TypeScript repository into a secure, documented, validated TypeScript MCP server. The product must never promise perfect automatic generation. It analyzes, proposes, secures, generates, validates, documents, and packages. The developer keeps final control before generation.

## Required Reading Order

Before each implementation session, read these files in order:

1. `context/AGENTS.md`
2. `context/MEMORY.md`
3. `context/PROJECT_TRACKER.md`
4. `context/ARCHITECTURE.md`
5. `context/SECURITY.md`
6. `context/DESIGN.md`
7. `context/CONTRIBUTING.md`

If a file conflicts with `context/AGENTS.md`, follow `context/AGENTS.md` and update the conflicting context file in the same change.

## Product Scope

MVP input:

- Public GitHub repository URL.
- Target server type: `read-only`, `mixed`, or `experimental`.
- Authenticated user session.
- Active workspace.
- Project created from the submitted repository URL.

MVP output:

- A generated TypeScript MCP server.
- README, `.env.example`, client config examples, schema tests, validation report.
- Downloadable ZIP without secrets, temporary files, `node_modules`, or `.git`.

MVP core rule:

- Read-only is the default.
- Write, destructive, system, shell, filesystem modification, and irreversible tools are blocked unless the user explicitly validates them.
- Workspace membership is required before accessing or mutating a project.

## MCP Facts To Preserve

Use the current production path unless the user approves an upgrade:

- MCP uses JSON-RPC 2.0 and exposes server features such as tools, resources, and prompts.
- Tools are executable functions.
- Resources expose context or read-only data.
- Prompts are reusable workflows or message templates.
- For generated servers, support stdio first for local AI clients.
- Design the generator so Streamable HTTP can be added later.
- Use the stable TypeScript SDK line for production until a newer release is stable and approved.

Reference anchors:

- MCP specification: https://modelcontextprotocol.io/specification/2025-06-18
- TypeScript SDK v1 docs: https://ts.sdk.modelcontextprotocol.io/
- TypeScript SDK repository: https://github.com/modelcontextprotocol/typescript-sdk
- MCP security guidance: https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf

## Implementation Loop

For every feature:

1. Read the relevant context files.
2. Inspect existing files before editing.
3. Define types first.
4. Enforce auth and workspace authorization before project data access.
5. Implement server logic before UI.
6. Add validation and explicit error handling.
7. Add or update tests where risk justifies it.
8. Run the smallest useful verification command.
9. Update `context/PROJECT_TRACKER.md` and `context/MEMORY.md`.

## Non-Negotiable Engineering Rules

- No `any`.
- No default exports.
- No class components.
- No `React.FC`.
- No frontend secrets.
- No telemetry or analytics.
- No hidden destructive operations.
- No copied secrets from analyzed repositories.
- No production `console.log`.
- No new dependency without explicit approval.
- This repository is a pnpm monorepo.
- Use pnpm for workspace commands.
- Use `pnpm create next-app@latest apps/web` for the initial Next.js app scaffold.
- Use Drizzle ORM when database persistence is introduced.
- Use Better Auth for authentication and session management.
- Use Drizzle with Better Auth when persistence is introduced.
- Use `react-icons` for app icons unless the owner changes `context/AGENTS.md`.

## Delivery Standard

A task is done only when:

- The implementation follows the module architecture.
- Inputs are validated.
- Failure paths return structured errors.
- Security defaults are preserved.
- The UI has loading, empty, success, and error states when applicable.
- Verification commands were run or the reason they could not run is recorded.
- Context files reflect the new state.
