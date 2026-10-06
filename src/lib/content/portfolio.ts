export interface SoftwareEngineer {
  name: string;
  role: 'Frontend Engineer';
  email: string;
  linkedin: string;
  technologies: string[];
}

export const profile: SoftwareEngineer = {
  name: 'Nahuel Bordon',
  role: 'Frontend Engineer',
  email: 'bordonnahuelfederico@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nahuel-bordon-7a665412b/',
  technologies: ['JavaScript', 'TypeScript', 'React', 'Svelte'],
};

export const aboutParagraphs = [
  "I'm a Software Engineer specializing in JavaScript with a strong frontend focus, bringing 8+ years of experience building scalable, maintainable web applications for enterprise environments. I work with React, Svelte, TypeScript, and component-driven architectures, creating reusable UI libraries and design systems from the ground up to improve consistency, maintainability, and development workflows across applications.",
  'I bring a strong product mindset to my work, collaborating closely with stakeholders, designers, QA teams, and end users to deliver solutions aligned with business goals and real user needs.',
];

export const navigation = [
  { href: '#about', label: 'About me' },
  { href: '#work', label: 'Case studies' },
  { href: '#playground', label: 'Playground' },
  { href: '#contact', label: 'Contact' },
];

export const demonstrations = [
  {
    id: 'frontend-lab',
    number: '01',
    title: 'Component systems',
    description: 'Reusable interfaces. Consistent behavior. Carefully considered details.',
    href: '#frontend-lab',
    status: 'Live playground',
    tags: ['Components', 'Accessibility'],
  },
  {
    id: 'architecture',
    status: 'Explore the architecture',
    number: '02',
    title: 'Frontend architecture',
    description: 'Clear boundaries between presentation, behavior and data.',
    href: '#architecture',
    tags: ['Architecture', 'Maintainability'],
  },
];
