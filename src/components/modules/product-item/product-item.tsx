import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Image from 'next/image';
import { ProductItemProps } from './prodcut-item.props';
import Rating from '@elements/rating';
import ProductAction from './action';
import Link from 'next/link';
import getParseRoute from '@utils/helpers/parse-route';
import AddToWishlistAction from './wish-item';

const ProductItem = ({ image, title, price, rate, isHealthy, isNew, id }: ProductItemProps) => {
  return (
    <Div
      className={'rounded-xl md:rounded-2xl flex-col border transition duration-300 md:hover:border-primary md:hover:shadow-primary-500 shadow-sm md:shadow-md border-grey-50 group z-10 relative'}>
      <Div className={'flex absolute top-2 w-full justify-between'}>
        <Link href={getParseRoute({ pathname: '/products/[id]', query: { id: id } })} className={'flex-col md:flex-row gap-2 pl-2 group-hover:opacity-0 opacity-100 duration-300 flex-wrap'}>
          {isHealthy ? (
            <Div className={'rounded-full md:px-4 px-2 md:h-9 h-8 bg-frost-500 justify-center items-center'}>
              <Text type={'medium'} typography={['xs', 'xs']}>Healthy</Text>
            </Div>
          ) : null}
          {isNew ? (
            <Div className={'rounded-full md:px-4 px-2 md:h-9 h-8 bg-desolace-500 justify-center items-center'}>
              <Text type={'medium'} typography={['xs', 'xs']}>New</Text>
            </Div>
          ) : null}
        </Link>
        <AddToWishlistAction id={id} />
      </Div>
      {image ? (
        <Link href={getParseRoute({ pathname: '/products/[id]', query: { id: id } })} className={'flex rounded-t-xl md:rounded-t-2xl h-[190px] relative min-w-[200px] w-full'}>
          <Image className={'rounded-t-xl md:rounded-t-2xl'} fill src={image} alt={title} />
        </Link>
      ) : null}
      <Div className={'w-full items-start rounded-b-xl md:rounded-b-2xl bg-white justify-between md:px-4 px-3 h-fit pb-2 md:pt-3 pt-2 flex-col'}>
        <Link href={getParseRoute({ pathname: '/products/[id]', query: { id: id } })} className={'items-start'}>
          <Text color={'grey.900'} type={'medium'} typography={['xs', 'xs']}>{title}</Text>
        </Link>
        <Div className={'w-full justify-between items-center h-12'}>
          <Div className={'flex-col'}>
            <Text typography={['base', 'sm']}>${price}</Text>
            <Rating size={['xs', 'xxs']} value={rate} />
          </Div>
          <ProductAction
            id={id}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default ProductItem;
