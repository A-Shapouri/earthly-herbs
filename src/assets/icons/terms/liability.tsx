import * as React from 'react';
const LiabilityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <polygon points="20,12 28,28 12,28" fill="#fff" />
    <rect x="19" y="18" width="2" height="6" rx="1" fill="#FF7549" />
    <circle cx="20" cy="26" r="1" fill="#FF7549" />
  </svg>
);
export default LiabilityIcon;
