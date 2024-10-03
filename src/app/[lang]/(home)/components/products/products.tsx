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
import Media from '@elements/media';


const Products = () => {
  return (
    <Wrapper className={'flex-col md:pt-24 pt-5 items-center md:pb-32 pb-5 relative'}>
      {/* <Div className={'absolute top-[145px] -left-40'}>
        <FlowerTwoImage />
      </Div>
      <Div className={'absolute bottom-40 -right-32'}>
        <FlowerThreeImage />
      </Div> */}
      <Div className={'flex-col items-center w-full justify-center md:gap-2 gap-1'}>
        <Text color={'primary'} type={'normal'} typography={['xxs', 'xs']}>PRODUCTS</Text>
        <Text type={'bold'} typography={['xl', 'xxl']}>Our Featured Products</Text>
      </Div>
      <Div className={'md:py-11 pt-6 pb-5 gap-4 px-5 md:px-0 grid grid-cols-2 md:grid-cols-5 justify-center'}>
        <SpecialOffer />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
        <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
        <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
        <Media lessThan='md'>
          <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
        </Media>
      </Div>
      <Div className={'md:gap-6 gap-5 flex-col md:flex-row w-full justify-center'}>
        <Categories />
        <HotSale />
      </Div>
    </Wrapper>
  );
};

export default Products;
