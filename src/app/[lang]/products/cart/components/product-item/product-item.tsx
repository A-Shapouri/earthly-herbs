import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Image from 'next/image';
import MinusIcon from '@icons-components/minus';
import PlusIcon from '@icons-components/plus';
import TrashIcon from '@icons-components/trash';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ProductItemProps } from './prodcut-item.props';
import { useOptimisticCart } from '@hooks/use-optimistic-cart';
import ImageTemp from '../../../../../../../public/images/temp/products/turmeric-tonic-organic/turmeric-tonic-sachet-steeped-x21_bc2a3df9-5b6f-4a24-b2c7-7e043bd849c0-xa_550x.webp';

const ProductItem = ({ name, price, id, image }: ProductItemProps) => {
  const { cart, deleteCartItemLoading, deleteCartItemId } = useSelector((state: RootState) => state.shop);

  // Find the cart item based on product ID
  const cartItem = cart.find(item => item.productId.toString() === id.toString());
  const {
    displayQuantity,
    optimisticIncrease,
    optimisticDecrease,
    immediateDelete,
    isOptimistic,
  } = useOptimisticCart({ cartItem });

  const isDeleting = deleteCartItemLoading && deleteCartItemId === cartItem?.id;

  const handleRemoveProduct = () => {
    immediateDelete();
  };

  const handleIncreaseProduct = () => {
    optimisticIncrease();
  };

  const handleDecreaseProduct = () => {
    optimisticDecrease();
  };

  // Don't render if item is being deleted
  if (isDeleting) {
    return null;
  }

  return (
    <Div
      className={'rounded-xl justify-between md:rounded-2xl border transition duration-300 shadow-sm md:shadow-md border-grey-50 group z-10 relative p-1 gap-2'}>
      <Div className='gap-5 items-center'>
        <Div className={'rounded-xl md:rounded-t-2xl md:h-36 md:w-36 h-28 w-28 min-h-28 min-w-28 '}>
          <Image objectFit={'contain'} className={'rounded-xl md:rounded-t-2xl'} src={image ? `http://74.208.77.41:8080/uploads${image}` : ImageTemp} alt={name} />
        </Div>
        <Div className={'flex-col self-center'}>
          <Text color={'grey.900'} className={'text-ellipsis'} type={'medium'} typography={['md', 'base']}>{name || 'name'}</Text>
          <Text typography={['lg', 'md']}>${price || 'price'}</Text>
        </Div>
      </Div>
      <Div
        className={`rounded-full items-center md:gap-5 gap-3 border border-control md:px-6 px-4 md:h-16 h-12 self-center mr-3 md:mr-5`}>
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
            className={`transition-all duration-200`}
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
    </Div>
  );
};

export default ProductItem;
