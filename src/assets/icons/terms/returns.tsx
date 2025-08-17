import * as React from 'react';
const ReturnsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="13" y="16" width="14" height="10" rx="2" fill="#fff" />
    <path d="M20 14v4" stroke="#FF7549" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 18l3-3 3 3" stroke="#FF7549" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default ReturnsIcon;
