import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import TextField from '@elements/text-field';

const CopuonModal = ({ isShow, closeModal }: { isShow: boolean, closeModal: () => void }) => {
  return (
    <Modal open={isShow} onClose={closeModal}>
      <Div className={`relative w-[480px] bg-white z-40 rounded-3xl p-6 flex flex-col justify-center items-center self-center gap-6`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['base', 'base']} type={'normal'} color={'black'}>Add Coupon</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className='w-full gap-2 justify-start items-start flex-col'>
          <Text typography={['base', 'base']} type={'medium'} color={'black'}>Coupon Number</Text>
          <TextField placeholder='s12W1q2#!x4ftg' className='w-full' />
        </Div>
        <Button className='w-full' color='secondary' size='medium'>
          Apply
        </Button>
      </Div>
    </Modal>
  );
};

export default CopuonModal;
