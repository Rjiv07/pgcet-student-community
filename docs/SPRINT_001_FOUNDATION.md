# Sprint 001 — Product & Design Foundation

Status: planned and scoped  
Branch: `sprint/001-foundation`  
Objective: build a coherent, maintainable frontend foundation for the approved student-community concept, with the design system established before page implementation.

## Sprint goal

Deliver an attractive, responsive, accessible frontend base with agreed routes, reusable layouts, central design tokens, typed content collections, and a polished first set of page compositions. Avoid disposable markup and rewrites by treating this plan as the baseline.

## Scope

### Workstream A — Repository and engineering foundation
- [ ] Confirm Vite + React + TypeScript + Tailwind setup.
- [ ] Add standard scripts for development, build, lint/type checks, and tests where supported.
- [ ] Establish source layout and shared app shell.
- [ ] Add not-found handling and route metadata.
- [ ] Document run/build instructions.
- [ ] Keep dependencies minimal.

### Workstream B — Design tokens and reusable UI
- [ ] Implement palette, typography, spacing, borders, radii and focus tokens.
- [ ] Implement header/navigation, footer, page container, primary/secondary/text links, cards, tags, resource rows, section headings, metadata labels and accessible mobile navigation.
- [ ] Add hover/focus/active/disabled states.
- [ ] Respect reduced-motion preferences.
- [ ] Validate accessible contrast; adjust derived shades only if needed, documenting any deviations from the palette.

### Workstream C — First pages
- [ ] Home: approved editorial hero, student journey navigation, useful resources, campus opportunities slot, community contribution section and footer.
- [ ] PGCET Hub: exam/admissions pathways, clearly source-aware updates/resources.
- [ ] Learn & Resources: category/search/filter design with real or clearly labelled sample records.
- [ ] Resource detail template: source, checked date, content type and related links.
- [ ] Community: Reddit and Telegram entry points that feel supporting, not dominant.
- [ ] Contribute: real contribution paths and guidelines; no fake working submission form.
- [ ] Shared shell supports future college, campus, career and experience templates without changing global design.

### Workstream D — Content and integrity
- [ ] Define TypeScript content types and store content separately from page components.
- [ ] Require source and checked-date metadata for official/current facts.
- [ ] Mark demo data explicitly; no fabricated student testimonials, events, placement outcomes, rankings or user metrics.
- [ ] Separate official facts from student-reported experience.
- [ ] Make correction/report path visible.
- [ ] Use no scraped Reddit data. Provide direct links only until platform permissions and requirements are reviewed.

### Workstream E — Quality and review
- [ ] Production build passes.
- [ ] TypeScript checks pass.
- [ ] All internal navigation and CTA destinations work.
- [ ] Layout checked on mobile, tablet and desktop.
- [ ] Keyboard navigation and focus states checked.
- [ ] Contrast and reduced-motion checks completed.
- [ ] Missing/empty states are deliberate and truthful.
- [ ] README accurately documents the app and commands.

## Out of scope for Sprint 001

- Authentication and profiles
- Database or backend
- Direct site posting or upload
- Automatic Reddit imports, embedding at scale, or summarisation
- Production job board or notifications
- Complex search infrastructure (client-side filtering is sufficient initially)
- Fake content added solely to make the site look populated
- Monetisation and advertising

## Decisions locked for this sprint

1. Visual direction: editorial premium, light-first, balanced Gen Z.
2. Palette base: navy `#172B3A`, ivory `#F7F4ED`, teal `#2F7770`, terracotta `#C87559`, sage `#DCE4E2`, graphite `#333C43`; derived colours subject to contrast validation.
3. Typography: Manrope headlines, Inter body/interface, sensible fallbacks.
4. Product pillars: PGCET & Admissions; College & Learning; Careers & Opportunities.
5. Website preserves knowledge; Reddit/Telegram support conversation.
6. Launch audience: Karnataka PGCET and MCA/MBA/M.Tech pathways, with architecture ready to broaden later.
7. Static-first frontend; no backend/auth in the first foundation pass.
8. Content types and templates separate from rendering.
9. Work on feature branch; keep `main` stable. Use one coherent implementation pass and avoid ad hoc rewrites.

## Acceptance criteria

The sprint is complete only when:
- App runs from documented commands on a clean checkout.
- Production build and type checks pass.
- The homepage and initial route pages share a consistent design system and responsive shell.
- Resource cards and detail template are driven from typed data rather than hardcoded duplicated markup.
- Navigation, buttons and external links have meaningful destinations; no inert controls.
- Official facts are sourced and dated; illustrative/demo content is labelled.
- No fake testimonials, numbers, college/placement facts or events are presented as real.
- Reddit content is linked, not scraped/re-published without permission.
- Accessibility and responsive checks are recorded.
- Any intentional deferrals are listed in the sprint notes rather than hidden.

## Execution protocol

Before writing implementation code:
1. Inspect the repository and current branch.
2. Confirm existing files/dependencies; preserve any useful existing code.
3. If material product choices are unresolved, ask the project owner instead of silently inventing a direction.
4. Implement the agreed scope as one coherent foundation, preferably in small reviewable commits on this branch.
5. Run checks available in the environment; record any checks that cannot be run.
6. Do not merge to `main` without review and explicit approval.

## Risks and dependencies

- Current exam dates/admissions must be confirmed from official sources at time of publication.
- Tailwind and Vite versions must be selected compatibly at implementation time.
- Reddit integrations and commercial reuse depend on current platform terms and permissions.
- Student-submitted content requires moderation, consent and a correction/takedown path.
- Real logos, campus photography and user-provided branding assets must be obtained/approved before use.
