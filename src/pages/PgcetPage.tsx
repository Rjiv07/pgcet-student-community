import { ArrowUpRight, BookOpen, CalendarDays, FileCheck2, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { icon: BookOpen, title: 'Prepare with a plan', text: 'Organise your syllabus, practice questions, and study resources around your exam and course.' },
  { icon: ShieldCheck, title: 'Verify official updates', text: 'Use the official examination authority for current notices, application details, results, and counselling instructions.' },
  { icon: FileCheck2, title: 'Get ready for admissions', text: 'Prepare document checklists and compare college options using current, clearly sourced information.' },
  { icon: GraduationCap, title: 'Think beyond the seat', text: 'Explore how course, campus life, projects, and career opportunities connect to the next stage.' },
];

export function PgcetPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">THE PGCET HUB</p>
          <h1>Make the next step with <span>more clarity.</span></h1>
          <p className="page-intro">A starting point for exam preparation and admissions — built around reliable sources and student-to-student support.</p>
          <a className="button button-primary" href="https://cetonline.karnataka.gov.in/kea/" target="_blank" rel="noreferrer">Visit official KEA website <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <section className="container page-section">
        <div className="section-heading">
          <div><p className="eyebrow">YOUR NEXT STEPS</p><h2>Four things to keep in view.</h2></div>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="step-card" key={title}>
              <span className="step-number">0{index + 1}</span><Icon size={23} strokeWidth={1.7} />
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container page-section">
        <div className="notice-panel">
          <CalendarDays size={23} />
          <div><h2>Check dates at the source</h2><p>Exam schedules, cutoffs, counselling rounds and admission rules can change. This foundation does not publish unverified current dates. Always follow the latest official notice.</p></div>
        </div>
        <div className="inline-cta"><div><h2>Questions are part of the process.</h2><p>Discuss your preparation and admissions journey with other students.</p></div><Link className="button button-secondary" to="/community">Visit community <ArrowUpRight size={16} /></Link></div>
      </section>
    </div>
  );
}