export const site = {
  name: 'PGCET Student Community',
  shortName: 'PGCET',
  tagline: 'Your next chapter starts here.',
  description:
    'Prepare for PGCET, find your people, share resources, build projects, and get ready for what comes next.',
  community: {
    reddit: 'https://www.reddit.com/r/PGCET/',
    telegram: 'https://t.me/PGCETStudents',
  },
};

export const navigation = [
  { label: 'PGCET', href: '/pgcet' },
  { label: 'Learn & resources', href: '/learn' },
  { label: 'Community', href: '/community' },
  { label: 'Contribute', href: '/contribute' },
] as const;