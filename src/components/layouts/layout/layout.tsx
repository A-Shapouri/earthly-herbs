'use client';
import React, { ReactNode } from 'react';
import Div from '@elements/div';
import Footer from '@layouts/footer';
import Header from '@layouts/header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Div className={'flex-col'}>
      <Header />
      <Div className={'flex-col'}>
        {children}
        <Footer />
      </Div>
    </Div>
  );
};

export default Layout;
