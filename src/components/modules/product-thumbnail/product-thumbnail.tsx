import Div from '@elements/div';
import Rating from '@elements/rating';
import Text from '@elements/text';
import Image from 'next/image';
import React from 'react';
import { ProductThumbnailProps } from './product-thumbnail.props';
import Button from '@elements/button';
import HeartIcon from '@icons-components/heart';
import ShoppingBagIcon from '@icons-components/shopping-bag';
import Media from '@elements/media'

const ProductThumbnail = ({ image, price, title, rate }: ProductThumbnailProps) => {
  return (
    <Div className={'gap-3 md:w-[310px] md:h-[114px] w-full h-16 rounded-xl md:rounded-2xl border hover:border-primary hover:shadow-primary-500 shadow-sm md:shadow-md group border-grey-50 z-10 bg-white'}>
      <Div className={'rounded-2xl p-1 z-10 h-[60px] w-[60px] md:w-[106px] md:h-full'}>
        <Image className={'rounded-2xl'} src={image} alt={title} />
      </Div>
      <Div className={'relative'}>
        <Media greaterThan={'sm'}>
          <Div className={'absolute flex-col md:gap-3 gap-2 md:pt-4 pt-1 items-center translate-x-full md:group-hover:translate-x-0 md:group-hover:opacity-100 opacity-0 duration-300'}>
            <Text className={'whitespace-nowrap'} typography={['xs', 'xs']} type={'medium'}>{title}</Text>
            <Div className={'gap-3'}>
              <Button className={'text-white'} startAdornment={<ShoppingBagIcon />} color={'secondary'} shape={'square'} size={'medium'} rounded={'full'} />
              <Button className={'bg-white border border-grey-50'} startAdornment={<HeartIcon />} color={'frost'} shape={'square'} size={'medium'} rounded={'full'} variant={'text'} />
            </Div>
          </Div>
        </Media>
        <Div className={'absolute gap-2 flex-col md:pt-6 md:gap-3 pt-1 md:group-hover:-translate-x-full md:group-hover:opacity-0 opacity-100 duration-300 translate-x-0'}>
          <Div className={'flex-col'}>
            <Text className={'whitespace-nowrap'} color={'grey.950'} typography={['xs', 'xs']} type={'medium'}>{title}</Text>
            <Text typography={['sm', 'sm']}>{price}</Text>
          </Div>
          <Rating size={['xxs', 'xxs']} value={rate} />
        </Div>
      </Div>
    </Div>
  );
};

export default ProductThumbnail;
