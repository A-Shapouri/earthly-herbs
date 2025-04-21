import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import TextField from '@elements/text-field';
import {useDispatch, useSelector} from "react-redux";
import {ShopActions} from "@store/shop/shop-actions";
import {RootState} from "@store/root-reducer";

const CouponModal = ({isShow, closeModal}: { isShow: boolean, closeModal: () => void }) => {
  const dispatch = useDispatch()
  const {couponValue} = useSelector((state: RootState) => state.shop);

  const handleCouponValue = (e: any) => {
      dispatch(ShopActions.setCouponValue({value: e.target.value}))
  }

  const submitCouponValue = () => {
    dispatch(ShopActions.validateCouponCode())
  }

  return (
    <Modal className={'flex-col-reverse md:flex-col !justify-start md:!justify-center'} open={isShow} onClose={closeModal}>
      <Div className={`relative w-[480px] bg-white z-40 md:rounded-3xl md:p-6 p-5 flex flex-col justify-center items-center md:self-center self-end gap-6`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['lg', 'base']} type={'normal'} color={'black'}>Add Coupon</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon/>} variant={'text'} color='primary' className={'!p-0 !text-black'}/>
        </Div>
        <Div className='w-full gap-2 justify-start items-start flex-col'>
          <Text typography={['lg', 'base']} type={'medium'} color={'black'}>Coupon Number</Text>
          <TextField value={couponValue} onChange={handleCouponValue} placeholder='s12W1q2#!x4ftg' className='w-full'/>
        </Div>
        <Button onClick={submitCouponValue} disabled={!couponValue && couponValue.length < 3} className='w-full' color='secondary' size='medium'>
          Apply
        </Button>
      </Div>
    </Modal>
  );
};

export default CouponModal;
