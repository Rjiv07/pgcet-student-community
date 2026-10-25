import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { resources } from '../content/resources';

export function ResourceDetailPage() {
  const { resourceId } = useParams();
  const resource = resources.find((item) => item.id === resourceId);
  if (!resource) {
    return <section className="not-found container"><p className="eyebrow">RESOURCE NOT FOUND</p><h1>This resource may have moved.</h1><p>Return to the library to browse the resources that are currently available.</p><Link className="button button-primary" to="/learn"><ArrowLeft size={16}/> Back to resources</Link></section>;
  }
  const Icon = resource.kind === 'official' ? ExternalLink : resource.kind === 'community' ? MessageCircle : BookOpen;
  const external = /^https?:\/\//.test(resource.href);
  return <div className="page-shell"><section className="page-hero"><div className="container narrow"><Link className="text-link" to="/learn"><ArrowLeft size={15}/> All resources</Link><p className="eyebrow" style={{marginTop:28}}>{resource.category.toUpperCase()}</p><h1>{resource.title}</h1><p className="page-intro">{resource.summary}</p><div className="resource-type"><Icon size={15}/>{resource.sourceLabel}</div></div></section><section className="container page-section narrow"><h2 className="prose-heading">What to know</h2><div className="resource-detail-list">{(resource.details ?? [resource.summary]).map((detail,index)=><div className="resource-detail-item" key={detail}><span className="step-number">0{index+1}</span><p>{detail}</p></div>)}</div>{resource.illustrative && <div className="notice-panel" style={{marginTop:28}}><BookOpen size={23}/><div><h2>Community guide in progress</h2><p>This is a practical starter guide, not an official syllabus or admission notice. We will improve it with reviewed sources and student contributions.</p></div></div>}<div className="inline-cta"><div><h2>Keep checking the original source.</h2><p>Time-sensitive details can change. Verify them before making decisions or sharing them.</p></div>{external ? <a className="button button-primary" href={resource.href} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={16}/></a> : <Link className="button button-primary" to={resource.href}>Continue <ArrowUpRight size={16}/></Link>}</div></section></div>;
}