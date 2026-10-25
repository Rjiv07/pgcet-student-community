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
  details?: string[];
};

export const resources: Resource[] = [
  {
    id: 'official-pgcet-portal',
    title: 'Official PGCET information',
    summary: 'Use the official Karnataka examination authority website to verify current notices, dates, results, and counselling instructions.',
    category: 'Exam & admissions',
    kind: 'official',
    href: 'https://cetonline.karnataka.gov.in/kea/',
    sourceLabel: 'Karnataka Examinations Authority',
    details: [
      'Use the latest official notification for application dates, eligibility, exam instructions, results, and counselling.',
      'Do not rely on an old screenshot or forwarded message when a current official notice is available.',
      'Save the original notice and check its publication date before sharing information with other students.',
    ],
  },
  {
    id: 'resource-submissions',
    title: 'Help grow the resource library',
    summary: 'Know a reliable syllabus link, learning resource, or student guide? Suggest it for review so future batches can benefit.',
    category: 'Community contribution',
    kind: 'community',
    href: '/contribute',
    sourceLabel: 'PGCET Student Community',
    details: [
      'Share the original source link and explain who the resource will help.',
      'Include the course or exam it applies to and a date if the information can change.',
      'Do not upload private documents or material you do not have permission to share.',
    ],
  },
  {
    id: 'student-journey-guide',
    title: 'From entrance exam to college life',
    summary: 'A practical checklist for moving from preparation and admissions into learning, campus life, projects, and careers.',
    category: 'Student journey',
    kind: 'guide',
    href: '/learn/student-journey-guide',
    sourceLabel: 'Community guide',
    illustrative: true,
    details: [
      'Before admission: follow official notices, keep your documents organised, and compare courses using current sources.',
      'After joining: collect your official syllabus, understand semester expectations, and find classmates or study groups.',
      'During college: explore clubs, campus events, projects, and learning opportunities; share links that other students can verify.',
      'As you prepare for work: build projects, document your learning, practise interviews, and check internship opportunities at their original source.',
    ],
  },
];