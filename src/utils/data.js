export const personalInfo = {
  name: 'Syed Zohaib Kashif',
  role: 'Mobile Engineer',
  headline: 'Mobile apps & grounded AI.',
  summary:
    'I build Flutter products for security, logistics, and ERP teams—and Python and JavaScript AI workflows grounded in project knowledge.',
  email: 'zohaibkashif@hotmail.com',
  phone: '+92 332 2349305',
  linkedin: 'https://www.linkedin.com/in/syedzohaib-kashif-311a20241',
  location: 'Karachi, Pakistan',
  availability: 'Open to full-time roles and high-impact freelance work.',
  currentRole: 'Mobile App Developer at Novus Altair UK',
  responseTime: 'Usually within 24 hours',
  timezone: 'UTC+5 (Karachi)',
};

export const heroStats = [
  { value: '2+', label: 'Years shipping production mobile apps' },
  { value: '4', label: 'Product teams across security, ERP, and logistics' },
  { value: 'Android + iOS', label: 'Cross-platform delivery' },
];

export const focusAreas = [
  {
    title: 'Offline-first flows',
    description: 'Useful even when connectivity drops, then ready to sync cleanly later.',
  },
  {
    title: 'Field operations UX',
    description: 'Built for guards, officers, drivers, and teams working away from a desk.',
  },
  {
    title: 'Live systems',
    description: 'Real-time alerts, chat, tracking, and updates when timing matters.',
  },
];

export const aboutPrinciples = [
  {
    title: 'Build for unreliable environments',
    description: 'Weak networks, long shifts, and operational pressure should be product inputs, not edge cases.',
  },
  {
    title: 'Translate complex workflows',
    description: 'I turn security, logistics, and ERP processes into mobile experiences that stay clear for end users.',
  },
  {
    title: 'Ship with ownership',
    description: 'I care about architecture, UX polish, QA handoff, and how a feature behaves after launch.',
  },
  {
    title: 'Ground AI in real product context',
    description: 'I build agent workflows around searchable project knowledge, isolated execution, automated checks, and feedback.',
  },
];

export const skillGroups = [
  {
    title: 'Core Stack',
    description: 'The tools I use most often on product teams.',
    skills: ['Flutter', 'React Native', 'JavaScript', 'Firebase'],
  },
  {
    title: 'Mobile Systems',
    description: 'Capabilities I build into production apps.',
    skills: ['GPS and Geofencing', 'NFC Integration', 'SQLite', 'Offline Sync', 'Push Notifications', 'Biometric Verification'],
  },
  {
    title: 'Backend and Real-time',
    description: 'Making mobile apps talk cleanly to business systems.',
    skills: ['RESTful APIs', 'Socket.IO', 'ERP Integration', 'Firebase Cloud Messaging', 'PDF Reporting'],
  },
  {
    title: 'AI Systems and Automation',
    description: 'Grounding engineering agents and connecting them to reviewable software workflows.',
    skills: ['Python', 'JavaScript', 'Grounded RAG', 'Model Context Protocol (MCP)', 'Agent Workflows', 'Docker Sandboxes', 'Automated QA'],
  },
  {
    title: 'Delivery Support',
    description: 'Supporting skills that help products feel production-ready.',
    skills: ['HTML and CSS', 'WordPress', 'Manual SQA', 'QA Collaboration'],
  },
];

