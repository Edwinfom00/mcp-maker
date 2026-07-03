# Prompt Design 1 - Claude Design Prototype

Use this prompt in Claude Design or a design-generation agent to create the first visual prototype for MCP Maker.

## Prompt

Design a high-fidelity web app prototype for MCP Maker, a security-first developer tool that turns a public GitHub JavaScript or TypeScript repository into a reviewed, documented, validated TypeScript MCP server.

Reading this as: B2B developer tool for technical builders, with a precise security-first product language, leaning toward a restrained devtool interface with strong hierarchy, dark and light mode support, and purposeful motion.

Use these dials:

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 6`

Core product promise:

- Sign in with Better Auth.
- Work inside a workspace.
- Create projects from GitHub repositories.
- Analyze a repository.
- Propose MCP tools.
- Score risk.
- Let the developer validate.
- Generate, test, document, and export a ZIP.

Critical product truth:

- Do not imply 100 percent automatic magic.
- Read-only is the default.
- Write, destructive, and system tools require explicit human validation.
- Dangerous operations are blocked by default.

Create these screens:

1. Sign-in screen that feels native to MCP Maker.
2. Workspace selection or creation screen.
3. Project dashboard showing imported repository projects and statuses.
4. Start screen with GitHub URL input and server mode selection for a new project.
5. Analysis progress screen showing stack detection, file tree scan, route/service/schema extraction, and secret-safe filtering.
6. Architecture summary screen with detected framework, scripts, important files, and confidence score.
7. Tool proposal screen with 5 to 10 tool candidates, each with source file, description, schema preview, risk level, and default enabled state.
8. Security review screen showing risk justifications and blocked dangerous operations.
9. Human validation screen where the user can enable, disable, rename, and edit descriptions.
10. Generation and validation screen with build, typecheck, schema tests, README generation, and ZIP export.

Visual requirements:

- Developer-grade, calm, trustworthy.
- Dense but readable.
- One accent color, no generic AI purple gradient.
- Use semantic risk colors.
- No fake terminal screenshot in the hero.
- No decorative status dots unless they indicate real step status.
- No centered marketing-only hero.
- No three equal generic feature cards.
- No claims like "fully automatic" or "one click magic".

Components to include:

- App shell with concise navigation.
- Auth state.
- Workspace switcher.
- Project switcher or project list.
- Repository input form.
- Segmented control for server mode.
- Analysis stepper.
- Tool candidate list.
- Risk badge system.
- Schema preview panel.
- Source file reference row.
- Confirmation control for sensitive tools.
- Validation report.
- Export ZIP button.

Accessibility:

- Clear labels.
- Strong focus states.
- Risk not communicated by color alone.
- Button labels fit on one line.
- Mobile layout for all screens.

Output:

- A cohesive prototype that can guide a Next.js implementation.
- Include enough visual detail that an engineer can recreate the interface.
- Include light and dark mode direction.
