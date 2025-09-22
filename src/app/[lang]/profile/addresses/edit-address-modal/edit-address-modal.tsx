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

const EditAddressModal = ({ isShow, closeModal }: { isShow: boolean, closeModal: () => void }) => {
  const dispatch = useDispatch();
  const { editAddress, editAddressError } = useSelector((state: RootState) => state.address);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
    dispatch(AddressActions.setEditAddressValues({ id: id, value: value }));
  };

  const handleEditAddress = () => {
    dispatch(AddressActions.validateEditAddress());
  };
  return (
    <Modal className={'flex-col-reverse md:flex-col !justify-start md:!justify-center'} open={isShow} onClose={closeModal}>
      <Div className={`relative w-full md:w-1/2 bg-white z-40 md:rounded-3xl md:p-6 p-4 flex flex-col justify-center items-center self-center md:gap-10 gap-8`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['lg', 'base']} type={'normal'} color={'black'}>Edit Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-2 gap-x-4 md:gap-y-5 gap-y-3 w-full'}>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>First Name</Text>
            <TextField
              value={editAddress?.firstname}
              onChange={(e) => handleChangeValue({ id: 'firstname', value: e.target.value })}
              placeholder={'First Name'}
              error={editAddressError.firstname}
              helperText={editAddressError.firstname ? 'First name is required' : undefined}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Last Name</Text>
            <TextField
              value={editAddress?.lastname}
              onChange={(e) => handleChangeValue({ id: 'lastname', value: e.target.value })}
              error={editAddressError.lastname}
              helperText={editAddressError.lastname ? 'Last name is required' : undefined}
              placeholder={'Last Name'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Address</Text>
            <TextField
              value={editAddress?.address1}
              onChange={(e) => handleChangeValue({ id: 'address1', value: e.target.value })}
              error={editAddressError.address1}
              helperText={editAddressError.address1 ? 'Address text is required' : undefined}
              placeholder={'Address'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Apartment, suite, etc. (Optional)</Text>
            <TextField
              value={editAddress?.address2}
              onChange={(e) => handleChangeValue({ id: 'address2', value: e.target.value })}
              placeholder={'Apartment, suite, etc. (Optional)'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Country/Region</Text>
            <TextField
              value={editAddress?.countryId}
              onChange={(e) => handleChangeValue({ id: 'countryId', value: e.target.value })}
              error={editAddressError.countryId}
              helperText={editAddressError.countryId ? 'Country is required' : undefined}
              placeholder={'Country/Region'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>City</Text>
            <TextField
              value={editAddress?.city}
              onChange={(e) => handleChangeValue({ id: 'city', value: e.target.value })}
              error={editAddressError.city}
              helperText={editAddressError.city ? 'City is required' : undefined}
              placeholder={'City'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Province</Text>
            <TextField
              value={editAddress?.zoneId}
              onChange={(e) => handleChangeValue({ id: 'zoneId', value: e.target.value })}
              error={editAddressError.zoneId}
              helperText={editAddressError.zoneId ? 'Province is required' : undefined}
              placeholder={'Province'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Postal Code</Text>
            <TextField
              value={editAddress?.postcode}
              onChange={(e) => handleChangeValue({ id: 'postcode', value: e.target.value })}
              error={editAddressError.postcode}
              helperText={editAddressError.postcode ? 'postcode is required' : undefined}
              placeholder={'Postal Code'}
              className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-3 md:gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Company (optional)</Text>
            <TextField
              value={editAddress?.company}
              onChange={(e) => handleChangeValue({ id: 'company', value: e.target.value })}
              placeholder={'Company (optional)'}
              className={'w-full'} />
          </Div>
        </Div>
        <Button
          onClick={handleEditAddress}
          size={'large'}
          color={'secondary'}
          className={'w-full'}>
          Edit Address
        </Button>
      </Div>
    </Modal>
  );
};

export default EditAddressModal;
