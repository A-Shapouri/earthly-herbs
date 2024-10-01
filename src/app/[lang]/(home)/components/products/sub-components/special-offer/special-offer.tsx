import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import ArrowRightIcon from '@icons-components/arrow-right';

const SpecialOffer = () => {
  return (
    <Div className={'flex-col w-[248px] h-[335px] rounded-2xl hover:-translate-y-6 hover:scale-105 transition-all duration-300 z-10 bg-[url("/images/home/special-offer.png")] bg-no-repeat bg-center bg-[length:248px_335px] pb-10 pt-14 px-8 items-center justify-between'}>
      <Div className={'flex-col w-full items-center gap-2'}>
        <Text className={'leading-3'} color={'white'} type={'normal'} typography={['xxs', 'xxs']}>SUMMER SALE</Text>
        <Text className={'leading-10'} color={'white'} type={'bold'} typography={['xl', 'xl']}>75% off</Text>
      </Div>
      <Button startAdornment={<ArrowRightIcon />} color={'secondary'} rounded={'full'} size={'large'} className={'w-full'}>
        Shop now
      </Button>
    </Div>
  );
};

export default SpecialOffer;
