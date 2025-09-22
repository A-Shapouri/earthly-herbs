import * as React from 'react';
const LawIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="16" y="24" width="8" height="2" rx="1" fill="#fff" />
    <rect x="18" y="14" width="4" height="8" rx="2" fill="#fff" />
    <rect x="14" y="28" width="12" height="2" rx="1" fill="#fff" />
  </svg>
);
export default LawIcon;