export const experiences = [
  {
    company: 'Novus Altair UK',
    role: 'Mobile App Developer',
    period: 'May 2025 - Present',
    type: 'Full-time',
    summary: 'Building cross-platform products and contributing to Optima AI Factory, an AI-assisted engineering workspace for grounded agents and improving software workflows.',
    achievements: [
      'Implemented app flows that connect mobile users with ERP-backed business processes.',
      'Built Python- and JavaScript-based agent workflows grounded in project wikis, plans, and code through MCP-connected retrieval.',
      'Connected isolated development sandboxes, live previews, automated QA runs, and feedback into reviewable software-delivery loops.',
      'Improved maintainability and responsiveness for operations-heavy mobile and AI-assisted workflows.',
    ],
    tags: ['Flutter', 'Python', 'JavaScript', 'RAG', 'MCP', 'Docker', 'Automated QA'],
  },
  {
    company: 'Lakhani Development Services',
    role: 'Mobile App Developer',
    period: 'Sep 2024 - May 2025',
    type: 'Full-time',
    summary: 'Led mobile work for security operations and field-force control products across Android and iOS.',
    achievements: [
      'Delivered GPS tracking, geofencing, SOS handling, and NFC checkpoint verification.',
      'Worked across admin and field-user experiences to keep operational data in sync.',
      'Built features for patrol workflows, incident reporting, and real-time monitoring.',
    ],
    tags: ['Flutter', 'GPS Tracking', 'NFC', 'Firebase', 'REST APIs'],
  },
  {
    company: 'Urwasoft',
    role: 'Mobile App Developer',
    period: 'May 2024 - Sep 2024',
    type: 'Full-time',
    summary: 'Developed mobile experiences for freight management and ERP-linked supply chain products.',
    achievements: [
      'Built user-facing flows for operational teams working with ERP-connected data.',
      'Focused on performance tuning and product stability during active development.',
      'Helped translate business-heavy processes into faster, more usable mobile screens.',
    ],
    tags: ['Flutter', 'ERP', 'Supply Chain'],
  },
  {
    company: 'Wenawa',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 - May 2024',
    type: 'Internship',
    summary: 'Collaborated on Flutter products, feature work, and reusable module improvements.',
    achievements: [
      'Supported mobile app design and functionality improvements across shared codebases.',
      'Worked on reusable Flutter modules to speed up future feature delivery.',
      'Learned how to contribute inside a team workflow while shipping real product work.',
    ],
    tags: ['Flutter', 'Mobile Development', 'Team Collaboration'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'Novus Guard Control',
    category: 'Security Operations Platform',
    status: 'Private client product',
    summary:
      'Admin-focused mobile control panel for managing security operations across organizations, sites, teams, and live events.',
    challenge:
      'Supervisors needed a fast way to monitor patrol activity, assignments, incidents, and checkpoints without jumping between disconnected tools.',
    role:
      'Built and refined the cross-platform mobile experience, turning complex operational workflows into a usable control surface.',
    impact:
      'Gave teams a clearer view of live field activity and a more reliable way to coordinate guards, vehicles, contracts, and alerts.',
    highlights: [
      'Real-time job and event visibility for operations teams.',
      'GPS patrol oversight with NFC checkpoint verification.',
      'Officer, vehicle, and geofence monitoring in one workflow.',
      'Push notification support for time-sensitive incidents.',
    ],
    tags: ['Flutter', 'Firebase', 'GPS', 'NFC', 'REST API'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      ios: 'https://apps.apple.com/us/app/novus-control/id1464115021',
      android: 'https://play.google.com/store/apps/details?id=com.novus.novuscontrol&hl=en',
    },
    gallery: [
      {
        label: 'Operations overview',
        caption: 'A snapshot of live activity, recent events, and key operational signals.',
      },
      {
        label: 'Contracts and tasks',
        caption: 'Tasking and contract workflows built for day-to-day coordination.',
      },
    ],
    imageSet: 'control',
    featured: true,
  },
  {
    id: 2,
    name: 'Novus Guard Pro',
    category: 'Field Officer App',
    status: 'Private client product',
    summary:
      'Field app used by officers to complete patrols, verify checkpoints, report incidents, and stay connected while on the move.',
    challenge:
      'Field teams needed a mobile app that stayed dependable during travel, patrol work, and low-connectivity conditions.',
    role:
      'Owned core mobile workflows spanning patrol management, identity checks, reporting, and real-time communication.',
    impact:
      'Helped officers complete tasks with less friction while giving operations teams more trustworthy field data.',
    highlights: [
      'Waypoint-based patrol flows with GPS tracking and geofencing.',
      'Identity checks using PIN, face recognition, and NFC.',
      'Offline mode with SQLite for work that cannot pause on weak networks.',
      'Socket.IO chat, SOS alerts, and reporting for fast field coordination.',
    ],
    tags: ['Flutter', 'Socket.IO', 'SQLite', 'Face Recognition', 'NFC'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      ios: 'https://apps.apple.com/us/app/novus-guard/id1418564392',
      android: 'https://play.google.com/store/apps/details?id=com.novusguard&hl=en',
    },
    gallery: [
      {
        label: 'Patrol and task flow',
        caption: 'Core field workflows designed for quick action during active shifts.',
      },
      {
        label: 'Identity and reporting',
        caption: 'Verification, reporting, and communication tools for frontline use.',
      },
    ],
    imageSet: 'pro',
    featured: true,
  },
  {
    id: 3,
    name: 'Rayan Driving Instructor',
    category: 'Consumer Service App',
    status: 'Featured portfolio project',
    summary:
      'Branded mobile app experience for a driving instructor business, designed to present services in a more polished and trustworthy way.',
    challenge:
      'Create a mobile presence that feels more professional than a simple brochure, while keeping the experience approachable for everyday users.',
    role:
      'Integrated the app branding, shaped the visual mobile experience, and turned the provided screens into a cohesive product presentation.',
    impact:
      'Adds a more consumer-facing case study to the portfolio and shows range beyond operations-heavy enterprise tools.',
    highlights: [
      'Dedicated app branding with an included product logo.',
      'Six polished mobile screens presented as part of one coherent experience.',
      'A cleaner, more approachable UI direction for a service-based business.',
      'Useful as a contrast to the more technical enterprise products elsewhere in the portfolio.',
    ],
    tags: ['Flutter', 'Mobile UI', 'Consumer App', 'Branding'],
    platforms: ['Android', 'iOS'],
    platformNote:
      'Presented here as a visual case study using the available app logo and screenshots.',
    gallery: [
      {
        shortLabel: '01',
        label: 'Screen 01',
        caption: 'Preview from the branded mobile experience for the Rayan Driving Instructor app.',
      },
      {
        shortLabel: '02',
        label: 'Screen 02',
        caption: 'Another user-facing screen showing the consumer-focused visual direction.',
      },
      {
        shortLabel: '03',
        label: 'Screen 03',
        caption: 'Part of the app showcase highlighting the interface styling and brand presentation.',
      },
      {
        shortLabel: '04',
        label: 'Screen 04',
        caption: 'A continuation of the UI system used across the driving instructor app.',
      },
      {
        shortLabel: '05',
        label: 'Screen 05',
        caption: 'Additional screen from the app gallery included in the portfolio case study.',
      },
      {
        shortLabel: '06',
        label: 'Screen 06',
        caption: 'Final preview from the current Rayan Driving Instructor app asset set.',
      },
    ],
    imageSet: 'rayan',
    logoKey: 'rayan',
    featured: true,
  },
  {
    id: 4,
    name: 'LDS E-Invoicing System',
    category: 'Enterprise Tool',
    summary:
      'Invoice creation and tracking app tied to backend APIs and digital invoicing rules.',
    impact:
      'Made invoice workflows easier to complete from mobile instead of relying on fragmented manual steps.',
    tags: ['Flutter', 'REST API', 'Invoice Management'],
    platforms: ['Android', 'iOS'],
    featured: false,
  },
  {
    id: 5,
    name: 'Happilac Paints CRM',
    category: 'CRM Application',
    summary:
      'CRM mobile app with dashboards, service tickets, attendance tracking, and secure API-backed flows.',
    impact:
      'Brought day-to-day business operations into one mobile workflow for teams that needed visibility on the move.',
    tags: ['Flutter', 'CRM', 'Dashboard', 'REST API'],
    platforms: ['Android', 'iOS'],
    featured: false,
  },
  {
    id: 6,
    name: 'Optima AI Factory',
    category: 'AI-assisted software delivery',
    summary:
      'An engineering workspace for grounded agents, isolated development, and automated delivery workflows built around real product context.',
    impact:
      'Connects project knowledge to agent work, then brings sandbox previews, QA evidence, and feedback into a more inspectable build-and-improve loop.',
    highlights: [
      'Grounded agent workflows use MCP-connected semantic retrieval across product wikis, plans, and code.',
      'Isolated Docker sandboxes support web previews, reusable environment packs, MySQL, and Redis.',
      'QA workflows connect project coverage, test-suite authoring, browser automation, run results, and screenshots.',
      'Scheduled tasks and process monitoring make automation status, approval points, and outcomes easier to review.',
      'Feedback and evaluated agent traces inform ongoing improvements to retrieval and agent behavior.',
    ],
    tags: ['Python', 'JavaScript', 'RAG', 'MCP', 'Docker', 'MySQL', 'Redis', 'Automated QA'],
    featured: false,
  },
];

export const webProjects = [
  {
    name: 'Ancaster Event Center',
    url: 'https://ancastereventcenter.com',
    category: 'WordPress',
    blurb: 'Venue marketing site with service-led structure and clear conversion paths.',
  },
  {
    name: 'TechFlow',
    url: 'https://techflow-phi.vercel.app',
    category: 'React',
    blurb: 'Frontend concept site focused on visual polish and product presentation.',
  },
  {
    name: 'Kama Relief',
    url: 'https://kamarelief.org',
    category: 'WordPress',
    blurb: 'Nonprofit website designed to communicate mission, trust, and action clearly.',
  },
  {
    name: 'Oak Business Consultant',
    url: 'https://oakbusinessconsultant.com',
    category: 'WordPress',
    blurb: 'Business services site built to present offerings and credibility cleanly.',
  },
];

export const contactOptions = [
  {
    title: 'Full-time product roles',
    description: 'For teams that need a mobile engineer who can ship reliably inside real product constraints.',
  },
  {
    title: 'Freelance feature delivery',
    description: 'For companies that need help on a focused mobile workflow, integration, or app polish sprint.',
  },
  {
    title: 'Product and UX feedback',
    description: 'For founders or teams who want a second set of eyes on mobile flows, architecture, or usability.',
  },
];

export const contactChecklist = [
  'What you are building or improving',
  'Who the users are and what makes the workflow complex',
  'Your timeline, team setup, and preferred way of working',
];
