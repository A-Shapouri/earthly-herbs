import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Image from 'next/image';
import MinusIcon from '@icons-components/minus';
import PlusIcon from '@icons-components/plus';
import TrashIcon from '@icons-components/trash';
import { ShopActions } from '@store/shop/shop-actions';
import { useDispatch } from 'react-redux';
import { ProductItemProps } from './prodcut-item.props'
const ProductItem = ({ image, name, price, id, amount }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(ShopActions.removeFromCart({
      id: id,
    }));
  };

  const handleIncreaseProduct = () => {
    dispatch(ShopActions.increaseProductAmount({
      id: id,
    }));
  };

  const handleDecreaseProduct = () => {
    dispatch(ShopActions.decreaseProductAmount({
      id: id,
    }));
  };
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
      <Div className='rounded-full items-center gap-5 border border-control px-6 h-16 self-center mr-5'>
        {amount === 1 ? (
          <Button onClick={handleRemoveProduct} size='small' iconSize={'small'} color='danger' variant='text' className='!p-0' startAdornment={<TrashIcon />} />
        ) : (
          <Button onClick={handleDecreaseProduct} size='small' iconSize={'small'} color='danger' variant='text' className='!p-0' startAdornment={<MinusIcon />} />
        )}
        <Text color='primary' typography={['xs', 'md']}>{amount}</Text>
        <Button onClick={handleIncreaseProduct} size='small' iconSize={'small'} color='primary' variant='text' className='!p-0' startAdornment={<PlusIcon />} />
      </Div>
    </Div>
  );
};

export default ProductItem;
