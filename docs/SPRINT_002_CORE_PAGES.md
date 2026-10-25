# Sprint 002 — Core Student Journeys

## Goal
Expand the first frontend foundation into a useful information architecture for students both before and after joining college, while retaining the approved editorial-premium visual system.

## Added routes
- `/colleges` — college and course research framework
- `/campus-life` — fests, events, clubs, and student opportunities
- `/careers` — projects, portfolios, internships, interview preparation, placements
- `/contact` — correction and project contact paths
- `/privacy` — initial privacy statement for a static site
- `/terms` — starter community guidelines

Existing home, PGCET, resources, community, contribute, about, and not-found routes remain.

## Content integrity
No college rankings, placement figures, event dates, or job listings are invented. Pages explain the intended information and the standards future submissions must meet. Official and time-sensitive details need authoritative sources and checked dates. Student experiences must be clearly labelled and shared with permission.

## Responsive navigation
Primary navigation now covers PGCET, Colleges, Learn & resources, Campus life, Careers, Community, and Contribute. It collapses into a menu at tablet widths to avoid squeezing the editorial header.

## Validation status
GitHub Actions is configured to run dependency installation, type checking, linting, and a production build on pushes and pull requests. The initial CI run exposed a workflow cache setup issue (no lockfile); the workflow was adjusted. Review the latest run before calling the sprint validated.
