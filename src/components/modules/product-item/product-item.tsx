import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Image from 'next/image';
import {ProductItemProps} from './prodcut-item.props';
import Rating from '@elements/rating';
import HeartIcon from '@icons-components/heart';
import ProductAction from './action';

const ProductItem = ({image, title, price, rate, isHealthy, isNew, id}: ProductItemProps) => {
  return (
    <Div
      className={'rounded-xl md:rounded-2xl flex-col border transition duration-300 md:hover:border-primary md:hover:shadow-primary-500 shadow-sm md:shadow-md border-grey-50 group z-10 relative'}>
      <Div className={'absolute top-2 w-full justify-between'}>
        <Div className={'flex-col md:flex-row gap-2 pl-2 group-hover:opacity-0 opacity-100 duration-300 flex-wrap'}>
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
        </Div>
        <Button
          className={'border border-grey-50 group-hover:opacity-100 opacity-0 md:mr-4 mr-2 transition duration-300 bg-white hover:!bg-grey-300 active:!bg-grey-200'}
          startAdornment={<HeartIcon/>}
          color={'frost'}
          shape={'square'}
          size={'medium'}
          rounded={'full'}
        />
      </Div>
      <Div className={'rounded-t-xl md:rounded-t-2xl'}>
        <Image className={'rounded-t-xl md:rounded-t-2xl'} src={image} alt={title}/>
      </Div>
      <Div
        className={'w-full items-center rounded-b-xl md:rounded-b-2xl bg-white justify-between md:px-4 px-3 h-full pb-2 md:pt-3 pt-2'}>
        <Div className={'flex-col justify-between items-start gap-1  h-full'}>
          <Text color={'grey.900'} type={'medium'} typography={['xs', 'xs']}>{title}</Text>
          <Div className={'flex-col justify-end h-full'}>
            <Text typography={['base', 'sm']}>${price}</Text>
            <Rating size={['xs', 'xxs']} value={rate}/>
          </Div>
        </Div>
        <ProductAction
          id={id}
          image={image}
          price={price}
          title={title}
        />
      </Div>
    </Div>
  );
};

export default ProductItem;
