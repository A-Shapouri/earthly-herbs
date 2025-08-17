import * as React from 'react';
const PermitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M20 12l8 4v4c0 5.25-3.75 10-8 10s-8-4.75-8-10v-4l8-4z" fill="#fff" />
    <path d="M17 20l3 3 5-5" stroke="#4F8DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default PermitIcon;
