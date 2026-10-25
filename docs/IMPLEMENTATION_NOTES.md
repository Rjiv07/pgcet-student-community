# Foundation Implementation Notes

## Scaffold
- React + Vite + TypeScript + Tailwind CSS
- React Router for primary routes
- Lucide icons, central tokens, responsive shared shell
- Content separated from page components
- Mobile navigation, resource search/filter, empty state and not-found page

## Routes
- `/` Home
- `/pgcet` PGCET Hub
- `/learn` Learn & Resources
- `/community` Community
- `/contribute` Contribute
- `/about` About
- unmatched paths render a not-found page

## Content status
- The KEA link is a starting point, not confirmation of current exam dates or rules.
- One resource record is illustrative and must be expanded with reviewed sources before promotion.
- No dates, cutoffs, placements, student quotes or events are invented.
- Reddit and Telegram are links only; no scraping or automated summarisation is implemented.

## Validate locally
Run `npm install`, `npm run typecheck`, `npm run lint`, and `npm run build`. Then manually check responsive layouts, keyboard navigation, focus visibility, links, search/filter, contrast, reduced motion and browser console. Record real results before marking checks passed.