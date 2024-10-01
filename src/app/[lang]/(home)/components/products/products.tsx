import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import SpecialOffer from './sub-components/special-offer';
import ProductItem from '@modules/product-item';
import ProductImage1 from '../../../../../../public/images/products/prodcut-lettuce.png';
import ProductImage2 from '../../../../../../public/images/products/product-2.png';
import Categories from './sub-components/categories';
import HotSale from './sub-components/hot-sale';
import FlowerTwoImage from '@images-components/flower_two';
import FlowerThreeImage from '@images-components/flower-three';


const Products = () => {
  return (
    <Wrapper className={'flex-col pt-24 items-center pb-32 relative'}>
      <Div className={'absolute top-[145px] -left-40'}>
        <FlowerTwoImage />
      </Div>
      <Div className={'absolute bottom-40 -right-32'}>
        <FlowerThreeImage />
      </Div>
      <Div className={'flex-col items-center w-full justify-center gap-2'}>
        <Text color={'primary'} type={'normal'} typography={['xs', 'xs']}>PRODUCTS</Text>
        <Text type={'bold'} typography={['xxl', 'xxl']}>Our Featured Products</Text>
      </Div>
      <Div className={'py-11 gap-4'}>
        <SpecialOffer />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
        <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
      </Div>
      <Div className={'gap-6'}>
        <Categories />
        <HotSale />
      </Div>
    </Wrapper>
  );
};

export default Products;
