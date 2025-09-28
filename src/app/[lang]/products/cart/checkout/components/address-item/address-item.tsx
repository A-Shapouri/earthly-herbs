import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch, useSelector } from 'react-redux';
import { AddressItemProps } from './address-item.props';
import { AddressActions } from '@store/address/address-actions';
import classNames from '@utils/helpers/class-names';
import { RootState } from '@store/root-reducer';
const AddressItem = ({ address, selectable = false, shipping = true, inList = false }: AddressItemProps) => {
  const dispatch = useDispatch();
  const { shippingAddress, billingAddress } = useSelector((state: RootState) => state.address);
  const isSelected = inList && ((shipping && address.id === shippingAddress.id) || (!shipping && address.id === billingAddress.id));
  const handleOnChange = () => {
    dispatch(AddressActions.setAddressListModal({ open: true, addressModalType: shipping ? 'Shipping' : 'Billing' }));
  };

  const handleOnSelect = () => {
    if (shipping) {
      dispatch(AddressActions.setShippingAddress({ address: address }));
    } else {
      dispatch(AddressActions.setBillingAddress({ address: address }));
    }
  };
  return (
    <Div className={classNames('rounded-3xl justify-between border p-4 w-full md:gap-2 gap-1 items-center',
      isSelected ? 'border-primary-100' : 'border-grey-100'
    )}>
      <Div className={'flex-col md:gap-2 gap-1'}>
        <Text type={'normal'} color={'black'} typography={['md', 'md']}>{`${address.firstname} ${address.lastname}`}</Text>
        <Text type={'normal'} color={'grey.700'} typography={['base', 'base']}>{address.address1}</Text>
      </Div>
      {selectable && !isSelected ? (
        <Button onClick={handleOnSelect} color={'frost'}>
          Select
        </Button>
      ) : !selectable && !isSelected ? (
        <Button onClick={handleOnChange} color={'flurries'}>
          Change
        </Button>
      ) : null}
    </Div>
  );
};

export default AddressItem;
