import React from 'react';

const MinusIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_412_2634)">
        <path d="M23 10.9995H1C0.447715 10.9995 0 11.4472 0 11.9995C0 12.5518 0.447715 12.9995 1 12.9995H23C23.5523 12.9995 24 12.5518 24 11.9995C24 11.4472 23.5523 10.9995 23 10.9995Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_412_2634">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MinusIcon;
