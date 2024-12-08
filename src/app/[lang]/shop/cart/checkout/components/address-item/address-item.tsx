import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch } from 'react-redux';
import {AddressItemProps} from './address-item.props'
const AddressItem = ({address, name}: AddressItemProps) => {
  const dispatch = useDispatch();
  return (
    <Div className={'rounded-3xl justify-between border border-grey-50 p-4 w-full gap-2'}>
      <Div className={'flex-col gap-2'}>
        <Text type={'normal'} color={'black'} typography={['md', 'md']}>{name}</Text>
        <Text type={'normal'} color={'grey.700'} typography={['base', 'base']}>{address}</Text>
      </Div>
      <Button color={'flurries'}>
        Change
      </Button>
    </Div>
  );
};

export default AddressItem;
