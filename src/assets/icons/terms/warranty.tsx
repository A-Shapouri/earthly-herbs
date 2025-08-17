import * as React from 'react';
const WarrantyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="18" y="12" width="4" height="12" rx="2" fill="#fff" />
    <circle cx="20" cy="28" r="2" fill="#fff" />
  </svg>
);
export default WarrantyIcon;
