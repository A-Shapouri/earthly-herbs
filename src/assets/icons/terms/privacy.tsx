import * as React from 'react';
const PrivacyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="14" y="18" width="12" height="8" rx="2" fill="#fff" />
    <rect x="17" y="14" width="6" height="6" rx="3" fill="#fff" />
    <path d="M20 22l2 2 4-4" stroke="#FF7549" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default PrivacyIcon;
