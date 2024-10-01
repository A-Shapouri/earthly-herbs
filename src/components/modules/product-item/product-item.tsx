import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Image from 'next/image';
import { ProductItemProps } from './prodcut-item.props';
import Rating from '@elements/rating';
import CartIcon from '@icons-components/cart';
import HeartIcon from '@icons-components/heart';

const ProductItem = ({ image, title, price, rate, isHealthy, isNew }: ProductItemProps) => {
  return (
    <Div className={'w-[248px] h-[335px] rounded-2xl flex-col border hover:border-primary hover:shadow-primary-500 shadow-md border-grey-50 group z-10 relative'}>
      <Div className={'absolute top-2 w-full justify-between'}>
        <Div className={'gap-2 pl-2 group-hover:opacity-0 opacity-100 duration-300'}>
          {isHealthy ? (
            <Div className={'rounded-full px-4 h-9 bg-frost-500 justify-center items-center'}>
              <Text type={'medium'} typography={['xs', 'xs']}>Healthy</Text>
            </Div>
          ) : null}
          {isNew ? (
            <Div className={'rounded-full px-4 h-9 bg-desolace-500 justify-center items-center'}>
              <Text type={'medium'} typography={['xs', 'xs']}>New</Text>
            </Div>
          ) : null}
        </Div>
        <Button className={'border border-grey-50 group-hover:opacity-100 group-hover:!border-black opacity-0 mr-4 duration-300 bg-white'} startAdornment={<HeartIcon />} color={'frost'} shape={'square'} size={'medium'} rounded={'full'} />
      </Div>
      <Div className={'rounded-t-2xl'}>
        <Image className={'rounded-t-2xl'} src={image} alt={title} width={248} height={248} />
      </Div>
      <Div className={'w-full rounded-b-2xl bg-white justify-between px-4 pb-4 pt-3'}>
        <Div className={'flex-col justify-between items-start'}>
          <Div className={'flex-col'}>
            <Text color={'grey.900'} type={'medium'} typography={['xs', 'xs']}>{title}</Text>
            <Text typography={['sm', 'sm']}>{price}</Text>
          </Div>
          <Rating size={['xxs', 'xxs']} value={rate} />
        </Div>
        <Button color={'secondary'} className={'group-hover:!text-white !text-black !bg-grey-50 group-hover:!bg-secondary-500 active:!bg-secondary-300 transition-all duration-300'} startAdornment={<CartIcon />} shape={'square'} size={'large'} rounded={'full'} />
      </Div>
    </Div>
  );
};

export default ProductItem;
