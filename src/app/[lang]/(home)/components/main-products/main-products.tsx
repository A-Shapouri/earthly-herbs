import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import SignatureProductCard from './signature-product-card';
import { mainProducts } from '../../dummy-data';
import FlowerTwoImage from '@images-components/flower_two';
import FlowerThreeImage from '@images-components/flower-three';

const MainProducts = () => {
  return (
    <Wrapper className={'flex-col md:pt-24 pt-5 items-center md:pb-32 pb-5 relative'}>
      <Div className={'absolute top-[145px] -left-40'}>
        <FlowerTwoImage />
      </Div>
      <Div className={'absolute bottom-40 -right-32'}>
        <FlowerThreeImage />
      </Div>

      <Div className={'flex-col items-center w-full justify-center md:gap-2 gap-1'}>
        <Text color={'primary'} type={'normal'} typography={['xxs', 'xs']}>FEATURED</Text>
        <Text type={'bold'} typography={['xl', 'xxl']}>Our Signature Blends</Text>
        <Text color={'grey.600'} type={'medium'} typography={['sm', 'md']} className={'text-center max-w-2xl mt-2'}>
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
        <Text color={'grey.600'} type={'medium'} typography={['sm', 'md']} className={'text-center'}>
          Each blend is carefully crafted with organic ingredients for maximum wellness benefits
        </Text>
        <Div className={'flex gap-4 items-center'}>
          <Div className={'flex items-center gap-2'}>
            <Div className={'w-3 h-3 bg-green-500 rounded-full'}></Div>
            <Text typography={['xs', 'sm']} color={'grey.700'}>100% Organic</Text>
          </Div>
          <Div className={'flex items-center gap-2'}>
            <Div className={'w-3 h-3 bg-blue-500 rounded-full'}></Div>
            <Text typography={['xs', 'sm']} color={'grey.700'}>Plastic-Free</Text>
          </Div>
          <Div className={'flex items-center gap-2'}>
            <Div className={'w-3 h-3 bg-purple-500 rounded-full'}></Div>
            <Text typography={['xs', 'sm']} color={'grey.700'}>Hand-Crafted</Text>
          </Div>
        </Div>
      </Div>
    </Wrapper>
  );
};

export default MainProducts;
