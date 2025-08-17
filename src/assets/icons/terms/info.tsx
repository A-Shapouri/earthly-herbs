import * as React from 'react';
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M20 12a2 2 0 110 4 2 2 0 010-4zm2 16h-4v-2h2v-6h-2v-2h4v8h2v2z" fill="#fff" />
  </svg>
);
export default InfoIcon;
