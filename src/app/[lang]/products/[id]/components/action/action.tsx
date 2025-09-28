'use client';
import React from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import { ShopActions } from '@store/shop/shop-actions';
import { useRouter } from 'next-nprogress-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import TrashIcon from '@icons-components/trash';
import MinusIcon from '@icons-components/minus';
import PlusIcon from '@icons-components/plus';
import { useOptimisticCart } from '@hooks/use-optimistic-cart';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';

const Action = ({ id }: { id: number }) => {
  console.log(id)
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, addToCartLoading, deleteCartItemLoading, deleteCartItemId } = useSelector((state: RootState) => state.shop);
  const { userId } = useSelector((state: RootState) => state.auth);

  // Find the cart item based on product ID
  const cartItem = cart.find((item: any) => item.productId.toString() === id.toString());

  // Use optimistic cart hook for smooth UX
  const {
    displayQuantity,
    optimisticIncrease,
    optimisticDecrease,
    immediateDelete,
    isOptimistic,
  } = useOptimisticCart({ cartItem });

  // Check if this specific item is being deleted
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

  const handleBuyNow = () => {
    router.push(getParseRoute({
      pathname: routes['route.products.cart'],
      query: {
        lang: 'en',
      },
    }));
  };
  return (
    <Div className={'md:mt-20 w-full'}>
      {cartItem && !isDeleting ? (
        <Div className={'w-full gap-4'}>
          <Div
            className='rounded-full items-center md:gap-5 gap-3 border border-control md:px-6 px-4 md:h-16 h-12 self-center'>
            {displayQuantity === 1 ? (
              <Button
                onClick={handleRemoveProduct}
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
                size='small'
                iconSize={'small'}
                color='danger'
                variant='text'
                className='!p-0'
                startAdornment={<MinusIcon />}
              />
            )}
            <Div className={`relative transition-all duration-200 ${isOptimistic ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
              <Text
                typography={['xs', 'md']}
                className="whitespace-nowrap"
              >
                {displayQuantity}
              </Text>
            </Div>
            <Button
              onClick={handleIncreaseProduct}
              size='small'
              iconSize={'small'}
              color='primary'
              variant='text'
              className='!p-0'
              startAdornment={<PlusIcon />}
            />
          </Div>
          <Button onClick={handleBuyNow} className='w-full md:!h-16 !h-12' color='secondary' size='large'>
            Buy Now
          </Button>
        </Div>
      ) : (
        <Button
          onClick={handleAddProduct}
          loading={addToCartLoading}
          disabled={addToCartLoading}
          className='w-full md:!h-16 !h-14'
          color='secondary'
          size='large'
        >
          Add to Cart
        </Button>
      )}
    </Div>
  );
};

export default Action;
