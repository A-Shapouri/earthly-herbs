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
  const { newAddress, newAddressError } = useSelector((state: RootState) => state.address);
  console.log(newAddress);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
    dispatch(AddressActions.setNewAddress({ id: id, value: value }));
  };

  const handleNewAddress = () => {
    dispatch(AddressActions.validateNewAddress());
  };
  return (
    <Modal className={'flex-col-reverse md:flex-col !justify-start md:!justify-center'} open={isShow} onClose={closeModal}>
      <Div className={`relative w-full md:w-1/2 bg-white z-40 md:rounded-3xl md:p-6 p-4 flex flex-col justify-center items-center self-center md:gap-10 gap-8`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['lg', 'base']} type={'normal'} color={'black'}>New Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-2 gap-x-4 md:gap-y-5 gap-y-3 w-full'}>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>First Name</Text>
            <TextField
              value={newAddress.firstname}
              onChange={(e) => handleChangeValue({ id: 'firstname', value: e.target.value })}
              placeholder={'First Name'}
              error={newAddressError.firstname}
              helperText={newAddressError.firstname ? 'First name is required' : undefined}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Last Name</Text>
            <TextField
              value={newAddress.lastname}
              onChange={(e) => handleChangeValue({ id: 'lastname', value: e.target.value })}
              error={newAddressError.lastname}
              helperText={newAddressError.lastname ? 'Last name is required' : undefined}
              placeholder={'Last Name'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Address</Text>
            <TextField
              value={newAddress.address1}
              onChange={(e) => handleChangeValue({ id: 'address1', value: e.target.value })}
              error={newAddressError.address1}
              helperText={newAddressError.address1 ? 'Address text is required' : undefined}
              placeholder={'Address'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Apartment, suite, etc. (Optional)</Text>
            <TextField
              value={newAddress.address2}
              onChange={(e) => handleChangeValue({ id: 'address2', value: e.target.value })}
              placeholder={'Apartment, suite, etc. (Optional)'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Country/Region</Text>
            <TextField
              value={newAddress.countryId}
              onChange={(e) => handleChangeValue({ id: 'countryId', value: e.target.value })}
              error={newAddressError.countryId}
              helperText={newAddressError.countryId ? 'Country is required' : undefined}
              placeholder={'Country/Region'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>City</Text>
            <TextField
              value={newAddress.city}
              onChange={(e) => handleChangeValue({ id: 'city', value: e.target.value })}
              error={newAddressError.city}
              helperText={newAddressError.city ? 'City is required' : undefined}
              placeholder={'City'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Province</Text>
            <TextField
              value={newAddress.zoneId}
              onChange={(e) => handleChangeValue({ id: 'zoneId', value: e.target.value })}
              error={newAddressError.zoneId}
              helperText={newAddressError.zoneId ? 'Province is required' : undefined}
              placeholder={'Province'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Postal Code</Text>
            <TextField
              value={newAddress.postcode}
              onChange={(e) => handleChangeValue({ id: 'postcode', value: e.target.value })}
              error={newAddressError.postcode}
              helperText={newAddressError.postcode ? 'postcode is required' : undefined}
              placeholder={'Postal Code'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Company (optional)</Text>
            <TextField
              value={newAddress.company}
              onChange={(e) => handleChangeValue({ id: 'company', value: e.target.value })}
              placeholder={'Company (optional)'}
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
