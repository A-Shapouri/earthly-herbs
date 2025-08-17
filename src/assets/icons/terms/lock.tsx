import * as React from 'react';
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="12" y="18" width="16" height="10" rx="2" fill="#fff" />
    <rect x="16" y="14" width="8" height="6" rx="4" fill="#fff" />
    <circle cx="20" cy="23" r="2" fill="#FF7549" />
  </svg>
);
export default LockIcon;
