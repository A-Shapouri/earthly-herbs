import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { AddressActions } from '@store/address/address-actions';
import AddressItem from "../address-item";

const AddressListModal = ({ isShow, closeModal, type }: { isShow: boolean, closeModal: () => void, type: 'Shipping'| 'Billing' }) => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state: RootState) => state.address);

  const handleNewAddress = () => {
    dispatch(AddressActions.setAddressModal({ open: true }));
    closeModal();
  };
  return (
    <Modal className={'flex-col-reverse md:flex-col !justify-start md:!justify-center'} open={isShow} onClose={closeModal}>
      <Div className={`relative md:w-1/2 w-full bg-white z-40 md:rounded-3xl md:p-6 p-5 flex-col justify-center items-center md:self-center self-end md:gap-10 gap-4`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['lg', 'base']} type={'normal'} color={'black'}>{type} Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-1 gap-x-4 gap-y-5 w-full'}>
          {addresses && addresses.length > 0 ? addresses.map((address: any) => (
            <AddressItem inList={true} shipping={type === 'Shipping'} selectable={true} address={address} />
          )) : null}
        </Div>
        <Button
          onClick={handleNewAddress}
          size={'large'}
          color={'secondary'}
          className={'w-full'}>
          New Address
        </Button>
      </Div>
    </Modal>
  );
};

export default AddressListModal;
