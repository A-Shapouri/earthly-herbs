'use client';
import React, { useState } from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import Badge from '@elements/badge';
import CartIcon from '@icons-components/cart';
import ProfileIcon from '@icons-components/profile';
import HameMenuIcon from '@icons-components/ham-menu';
import Image from 'next/image';
import Text from '@elements/text';
import classNames from '@utils/helpers/class-names';
import Link from 'next/link';

const ResponsiveHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <Div className={'w-full px-5 bg-white justify-between items-center h-16 transition-all duration-300 relative'}>
      <Div className={'items-center gap-3'}>
        <Button onClick={() => setOpen(!open)} iconSize={'large'} startAdornment={<HameMenuIcon close={open} />} variant='text' className={'!text-black hover:!text-primary-700 active:!text-primary'} size='small' shape='square' color='primary' />
        <Div className={'relative w-[32px] h-[21px] z-10'}>
          <Image quality={100} fill={true} alt={'earthly logo'} src={'/images/earthly-logo.png'} />
        </Div>
      </Div>
      <Div className={'items-center gap-3'}>
        <Badge color='primary' size='small' badgeContent={2}>
          <Button className={'!text-black'} iconSize={'large'} startAdornment={<CartIcon />} variant='text' size='small' shape='square' color='primary' />
        </Badge>
        <Button iconSize={'large'} startAdornment={<ProfileIcon />} variant='text' size='small' shape='square' color='primary' />
      </Div>
      <DrawerMenu open={open} onClose={() => setOpen(false)} />
    </Div>
  );
};

export default ResponsiveHeader;

const DrawerMenu = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  return (
    <Div className={
      classNames(
        'fixed transition-all duration-300 justify-start items-start bg-control-600/[0.9] backdrop-blur-md top-16 left-0 right-0 z-[1300] w-full',
        open ? `h-dvh` : 'h-0')
    }>
      {open ? <Div className={`-z-10 w-screen h-dvh absolute`} onClick={onClose} /> : null}
      <Div className={classNames('transition-all flex-col duration-500 absolute w-full left-0 bg-white p-5',
        open ? 'h-80 opacity-100 z-5' : 'h-0 opacity-0 -z-5',
      )}>
        {open ? (
          <Div className={'w-full flex-col h-full gap-5'}>
            <Link className={'h-10'} href={'/en'}>
              <Text typography={['md', 'md']} color={'grey.700'}>Home</Text>
            </Link>
            <Link className={'h-10'} href={'/en'}>
              <Text typography={['md', 'md']} color={'grey.700'}>Shop</Text>
            </Link>
            <Link className={'h-10'} href={'/en'}>
              <Text typography={['md', 'md']} color={'grey.700'}>Collections</Text>
            </Link>
            <Link className={'h-10'} href={'/en'}>
              <Text typography={['md', 'md']} color={'grey.700'}>Blog</Text>
            </Link>
            <Link className={'h-10'} href={'/en'}>
              <Text typography={['md', 'md']} color={'grey.700'}>About Us</Text>
            </Link>
          </Div>
        ) : null}
      </Div>
    </Div>
  );
};

