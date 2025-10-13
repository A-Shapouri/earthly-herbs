import Div from '@elements/div';
import React from 'react';
import Image from 'next/image';
import Text from '@elements/text';
import Button from '@elements/button';
import Wrapper from '@layouts/wrapper';
import TextField from '@elements/text-field';

const Newsletter = () => {
  return (
    <Wrapper className={'items-center justify-between md:px-0 gap-4 md:flex-row flex-col py-6 px-5'}>
      <Div className={'items-center md:gap-12 self-start md:self-center flex-col md:flex-row gap-4'}>
        <Div className={'relative md:w-[300px] self-start md:self-center w-[180px] md:h-10 h-6'}>
          <Image quality={100} fill={true} alt={'earthly logo'} src={'/images/earthly-logo-desktop.png'} />
        </Div>
        <Div className={'flex-col mt-2 self-start md:self-center gap-1'}>
          <Text typography={['md', 'base']}>Subcribe our Newsletter</Text>
          <Text color={'primary'} typography={['xxs', 'xxs']}>Subscribe for biweekly organic recipes and members-only deals: 15% off + early blends.</Text>
        </Div>
      </Div>
      <TextField
        inputClassName='pr-[104px]'
        size={'medium'}
        rounded='full'
        className='w-full md:w-[400px]'
        endAdornment={<Button className='md:w-40 w-24 md:mr-0.5' size={'medium'} rounded='full'>Subscribe</Button>}
        placeholder='Your email address' />
    </Wrapper>
  );
};

export default Newsletter;
