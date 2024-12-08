import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import TextField from '@elements/text-field';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { AddressActions } from '@store/address/address-actions';

const AddAddressModal = ({ isShow, closeModal }: { isShow: boolean, closeModal: () => void }) => {
  const dispatch = useDispatch();
  const { newAddress, newAddressError, newAddressIsValid } = useSelector((state: RootState) => state.address);

  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
    dispatch(AddressActions.setNewAddress({ id: id, value: value }));
  };

  const handleNewAddress = () => {
    dispatch(AddressActions.validateNewAddress());
  };
  console.log(newAddressError.firstName)
  return (
    <Modal open={isShow} onClose={closeModal}>
      <Div className={`relative w-1/2 bg-white z-40 rounded-3xl p-6 flex flex-col justify-center items-center self-center gap-10`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['base', 'base']} type={'normal'} color={'black'}>New Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-2 gap-x-4 gap-y-5 w-full'}>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>First Name</Text>
            <TextField
              value={newAddress.firstName}
              onChange={(e) => handleChangeValue({ id: 'firstName', value: e.target.value })}
              placeholder={'First Name'}
              error={newAddressError.firstName}
              helperText={newAddressError.firstName ? 'First name is required' : undefined}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Last Name</Text>
            <TextField
              value={newAddress.lastName}
              onChange={(e) => handleChangeValue({ id: 'lastName', value: e.target.value })}
              error={newAddressError.lastName}
              helperText={newAddressError.lastName ? 'Last name is required' : undefined}
              placeholder={'Last Name'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Address</Text>
            <TextField
              value={newAddress.address}
              onChange={(e) => handleChangeValue({ id: 'address', value: e.target.value })}
              error={newAddressError.address}
              helperText={newAddressError.address ? 'Address text is required' : undefined}
              placeholder={'Address'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Apartment, suite, etc. (Optional)</Text>
            <TextField
              value={newAddress.extra}
              onChange={(e) => handleChangeValue({ id: 'extra', value: e.target.value })}
              placeholder={'Apartment, suite, etc. (Optional)'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Country/Region</Text>
            <TextField
              value={newAddress.country}
              onChange={(e) => handleChangeValue({ id: 'country', value: e.target.value })}
              error={newAddressError.country}
              helperText={newAddressError.country ? 'Country is required' : undefined}
              placeholder={'Country/Region'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>City</Text>
            <TextField
              value={newAddress.city}
              onChange={(e) => handleChangeValue({ id: 'city', value: e.target.value })}
              error={newAddressError.city}
              helperText={newAddressError.city ? 'City is required' : undefined}
              placeholder={'City'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Province</Text>
            <TextField
              value={newAddress.province}
              onChange={(e) => handleChangeValue({ id: 'province', value: e.target.value })}
              error={newAddressError.province}
              helperText={newAddressError.province ? 'Province is required' : undefined}
              placeholder={'Province'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Postal Code</Text>
            <TextField
              value={newAddress.postalCode}
              onChange={(e) => handleChangeValue({ id: 'postalCode', value: e.target.value })}
              error={newAddressError.postalCode}
              helperText={newAddressError.postalCode ? 'postalCode is required' : undefined}
              placeholder={'Postal Code'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Phone (optional)</Text>
            <TextField
              value={newAddress.phone}
              onChange={(e) => handleChangeValue({ id: 'phone', value: e.target.value })}
              placeholder={'Phone (optional)'}
              className={'w-full'} />
          </Div>
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

export default AddAddressModal;
