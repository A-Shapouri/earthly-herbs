import React from 'react';
import Text from '@elements/text';
import Button from '@elements/button';
import Div from '@elements/div';
import ArrowRightIcon from '@icons-components/arrow-right';
const HotSale = () => {
  return (
    <Div className={'flex-col w-[312px] h-[423px] rounded-2xl z-10 hover:-translate-y-6 hover:scale-105 transition-all duration-300 bg-[url("/images/home/hot-deal.png")] bg-no-repeat bg-center bg-[length:312px_423px] pb-10 pt-14 px-8 items-center justify-between'}>
      <Div className={'flex-col w-full items-center gap-2'}>
        <Text className={'leading-3'} color={'white'} type={'normal'} typography={['xxs', 'xxs']}>HOT SALE</Text>
        <Text className={'leading-10'} color={'white'} type={'bold'} typography={['xl', 'xl']}>Save 37% on <br />Every Order</Text>
      </Div>
      <Button startAdornment={<ArrowRightIcon />} color={'secondary'} size={'large'} className={'w-[183px]'}>
        Shop now
      </Button>
    </Div>
  );
};

export default HotSale;
