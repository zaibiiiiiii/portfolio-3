import './TechBadge.css';

const aliasMap = {
  flutter: 'flutter',
  'react native': 'react-native',
  react: 'react',
  javascript: 'javascript',
  firebase: 'firebase',
  'firebase cloud messaging': 'firebase-cloud',
  gps: 'gps',
  'gps tracking': 'gps',
  'gps and geofencing': 'gps',
  geofencing: 'gps',
  nfc: 'nfc',
  'nfc integration': 'nfc',
  sqlite: 'sqlite',
  'offline sync': 'sync',
  'push notifications': 'notifications',
  'biometric verification': 'identity',
  'face recognition': 'identity',
  'rest api': 'rest',
  'restful apis': 'rest',
  'restful api': 'rest',
  'socket.io': 'socketio',
  'erp integration': 'erp',
  erp: 'erp',
  'pdf reporting': 'document',
  'invoice management': 'document',
  'html and css': 'web',
  wordpress: 'wordpress',
  'manual sqa': 'qa',
  'qa collaboration': 'qa',
  crm: 'crm',
  dashboard: 'dashboard',
  logistics: 'logistics',
  'supply chain': 'logistics',
  'mobile development': 'mobile',
  'mobile ui': 'mobile',
  'consumer app': 'mobile',
  'team collaboration': 'team',
  security: 'shield',
  'mobile systems': 'mobile',
};

const iconConfigs = {
  flutter: { ink: '#68D9FF', surface: 'rgba(104, 217, 255, 0.18)', border: 'rgba(104, 217, 255, 0.28)', icon: 'flutter' },
  'react-native': { ink: '#61DAFB', surface: 'rgba(97, 218, 251, 0.18)', border: 'rgba(97, 218, 251, 0.28)', icon: 'react' },
  react: { ink: '#61DAFB', surface: 'rgba(97, 218, 251, 0.18)', border: 'rgba(97, 218, 251, 0.28)', icon: 'react' },
  javascript: { ink: '#F7DF1E', surface: 'rgba(247, 223, 30, 0.18)', border: 'rgba(247, 223, 30, 0.28)', icon: 'javascript' },
  firebase: { ink: '#FFCA28', surface: 'rgba(255, 202, 40, 0.18)', border: 'rgba(255, 202, 40, 0.28)', icon: 'firebase' },
  'firebase-cloud': { ink: '#FFB300', surface: 'rgba(255, 179, 0, 0.18)', border: 'rgba(255, 179, 0, 0.28)', icon: 'cloud' },
  gps: { ink: '#F87171', surface: 'rgba(248, 113, 113, 0.18)', border: 'rgba(248, 113, 113, 0.28)', icon: 'gps' },
  nfc: { ink: '#34D399', surface: 'rgba(52, 211, 153, 0.18)', border: 'rgba(52, 211, 153, 0.28)', icon: 'nfc' },
  sqlite: { ink: '#60A5FA', surface: 'rgba(96, 165, 250, 0.18)', border: 'rgba(96, 165, 250, 0.28)', icon: 'database' },
  sync: { ink: '#A78BFA', surface: 'rgba(167, 139, 250, 0.18)', border: 'rgba(167, 139, 250, 0.28)', icon: 'sync' },
  notifications: { ink: '#F59E0B', surface: 'rgba(245, 158, 11, 0.18)', border: 'rgba(245, 158, 11, 0.28)', icon: 'bell' },
  identity: { ink: '#FB7185', surface: 'rgba(251, 113, 133, 0.18)', border: 'rgba(251, 113, 133, 0.28)', icon: 'identity' },
  rest: { ink: '#22C55E', surface: 'rgba(34, 197, 94, 0.18)', border: 'rgba(34, 197, 94, 0.28)', icon: 'rest' },
  socketio: { ink: '#E5E7EB', surface: 'rgba(229, 231, 235, 0.12)', border: 'rgba(229, 231, 235, 0.22)', icon: 'socket' },
  erp: { ink: '#38BDF8', surface: 'rgba(56, 189, 248, 0.18)', border: 'rgba(56, 189, 248, 0.28)', icon: 'erp' },
  document: { ink: '#F97316', surface: 'rgba(249, 115, 22, 0.18)', border: 'rgba(249, 115, 22, 0.28)', icon: 'document' },
  web: { ink: '#F97316', surface: 'rgba(249, 115, 22, 0.18)', border: 'rgba(249, 115, 22, 0.28)', icon: 'web' },
  wordpress: { ink: '#21759B', surface: 'rgba(33, 117, 155, 0.18)', border: 'rgba(33, 117, 155, 0.28)', icon: 'wordpress' },
  qa: { ink: '#14B8A6', surface: 'rgba(20, 184, 166, 0.18)', border: 'rgba(20, 184, 166, 0.28)', icon: 'qa' },
  crm: { ink: '#C084FC', surface: 'rgba(192, 132, 252, 0.18)', border: 'rgba(192, 132, 252, 0.28)', icon: 'crm' },
  dashboard: { ink: '#4ADE80', surface: 'rgba(74, 222, 128, 0.18)', border: 'rgba(74, 222, 128, 0.28)', icon: 'dashboard' },
  logistics: { ink: '#F97316', surface: 'rgba(249, 115, 22, 0.18)', border: 'rgba(249, 115, 22, 0.28)', icon: 'logistics' },
  mobile: { ink: '#38BDF8', surface: 'rgba(56, 189, 248, 0.18)', border: 'rgba(56, 189, 248, 0.28)', icon: 'mobile' },
  team: { ink: '#A3E635', surface: 'rgba(163, 230, 53, 0.18)', border: 'rgba(163, 230, 53, 0.28)', icon: 'team' },
  shield: { ink: '#60A5FA', surface: 'rgba(96, 165, 250, 0.18)', border: 'rgba(96, 165, 250, 0.28)', icon: 'shield' },
};

