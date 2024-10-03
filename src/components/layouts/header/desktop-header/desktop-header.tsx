'use client';
import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import PhoneIcon from '@icons-components/phone';
import LocationIcon from '@icons-components/location';
import Image from 'next/image';
import ArrowDownIcon from '@icons-components/arrow-down';
import Button from '@elements/button';
import Link from 'next/link';
import TextField from '@elements/text-field';
import Badge from '@elements/badge';
import CartIcon from '@icons-components/cart';
import ProfileIcon from '@icons-components/profile';
import AppBar from '@elements/app-bar';

const DesktopHeader = () => {
  return (
    <AppBar position={'sticky'} className={'flex-col items-center justify-center'}>
      <Div className={'w-full flex-col justify-center h-32 transition-all duration-300'}>
        <Div className={'bg-flurries w-full h-12 justify-center items-center'}>
          <Div className={'w-full max-w-[1440px] items-center justify-between'}>
            <Div className={'gap-2 items-center'}>
              <Div className={'w-4 h-4 items-center justify-center'}>
                <LocationIcon />
              </Div>
              <Text color={'brown'} type={'medium'} typography={['xxs', 'xxs']}>Store Location: 156 king St, York, ON, M9N 1L5, Toronto, Canada</Text>
            </Div>
            <Div className={'gap-[72px]'}>
              <Div className={'gap-2'}>
                <Div className={'w-4 h-4 justify-center items-center'}>
                  <PhoneIcon />
                </Div>
                <Text type={'normal'} color={'brown'} typography={['xxs', 'xxs']}>437-833-3379</Text>
              </Div>
              <Div className={'gap-5'}>
                <Div className={'gap-1'}>
                  <Text color={'brown'} type={'medium'} typography={['xxs', 'xxs']}>Eng</Text>
                  <ArrowDownIcon />
                </Div>
                <Div className={'gap-1'}>
                  <Text color={'brown'} type={'medium'} typography={['xxs', 'xxs']}>USD</Text>
                  <ArrowDownIcon />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className={'w-full bg-white h-20 justify-center items-center'}>
          <Div className={'w-full max-w-[1440px] items-center justify-between'}>
            <Div className={'relative w-[300px] h-10'}>
              <Image quality={100} fill={true} alt={'earthly logo'} src={'/images/earthly-logo-desktop.png'} />
            </Div>
            <Div className={'items-center justify-center gap-7'}>
              <Link className={'font-open-sauce-medium text-d-xs text-black'} href={'#'}>
                Home
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                Shop
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                Collections
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                Blog
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                About Us
              </Link>
            </Div>
            <Div className={'items-center gap-5'}>
              <TextField inputClassName='pr-[104px]' size='small' rounded='full' className='w-[334px]' endAdornment={<Button className='w-24' size={'small'} rounded='full'>Search</Button>} placeholder='Search product name, ...' />
              <Badge color='primary' size='small' badgeContent={2}>
                <Button className={'!text-black'} iconSize={'large'} startAdornment={<CartIcon />} variant='text' size='small' shape='square' color='primary' />
              </Badge>
              <Button iconSize={'large'} startAdornment={<ProfileIcon />} variant='text' size='small' shape='square' color='primary' />
            </Div>
          </Div>
        </Div>
      </Div>
    </AppBar>
  );
};

export default DesktopHeader;

