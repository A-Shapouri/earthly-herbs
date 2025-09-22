'use client';

import React from 'react';
import Button from '@elements/button';
import ArrowRightIcon from '@icons-components/arrow-right';
import { useRouter } from 'next-nprogress-bar';

const BackButton = () => {
  const router = useRouter();
  
  const handleBackButton = () => {
    router.back();
  };

  return (
    <Button 
      onClick={handleBackButton} 
      color='control' 
      variant='text' 
      className='!p-0 rotate-180'
      startAdornment={<ArrowRightIcon/>}
    />
  );
};

export default BackButton;


