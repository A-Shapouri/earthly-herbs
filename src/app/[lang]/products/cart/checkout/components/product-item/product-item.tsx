import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Image from 'next/image';

import { ProductItemProps } from './prodcut-item.props'
const ProductItem = ({image, name, price, id, amount}: ProductItemProps) => {
  return (
    <Div className={'rounded-xl h-40 justify-between md:rounded-2xl border transition duration-300 shadow-sm md:shadow-md border-grey-50 group z-10 relative p-1'}>
      <Div className='gap-5 items-center'>
        <Div className={'rounded-xl md:rounded-t-2xl h-36 w-36 bg-slate-200'}>
          <Image className={'rounded-xl md:rounded-t-2xl object-contain'} src={image} alt={name} />
        </Div>
        <Div className={'flex-col self-center'}>
          <Text color={'grey.900'} type={'medium'} typography={['xs', 'base']}>{name}</Text>
          <Text typography={['base', 'md']}>${price}</Text>
        </Div>
      </Div>
      <Div className='items-center self-center mr-5'>
        <Text color='primary' type={'bold'} typography={['xs', 'md']}>X{amount}</Text>
      </Div>
    </Div>
  );
};

export default ProductItem;
