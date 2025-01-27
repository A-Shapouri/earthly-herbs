import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import ArrowRightIcon from '@icons-components/arrow-right';
import getParseRoute from "@utils/helpers/parse-route";
import routes from "@routes";

const SpecialOffer = () => {
  return (
    <Div className={'flex-col rounded-2xl hover:md:-translate-y-6 hover:scale-105 transition-all duration-300 z-10 bg-[url("/images/home/special-offer.png")] bg-no-repeat bg-cover md:pb-10 pb-8 md:pt-14 pt-7 md:px-8 px-3 items-center justify-between'}>
      <Div className={'flex-col w-full items-center gap-2'}>
        <Text className={'leading-3 !text-black md:!text-white'} color={'white'} type={'normal'} typography={['sm', 'xxs']}>SUMMER SALE</Text>
        <Text className={'leading-10 !text-black md:!text-white'} color={'white'} type={'bold'} typography={['huge', 'xl']}>75% off</Text>
      </Div>
      <Button
        href={getParseRoute({pathname: routes['route.shop.index'], locale: 'en'})}
        startAdornment={<ArrowRightIcon />} color={'secondary'} rounded={'full'} size={'large'} className={'w-full'}>
        Shop now
      </Button>
    </Div>
  );
};

export default SpecialOffer;
