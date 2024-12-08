import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import TextField from '@elements/text-field';
import {useDispatch, useSelector} from "react-redux";
import {ShopActions} from "@store/shop/shop-actions";
import {RootState} from "@store/root-reducer";

const AddAddressModal = ({isShow, closeModal}: { isShow: boolean, closeModal: () => void }) => {
  const dispatch = useDispatch()
  const {addresses} = useSelector((state: RootState) => state.address);

  return (
    <Modal open={isShow} onClose={closeModal}>
      <Div className={`relative w-1/2 bg-white z-40 rounded-3xl p-6 flex flex-col justify-center items-center self-center gap-10`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['base', 'base']} type={'normal'} color={'black'}>New Address</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon/>} variant={'text'} color='primary' className={'!p-0 !text-black'}/>
        </Div>
        <Div className={'grid grid-cols-2 gap-x-4 gap-y-5 w-full'}>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>First Name</Text>
            <TextField placeholder={'First Name'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Last Name</Text>
            <TextField placeholder={'Last Name'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Address</Text>
            <TextField placeholder={'Address'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Apartment, suite, etc. (Optional)</Text>
            <TextField placeholder={'Apartment, suite, etc. (Optional)'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Country/Region</Text>
            <TextField placeholder={'Country/Region'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>City</Text>
            <TextField placeholder={'City'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Province</Text>
            <TextField placeholder={'Province'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Postal Code</Text>
            <TextField placeholder={'Postal Code'} className={'w-full'} />
          </Div>
          <Div className={'flex-col gap-1 items-start col-span-2'}>
            <Text color={'black'} type={'medium'} typography={['base', 'base']}>Phone (optional)</Text>
            <TextField placeholder={'Phone (optional)'} className={'w-full'} />
          </Div>
        </Div>
        <Button size={'large'} color={'secondary'} className={'w-full'}>New Address</Button>
      </Div>
    </Modal>
  );
};

export default AddAddressModal;
