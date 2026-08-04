/**
 * Single source of truth for every piece of copy on the site.
 * Editing this file (or the Spidey admin console at /spidey.html) re-skins the
 * entire portfolio without touching a single component.
 */

export const profile = {
  greeting: "Hello, I'm",
  name: 'SHADIN KAPPACHALI',
  handle: 'Shadin_Kappzzz',
  shortName: 'SHADIN',
  cardRole: 'Developer',
  tagline: 'CS STUDENT & DEVELOPER',
  roles: [
    'FULL-STACK & FLUTTER DEVELOPER • VIBE CODER (AI-PROMPT WEB DEV)',
    'AI & ROBOTICS TRAINER • B.TECH CS STUDENT (2ND YEAR)',
  ],
  bio: 'A Computer Science student at KMCT Institute Of Emerging Technology and Management in Kerala with a Diploma in Computer Engineering. Passionate about software development, robotics, AI, and Vibe Coding—crafting full-stack web applications and digital platforms at ultra-high speed using advanced AI prompting & modern workflows.',
  note: 'Building intelligent web applications, AI face recognition IoT systems, and leading campus tech innovation.',
  location: 'KERALA, INDIA',
  email: 'mail4shadin@gmail.com',
  resume: '/Shadin_Kappachali_CV.pdf',
  lanyardText: 'AI • VISION • ROBOTICS • SOFTWARE • ',
  socials: {
    instagram: 'https://instagram.com/shadin_kappzzz',
    github: 'https://github.com/shadinkappachali',
    linkedin: 'https://linkedin.com/in/shadinkappachali',
  },
} as const;

export const stats = [
  { value: '2ND YR', label: 'B.TECH CS @ KMCT\nEMERGING TECH' },
  { value: '4+', label: 'FEATURED\nPROJECTS' },
  { value: 'IEDC', label: 'TECHNICAL HEAD\n& EVENT LEAD' },
];

export const navLinks = [
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'AWARDS', href: '#awards' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

export const services = [
  {
    icon: '🌐',
    title: 'FULL-STACK WEB DEV',
    body: 'Building fast React.js, Next.js, Vite & Node.js applications with Tailwind CSS.',
  },
  {
    icon: '👁️',
    title: 'AI & COMPUTER VISION',
    body: 'Developing RoomPulse face recognition attendance systems with OpenCV & ESP32-CAM.',
  },
  {
    icon: '🤖',
    title: 'EMBEDDED IOT & ROBOTICS',
    body: 'Programming ESP32, Arduino microcontrollers, hardware sensors & automation systems.',
  },
  {
    icon: '⚡',
    title: 'DATABASE & BACKEND',
    body: 'Structuring backend APIs & cloud storage with MongoDB, PostgreSQL, Supabase & Firebase.',
  },
  {
    icon: '🚀',
    title: 'IEDC TECH LEADERSHIP',
    body: 'Organizing tech expos, hackathons, AI workshops, gaming tournaments & science exhibitions.',
  },
];

export const philosophy = [
  {
    n: '01',
    title: 'HARDWARE + SOFTWARE SYNTHESIS',
    body: 'Combining OpenCV computer vision and ESP32-CAM hardware with cloud databases and web analytics dashboards.',
  },
  {
    n: '02',
    title: 'MODERN FRONTEND ENGINEERING',
    body: 'Building responsive Next.js & React.js interfaces with immersive animations and component-based architecture.',
  },
  {
    n: '03',
    title: 'INSTITUTIONAL AUTOMATION',
    body: 'Developing practical management platforms for arts & sports, expense tracking, and classroom attendance.',
  },
  {
    n: '04',
    title: 'INNOVATION & LEADERSHIP',
    body: 'Leading technical initiatives at IEDC, driving MEX25 operations, and promoting student entrepreneurship.',
  },
];

export type Project = {
  n: string;
  title: string;
  role: string;
  status: 'LIVE' | 'ACTIVE';
  image: string;
  href: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    n: '01',
    title: 'PIBOTS ROBOTICS',
    role: 'OFFICIAL WEBSITE CREATOR',
    status: 'LIVE',
    image: '/assets/projects/pibots.svg',
    href: '#',
    stack: ['Next.js', 'Three.js', 'Tailwind'],
  },
  {
    n: '02',
    title: 'NEXQ GLOBAL',
    role: 'ADMIN PAGE DEVELOPER',
    status: 'LIVE',
    image: '/assets/projects/nexq.svg',
    href: '#',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    n: '03',
    title: 'ROOMPULSE AI',
    role: 'ESP32-CAM & OPENCV LEAD',
    status: 'ACTIVE',
    image: '/assets/projects/roompulse.svg',
    href: '#',
    stack: ['Python', 'OpenCV', 'Supabase'],
  },
  {
    n: '04',
    title: 'HOT WHEELS 3D',
    role: 'NEXT.JS WEB DEVELOPER',
    status: 'LIVE',
    image: '/assets/projects/hotwheels.svg',
    href: '#',
    stack: ['Next.js', 'Framer Motion', 'WebGL'],
  },
];

export const leadership = [
  {
    icon: '⚡',
    title: 'IEDC TECHNICAL HEAD',
    org: "Ma'din College of Engineering and Management",
    body: 'Headed campus technical initiatives, student workshops, and innovation projects during Diploma.',
  },
  {
    icon: '🏆',
    title: 'TECHNICAL LEAD — MEX25',
    org: 'MEX25 Flagship Event',
    body: 'Headed technical infrastructure, platform execution, and core event operations.',
  },
  {
    icon: '⭐',
    title: 'VOLUNTEER — SCALE-UP 2K26',
    org: 'Scale-Up 2K26',
    body: 'Dedicated volunteer managing event operations, logistics, and tech exhibition stalls.',
  },
];

