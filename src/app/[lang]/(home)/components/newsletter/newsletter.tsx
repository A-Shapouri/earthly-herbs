import Div from '@elements/div';
import React from 'react';
import Image from 'next/image';
import Text from '@elements/text';
import Button from '@elements/button';
import Wrapper from '@layouts/wrapper';
import TextField from '@elements/text-field';
import EarthlyLogo from '../../../../../../public/images/earthly-logo-desktop.png'

const Newsletter = () => {
  return (
    <Wrapper className={'h-[165px] items-center justify-between gap-2'}>
      <Div className={'relative w-[300px] h-10'}>
        <Image quality={100} fill={true} alt={'earthly logo'} src={'/images/earthly-logo-desktop.png'} />
      </Div>
      <Div className={'flex-col'}>
        <Text>Subcribe our Newsletter</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing</Text>
      </Div>
      <TextField
        inputClassName='pr-[104px]'
        size={'large'}
        rounded='full'
        className='w-[490px]'
        endAdornment={<Button className='w-40' size={'medium'} rounded='full'>Subscribe</Button>}
        placeholder='Your email address' />
    </Wrapper>
  );
};

export default Newsletter;
