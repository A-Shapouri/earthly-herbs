import * as React from 'react';
const ThirdPartyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M16 24l8-8M20 12h8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="12" y="20" width="8" height="8" rx="2" fill="#fff" />
  </svg>
);
export default ThirdPartyIcon;