export const awards = [
  {
    title: 'IEDC TECHNICAL HEAD',
    org: "Ma'din College of Engineering and Management",
    meta: 'Diploma Period',
    caption: 'IEDC Technical Head',
  },
  {
    title: 'BEST ROBOTICS EXHIBITION WINNER',
    org: 'Campus Robotics Exhibition',
    meta: 'Diploma Period',
    caption: 'Best Robotics Exhibition Winner',
  },
  {
    title: 'PIBOTS OFFICIAL WEB CREATOR',
    org: 'Pibots Robotics',
    meta: 'Since 2024',
    caption: 'Pibots Official Web Creator',
  },
];

export type Skill = { name: string; icon: string; color: string };

export const skills: Skill[] = [
  { name: 'React.js', icon: 'react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'next', color: '#FFFFFF' },
  { name: 'Vite', icon: 'vite', color: '#A970FF' },
  { name: 'Tailwind', icon: 'tailwind', color: '#38BDF8' },
  { name: 'Flutter', icon: 'flutter', color: '#54C5F8' },
  { name: 'Node.js', icon: 'node', color: '#8CC84B' },
  { name: 'Express', icon: 'express', color: '#E5E5E5' },
  { name: 'JavaScript', icon: 'js', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'ts', color: '#3178C6' },
  { name: 'Python', icon: 'python', color: '#FFD343' },
  { name: 'MongoDB', icon: 'mongo', color: '#4DB33D' },
  { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' },
  { name: 'Arduino', icon: 'arduino', color: '#00979D' },
  { name: 'ESP32', icon: 'esp32', color: '#E7352C' },
  { name: 'C / C++', icon: 'cpp', color: '#659AD2' },
  { name: 'Java', icon: 'java', color: '#F89820' },
  { name: 'OpenCV', icon: 'opencv', color: '#5C3EE8' },
  { name: 'Canva', icon: 'canva', color: '#00C4CC' },
  { name: 'GitHub', icon: 'github', color: '#FFFFFF' },
  { name: 'Android Studio', icon: 'android', color: '#3DDC84' },
  { name: 'VS Code', icon: 'vscode', color: '#0098FF' },
];

export const objective = {
  quote:
    'To become a skilled software engineer developing innovative and impactful technology solutions in web engineering, AI, and robotics.',
  author: 'SHADIN KAPPACHALI',
  authorRole: 'CS STUDENT & FULL-STACK DEVELOPER',
};

export const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    org: 'KMCT Institute Of Emerging Technology & Management',
    period: '2024 — 2028 (2nd Year)',
    body: 'Specializing in Full-Stack Web Development, Artificial Intelligence & Software Engineering.',
  },
  {
    title: 'Diploma in Computer Engineering',
    org: 'Government Polytechnic College',
    period: '2021 — 2024',
    body: 'Core foundation in Computer Hardware, Networking, C/C++ and Software Engineering.',
  },
];

export const experience = [
  {
    title: 'Official Website Creator',
    org: 'Pibots Robotics',
    period: '2024 — Present',
    body: 'Engineered the official product website with 3D kit viewer and platform ordering flow.',
  },
  {
    title: 'Admin Page Developer',
    org: 'NexQ Global',
    period: '2024 — Present',
    body: 'Built the admin interface, revenue analytics and client-management dashboard.',
  },
];

export const community = [
  {
    n: '01',
    title: 'IEDC — TECHNICAL HEAD',
    body: "Headed technical initiatives, organized tech events & workshops, and promoted student innovation at Ma'din College of Engineering and Management.",
  },
  {
    n: '02',
    title: 'MEX25 — TECHNICAL LEAD',
    body: 'Led technical infrastructure, platform deployment, live event web portals, and core operations for the MEX25 flagship event.',
  },
  {
    n: '03',
    title: 'SCALE-UP 2K26 — VOLUNTEER',
    body: 'Volunteer managing event operations, logistics, registration counters, and tech exhibition stalls.',
  },
  {
    n: '04',
    title: 'EVENT ORGANIZER & SPEAKER',
    body: 'Organized hackathons, AI & Robotics workshops, gaming tournaments, technology fests and science exhibitions.',
  },
];

export const gallery = [
  {
    title: 'ROBOTICS & AI WORKSHOP',
    caption: 'Training students on Arduino & IoT',
    image: '/assets/gallery/workshop.svg',
  },
  {
    title: 'FULL-STACK CODING CLASS',
    caption: 'Teaching React.js & web architecture',
    image: '/assets/gallery/coding.svg',
  },
  {
    title: 'MEX25 LIVE EXPO DEMO',
    caption: 'Exhibiting robotics & student projects',
    image: '/assets/gallery/expo.svg',
  },
];

export const contact = {
  heading: "LET'S BUILD TOGETHER",
  body: 'Open for full-stack web development roles, Next.js / React projects, AI & IoT solutions, robotics workshops, and student tech event collaborations.',
  links: [
    { label: 'mail4shadin@gmail.com', href: 'mailto:mail4shadin@gmail.com', icon: 'mail' },
    { label: '@shadin_kappzzz', href: 'https://instagram.com/shadin_kappzzz', icon: 'instagram' },
    { label: 'github.com/shadinkappachali', href: 'https://github.com/shadinkappachali', icon: 'github' },
    { label: 'linkedin.com/in/shadinkappachali', href: 'https://linkedin.com/in/shadinkappachali', icon: 'linkedin' },
    { label: 'WhatsApp / Contact on Request', href: 'mailto:mail4shadin@gmail.com', icon: 'phone' },
    { label: 'Kerala, India', href: '#', icon: 'pin' },
  ],
};
