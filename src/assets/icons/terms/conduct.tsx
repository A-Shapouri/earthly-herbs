import * as React from 'react';
const ConductIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <circle cx="20" cy="17" r="5" fill="#fff" />
    <rect x="13" y="24" width="14" height="6" rx="3" fill="#fff" />
    <path d="M28 28l-2-2" stroke="#FF7549" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default ConductIcon;
