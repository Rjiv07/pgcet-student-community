# PGCET Student Community

A student-powered community and knowledge base supporting Karnataka PGCET aspirants from exam preparation and admissions through college life, shared learning, projects, internships, and placements.

## Product principle

**We don't just help students get into college; we help them make the most of college and prepare for what comes next.**

The website turns useful community knowledge into information that is organised, searchable, reusable, and responsibly sourced.

## Core pillars

1. **PGCET & Admissions** — exam preparation, syllabus, official notifications, results, counselling, and college decisions.
2. **College & Learning** — college/course information, semester resources, peer learning, projects, campus life, fests, clubs, and events.
3. **Careers & Opportunities** — internships, placement preparation, interview experiences, career roadmaps, portfolios, and project collaboration.

Students should be able to contribute resources and experiences and help the next batch.

## Brand and visual direction

The approved direction is **editorial premium, light-first, balanced Gen Z**.

- Midnight Navy: `#172B3A`
- Warm Ivory: `#F7F4ED`
- White: `#FFFFFF`
- Deep Teal: `#2F7770`
- Muted Terracotta: `#C87559`
- Mist Sage: `#DCE4E2`
- Graphite: `#333C43`
- Muted Grey: `#69757B`
- Headlines: Manrope
- Body and interface: Inter

Use generous whitespace, a clear type hierarchy, a disciplined grid, thin neutral borders, restrained corner radii, purposeful colour, and subtle motion only where useful. Avoid generic AI aesthetics: neon gradients, gratuitous glassmorphism, decorative blobs, excessive shadows, repeated rounded-card grids, stock-like fake testimonials, and invented statistics.

## Product architecture

Main navigation destinations:
- Home
- PGCET Hub
- Colleges & Courses
- Learn & Resources
- Campus Life
- Careers
- Community
- Contribute

Supporting pages: About, contribution guidelines, contact/report an issue, privacy, terms, search results, and reusable article/resource details.

## Reddit and Telegram

Reddit and Telegram support conversation and participation; the website organises and preserves knowledge. Use community links naturally, not as the entire product. The initial version should link to relevant Reddit discussions instead of scraping or republishing comments. Do not build automated Reddit ingestion, embeddings, or summarisation without first reviewing current Reddit developer terms and securing any required permissions. If Reddit content is embedded, comply with Reddit's current embedding, attribution, and display requirements. Don't assume public comments are automatically available for commercial reuse.

Telegram community: https://t.me/PGCETStudents
Reddit community: https://www.reddit.com/r/PGCET/

## Initial technical direction

Start with a frontend-only, static-first website. React + Vite + TypeScript + Tailwind CSS is the proposed stack. Keep content separate from presentation, use reusable page templates, and avoid adding a backend, accounts, databases, or heavy dependencies before product needs are validated.

The initial foundation should include:
- Responsive shared layout and navigation
- Homepage
- PGCET hub
- Resource directory and reusable resource detail template
- Community page
- Contribution page
- Design tokens and reusable UI components
- Accessible, responsive interactions
- Content types and example content that is clearly labelled as illustrative until verified

## Content integrity

Every official exam/admission fact must link to an authoritative source and include a checked/updated date. Separate official facts from student-reported experiences. Do not invent college facts, dates, placement figures, student quotes, testimonials, or events. Mark illustrative content clearly. Respect privacy and only publish student-submitted details with permission.

## Development principles

- Build a coherent foundation once; avoid unnecessary rewrites.
- Make decisions explicit in the architecture/design documents.
- Keep components small and reusable, but don't over-engineer.
- Prefer simple, maintainable solutions and a small dependency set.
- Validate accessibility, responsive layouts, links, and build before considering a sprint done.
- Work on feature branches and review changes before merging into `main`.

## License

See [LICENSE](./LICENSE).
