import React from 'react';
import Text from '@elements/text';
import Button from '@elements/button';
import Div from '@elements/div';
import ArrowRightIcon from '@icons-components/arrow-right';
const HotSale = () => {
  return (
    <Div className={'w-full md:w-auto px-5'}>
      <Div className={'flex-col w-full rounded-2xl z-10 hover:-translate-y-6 hover:scale-105 transition-all duration-300 bg-[url("/images/home/hot-deal.png")] bg-no-repeat bg-cover md:pb-10 md:pt-14 md:px-10 p-5 gap-7 items-center justify-between'}>
        <Div className={'flex-col w-full items-center md:gap-2 gap-3'}>
          <Text className={'leading-3'} color={'white'} type={'normal'} typography={['sm', 'xxs']}>HOT SALE</Text>
          <Text className={'leading-10 whitespace-nowrap'} align={'center'} color={'white'} type={'bold'} typography={['huge', 'xl']}>Save 37% on <br />Every Order</Text>
        </Div>
        <Button startAdornment={<ArrowRightIcon />} color={'secondary'} size={'large'} className={'w-[183px]'}>
          Shop now
        </Button>
      </Div>
    </Div>
  );
};

export default HotSale;
