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

const AddressListModal = ({ isShow, closeModal }: { isShow: boolean, closeModal: () => void }) => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state: RootState) => state.address);

  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
    dispatch(AddressActions.setNewAddress({ id: id, value: value }));
  };

  const handleNewAddress = () => {
    dispatch(AddressActions.setAddressModal({ open: true }));
    closeModal();
  };
  return (
    <Modal open={isShow} onClose={closeModal}>
      <Div className={`relative w-1/2 bg-white z-40 rounded-3xl p-6 flex flex-col justify-center items-center self-center gap-10`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['base', 'base']} type={'normal'} color={'black'}>Shipping Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-1 gap-x-4 gap-y-5 w-full'}>
          {addresses && addresses.length > 0 ? addresses.map((address: any) => (
            <AddressItem selectable={true} address={address} />
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
