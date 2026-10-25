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
  {
    id: 'pgcet-syllabus-checklist',
    title: 'How to verify your syllabus',
    summary: 'A checklist for finding the correct syllabus, matching it to your course and exam, and avoiding outdated copies.',
    category: 'Exam preparation',
    kind: 'guide',
    href: '/learn/pgcet-syllabus-checklist',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Start from the official examination authority or university page and confirm the exam year and course name.',
      'Check that the document is a syllabus or official exam pattern, not a coaching summary or a previous-year paper labelled as a syllabus.',
      'Keep the original link and note when you checked it. If two sources disagree, prefer the current official notice and ask the authority when necessary.',
      'Share the official source alongside any personal notes so other students can distinguish the syllabus from study advice.',
    ],
  },
  {
    id: 'admission-next-steps',
    title: 'After the result: admission next steps',
    summary: 'Organise the official notices, documents, deadlines, and questions you need to resolve during admissions.',
    category: 'Admissions',
    kind: 'guide',
    href: '/learn/admission-next-steps',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Read the current official counselling and document-verification instructions carefully.',
      'Keep digital and physical copies of documents requested by the official process. Do not share sensitive records in public groups.',
      'Write down the official dates and save the source notice; do not rely only on forwarded messages.',
      'When comparing options, record course, location, costs, facilities, and career support separately instead of treating one anecdote as a verdict.',
    ],
  },
  {
    id: 'semester-resource-sharing',
    title: 'Share semester resources responsibly',
    summary: 'A consistent way to label notes, syllabi, question papers, and learning links so classmates can actually use them.',
    category: 'College & learning',
    kind: 'guide',
    href: '/learn/semester-resource-sharing',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Label each resource with course, semester, subject, topic, and academic year where relevant.',
      'Prefer official syllabus documents and openly licensed learning materials. Share links instead of uploading files you do not have permission to redistribute.',
      'State whether notes are personal study material, lecturer-provided material, or an official document.',
      'Flag old resources and invite corrections rather than silently presenting them as current.',
    ],
  },
  {
    id: 'campus-opportunity-checklist',
    title: 'Share a campus fest or event',
    summary: 'Help students discover fests, workshops, clubs, talks, and competitions with the details they need to participate.',
    category: 'Campus life',
    kind: 'guide',
    href: '/learn/campus-opportunity-checklist',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Include the organiser, official event page, campus or venue, event date, registration deadline, and eligibility if published.',
      'Link to the original organiser rather than an unverified poster repost.',
      'Mention when you checked the details. If the organiser changes the schedule, update or flag the listing.',
      'Do not post private attendee lists, personal phone numbers, or photographs without appropriate permission.',
    ],
  },
  {
    id: 'project-portfolio-starter',
    title: 'Turn a college project into a portfolio piece',
    summary: 'A framework for explaining what you built, the decisions you made, and what another student can learn from it.',
    category: 'Projects & careers',
    kind: 'guide',
    href: '/learn/project-portfolio-starter',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Explain the problem, who it helps, and why you chose the approach.',
      'Describe your own contribution, technologies used, important trade-offs, and what you learned.',
      'Include a working demo or repository only when it is safe to share. Remove secrets, credentials, private data, and copied code you do not have rights to publish.',
      'Add setup instructions, screenshots where useful, known limitations, and possible next improvements.',
    ],
  },
  {
    id: 'internship-placement-checklist',
    title: 'Check an internship or placement lead',
    summary: 'A safety-first checklist for evaluating opportunity posts before spending time, sharing personal data, or applying.',
    category: 'Internships & placements',
    kind: 'guide',
    href: '/learn/internship-placement-checklist',
    sourceLabel: 'Community checklist',
    illustrative: true,
    details: [
      'Look for the employer’s official careers page or a verifiable recruiter profile and confirm that the role exists.',
      'Check role description, eligibility, location, work arrangement, compensation details, and application deadline where provided.',
      'Be cautious of requests for upfront payment, sensitive identity documents too early, or guaranteed placement promises.',
      'Share the original link and the date checked. Do not repost private recruiter messages without permission.',
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
];