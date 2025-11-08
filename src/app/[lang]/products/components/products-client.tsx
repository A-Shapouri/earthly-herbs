'use client';
import React, { useEffect } from 'react';
import Div from '@elements/div';
import ProductItem, { ProductItemSkeleton } from '@modules/product-item';
import Text from '@elements/text';
import Filter from './filter';
import Media from '@elements/media';
import Select from '@elements/select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ProductsActions } from '@store/products/products-actions';
import { motion, AnimatePresence } from 'motion/react';
import Skeleton from '@elements/skeleton';

interface ProductsClientProps {
  initialProducts: any[];
  initialCategories: any[];
}

const ProductsClient = ({ initialProducts, initialCategories }: ProductsClientProps) => {
  const dispatch = useDispatch();
  const { products, sortBy, listLoading } = useSelector((state: RootState) => state.products);

  // Initialize store with server-side data or fallback to client-side fetching
  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      // Set initial data from server
      dispatch({
        type: 'PRODUCTS_SET_PRODUCTS_LIST',
        payload: { data: initialProducts },
      });
    } else {
      // Fallback to client-side fetching if no server data
      dispatch(ProductsActions.getProductsList());
    }

    if (initialCategories && initialCategories.length > 0) {
      dispatch({
        type: 'PRODUCTS_SET_CATEGORIES_LIST',
        payload: initialCategories,
      });
    } else {
      // Fallback to client-side fetching if no server data
      dispatch(ProductsActions.getCategoriesList());
    }
  }, [dispatch, initialProducts, initialCategories]);

  const handleSortBy = (newValue: any) => {
    dispatch(ProductsActions.setSortBy({ sort: newValue }));
  };

  // Use server data if client data is not loaded yet
  const displayProducts = products.length > 0 ? products : initialProducts;
  const isLoading = listLoading && products.length === 0;

  return (
    <>
      <Div className={'gap-4 md:gap-6 flex-col w-full'}>
        <Div className={'md:justify-between justify-start'}>
          <Media className={'w-64'} greaterThan={'sm'}>
            <Div className='items-center gap-2 w-full'>
              <Text color={'grey.500'} className={'whitespace-nowrap'} type={'medium'} typography={['xs', 'xs']}>
                Sort by:
              </Text>
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
                  { id: null, value: 'clear' },
                  { id: 'PHL', value: 'Price - High to Low' },
                  { id: 'PLH', value: 'Price - Low to High' },
                  { id: 'PD', value: 'Discount' },
                ]}
              />
            </Div>
          </Media>
          {isLoading ? (
            <Skeleton
              className={'w-32 !max-h-6'}
              color={'slate'}
              shape={'rectangular'}
            />
          ) : (
            <Text color={'grey.900'} typography={['lg', 'sm']} type={'medium'}>
              <Text type={'bold'} typography={['lg', 'sm']} variant={'span'} className={'mr-1'}>
                {displayProducts?.length || 0}
              </Text>
              Results Found!
            </Text>
          )}
        </Div>
        <Div className={'grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-5 md:gap-y-10'}>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <ProductItemSkeleton key={`skeleton_${index}`} />
            ))
          ) : (
            displayProducts && displayProducts?.length > 0 ? displayProducts.map((item, _index) => (
              <AnimatePresence key={`${item.model || item.title || item.id}_index`} mode={'wait'}>
                {item?.id && (
                  <motion.div
                    key={`${item.id}_index`}
                    className={'flex flex-1'}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}>
                    <ProductItem
                      id={item.id}
                      isHealthy={item.isHealthy}
                      isNew={item.isNew}
                      image={item.images?.[0]?.image}
                      price={item.price}
                      rate={item.rate}
                      title={item.model || item.title} />
                  </motion.div>
                )}
              </AnimatePresence>
            )) : null
          )}
        </Div>
      </Div>
      <Filter />
    </>
  );
};

export default ProductsClient;
