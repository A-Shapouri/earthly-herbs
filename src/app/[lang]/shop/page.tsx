'use client'
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ProductItem from '@modules/product-item';
import ProductImage1 from '../../../../public/images/products/prodcut-lettuce.png';
import ProductImage2 from '../../../../public/images/products/product-2.png';
import Text from '@elements/text';
import Filter from './components/filter';
import Newsletter from '../(home)/components/newsletter'
import Media from '@elements/media'
import Select from '@elements/select';
import { useState } from 'react';

const Shop = () => {

  const [sortValue, setSortValue] = useState('4')
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-4 md:gap-6 flex-col w-full'}>
          <Div className={'justify-between'}>
            <Div className='items-center gap-2 w-64'>
              <Text color={'grey.500'} className={'whitespace-nowrap'} type={'medium'} typography={['xs', 'xs']}>Sort by:</Text>
              <Select
                variant='outlined'
                size={'small'}
                rounded={'small'}
                id={'id'}
                text={'value'}
                onChange={(newValue) => setSortValue(newValue)}
                value={sortValue}
                optionsList={[
                  { id: '1', value: 'Price - High to Low' },
                  { id: '2', value: 'Price - Low to High' },
                  { id: '3', value: 'Price - Popularity' },
                  { id: '4', value: 'Discount' },
                  { id: '5', value: 'Caffeine Level' }]}
              />
            </Div>
            <Text color={'grey.900'} typography={['lg', 'sm']} type={'medium'}><Text type={'bold'} typography={['lg', 'sm']} variant={'span'} className={'mr-1'}>52</Text>Results Found!</Text>
          </Div>
          <Div className={'grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-5 md:gap-y-10'}>
            <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
            <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
            <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
            <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$14.99'} rate={2} title={'Green Lettuce'} />
            <ProductItem image={ProductImage1} price={'$16.99'} rate={3} title={'Green Chili'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$29.99'} rate={5} title={'Green Lettuce'} />
            <ProductItem isHealthy isNew image={ProductImage2} price={'$60.99'} rate={1} title={'Green Lettuce'} />
          </Div>
        </Div>
        <Filter />
      </Wrapper>
      <Wrapper>
        <Media className={'w-full'} greaterThan={'sm'}>
          <Newsletter />
        </Media>
      </Wrapper>
    </Container>
  );
};

export default Shop;
