import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CalendarDays, GraduationCap, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResourceCard } from '../components/content/ResourceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { resources } from '../content/resources';
import { site } from '../content/site';

const journeys = [
  { number: '01', title: 'PGCET & admissions', description: 'Prepare, verify official updates, and navigate your next step.', href: '/pgcet', icon: BookOpen },
  { number: '02', title: 'College & learning', description: 'Find resources, learn with peers, and make college count.', href: '/colleges', icon: GraduationCap },
  { number: '03', title: 'Campus life', description: 'Discover fests, clubs, workshops, and student opportunities.', href: '/campus-life', icon: CalendarDays },
  { number: '04', title: 'Careers & projects', description: 'Build skills, share projects, and prepare for internships and placements.', href: '/careers', icon: BriefcaseBusiness },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> A community that grows with you</p>
            <h1>Your next chapter <span>starts here.</span></h1>
            <p className="hero-description">{site.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/learn">Explore resources <ArrowUpRight size={16} /></Link>
              <Link className="button button-secondary" to="/community">Meet your community <ArrowRight size={16} /></Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-line" />
              <span>From entrance exam to college, projects, and careers.</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustrated student journey graphic">
            <div className="hero-art-top"><span>THE STUDENT JOURNEY</span><span>EST. TOGETHER</span></div>
            <div className="hero-art-letters" aria-hidden="true">P.</div>
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="hero-art-sticker sticker-exam"><BookOpen size={17} /> Learn</div>
            <div className="hero-art-sticker sticker-build"><Wrench size={17} /> Build</div>
            <div className="hero-art-sticker sticker-grow"><Users size={17} /> Grow</div>
            <div className="hero-art-bottom"><span>LEARN · SHARE · MOVE FORWARD</span><ArrowDownRight size={19} /></div>
          </div>
        </div>
      </section>

      <section className="journey-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="ONE COMMUNITY, EVERY STEP" title="Wherever you are in the journey." description="Start with what you need today. Stay for what we can build together." />
          <div className="journey-grid">
            {journeys.map(({ number, title, description, href, icon: Icon }) => (
              <Link className="journey-card" to={href} key={number}>
                <div className="journey-card-top"><span>{number}</span><Icon size={21} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="journey-card-link">Explore <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="A FEW GOOD PLACES TO START"
            title="Useful beats overwhelming."
            description="Clear sources and practical next steps — not another pile of unverified links."
            action={<Link className="text-link" to="/learn">Browse resources <ArrowRight size={16} /></Link>}
          />
          <div className="resource-grid">
            {resources.filter((resource) => resource.id !== 'resource-submissions').slice(0, 3).map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
          </div>
        </div>
      </section>

      <section className="community-band">
        <div className="container community-band-inner">
          <div className="community-band-copy">
            <p className="eyebrow">GOOD THINGS GET PASSED ON</p>
            <h2>What you learn today can help someone tomorrow.</h2>
            <p>Share a resource, explain what worked, showcase a project, or help a student find their next step. The community gets better when knowledge travels.</p>
            <Link className="button button-light" to="/contribute">Find your way to contribute <ArrowUpRight size={16} /></Link>
          </div>
          <div className="community-band-mark" aria-hidden="true">
            <span>Learn</span><span>Share</span><span>Grow</span>
          </div>
        </div>
      </section>
    </>
  );
}