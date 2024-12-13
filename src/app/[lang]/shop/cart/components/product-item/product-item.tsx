import React, {useRef, useEffect} from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Image from 'next/image';
import MinusIcon from '@icons-components/minus';
import PlusIcon from '@icons-components/plus';
import TrashIcon from '@icons-components/trash';
import {ShopActions} from '@store/shop/shop-actions';
import {useDispatch} from 'react-redux';
import {ProductItemProps} from './prodcut-item.props'
import AnimatedNumber from '@modules/animated-number'

const ProductItem = ({image, name, price, id, amount, key}: ProductItemProps) => {
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

  // useEffect(() => {
  //   return () => controls.stop();
  // }, []);

  return (
    <Div
      className={'rounded-xl justify-between md:rounded-2xl border transition duration-300 shadow-sm md:shadow-md border-grey-50 group z-10 relative p-1'}>
      <Div className='gap-5 items-center'>
        <Div className={'rounded-xl md:rounded-t-2xl md:h-36 md:w-36 h-28 w-28 '}>
          <Image className={'rounded-xl md:rounded-t-2xl object-contain'} src={image} alt={name}/>
        </Div>
        <Div className={'flex-col self-center'}>
          <Text color={'grey.900'} type={'medium'} typography={['md', 'base']}>{name}</Text>
          <Text typography={['lg', 'md']}>${price}</Text>
        </Div>
      </Div>
      <Div
        className='rounded-full items-center md:gap-5 gap-3 border border-control md:px-6 px-4 md:h-16 h-12 self-center mr-3 md:mr-5'>
        {amount === 1 ? (
          <Button onClick={handleRemoveProduct} size='small' iconSize={'small'} color='danger' variant='text'
                  className='!p-0' startAdornment={<TrashIcon/>}/>
        ) : (
          <Button onClick={handleDecreaseProduct} size='small' iconSize={'small'} color='danger' variant='text'
                  className='!p-0' startAdornment={<MinusIcon/>}/>
        )}
        <AnimatedNumber amount={amount}/>
        <Button onClick={handleIncreaseProduct} size='small' iconSize={'small'} color='primary' variant='text'
                className='!p-0' startAdornment={<PlusIcon/>}/>
      </Div>
    </Div>
  );
};

export default ProductItem;
