'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTyping = ({ sequence, className = 'text-black text-d-xl inline-block font-open-sauce-medium'}: {sequence: any, className?: string}) => {

  return (
    <TypeAnimation
      speed={75}
      className={className}
      sequence={sequence}
      wrapper="span"
      cursor={false}
    />
  );
};

export default AnimatedTyping;