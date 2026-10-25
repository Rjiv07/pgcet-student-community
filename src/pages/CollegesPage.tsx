import { ArrowUpRight, Building2, CheckCircle2, ClipboardList, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const comparison = [
  { icon: ClipboardList, title: 'Course & syllabus', text: 'Check the current curriculum, semester structure, electives, and academic calendar from official college sources.' },
  { icon: Building2, title: 'Campus & facilities', text: 'Look for current information on labs, libraries, transport, accessibility, hostels, and student facilities.' },
  { icon: Users, title: 'Student experience', text: 'Compare first-hand experiences with context: course, batch, date, and whether the detail is personal opinion.' },
  { icon: CheckCircle2, title: 'Careers & opportunities', text: 'Ask how internships, projects, placement support, clubs, and alumni networks work. Verify claims before relying on them.' },
];

export function CollegesPage() {
  return <div className="page-shell"><section className="page-hero"><div className="container narrow"><p className="eyebrow">COLLEGES & COURSES</p><h1>Choose with context, not <span>just a ranking.</span></h1><p className="page-intro">A practical framework for researching colleges and courses after PGCET. We will add college profiles as students contribute details that can be checked and dated.</p><Link className="button button-primary" to="/contribute">Help build college guides <ArrowUpRight size={16}/></Link></div></section><section className="container page-section"><div className="section-heading"><div><p className="eyebrow">WHAT TO COMPARE</p><h2>Look beyond one number.</h2><p className="section-description">A useful comparison explains where the information came from and when it was last checked.</p></div></div><div className="steps-grid">{comparison.map(({icon:Icon,title,text},index)=><article className="step-card" key={title}><span className="step-number">0{index+1}</span><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>)}</div><div className="notice-panel" style={{marginTop:28}}><CheckCircle2 size={23}/><div><h2>No invented college ratings or placement numbers</h2><p>This initial directory does not rank colleges or publish unverified placement statistics. College profiles will be added after we establish a source and student-review process.</p></div></div></section></div>;
}