import { ArrowUpRight, BookOpen, Code2, Flag, GraduationCap, MessageSquareText } from 'lucide-react';

const ways = [
  { icon: BookOpen, title: 'Suggest a resource', text: 'Share a syllabus link, study resource, official notice, or useful guide with the original source.' },
  { icon: GraduationCap, title: 'Share a student experience', text: 'Offer practical college, project, or placement insights. Personal experiences are labelled as such and published only with consent.' },
  { icon: Code2, title: 'Improve the website', text: 'Help with code, design, accessibility, documentation, or content organisation on GitHub.' },
  { icon: Flag, title: 'Report a correction', text: 'Tell us about a broken link, outdated detail, incorrect statement, or privacy concern.' },
];

const contributionUrl = 'https://github.com/Rjiv07/pgcet-student-community/issues/new/choose';

export function ContributePage() {
  return <div className="page-shell">
    <section className="page-hero"><div className="container narrow">
      <p className="eyebrow">BUILT TO BE SHARED</p>
      <h1>Leave something useful <span>for the next batch.</span></h1>
      <p className="page-intro">You don’t need to be a developer to contribute. A reliable link, a clear explanation, or a lesson learned can help another student.</p>
    </div></section>
    <section className="container page-section">
      <div className="contribution-grid">{ways.map(({ icon: Icon, title, text }, index) =>
        <article className="contribution-card" key={title}>
          <span className="step-number">0{index + 1}</span><Icon size={23}/><h2>{title}</h2><p>{text}</p>
        </article>
      )}</div>
      <div className="contribute-callout">
        <div><MessageSquareText size={24}/><h2>Start with a suggestion</h2>
          <p>Use the contribution forms to suggest a resource, share a student experience, or report a correction. Submissions are proposals for review, not automatic publication.</p>
        </div>
        <a className="button button-primary" href={contributionUrl} target="_blank" rel="noreferrer">Make a contribution <ArrowUpRight size={16}/></a>
      </div>
      <p className="fine-print">Before sharing: use original or permission-cleared material, link to authoritative sources, remove private personal details, and distinguish a personal experience from a verified fact. Never post passwords, ID numbers, private records, or another person’s contact details.</p>
    </section>
  </div>;
}
