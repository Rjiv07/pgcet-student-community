import { useMemo, useState } from 'react';
import { ArrowUpRight, Building2, CheckCircle2, ClipboardList, MapPin, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { colleges } from '../content/colleges';
import './college-pages.css';

const comparison = [
  { icon: ClipboardList, title: 'Course & syllabus', text: 'Check the current curriculum, semester structure, electives, and academic calendar from official college sources.' },
  { icon: Building2, title: 'Campus & facilities', text: 'Look for current information on labs, libraries, transport, accessibility, hostels, and student facilities.' },
  { icon: Users, title: 'Student experience', text: 'Compare first-hand experiences with context: course, batch, date, and whether the detail is personal opinion.' },
  { icon: CheckCircle2, title: 'Careers & opportunities', text: 'Ask how internships, projects, placement support, clubs, and alumni networks work. Verify claims before relying on them.' },
];

const regions = ['All regions', ...Array.from(new Set(colleges.map((college) => college.region)))];

export function CollegesPage() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All regions');
  const filteredColleges = useMemo(() => {
    const query = search.trim().toLowerCase();
    return colleges.filter((college) => {
      const matchesRegion = region === 'All regions' || college.region === region;
      const matchesSearch = !query || [college.name, college.city, college.region].some((value) => value.toLowerCase().includes(query));
      return matchesRegion && matchesSearch;
    });
  }, [search, region]);

  return <div className="page-shell">
    <section className="page-hero"><div className="container narrow">
      <p className="eyebrow">COLLEGES & COURSES</p>
      <h1>Choose with context, not <span>just a ranking.</span></h1>
      <p className="page-intro">Explore an initial shortlist of Karnataka institutions. Each profile gives students a place to build a clearer picture using official sources and dated, reviewed experiences.</p>
      <a className="button button-primary" href="https://github.com/Rjiv07/pgcet-student-community/issues/new/choose" target="_blank" rel="noreferrer">Help build college guides <ArrowUpRight size={16}/></a>
    </div></section>

    <section className="container page-section">
      <div className="college-directory-heading">
        <div><p className="eyebrow">THE STARTING DIRECTORY</p><h2>Explore colleges.</h2><p className="section-description">This is a research shortlist, not a ranking. Programme details are marked pending until verified.</p></div>
        <span className="college-count">{filteredColleges.length} of {colleges.length} colleges</span>
      </div>
      <div className="college-controls">
        <label className="college-search"><Search size={17}/><input aria-label="Search colleges" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by college or city"/></label>
        <label className="college-region"><MapPin size={16}/><select aria-label="Filter by region" value={region} onChange={(event) => setRegion(event.target.value)}>{regions.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      </div>
      {filteredColleges.length > 0 ? <div className="college-directory-grid">{filteredColleges.map((college, index) => <Link className="college-directory-card" to={`/colleges/${college.slug}`} key={college.slug}>
        <div className="college-card-top"><span className="college-index">{String(index + 1).padStart(2, '0')}</span><span className="college-location"><MapPin size={12}/> {college.city}</span></div>
        <span className="college-card-mark"><Building2 size={22}/></span>
        <h3>{college.name}</h3><p>{college.description}</p>
        <div className="college-programme-tags"><span>MCA · pending verification</span><span>MBA · pending verification</span><span>M.Tech · pending verification</span></div>
        <div className="college-card-bottom"><span>Profile in progress</span><ArrowUpRight size={16}/></div>
      </Link>)}</div> : <div className="notice-panel"><Search size={22}/><div><h2>No colleges found</h2><p>Try another college name or select a different region.</p><button className="button button-secondary" onClick={() => { setSearch(''); setRegion('All regions'); }}>Clear filters</button></div></div>}
    </section>

    <section className="container page-section college-compare-section">
      <div className="section-heading"><div><p className="eyebrow">WHAT TO COMPARE</p><h2>Look beyond one number.</h2><p className="section-description">A useful comparison explains where the information came from and when it was last checked.</p></div></div>
      <div className="steps-grid">{comparison.map(({ icon: Icon, title, text }, index) => <article className="step-card" key={title}><span className="step-number">0{index + 1}</span><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="notice-panel" style={{ marginTop: 28 }}><CheckCircle2 size={23}/><div><h2>No invented college ratings or placement numbers</h2><p>We do not rank colleges or publish unverified placement statistics. Unknown course details remain clearly marked until checked against authoritative sources.</p></div></div>
    </section>
  </div>;
}
