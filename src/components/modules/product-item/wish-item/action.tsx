'use client';
import React from 'react';
import Button from '@elements/button';
import { useDispatch } from 'react-redux';
import HeartIcon from '@icons-components/heart';
import { AuthActions } from '@store/auth/auth-actions';

const AddToWishlistAction = ({ id }: { id: number }) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(AuthActions.addToWishList({
      productId: id,
    }));
  };

  return (
    <Button
      onClick={handleAddProduct}
      className={'border border-grey-50 group-hover:opacity-100 opacity-0 md:mr-4 mr-2 transition duration-300 bg-white hover:!bg-grey-300 active:!bg-grey-200'}
      startAdornment={<HeartIcon />}
      color={'frost'}
      shape={'square'}
      size={'medium'}
      rounded={'full'}
    />
  );
};

export default AddToWishlistAction;
