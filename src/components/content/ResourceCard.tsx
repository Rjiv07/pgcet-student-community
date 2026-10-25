import { ArrowUpRight, BookOpen, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Resource } from '../../content/resources';

const kindLabel = {
  official: 'Official source',
  guide: 'Community guide',
  community: 'Contribute',
} as const;

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.kind === 'official' ? ExternalLink : resource.kind === 'community' ? MessageCircle : BookOpen;
  const internal = resource.href.startsWith('/');

  return (
    <article className="resource-card">
      <div className="resource-card-top">
        <span className="resource-type"><Icon size={14} aria-hidden="true" /> {kindLabel[resource.kind]}</span>
        <span className="resource-category">{resource.category}</span>
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.summary}</p>
      {resource.illustrative && <p className="content-note">Starter guide concept · expand with reviewed sources before publication.</p>}
      <div className="resource-card-bottom">
        <span className="resource-source">{resource.sourceLabel}</span>
        {internal ? (
          <Link className="text-link" to={resource.href}>Explore <ArrowUpRight size={15} /></Link>
        ) : (
          <a className="text-link" href={resource.href} target="_blank" rel="noreferrer">Visit source <ArrowUpRight size={15} /></a>
        )}
      </div>
    </article>
  );
}