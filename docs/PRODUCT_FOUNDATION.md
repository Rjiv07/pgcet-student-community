# Product Foundation

Status: approved direction for Foundation Sprint 001  
Scope: public, static-first MVP; no authentication or backend in this sprint.

## Vision

A student-powered ecosystem that supports the full student journey: prepare for Karnataka PGCET, navigate admissions, make the most of college, share knowledge, build projects, and move towards internships and placements.

## Audiences

- PGCET aspirants preparing for an entrance exam
- Students navigating counselling and admissions
- Enrolled MCA, MBA, and M.Tech students (launch focus)
- Seniors and alumni sharing guidance
- Student contributors maintaining reusable knowledge

## User journeys

### Aspirant
Home → PGCET Hub → preparation/admissions resources → relevant community discussion.

### Newly admitted student
Home → Colleges & Courses → college/course information → syllabus and semester resources → community.

### Enrolled student
Learn & Resources → subject/resource detail → project or learning resources → contribute a correction or resource.

### Career-focused student
Careers → internship/placement preparation → interview experience or project showcase → contribute an experience.

### Contributor
Contribute → choose contribution type → follow guidelines → submit via a clearly disclosed initial method (for example, GitHub issue or community contact). No fake in-site submission should be shown as functional.

## Information architecture

Primary destinations:
1. Home
2. PGCET Hub
3. Colleges & Courses
4. Learn & Resources
5. Campus Life
6. Careers
7. Community
8. Contribute

Supporting routes:
- About
- Contribution guidelines
- Contact / report an issue
- Privacy
- Terms
- Search results
- Article/resource detail template
- College detail template
- Event detail template
- Placement experience detail template

The launch need not populate every template with real records. Empty and illustrative states must be transparent rather than fabricated.

## Homepage content order

1. Compact editorial navigation and brand mark
2. Hero with promise: support from PGCET to college and careers
3. Main journey choices: PGCET & Admissions; College & Learning; Campus Life; Careers
4. Selected useful resources (only verified or explicitly illustrative)
5. Campus opportunities / events when real listings exist
6. Student contribution and community section
7. Discreet Reddit/Telegram entry points
8. Footer with mission, contribution and policy links

## Content principles

- Distinguish official facts, student-reported experiences, editorial guidance, and illustrative placeholders.
- Official facts need authoritative citations/links and a last-checked date.
- Student experience content needs a clear context/date and permission to publish.
- Placement and job claims must not be presented as verified without evidence.
- Mark outdated information and provide a report/correction route.
- No fake testimonials, ratings, event listings, user counts, placement statistics, or social proof.

## Reddit and community policy

Initial release: curated links to relevant Reddit discussions and to the community. Avoid scraping, bulk ingest, copying comments, or automated summarisation. Confirm applicable permissions and current platform terms before introducing third-party content ingestion, embeds at scale, or monetised use. Reddit is a community source, not the main website interface. Original guides and student submissions should be the long-term knowledge base.

Telegram: https://t.me/PGCETStudents  
Reddit: https://www.reddit.com/r/PGCET/

## MVP non-goals

- Login/accounts/profiles
- User-generated content posted directly to the site
- Database or API backend
- Automatic Reddit ingestion or summarisation
- Job/placement verification service
- Notifications, messaging, or live chat
- Complex analytics or gamification
- Claims of current exam details without sources

These can be reconsidered after the community validates the need and the team has clear maintenance/moderation capacity.
