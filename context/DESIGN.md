# Design Direction

## Design Read

Reading this as: B2B developer tool for technical builders, with a precise security-first product language, leaning toward a restrained devtool interface with strong hierarchy, dark and light mode support, and purposeful motion.

## Design Dials

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 6`

Rationale:

- This is not a marketing-only landing page.
- The core UI is a review and generation workspace.
- Developers need scanability, trust, risk visibility, and fast correction.
- Motion should clarify state transitions, not decorate.

## Product Personality

MCP Maker should feel:

- Security-first.
- Precise.
- Technical.
- Calm under pressure.
- Honest about uncertainty.
- Strong enough for production workflows.

Avoid:

- Generic AI purple gradients.
- Fake terminal screenshots.
- Overly poetic copy.
- Centered hero plus three generic cards.
- Decorative status dots without semantic state.
- Claims of perfect automation.

## Primary Screens

1. Landing or start screen.
2. Sign in.
3. Workspace selection or creation.
4. Project overview.
5. Repository import.
6. Analysis progress.
7. Architecture summary.
8. Capability candidates.
9. Tool designer.
10. Security review.
11. Human validation.
12. Generation progress.
13. Validation report.
14. ZIP export.

## UI Principles

- Make risk impossible to miss.
- Show source file references for every candidate.
- Keep destructive tools visually and behaviorally gated.
- Prefer dense, organized layouts over decorative cards.
- Use tables only when comparison matters.
- Use accordions or side panels for details.
- Keep primary actions stable and predictable.
- Every async flow needs loading, empty, error, and success states.
- Workspace and project switchers must make scope visible without adding clutter.
- Auth screens must feel like part of the product, not a generic template.

## Visual System

Recommended baseline:

- Neutral base with one accent color.
- Use semantic color for risk levels.
- Off-white and off-black instead of pure white or pure black.
- Radius scale: 8px for controls, 12px max for larger panels unless design system says otherwise.
- Typography: modern sans via `next/font`.
- Monospace only for code, file paths, schemas, and technical metadata.

Risk colors:

- Low: green.
- Medium: amber.
- High: orange.
- Critical: red.
- Disabled or blocked: neutral plus risk border.

## Interaction States

Every core component must support:

- Loading.
- Empty.
- Error.
- Success.
- Disabled.
- Focus.
- Hover.
- Active.

Sensitive actions require:

- Clear copy.
- Explicit confirmation.
- Non-default enabled state.
- Reversible configuration before generation.

## Motion Rules

Use motion for:

- Analysis step progress.
- Generation step progress.
- Tool card expansion.
- Review state transitions.
- Validation result reveal.

Do not use motion for:

- Decoration only.
- Scroll hijacking in core product flows.
- Infinite loops without semantic status.

Respect reduced motion.

## Prototype Requirements

The prototype must include:

- Real first screen experience, not a marketing shell only.
- Sign-in state.
- Workspace selector.
- Project list or project shell.
- Repository URL input.
- Server mode selection.
- Analysis timeline.
- Tool proposal list with risk levels.
- Human validation controls.
- Validation report.
- Export action.

The UI must show that the product is human-in-the-loop and security-first.

## Accessibility Requirements

- Keyboard navigation for all controls.
- Visible focus states.
- Labels above inputs.
- No placeholder-as-label.
- WCAG AA contrast.
- Risk must not rely on color alone.
- Buttons must not wrap at desktop.
- Tables must have headings when used.
