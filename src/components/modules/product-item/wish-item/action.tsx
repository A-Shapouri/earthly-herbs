'use client';
import React from 'react';
import Button from '@elements/button';
import { useDispatch, useSelector } from 'react-redux';
import HeartIcon from '@icons-components/heart';
import { AuthActions } from '@store/auth/auth-actions';
import { RootState } from '@store/root-reducer';
import classNames from '@utils/helpers/class-names';

const AddToWishlistAction = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const { wishList, addToWishListLoading, removeFromWishListLoading, wishListLoading } = useSelector((state: RootState) => state.auth);
  const wishListItem = wishList?.find(item => item.productId.toString() === id.toString());
  const handleAddProduct = () => {
    if (wishListItem?.id) {
      dispatch(AuthActions.removeFromWishList({ productId: wishListItem.id }));
    } else {
      dispatch(AuthActions.addToWishList({
        productId: id,
      }));
    }
  };

  return (
    <Button
      onClick={handleAddProduct}
      className={classNames('border border-grey-50 md:mr-4 mr-2 transition duration-300 bg-white hover:!bg-grey-300 active:!bg-grey-200', wishListItem?.id ? '!bg-frost-500 !border-danger !text-danger' : 'group-hover:opacity-100 opacity-0')}
      startAdornment={<HeartIcon />}
      color={'frost'}
      shape={'square'}
      size={'medium'}
      rounded={'full'}
      loading={addToWishListLoading || removeFromWishListLoading || wishListLoading}
      disabled={addToWishListLoading || removeFromWishListLoading || wishListLoading}
    />
  );
};

export default AddToWishlistAction;
