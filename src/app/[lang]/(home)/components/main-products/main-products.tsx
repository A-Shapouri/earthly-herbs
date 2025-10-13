import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import SignatureProductCard from './signature-product-card';
import { mainProducts } from '../../dummy-data';

const MainProducts = () => {
  return (
    <Wrapper className={'flex-col md:pt-24 pt-5 items-center md:pb-32 pb-5 relative'}>
      <Div className={'flex-col items-center w-full justify-center md:gap-2 gap-1 px-2'}>
        <Text color={'primary'} type={'normal'} typography={['xxs', 'xs']}>FEATURED</Text>
        <Text type={'bold'} typography={['xl', 'xxl']}>Our Signature Blends</Text>
        <Text align='center' color={'grey.600'} type={'medium'} typography={['sm', 'md']} className={'text-center max-w-2xl mt-2'}>
          Discover our premium herbal tea blends crafted to enhance your daily rituals
        </Text>
      </Div>

      <Div className={'md:py-11 pt-6 pb-5 gap-8 px-5 md:px-0 grid grid-cols-1 lg:grid-cols-2 justify-center max-w-6xl w-full'}>
        {mainProducts.map((product, index) => (
          <SignatureProductCard
            key={product.id}
            product={product}
            reverse={index % 2 === 0}
          />
        ))}
      </Div>

      <Div className={'flex-col items-center gap-4 mt-8'}>
        <Text align='center' color={'grey.600'} type={'medium'} typography={['sm', 'md']} className={'text-center'}>
          Each blend is carefully crafted with organic ingredients for maximum wellness benefits
        </Text>
        <Div className={'gap-4 items-center grid grid-cols-2 md:flex'}>
          <Div className={'flex items-center gap-2'}>
            <Text typography={['xs', 'sm']} color={'grey.700'}>100% Organic</Text>
          </Div>
          <Div className={'flex items-center gap-2'}>
            <Text typography={['xs', 'sm']} color={'grey.700'}>Biodegradable Sachets</Text>
          </Div>
          <Div className={'flex items-center gap-2'}>
            <Text typography={['xs', 'sm']} color={'grey.700'}>Recyclable Pouches</Text>
          </Div>
          <Div className={'flex items-center gap-2'}>
            <Text typography={['xs', 'sm']} color={'grey.700'}>Hand-Crafted</Text>
          </Div>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default MainProducts;
