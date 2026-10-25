export type ProgrammeKey = 'mca' | 'mba' | 'mtech';

export type CollegeProfile = {
  slug: string;
  name: string;
  city: string;
  region: string;
  description: string;
  programmes: Record<ProgrammeKey, { status: 'needs-verification' | 'verified'; officialUrl?: string; summary?: string }>;
};

const pendingProgramme = { status: 'needs-verification' as const, summary: 'Course availability and details are being verified against official sources.' };

export const colleges: CollegeProfile[] = [
  { slug: 'ms-ramaiah-institute-of-technology', name: 'M. S. Ramaiah Institute of Technology', city: 'Bengaluru', region: 'South Karnataka', description: 'An established engineering institution in Bengaluru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'bms-college-of-engineering', name: 'BMS College of Engineering', city: 'Bengaluru', region: 'South Karnataka', description: 'An established engineering institution in Bengaluru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'rv-college-of-engineering', name: 'R. V. College of Engineering', city: 'Bengaluru', region: 'South Karnataka', description: 'An engineering institution in Bengaluru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'pes-university', name: 'PES University', city: 'Bengaluru', region: 'South Karnataka', description: 'A multidisciplinary university based in Bengaluru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'christ-university', name: 'CHRIST (Deemed to be University)', city: 'Bengaluru', region: 'South Karnataka', description: 'A multidisciplinary deemed-to-be university with a Bengaluru campus.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'manipal-academy-of-higher-education', name: 'Manipal Academy of Higher Education', city: 'Manipal', region: 'Coastal Karnataka', description: 'A multidisciplinary institution based in Manipal.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'nitk-surathkal', name: 'National Institute of Technology Karnataka, Surathkal', city: 'Surathkal, Mangaluru', region: 'Coastal Karnataka', description: 'A national institute of technology on Karnataka’s coast.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'university-of-mysore', name: 'University of Mysore', city: 'Mysuru', region: 'South Karnataka', description: 'A public university based in Mysuru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'visvesvaraya-technological-university', name: 'Visvesvaraya Technological University', city: 'Belagavi', region: 'North Karnataka', description: 'A state technological university headquartered in Belagavi.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
  { slug: 'bangalore-university', name: 'Bangalore University', city: 'Bengaluru', region: 'South Karnataka', description: 'A public university based in Bengaluru.', programmes: { mca: pendingProgramme, mba: pendingProgramme, mtech: pendingProgramme } },
];

export const programmeLabels: Record<ProgrammeKey, { title: string; subtitle: string }> = {
  mca: { title: 'MCA', subtitle: 'Master of Computer Applications' },
  mba: { title: 'MBA', subtitle: 'Master of Business Administration' },
  mtech: { title: 'M.Tech', subtitle: 'Master of Technology' },
};
