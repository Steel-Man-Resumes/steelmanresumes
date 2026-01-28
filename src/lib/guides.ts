// Guide article configuration and mapping

export interface GuideMetadata {
  title: string;
  description: string;
  category: 'second-chance-employment' | 'blue-collar-careers';
  slug: string;
  markdownFile: string;
  schemaFile: string;
}

export const guides: GuideMetadata[] = [
  // Second-Chance Employment
  {
    title: 'How to Write a Resume with a Felony',
    description: 'Address your record without lying—and still get interviews.',
    category: 'second-chance-employment',
    slug: 'felony-resume',
    markdownFile: 'how-to-write-resume-with-felony.md',
    schemaFile: 'resume-with-felony-schema.html',
  },
  {
    title: 'Explaining Employment Gaps',
    description: 'How to frame gaps from incarceration, caregiving, health, or just life.',
    category: 'second-chance-employment',
    slug: 'employment-gaps',
    markdownFile: 'explaining-employment-gaps.md',
    schemaFile: 'employment-gaps-schema.html',
  },
  {
    title: 'Interview Scripts for Tough Questions',
    description: 'Word-for-word scripts for "Tell me about your background."',
    category: 'second-chance-employment',
    slug: 'interview-scripts',
    markdownFile: 'interview-scripts-tough-questions.md',
    schemaFile: 'interview-scripts-schema.html',
  },
  {
    title: 'Fair Chance & Ban-the-Box Laws',
    description: 'Know your rights. What employers can and can\'t ask.',
    category: 'second-chance-employment',
    slug: 'fair-chance-laws',
    markdownFile: 'fair-chance-ban-the-box-laws.md',
    schemaFile: 'fair-chance-laws-schema.html',
  },
  {
    title: 'Jobs That Support Recovery',
    description: 'Industries and employers that understand addiction recovery.',
    category: 'second-chance-employment',
    slug: 'recovery-jobs',
    markdownFile: 'jobs-that-support-recovery.md',
    schemaFile: 'jobs-recovery-schema.html',
  },
  // Blue-Collar Careers
  {
    title: 'Warehouse & Distribution Resumes',
    description: 'What hiring managers actually look for in warehouse candidates.',
    category: 'blue-collar-careers',
    slug: 'warehouse-resume',
    markdownFile: 'warehouse-distribution-resumes.md',
    schemaFile: 'warehouse-resume-schema.html',
  },
  {
    title: 'Trades & Skilled Labor Resumes',
    description: 'Electrician, plumber, welder, HVAC—how to stand out without a degree.',
    category: 'blue-collar-careers',
    slug: 'trades-resume',
    markdownFile: 'trades-skilled-labor-resumes.md',
    schemaFile: 'trades-resume-schema.html',
  },
  {
    title: 'Certifications Worth Getting',
    description: 'Which certifications actually help you get hired.',
    category: 'blue-collar-careers',
    slug: 'certifications',
    markdownFile: 'certifications-worth-getting.md',
    schemaFile: 'certifications-schema.html',
  },
  {
    title: 'Blue-Collar Job Search Strategy',
    description: 'Walk-ins, staffing agencies, online apps—what works best and when.',
    category: 'blue-collar-careers',
    slug: 'job-search-strategy',
    markdownFile: 'blue-collar-job-search-strategy.md',
    schemaFile: 'job-search-strategy-schema.html',
  },
];

export function getGuideBySlug(category: string, slug: string): GuideMetadata | null {
  return guides.find(g => g.category === category && g.slug === slug) || null;
}

export function getGuidesByCategory(category: string): GuideMetadata[] {
  return guides.filter(g => g.category === category);
}

export function getAllGuides(): GuideMetadata[] {
  return guides;
}
