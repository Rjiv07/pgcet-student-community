type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, action, dark = false }: SectionHeadingProps) {
  return (
    <div className={dark ? 'section-heading section-heading-dark' : 'section-heading'}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action && <div className="section-heading-action">{action}</div>}
    </div>
  );
}