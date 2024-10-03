'use client';
import React from 'react';
import AppBar from '@elements/app-bar';
import ResponsiveHeader from './responsive-header'
import DesktopHeader from './desktop-header';
import Media from '@elements/media';

const Header = () => {
  return (
    <AppBar position={'sticky'} className={'flex-col items-center justify-center'}>
      <Media className={'w-full'} greaterThan={'sm'}>
        <DesktopHeader />
      </Media>
      <Media className={'w-full'} lessThan={'md'}>
        <ResponsiveHeader />
      </Media>
    </AppBar>
  );
};

export default Header;

