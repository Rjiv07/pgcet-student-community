# Design System

Status: approved creative direction; token values are starting values to validate for contrast during implementation.

## Art direction

**Editorial premium · Light-first · Balanced Gen Z**

The site should feel like a modern student-led publication combined with a useful digital community: distinctive, human, credible, and calm. Personality comes from type, layout, real information, and the brand motif—not decoration.

## Palette

| Token | Hex | Intended use |
|---|---|---|
| `color.navy` | `#172B3A` | Brand anchor, headings, navigation, footer |
| `color.ivory` | `#F7F4ED` | Signature page background |
| `color.white` | `#FFFFFF` | Content surfaces and forms |
| `color.teal` | `#2F7770` | Primary actions and active states; contrast must be tested |
| `color.terracotta` | `#C87559` | Small editorial accents; not default body text/buttons without contrast testing |
| `color.sage` | `#DCE4E2` | Soft panels and supporting graphics |
| `color.graphite` | `#333C43` | Main body text |
| `color.muted` | `#69757B` | Secondary copy, metadata; check on each surface |
| `color.border` | Neutral derived from palette | Dividers, outlines |
| `color.focus` | Accessible contrast colour | Visible keyboard focus |

Use ivory and neutrals for most surfaces, navy to anchor the interface, teal for purposeful actions, and terracotta sparingly. The 60/25/10/5 distribution is a loose visual guide, not a fixed requirement.

Status colours (success, warning, error, information) are semantic tokens and must not be improvised per component.

## Typography

- Display/headlines: Manrope; weights 600–750
- Body/interface: Inter; weights 400–600
- Use a small, consistent type scale with responsive sizing.
- Desktop starting points: display 60–72 px; H1 44–52 px; H2 30–36 px; H3 20–24 px; body 16–18 px; small metadata 13–14 px.
- Ensure sensible line lengths, readable line-height, and smaller responsive headings on mobile.
- If fonts are loaded remotely, provide robust fallbacks and avoid making layout dependent on the font service.

## Layout and spacing

- 8 px base spacing rhythm (tokens may include 4 px for fine adjustments).
- Content container should have a consistent max-width and responsive side padding.
- Strong grid and alignment; editorial asymmetry only where it improves hierarchy.
- Whitespace is intentional; don't fill all empty areas with cards or illustrations.
- Corner radii mainly 8–14 px, not pill-shaped containers everywhere.
- Thin neutral borders; no heavy shadows as a default.

## Components

- Buttons: teal primary (contrast-checked), navy outline secondary, quiet text link for tertiary actions. Clear hover, focus, active and disabled states.
- Navigation: compact and understated; clear active state; mobile menu keyboard accessible.
- Resource cards: neutral surfaces, title, topic/course context, source/type, updated date when relevant.
- Event cards: date, name, organiser/source, deadline/timezone and external registration link when known.
- College profiles: structured facts separated from student-reported opinions.
- Placement experiences: context/year/process; clear distinction between personal account and verified claims.
- Forms: explicit labels, keyboard access, visible validation and error messages.
- Tags: restrained neutral/sage labels; no rainbow badges.
- Footer: navy surface with clear, organised links.
- Icons: one consistent line-icon family and sizing.

## Motion and imagery

- Use small transitions only where they communicate state.
- Respect `prefers-reduced-motion`.
- No stock-like fake testimonials or AI-generated people used as if authentic students.
- Prefer real campus imagery with permission or restrained original brand graphics.
- The leaping-student/P brand motif should be used selectively, not repeated as decoration.
- Avoid neon gradients, gratuitous glassmorphism, glowing effects, floating blobs, random illustrations, excessive drop shadows, and repeated generic card grids.

## Accessibility gate

- WCAG AA contrast target for normal text (4.5:1) and large text (3:1); non-text controls/focus indicators also need sufficient contrast.
- Use semantic HTML, correct heading order, keyboard navigation, visible focus, useful alt text, labelled form controls, descriptive links, reduced-motion support, and responsive zoom/reflow.
- Test actual foreground/background combinations, including hover and disabled states, before finalising tokens.
