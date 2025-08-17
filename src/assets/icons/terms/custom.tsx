import * as React from 'react';
const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M20 15a5 5 0 100 10 5 5 0 000-10zm0-3v2m0 12v2m7-7h-2m-12 0H7m10.07-7.07l1.42 1.42m-8.49 8.49l1.42 1.42m12.02-12.02l1.42 1.42m-8.49 8.49l1.42 1.42" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export default CustomIcon;
