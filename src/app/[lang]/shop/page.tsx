import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ProductItem from '@modules/product-item';
import ProductImage1 from '../../../../public/images/products/prodcut-lettuce.png';
import ProductImage2 from '../../../../public/images/products/product-2.png';
import Text from '@elements/text';
import Filter from './components/filter';

const Shop = () => {
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 flex-col pt-4 gap-4 pb-24'}>
        <Text color={'grey.900'} typography={['lg', 'lg']} type={'medium'}><Text type={'bold'} typography={['lg', 'lg']} variant={'span'} className={'mr-1'}>52</Text>Results Found!</Text>
        <Div className={'grid grid-cols-2 gap-4 '}>
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
      </Wrapper>
      <Filter />
    </Container>
  );
};

export default Shop;
