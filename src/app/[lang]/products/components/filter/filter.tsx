'use client';
import React from 'react';
import Media from '@elements/media';
import DesktopFilter from './desktop';
import MobileFilter from './mobile';

const Filter = () => {
  return (
    <>
      <Media lessThan={'md'}>
        <MobileFilter />
      </Media>
      <Media greaterThan={'sm'}>
        <DesktopFilter />
      </Media>
    </>
  );
};

export default Filter;
