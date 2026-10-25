export type ResourceKind = 'official' | 'guide' | 'community';

export type Resource = {
  id: string;
  title: string;
  summary: string;
  category: string;
  kind: ResourceKind;
  href: string;
  sourceLabel: string;
  checkedAt?: string;
  illustrative?: boolean;
};

export const resources: Resource[] = [
  {
    id: 'official-pgcet-portal',
    title: 'Official PGCET information',
    summary:
      'Use the official Karnataka examination authority website to verify current notices, dates, results, and counselling instructions.',
    category: 'Exam & admissions',
    kind: 'official',
    href: 'https://cetonline.karnataka.gov.in/kea/',
    sourceLabel: 'Karnataka Examinations Authority',
  },
  {
    id: 'resource-submissions',
    title: 'Help grow the resource library',
    summary:
      'Know a reliable syllabus link, learning resource, or student guide? Suggest it for review so future batches can benefit.',
    category: 'Community contribution',
    kind: 'community',
    href: '/contribute',
    sourceLabel: 'PGCET Student Community',
  },
  {
    id: 'student-journey-guide',
    title: 'From entrance exam to college life',
    summary:
      'A guide to the kinds of information students should verify while preparing, navigating admissions, and settling into a course.',
    category: 'Student journey',
    kind: 'guide',
    href: '/pgcet',
    sourceLabel: 'Community guide',
    illustrative: true,
  },
];