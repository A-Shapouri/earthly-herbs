'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ProductItem from '@modules/product-item';
import Text from '@elements/text';
import Filter from './components/filter';
import Newsletter from '../(home)/components/newsletter';
import Media from '@elements/media';
import Select from '@elements/select';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";
import {ProductsActions} from "@store/products/products-actions";
import {motion, AnimatePresence} from 'motion/react';

const Shop = () => {
  const dispatch = useDispatch();

  const {products, sortBy} = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(ProductsActions.getProductsList());
  }, []);

  const handleSortBy = (newValue: any) => {
    dispatch(ProductsActions.setSortBy({sort: newValue}));
  }

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-4 md:gap-6 flex-col w-full'}>
          <Div className={'md:justify-between justify-start'}>
            <Media className={'w-64'} greaterThan={'sm'}>
              <Div className='items-center gap-2 w-full'>
                <Text color={'grey.500'} className={'whitespace-nowrap'} type={'medium'} typography={['xs', 'xs']}>Sort
                  by:</Text>
                <Select
                  placeholder={'Sort By'}
                  variant='outlined'
                  size={'small'}
                  rounded={'small'}
                  id={'id'}
                  text={'value'}
                  onChange={(newValue) => handleSortBy(newValue)}
                  value={sortBy}
                  optionsList={[
                    {id: null, value: 'clear'},
                    {id: 'PHL', value: 'Price - High to Low'},
                    {id: 'PLH', value: 'Price - Low to High'},
                    {id: 'PD', value: 'Discount'}]}
                />
              </Div>
            </Media>
            <Text color={'grey.900'} typography={['lg', 'sm']} type={'medium'}>
              <Text type={'bold'} typography={['lg', 'sm']} variant={'span'} className={'mr-1'}>
                {products.length}
              </Text>
              Results Found!
            </Text>
          </Div>
          <Div className={'grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-5 md:gap-y-10'}>
            {products && products.length > 0 ? products.map((item, index) => (
              <AnimatePresence mode={'wait'}>
                {item?.id && (
                  <motion.div
                    key={item.title + index}
                    className={'flex flex-1'}
                    initial={{opacity: 0, scale: 0}}
                    exit={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.4}}>
                    <ProductItem
                      id={item.id}
                      isHealthy={item.isHealthy}
                      isNew={item.isNew}
                      image={item.image} price={item.price} rate={item.rate} title={item.title}/>
                  </motion.div>
                )}
              </AnimatePresence>
            )) : null}
          </Div>
        </Div>
        <Filter/>
      </Wrapper>
      <Wrapper>
        <Media className={'w-full'} greaterThan={'sm'}>
          <Newsletter/>
        </Media>
      </Wrapper>
    </Container>
  );
};

export default Shop;
