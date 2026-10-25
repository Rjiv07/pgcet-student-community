# Technical Architecture

Status: proposed foundation architecture  
Initial release: static-first frontend.

## Proposed stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router only if multi-route navigation complexity justifies it
- Small, purposeful icon library
- Lightweight test/build tooling where supported

Don't add a large state-management system, backend, database, authentication, CMS, or Reddit API integration during the foundation sprint.

## Principles

1. Separate content from presentation.
2. Use shared templates for resources, colleges, events, and experience stories.
3. Keep design tokens central and components semantic.
4. Use stable, explicit content IDs and typed content schemas.
5. External links must be labelled and opened safely where appropriate.
6. Unavailable features must not pretend to work.
7. Keep dependencies small and justify each addition.
8. Add routes/technology in response to product needs, not speculation.

## Suggested source layout

```text
src/
  app/                # app shell, routing, providers
  components/
    layout/            # header, footer, page container, navigation
    ui/                # buttons, badges, links, cards, accessible primitives
    content/           # resource/event/college/experience presentations
  pages/               # route-level page compositions
  content/
    schema/            # TypeScript types for content
    resources.ts       # curated resources, source + last-checked metadata
    colleges.ts        # college information with source/context fields
    events.ts          # real event entries only
    experiences.ts     # student accounts, permission/context fields
  styles/              # global styles and design token setup
  lib/                 # small utilities
public/
  assets/              # approved logos/illustrations/photography
docs/
  PRODUCT_FOUNDATION.md
  DESIGN_SYSTEM.md
  ARCHITECTURE.md
  SPRINT_001_FOUNDATION.md
```

This is a target shape, not a reason to create empty abstractions. Adapt only when a concrete implementation need appears.

## Content schema guidelines

Resources should support: id, title, summary, category, course/program, semester/subject where relevant, resource type, URL or content body, publisher/source, checked date, status and notes.

College entries should support: id, name, location, courses (when supported), official source URLs, last-checked date, and a clear separation between official information and student-reported experience.

Events should support: id, title, organiser, start/end date and timezone, location/online, registration URL, source, last-checked date, and status. Do not invent events to fill page space.

Student experiences should support: content type, course/college context, year, submitter consent status, source/provenance, reviewed status, and a safe public display mode. Avoid collecting sensitive personal information.

## Routing and URLs

Use readable, stable routes. A practical baseline:
- /
- /pgcet
- /colleges
- /learn
- /campus
- /careers
- /community
- /contribute
- /about
- /contribution-guidelines
- /contact
- /privacy
- /terms
- /resources/:slug (as implemented)
- /colleges/:slug (as implemented)

Prefer a shared page shell. Provide not-found handling. Avoid duplicate route definitions.

## External content

Reddit/Telegram links should be maintained as explicit config values. Don't scrape Reddit. Don't add embeds, ingest, or summarise Reddit data automatically before checking current platform requirements and required permissions. Original first-party guides and consented student submissions are the preferred content model.

## Quality gate

- Production build succeeds without errors.
- TypeScript checks pass.
- No broken internal navigation.
- External URLs are valid and labelled.
- No fictional facts are shown as real.
- Layout works at narrow mobile, tablet, and wide desktop widths.
- Keyboard-only navigation and focus visibility are checked.
- Contrast combinations meet defined targets.
- Page titles and metadata are present.
- Console has no avoidable runtime errors.
