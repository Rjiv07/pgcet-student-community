import { ArrowLeft, ArrowUpRight, BookOpen, BriefcaseBusiness, GraduationCap, MapPin, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { colleges, programmeLabels, type ProgrammeKey } from '../content/colleges';

const programmeIcons = { mca: BookOpen, mba: BriefcaseBusiness, mtech: GraduationCap };

export function CollegeDetailPage() {
  const { collegeSlug } = useParams();
  const college = colleges.find((item) => item.slug === collegeSlug);
  if (!college) return <section className="not-found container"><p className="eyebrow">COLLEGE NOT FOUND</p><h1>This profile may not exist yet.</h1><p>Browse the current shortlist to find another college.</p><Link className="button button-primary" to="/colleges"><ArrowLeft size={16}/> Back to colleges</Link></section>;

  return <div className="page-shell">
    <section className="college-profile-hero"><div className="container college-profile-inner">
      <Link className="text-link" to="/colleges"><ArrowLeft size={15}/> All colleges</Link>
      <p className="eyebrow">COLLEGE KNOWLEDGE BASE</p>
      <h1>{college.name}</h1>
      <p className="college-profile-location"><MapPin size={17}/>{college.city}, Karnataka</p>
      <p className="college-profile-intro">{college.description} This profile is being built from official sources and reviewed student contributions.</p>
      <div className="college-profile-meta"><span><ShieldCheck size={16}/> Sources and dates will be shown with verified details</span><span>Initial directory · Not a ranking</span></div>
    </div></section>
    <section className="container page-section">
      <div className="college-programmes-heading"><div><p className="eyebrow">EXPLORE PROGRAMMES</p><h2>Find the course information you need.</h2><p className="section-description">Each programme is documented separately. A pending status means we have not yet confirmed the current offering from an official source.</p></div></div>
      <div className="college-programme-grid">{(['mca','mba','mtech'] as ProgrammeKey[]).map((key) => {
        const programme = college.programmes[key];
        const Icon = programmeIcons[key];
        const label = programmeLabels[key];
        return <article className="college-programme-card" key={key}>
          <div className="college-programme-card-top"><Icon size={25}/><span className="programme-status"><span className="status-dot"/> Verification pending</span></div>
          <h3>{label.title}</h3><p className="programme-subtitle">{label.subtitle}</p>
          <div className="programme-divider"/>
          <p>{programme.summary ?? 'Programme details will be added after checking the institution’s official information.'}</p>
          <ul><li>Admission route and eligibility</li><li>Fees and curriculum</li><li>Placements and student experience</li></ul>
          <span className="programme-footer">Not yet documented</span>
        </article>;
      })}</div>
      <div className="college-profile-cta"><div><h2>Know something we should verify?</h2><p>Suggest an official link or share a firsthand experience for review. Please don't include private documents or sensitive personal information.</p></div><a className="button button-primary" href="https://github.com/Rjiv07/pgcet-student-community/issues/new/choose" target="_blank" rel="noreferrer">Contribute information <ArrowUpRight size={16}/></a></div>
    </section>
  </div>;
}
