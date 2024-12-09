import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch } from 'react-redux';
import {AddressItemProps} from './address-item.props'
import {AddressActions} from "@store/address/address-actions";
const AddressItem = ({address, selectable = false, shipping = true}: AddressItemProps) => {
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(AddressActions.setAddressListModal({open: true}));
  }

  const handleOnSelect = () => {
    if(shipping) {
    dispatch(AddressActions.setShippingAddress({address: address}));
    } else {
      dispatch(AddressActions.setBillingAddress({address: address}));
    }
  }
  return (
    <Div className={'rounded-3xl justify-between border border-grey-100 p-4 w-full gap-2 items-center'}>
      <Div className={'flex-col gap-2'}>
        <Text type={'normal'} color={'black'} typography={['md', 'md']}>{`${address.firstName} ${address.lastName}`}</Text>
        <Text type={'normal'} color={'grey.700'} typography={['base', 'base']}>{address.address}</Text>
      </Div>
      {selectable ? (
        <Button onClick={handleOnSelect} color={'frost'}>
          Select
        </Button>
      ) : (
        <Button onClick={handleOnChange} color={'flurries'}>
          Change
        </Button>
      )}
    </Div>
  );
};

export default AddressItem;
