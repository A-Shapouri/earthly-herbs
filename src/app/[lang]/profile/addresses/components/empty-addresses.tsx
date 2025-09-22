import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch } from 'react-redux';
import { AddressActions } from '@store/address/address-actions';

const EmptyAddresses = () => {
  const dispatch = useDispatch();

  const handleAddAddress = () => {
    dispatch(AddressActions.setAddressModal({ open: true }));
  };

  return (
    <Div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <Div className="mb-6">
        <Div className="w-16 h-16 mx-auto mb-4 bg-grey-100 rounded-full flex items-center justify-center">
          <Text typography={['xl', 'xl']} color="grey.400">📍</Text>
        </Div>
      </Div>

      <Text typography={['lg', 'lg']} type="medium" color="grey.700" className="mb-2">
        No addresses found
      </Text>

      <Text typography={['sm', 'sm']} color="grey.500" className="mb-6 max-w-md">
        You haven't added any addresses yet. Add your first address to make checkout faster and easier.
      </Text>

      <Button
        color="secondary"
        onClick={handleAddAddress}
        className="px-6 py-3 w-full"
      >
        Add Your First Address
      </Button>
    </Div>
  );
};

export default EmptyAddresses;
