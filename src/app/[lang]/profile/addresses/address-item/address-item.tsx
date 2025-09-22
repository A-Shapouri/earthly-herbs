import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch, useSelector } from 'react-redux';
import { AddressItemProps } from './address-item.props';
import { AddressActions } from '@store/address/address-actions';
import classNames from '@utils/helpers/class-names';
import { RootState } from '@store/root-reducer';
import TrashIcon from '@icons-components/trash';
import EyeIcon from '@icons-components/eye';

const AddressItem = ({ address, shipping = true, inList = false }: AddressItemProps) => {
  const dispatch = useDispatch();
  const { shippingAddress, billingAddress, editAddressItemLoading, deleteAddressLoading, deleteAddressId, editAddressId } = useSelector((state: RootState) => state.address);
  const isSelected = inList && ((shipping && address.id === shippingAddress.id) || (!shipping && address.id === billingAddress.id));
  const handleDeleteAddress = () => {
    dispatch(AddressActions.setDeleteAddressId({ id: address.id }));
  };

  const handleEditAddress = () => {
    dispatch(AddressActions.setEditAddressId({ id: address.id }));
  };
  return (
    <Div className={classNames('rounded-2xl justify-between border p-4 w-full md:gap-2 gap-1 items-center',
      isSelected ? 'border-primary-100' : 'border-grey-100'
    )}>
      <Div className={'flex-col md:gap-2 gap-1'}>
        <Text type={'normal'} color={'black'} typography={['sm', 'sm']}>{`${address.firstname} ${address.lastname}`}</Text>
        <Text type={'normal'} color={'grey.700'} typography={['xs', 'xs']}>{address.address1}</Text>
      </Div>
      <Div className={'gap-2'}>
        <Button onClick={handleEditAddress} shape='square' rounded='medium' color={'primary'} startAdornment={<EyeIcon />} loading={editAddressItemLoading && address.id === editAddressId} disabled={editAddressItemLoading && address.id === editAddressId} />
        <Button onClick={handleDeleteAddress} shape='square' rounded='medium' color={'danger'} startAdornment={<TrashIcon />} loading={deleteAddressLoading && address.id === deleteAddressId} disabled={deleteAddressLoading && address.id === deleteAddressId} />
      </Div>
    </Div>
  );
};

export default AddressItem;
