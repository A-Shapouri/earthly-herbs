import * as React from 'react';
const LimitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M15 15l10 10M25 15l-10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default LimitIcon;
