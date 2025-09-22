import * as React from 'react';
const ContentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <rect x="14" y="12" width="12" height="16" rx="2" fill="#fff" />
    <rect x="16" y="16" width="8" height="2" rx="1" fill="#FF7549" />
    <rect x="16" y="20" width="8" height="2" rx="1" fill="#FF7549" />
  </svg>
);
export default ContentIcon;
