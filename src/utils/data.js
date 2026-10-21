export const personalInfo = {
  name: 'Syed Zohaib Kashif',
  role: 'Mobile Engineer',
  headline: 'Mobile apps & Automated AI Workflows.',
  summary:
    'I build Flutter products for security, logistics, and ERP teams—and Python and JavaScript AI workflows grounded in project knowledge.',
  email: 'zohaibkashif@hotmail.com',
  phone: '+92 332 2349305',
  linkedin: 'https://www.linkedin.com/in/syedzohaib-kashif-311a20241',
  github: 'https://github.com/biahoz-fihsak',
  cvUrl: '/zohaib-kashif-cv.pdf',
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
    description: 'The delivery loop I build for agent-driven work: retrieval for context, sandboxes for execution, automated QA for evidence, evals to keep improving.',
    skills: ['Python', 'JavaScript', 'Grounded RAG', 'Model Context Protocol (MCP)', 'Agent Workflows', 'Docker Sandboxes', 'Automated QA', 'Human-in-the-Loop Reviews', 'Evaluation Loops'],
  },
  {
    title: 'Engineering Workflow & Delivery',
    description: 'How the work ships: version control, automated pipelines, and the supporting craft that keeps delivery production-ready.',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'HTML and CSS', 'WordPress', 'Manual SQA', 'QA Collaboration'],
  },
];

