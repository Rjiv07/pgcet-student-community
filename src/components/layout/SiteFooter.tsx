import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../content/site';

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-intro"><Link className="wordmark wordmark-footer" to="/"><span className="wordmark-mark" aria-hidden="true">P.</span><span className="wordmark-copy"><span className="wordmark-name">{site.shortName}</span><span className="wordmark-caption">STUDENT COMMUNITY</span></span></Link><p>We don’t just help students get into college. We help them make the most of it.</p></div>
    <div className="footer-links"><span className="eyebrow footer-eyebrow">EXPLORE</span><Link to="/pgcet">PGCET & admissions</Link><Link to="/colleges">Colleges & courses</Link><Link to="/learn">Learn & resources</Link><Link to="/campus-life">Campus life</Link><Link to="/careers">Careers & opportunities</Link><Link to="/community">Community</Link><Link to="/contribute">Contribute</Link></div>
    <div className="footer-links"><span className="eyebrow footer-eyebrow">ELSEWHERE</span><a href={site.community.reddit} target="_blank" rel="noreferrer">Reddit <ArrowUpRight size={14} /></a><a href={site.community.telegram} target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={14} /></a><a href={site.community.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><Link to="/about">About this project</Link><Link to="/contact">Contact & corrections</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Community guidelines</Link></div>
  </div><div className="container footer-bottom"><span>Built by students, for students.</span><span>Useful knowledge. Shared forward.</span></div></footer>;
}