const normalizeLabel = (label) => label.toLowerCase().replace(/[&|/]+/g, ' and ').replace(/\s+/g, ' ').trim();

const getAbbreviation = (label) => {
  const parts = label
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2);

  if (parts.length === 0) {
    return 'TK';
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return parts.map((part) => part[0].toUpperCase()).join('');
};

const IconFrame = ({ children, viewBox = '0 0 24 24', fill = 'none', stroke = 'currentColor', strokeWidth = '1.8' }) => (
  <svg viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const iconLibrary = {
  flutter: (
    <IconFrame viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M14.9 2 5 11.7l3 3L21 2h-6.1Z" />
      <path d="m11 14.8 3.2-3.2H21l-6.4 6.4c-.9.9-2.3.9-3.2 0L8.8 15.4l2.2-.6Z" opacity=".85" />
      <path d="m8 14.8 3.2 3.2-3 3.1L5 18l3-3.2Z" opacity=".75" />
    </IconFrame>
  ),
  react: (
    <IconFrame viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
    </IconFrame>
  ),
  javascript: (
    <IconFrame viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9.7 8.2h2v7.2c0 2.1-1 3.3-3 3.3-.8 0-1.6-.2-2.2-.6l.5-1.7c.4.3.8.4 1.2.4.8 0 1.5-.3 1.5-1.7V8.2Zm5.6 10.5c-1.2 0-2.4-.4-3.1-1l.6-1.7c.8.6 1.8 1 2.7 1 .9 0 1.5-.4 1.5-1 0-.6-.4-.9-1.6-1.3-1.5-.5-2.8-1.2-2.8-3 0-1.7 1.4-2.9 3.6-2.9 1.1 0 2 .2 2.7.7l-.6 1.7c-.5-.3-1.2-.6-2.1-.6-1 0-1.4.4-1.4 1 0 .6.5.8 1.7 1.3 1.7.6 2.7 1.4 2.7 3 0 1.7-1.3 3-3.9 3Z" fill="#0B1020" />
    </IconFrame>
  ),
  firebase: (
    <IconFrame viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M7.5 20.6 9.8 5.8c.1-.6.8-.8 1.2-.4l2 2.4-5.5 12.8Z" />
      <path d="m8.3 20.2 9.2-5.1c.5-.3.7-.9.4-1.4L14 6.4c-.2-.5-.8-.6-1.2-.3L8.3 20.2Z" opacity=".9" />
      <path d="M7.5 20.6 6 3.9c-.1-.8 1-1.1 1.4-.4l1.7 3.4-1.6 13.7Z" opacity=".7" />
    </IconFrame>
  ),
  cloud: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M8.5 18.5h8.2a4.3 4.3 0 0 0 .5-8.6 5.8 5.8 0 0 0-11.1 1.7A3.7 3.7 0 0 0 8.5 18.5Z" />
      <path d="m11 10.8 2-2 2 2" />
      <path d="M13 9v6" />
    </IconFrame>
  ),
  gps: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </IconFrame>
  ),
  nfc: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M8.5 8.2c2 0 3.6 1.7 3.6 3.8s-1.6 3.8-3.6 3.8" />
      <path d="M5.5 5.4c3.6 0 6.6 3 6.6 6.6s-3 6.6-6.6 6.6" />
      <path d="M15.5 8.2c2 0 3.6 1.7 3.6 3.8s-1.6 3.8-3.6 3.8" />
      <path d="M14 5.5h1.2" />
    </IconFrame>
  ),
  database: (
    <IconFrame viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="6.5" ry="2.8" />
      <path d="M5.5 6v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6" />
      <path d="M5.5 12v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-6" />
    </IconFrame>
  ),
  sync: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M20 6v5h-5" />
      <path d="M4 18v-5h5" />
      <path d="M6.5 9.5A7 7 0 0 1 18 7.5L20 11" />
      <path d="M17.5 14.5A7 7 0 0 1 6 16.5L4 13" />
    </IconFrame>
  ),
  bell: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M6.5 16.5h11l-1.2-1.7a4.8 4.8 0 0 1-.8-2.8v-1a3.5 3.5 0 1 0-7 0v1c0 1-.3 2-.8 2.8l-1.2 1.7Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </IconFrame>
  ),
  identity: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M8 8.5c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M6.5 18.5c1.4-2 3.4-3 5.5-3s4.1 1 5.5 3" />
      <path d="M4.5 9V7M19.5 9V7M4.5 17v-2M19.5 17v-2" />
      <path d="M7 4.5H5M19 4.5h-2M7 19.5H5M19 19.5h-2" />
    </IconFrame>
  ),
  rest: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M6 8h9" />
      <path d="m12 4 4 4-4 4" />
      <path d="M18 16H9" />
      <path d="m12 12-4 4 4 4" />
    </IconFrame>
  ),
  socket: (
    <IconFrame viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="12" cy="4.8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18.2" cy="8.4" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18.2" cy="15.6" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19.2" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="5.8" cy="15.6" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="5.8" cy="8.4" r="1.3" fill="currentColor" stroke="none" />
      <path d="M12 7v2.4M15.8 9.3l-1.7 1.1M15.8 14.7l-1.7-1.1M12 17v-2.4M8.2 14.7l1.7-1.1M8.2 9.3l1.7 1.1" />
    </IconFrame>
  ),
  erp: (
    <IconFrame viewBox="0 0 24 24">
      <rect x="3.5" y="4.5" width="6" height="5" rx="1.2" />
      <rect x="14.5" y="4.5" width="6" height="5" rx="1.2" />
      <rect x="9" y="14.5" width="6" height="5" rx="1.2" />
      <path d="M9.5 7h5M12 9.5v5" />
    </IconFrame>
  ),
  document: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M8 3.5h6l4 4v13H8a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
      <path d="M14 3.5v4h4" />
      <path d="M9.5 12h5M9.5 15.5h5M9.5 19h4" />
    </IconFrame>
  ),
  web: (
    <IconFrame viewBox="0 0 24 24">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13.5 5.5-3 13" />
    </IconFrame>
  ),
  wordpress: (
    <IconFrame viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="m7.8 8.2 2.5 8.2 1.8-5.5 1.8 5.5 2.3-8.2" />
    </IconFrame>
  ),
  qa: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M12 3.8 18.5 6v5.7c0 4-2.7 7-6.5 8.5-3.8-1.5-6.5-4.5-6.5-8.5V6L12 3.8Z" />
      <path d="m9.2 12 1.8 1.8 3.8-4.1" />
    </IconFrame>
  ),
  crm: (
    <IconFrame viewBox="0 0 24 24">
      <circle cx="8" cy="8.2" r="2.2" />
      <circle cx="16" cy="8.2" r="2.2" />
      <circle cx="12" cy="15.5" r="2.2" />
      <path d="M9.8 9.6 11 13.3M14.2 9.6 13 13.3M10.2 16.9H6.5M17.5 16.9h-3.7" />
    </IconFrame>
  ),
  dashboard: (
    <IconFrame viewBox="0 0 24 24">
      <rect x="4" y="4.5" width="7" height="6.5" rx="1.2" />
      <rect x="13" y="4.5" width="7" height="10.5" rx="1.2" />
      <rect x="4" y="13" width="7" height="6.5" rx="1.2" />
      <rect x="13" y="17" width="7" height="2.5" rx="1.2" />
    </IconFrame>
  ),
  logistics: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M4 7.5h9v7H4z" />
      <path d="M13 10h3.2l2.3 2.4V14H13z" />
      <circle cx="8" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
      <path d="M4 14h2.2M18.5 14h1.5" />
    </IconFrame>
  ),
  mobile: (
    <IconFrame viewBox="0 0 24 24">
      <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
      <path d="M10 6.5h4M11.2 17.5h1.6" />
    </IconFrame>
  ),
  team: (
    <IconFrame viewBox="0 0 24 24">
      <circle cx="9" cy="8" r="2.3" />
      <circle cx="15.5" cy="9" r="1.9" />
      <path d="M5.5 17c.7-2.2 2.3-3.5 4.5-3.5s3.8 1.3 4.5 3.5" />
      <path d="M14.5 16.5c.5-1.5 1.6-2.4 3.1-2.4 1 0 1.8.3 2.4.8" />
    </IconFrame>
  ),
  shield: (
    <IconFrame viewBox="0 0 24 24">
      <path d="M12 3.8 18.5 6v5.7c0 4-2.7 7-6.5 8.5-3.8-1.5-6.5-4.5-6.5-8.5V6L12 3.8Z" />
      <path d="M9.3 12.2 11 14l3.7-4" />
    </IconFrame>
  ),
};

const FallbackIcon = ({ text }) => (
  <span className="tech-badge__monogram" aria-hidden="true">
    {text}
  </span>
);

const TechBadge = ({ label, variant = 'tag' }) => {
  const normalizedLabel = normalizeLabel(label);
  const iconKey = aliasMap[normalizedLabel];
  const iconConfig = iconConfigs[iconKey];
  const icon = iconConfig ? iconLibrary[iconConfig.icon] : null;
  const abbreviation = getAbbreviation(label);

  return (
    <span
      className={`tech-badge tech-badge--${variant}`}
      style={{
        '--tech-ink': iconConfig?.ink || '#D1D9E8',
        '--tech-surface': iconConfig?.surface || 'rgba(209, 217, 232, 0.12)',
        '--tech-border': iconConfig?.border || 'rgba(209, 217, 232, 0.2)',
      }}
    >
      <span className="tech-badge__icon">
        {icon || <FallbackIcon text={abbreviation} />}
      </span>
      <span className="tech-badge__label">{label}</span>
    </span>
  );
};

export default TechBadge;