export const experiences = [
  {
    company: 'Novus Altair UK',
    role: 'Mobile App Developer',
    period: 'May 2025 - Present',
    type: 'Full-time',
    summary: 'Building cross-platform products and engineering Optima AI Factory, an agent console where AI assistants grounded in real project knowledge deliver reviewed, QA-checked code changes.',
    achievements: [
      'Engineered retrieval-grounded agent workflows: MCP-connected semantic search across project wikis, plans, and code gives agents verifiable context instead of guesses.',
      'Built isolated Docker sandboxes with ephemeral web previews and reusable environment packs, so every agent change runs against a real stack.',
      'Wired automated QA runs — browser automation, screenshots, coverage — into human-in-the-loop approval points before anything ships.',
      'Closed the loop with feedback and evaluated agent traces, tuning retrieval quality and agent behavior release over release.',
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
    features: [
      {
        icon: 'overview',
        title: 'Live operations overview',
        description: 'See scheduled, upcoming, active, and completed jobs and patrols in one control surface.',
      },
      {
        icon: 'patrol',
        title: 'Patrols with route context',
        description: 'Review ordered waypoints, indoor floor plans, and an officer’s walked trail against the remaining route.',
      },
      {
        icon: 'response',
        title: 'Actionable SOS context',
        description: 'Bring active patrols, the nearest waypoint, and nearby in-progress jobs into the response view.',
      },
    ],
    highlights: [
      'Operations dashboards organize scheduled, upcoming, live, and completed work across jobs and patrols.',
      'Patrol templates support recurring rounds, ordered waypoints, floor plans, and manual, automatic, QR, NFC, or beacon registration.',
      'Live patrol maps overlay indoor floor plans and distinguish the officer’s walked trail from the remaining route.',
      'SOS response context can surface active patrols, the nearest waypoint, and nearby in-progress jobs.',
      'Officer, site, geofence, task, check-call, and job-reporting modules bring field oversight into one control app.',
    ],
    tags: ['Flutter', 'Firebase', 'GPS', 'Indoor Maps', 'Geofencing', 'SOS', 'NFC', 'QR'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      ios: 'https://apps.apple.com/us/app/novus-control/id1464115021',
      android: 'https://play.google.com/store/apps/details?id=com.novus.novuscontrol&hl=en',
    },
    gallery: [
      {
        shortLabel: 'Sign in',
        label: 'Secure sign-in',
        caption: 'The app entry screen for control-room users.',
      },
      {
        shortLabel: 'Modules',
        label: 'Module shortcuts',
        caption: 'Quick access to the operational modules from one dashboard.',
      },
      {
        shortLabel: 'Locations',
        label: 'Officer locations',
        caption: 'A live map paired with officer status and location controls.',
      },
      {
        shortLabel: 'Job',
        label: 'Job details',
        caption: 'Job status, field activity, and available response actions.',
      },
      {
        shortLabel: 'Overview',
        label: 'Operations dashboard',
        caption: 'Welfare, watchlist, job, and activity summaries in the control overview.',
      },
      {
        shortLabel: 'SOS',
        label: 'Discreet SOS response',
        caption: 'An alert view that brings nearby responder options into the response flow.',
      },
      {
        shortLabel: 'Patrols',
        label: 'Patrol templates',
        caption: 'Reusable patrol routes with waypoint and site context.',
      },
      {
        shortLabel: 'Search',
        label: 'SOS search status',
        caption: 'A live search state with distance and response controls.',
      },
      {
        shortLabel: 'Watchlist',
        label: 'Watchlist',
        caption: 'A focused list for monitoring and managing flagged records.',
      },
      {
        shortLabel: 'AI chat',
        label: 'NG Assistant',
        caption: 'An in-app assistant experience for navigating operational information.',
      },
      {
        shortLabel: 'Events',
        label: 'Completed events',
        caption: 'Completed activity presented in a filterable event view.',
      },
      {
        shortLabel: 'Check call',
        label: 'Missed check-call SOS',
        caption: 'A missed check-call alert with nearby responder context.',
      },
      {
        shortLabel: 'Patrol map',
        label: 'Patrol dashboard',
        caption: 'Patrol activity, route status, and field context together on one screen.',
      },
      {
        shortLabel: 'Incident',
        label: 'Incident coordination',
        caption: 'A message-based incident brief with actions for coordinating a response.',
      },
      {
        shortLabel: 'Crime data',
        label: 'Crime data lookup',
        caption: 'Search parameters and result cards in the crime-data lookup flow.',
      },
      {
        shortLabel: 'Vehicles',
        label: 'Vehicle details',
        caption: 'A vehicle record with operational details and settings.',
      },
      {
        shortLabel: 'Voice',
        label: 'Voice assistant',
        caption: 'Voice and text shortcuts for common control-app actions.',
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
      'Field app for GPS-aware and indoor patrols, QR/NFC checkpoint verification, wearable safety devices, site cameras, incident reporting, and real-time communications.',
    challenge:
      'Field teams needed a mobile app that stayed dependable during travel, patrol work, and low-connectivity conditions.',
    role:
      'Owned core mobile workflows spanning patrol management, identity checks, reporting, and real-time communication.',
    impact:
      'Helped officers complete tasks with less friction while giving operations teams more trustworthy field data.',
    features: [
      {
        icon: 'checkpoint',
        title: 'Checkpoint verification without geofencing',
        description: 'Officers can confirm a checkpoint with QR or NFC scans, without requiring a GPS geofence.',
      },
      {
        icon: 'positioning',
        title: 'Indoor positioning and 3D routes',
        description: 'Site-grid BLE anchors and RSSI-based WKNN can provide floor-aware fixes when GPS is unavailable; support is release-dependent.',
      },
      {
        icon: 'wearable',
        title: 'Wearable safety integrations',
        description: 'BLE GATT flows connect V.ALRT SOS buttons and J-Style bracelets, surfacing available health and device readings.',
      },
      {
        icon: 'camera',
        title: 'Site cameras without GPS',
        description: 'Discover IP cameras and NVRs over site Wi-Fi, then view snapshots, live JPEG/MJPEG frames, or the camera web UI.',
      },
    ],
    highlights: [
      'Patrols support ordered rounds and Auto, Manual, QR, or NFC checkpoint verification; QR/NFC scans can confirm a checkpoint without a GPS geofence.',
      'Indoor route tooling includes room, door, and stair detection, walkability and pathfinding, multi-floor plans, route playback, and 3D previews.',
      'A site-grid BLE IPS path uses multiple anchors and RSSI-based WKNN to publish floor-aware officer fixes when GPS is off; GPS remains the fallback without a fresh indoor fix, and the entry is release-dependent.',
      'Wearable safety flows pair V.ALRT SOS buttons and J-Style 2208A/V1S bracelets over BLE GATT; the bracelet panel surfaces heart-rate, SpO₂, activity, and battery readings when notified.',
      'Eview 4G pendants have a separate IMEI-bound, backend/TCP setup path rather than phone BLE or a wearable-provided GPS location.',
      'Site Devices discovers IP cameras and NVRs over site Wi-Fi and presents snapshots, live JPEG/MJPEG frames, or the camera web UI without needing GPS.',
      'Identity checks, offline SQLite-backed workflows, SOS alerts, incident reporting, and real-time chat support field operations.',
    ],
    tags: ['Flutter', 'GPS', 'BLE IPS', 'Wearable BLE', 'IP Cameras', 'Floor-plan Routing', '3D Maps', 'Socket.IO', 'SQLite', 'Face Recognition', 'NFC', 'QR'],
    platforms: ['Android', 'iOS'],
    storeLinks: {
      ios: 'https://apps.apple.com/us/app/novus-guard/id1418564392',
      android: 'https://play.google.com/store/apps/details?id=com.novusguard&hl=en',
    },
    gallery: [
      {
        label: 'Patrol overview',
        caption: 'A field patrol list organized by site, with route activity, check calls, and task context.',
      },
      {
        label: 'Reporting and response',
        caption: 'Live operational reporting and response actions help teams act quickly during incidents or changing priorities.',
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
      'Six supplied app screens presented as one consistent mobile experience.',
      'A cleaner, more approachable UI direction for a service-based business.',
      'Useful as a contrast to the more technical enterprise products elsewhere in the portfolio.',
    ],
    tags: ['Flutter', 'Mobile UI', 'Consumer App', 'Branding'],
    platforms: ['Android', 'iOS'],
    platformNote:
      'Presented here as a visual case study using the available app logo and screenshots.',
    gallery: [
      {
        shortLabel: 'Profile',
        label: 'Learner profile',
        caption: 'Learner account details and lesson preferences.',
      },
      {
        shortLabel: 'Home',
        label: 'Home and instructors',
        caption: 'A learner dashboard with lesson shortcuts and instructor discovery.',
      },
      {
        shortLabel: 'Lessons',
        label: 'Upcoming lessons',
        caption: 'Scheduled lessons with instructor, time, location, and rescheduling actions.',
      },
      {
        shortLabel: 'Reschedule',
        label: 'Reschedule lesson',
        caption: 'A dialog for choosing a new lesson date, time, and reason.',
      },
      {
        shortLabel: 'Requests',
        label: 'Lesson requests',
        caption: 'Requested lessons with dates, locations, and confirmation states.',
      },
      {
        shortLabel: 'Booking',
        label: 'Lesson booking',
        caption: 'A form for lesson type, transmission, duration, and preferred timing.',
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
    category: 'Agent Console · Internal Platform',
    summary:
      'An internal engineering platform that turns project knowledge into working code: grounded agents, isolated Docker sandboxes, automated QA evidence, and human approval gates in one reviewable console.',
    impact:
      'Replaced prompt-and-pray AI usage with a delivery loop where every agent change ships with retrieval context, a live preview, and QA evidence attached.',
    highlights: [
      'MCP-connected semantic retrieval indexes wikis, plans, and code so agents plan changes from verifiable product context.',
      'Isolated Docker sandboxes run every change with ephemeral web previews and reusable environment packs for MySQL and Redis.',
      'Automated QA workflows chain test-suite authoring, browser automation, run results, and screenshots into reviewable evidence.',
      'Human-in-the-loop approval gates keep proposed changes, previews, and QA results under engineer review before merge.',
      'Scheduled tasks and process monitoring surface automation status, failures, and outcomes at a glance.',
      'Feedback and evaluated agent traces feed the next iteration — retrieval quality and agent behavior improve release over release.',
    ],
    tags: ['Python', 'JavaScript', 'RAG', 'MCP', 'Docker', 'MySQL', 'Redis', 'Automated QA', 'Browser Automation'],
    featured: false,
  },
];

export const webProjects = [
  {
    name: 'Novus Guard',
    url: 'https://www.novusguard.co.uk/',
    category: 'Security Platform',
    blurb: 'Operational security website focused on trust, monitoring, and field-ready service capabilities.',
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

export const services = [
  {
    title: 'End-to-end Flutter apps',
    description: 'From design handoff to store release: architecture, features, testing, and shipping to both the App Store and Google Play.',
  },
  {
    title: 'Mobile rescue & polish',
    description: 'Inheriting an existing Flutter codebase and making it stable, performant, and maintainable without freezing feature work.',
  },
  {
    title: 'Field systems & integrations',
    description: 'GPS and geofencing, NFC and QR verification, offline-first sync, ERP and REST connections, and real-time communication.',
  },
  {
    title: 'AI agent workflows',
    description: 'Grounded retrieval over your docs and code, sandboxed execution, and automated QA loops that make agent output reviewable.',
  },
];

export const faqs = [
  {
    question: 'Are you available, and how fast do you respond?',
    answer:
      'I am open to full-time roles and high-impact freelance work. I usually reply to email within 24 hours, and I work from Karachi (UTC+5), with flexible overlap for European mornings and calls arranged around your team\'s hours.',
  },
  {
    question: 'Can you join an existing codebase?',
    answer:
      'Yes — most of my work has been inside live products. I am comfortable inheriting a Flutter codebase, learning its edges quickly, and improving stability and structure while feature work continues.',
  },
  {
    question: 'What does a freelance engagement look like?',
    answer:
      'Focused and scoped: a feature, an integration, or a polish sprint with clear deliverables and regular progress you can see running — not a black box. Full-time is also an option if the fit is right.',
  },
  {
    question: 'Have you shipped apps to the stores?',
    answer:
      'Yes — products I worked on are live on both the App Store and Google Play, including Novus Guard Control and Novus Guard Pro, real security-operations apps used in the field.',
  },
  {
    question: 'What do you need from me to start?',
    answer:
      'A short note on what you are building or improving, who uses it, and what makes the workflow complex. From there I can tell you quickly whether I am the right fit and what a realistic path looks like.',
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
