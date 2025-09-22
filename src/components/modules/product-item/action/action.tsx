'use client';
import React from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import CartIcon from '@icons-components/cart';
import { ShopActions } from '@store/shop/shop-actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import MinusIcon from '@icons-components/minus';
import PlusIcon from '@icons-components/plus';
import TrashIcon from '@icons-components/trash';

const ProductAction = ({ id, title, price, image }: { id: number, title: string, price: string, image: any }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.shop);
  const cartItem = cart.find(item => item.id.toString() === id.toString());

  const handleAddProduct = () => {
    dispatch(ShopActions.addToCart({
      id: id,
      name: title,
      price: price,
      image: image,
    }));
  };

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
  if (cartItem) {
    return (
      <Div className='rounded-full items-center gap-2 flex-row'>
        {cartItem.amount === 1 ? (
          <Button onClick={handleRemoveProduct} size='small' iconSize={'small'} color='danger' variant='text' className='!p-0' startAdornment={<TrashIcon />} />
        ) : (
          <Button onClick={handleDecreaseProduct} size='small' iconSize={'small'} color='danger' variant='text' className='!p-0' startAdornment={<MinusIcon className='w-4 h-4' />} />
        )}
        <Text typography={['xs', 'xs']}>{cartItem.amount}</Text>
        <Button onClick={handleIncreaseProduct} size='small' iconSize={'small'} color='success' variant='text' className='!p-0' startAdornment={<PlusIcon className='w-4 h-4' />} />
      </Div>
    );
  }

  return (
    <Button
      onClick={handleAddProduct}
      color={'secondary'}
      className={'group-hover:!text-white !text-black !bg-grey-50 group-hover:!bg-secondary-500 hover:!bg-secondary-700 transition-all duration-300'}
      startAdornment={<CartIcon />}
      shape={'square'}
      size={'large'}
      rounded={'full'}
    />
  );
};

export default ProductAction;
