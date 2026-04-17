export const personalInfo = {
  name: 'Syed Zohaib Kashif',
  title: 'Software Engineer',
  subtitle: 'Mobile App Developer',
  tagline: 'Building intuitive, high-performance mobile experiences with Flutter & React Native.',
  email: 'zohaibkashif@hotmail.com',
  phone: '+92 332 2349305',
  linkedin: 'https://www.linkedin.com/in/syedzohaib-kashif-311a20241',
  location: 'Karachi, Pakistan',
};

export const skills = [
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'RESTful APIs', category: 'Backend' },
  { name: 'Socket.IO', category: 'Backend' },
  { name: 'SQLite', category: 'Database' },
  { name: 'WordPress', category: 'Web' },
  { name: 'HTML / CSS', category: 'Web' },
  { name: 'Manual SQA', category: 'QA' },
  { name: 'GPS & Geofencing', category: 'Mobile' },
  { name: 'NFC Integration', category: 'Mobile' },
];

export const experiences = [
  {
    company: 'Novus Altair UK',
    role: 'Mobile App Developer',
    period: 'May 2025 — Present',
    type: 'Full-time',
    description: 'Designing and maintaining mobile applications for freight management and ERP supply chain operations. Integrating with ERP systems and optimizing app performance for logistics workflows.',
    tags: ['Flutter', 'ERP Integration', 'Logistics'],
  },
  {
    company: 'Lakhani Development Services',
    role: 'Mobile App Developer',
    period: 'Sep 2024 — May 2025',
    type: 'Full-time',
    description: 'Led Android & iOS development for Security Operations Management and Field Force Control platforms. Implemented real-time GPS tracking, NFC-based checkpoint verification, SOS emergency handling, and geofence monitoring.',
    tags: ['Flutter', 'GPS Tracking', 'NFC', 'Firebase', 'REST APIs'],
  },
  {
    company: 'Urwasoft',
    role: 'Mobile App Developer',
    period: 'May 2024 — Sep 2024',
    type: 'Full-time',
    description: 'Developed user-friendly applications for freight management and ERP supply chain. Focused on integrating ERP systems and continuous app performance optimization.',
    tags: ['Flutter', 'ERP', 'Supply Chain'],
  },
  {
    company: 'Wenawa',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 — May 2024',
    type: 'Internship',
    description: 'Collaborated on mobile app design and functionality improvements. Configured and managed Flutter-based products, ensuring module reusability and developing new features within the framework.',
    tags: ['Flutter', 'Mobile Development', 'Team Collaboration'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'Novus Guard Control',
    category: 'Security Operations',
    description: 'Enterprise admin control panel for multi-organization field security operations. Features real-time job tracking, GPS patrol management with NFC checkpoint verification, SOS emergency handling, geofence monitoring, officer & vehicle tracking, and Firebase push notifications.',
    tags: ['Flutter', 'Firebase', 'GPS', 'NFC', 'REST API'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      playstore: '#',
      appstore: '#',
    },
    screenshotPairs: [
      { label: 'Dashboard & Events', index: 0 },
      { label: 'Contracts & Tasks', index: 1 },
    ],
    imageSet: 'control',
    featured: true,
  },
  {
    id: 2,
    name: 'Novus Guard Pro',
    category: 'Field Officer App',
    description: 'Cross-platform mobile app for security field officers. Includes real-time GPS tracking & geofencing, waypoint-based patrol management, multi-factor identity verification (PIN, face recognition, NFC), fleet management, incident reporting, SOS alerts, real-time chat via Socket.IO, offline mode with SQLite, and PDF report generation.',
    tags: ['Flutter', 'Socket.IO', 'SQLite', 'Face Recognition', 'NFC'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      playstore: '#',
      appstore: '#',
    },
    imageSet: 'pro',
    featured: true,
  },
  {
    id: 3,
    name: 'LDS E-Invoicing System',
    category: 'Enterprise Tool',
    description: 'Mobile app for efficient invoice creation, tracking, and management with backend API integration, ensuring compliance with digital invoicing standards.',
    tags: ['Flutter', 'REST API', 'Invoice Management'],
    platforms: ['Android', 'iOS'],
    featured: false,
  },
  {
    id: 4,
    name: 'Happilac Paints CRM',
    category: 'CRM Application',
    description: 'CRM mobile app with real-time dashboards, secure login, service ticket management, attendance tracking, and smooth API integration for enhanced business operations.',
    tags: ['Flutter', 'CRM', 'Dashboard', 'REST API'],
    platforms: ['Android', 'iOS'],
    featured: false,
  },
];

export const webProjects = [
  { name: 'Ancaster Event Center', url: 'https://ancastereventcenter.com', category: 'WordPress' },
  { name: 'TechFlow', url: 'https://techflow-phi.vercel.app', category: 'React' },
  { name: 'Kama Relief', url: 'https://kamarelief.org', category: 'WordPress' },
  { name: 'Oak Business Consultant', url: 'https://oakbusinessconsultant.com', category: 'WordPress' },
];
