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
import { useOptimisticCart } from '@hooks/use-optimistic-cart';

const ProductAction = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const { cart, addToCartLoading, deleteCartItemLoading, deleteCartItemId } = useSelector((state: RootState) => state.shop);
  const { userId } = useSelector((state: RootState) => state.auth);
  const cartItem = cart.find(item => item.productId.toString() === id.toString());

  const {
    displayQuantity,
    optimisticIncrease,
    optimisticDecrease,
    immediateDelete,
    isOptimistic,
  } = useOptimisticCart({ cartItem });

  const isDeleting = deleteCartItemLoading && deleteCartItemId === cartItem?.id;

  const handleAddProduct = () => {
    dispatch(ShopActions.addToCart({
      productId: id.toString(),
      customerId: userId,
      quantity: '1',
    }));
  };

  const handleRemoveProduct = () => {
    immediateDelete();
  };

  const handleIncreaseProduct = () => {
    optimisticIncrease();
  };

  const handleDecreaseProduct = () => {
    optimisticDecrease();
  };
  if (cartItem && !isDeleting) {
    return (
      <Div className={`rounded-full items-center gap-2 flex-row transition-opacity duration-200 ${isDeleting ? 'opacity-50' : 'opacity-100'}`}>
        {displayQuantity === 1 ? (
          <Button
            onClick={handleRemoveProduct}
            disabled={isDeleting}
            size='small'
            iconSize={'small'}
            color='danger'
            variant='text'
            className='!p-0'
            startAdornment={<TrashIcon />}
          />
        ) : (
          <Button
            onClick={handleDecreaseProduct}
            disabled={isDeleting}
            size='small'
            iconSize={'small'}
            color='danger'
            variant='text'
            className='!p-0'
            startAdornment={<MinusIcon className='w-4 h-4' />}
          />
        )}
        <Div className="relative">
          <Text
            typography={['xs', 'xs']}
            className={`transition-all duration-200 ${isOptimistic ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}
          >
            {displayQuantity}
          </Text>
        </Div>
        <Button
          onClick={handleIncreaseProduct}
          disabled={isDeleting}
          size='small'
          iconSize={'small'}
          color='success'
          variant='text'
          className='!p-0'
          startAdornment={<PlusIcon className='w-4 h-4' />}
        />
      </Div>
    );
  }

  return (
    <Button
      onClick={handleAddProduct}
      loading={addToCartLoading}
      disabled={addToCartLoading}
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
