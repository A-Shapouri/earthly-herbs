import React from 'react';
import Modal from '@elements/modal';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import CrossIcon from '@icons-components/cross';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import ShippingOptionItem from "../shipping-option-item";

const ShippingOptionListModal = ({ isShow, closeModal }: { isShow: boolean, closeModal: () => void }) => {
  const { shippingOptionList } = useSelector((state: RootState) => state.shop);

  return (
    <Modal className={'flex-col-reverse md:flex-col !justify-start md:!justify-center'} open={isShow} onClose={closeModal}>
      <Div className={`relative max-h-dvh overflow-auto w-full md:w-1/2 bg-white z-40 md:rounded-3xl md:p-6 p-5 flex flex-col justify-center items-center self-center md:gap-10 gap-4`}>
        <Div className={'w-full justify-between items-center !text-black'}>
          <Text typography={['lg', 'base']} type={'normal'} color={'black'}>Shipping Options</Text>
          <Button onClick={closeModal} startAdornment={<CrossIcon />} variant={'text'} color='primary' className={'!p-0 !text-black'} />
        </Div>
        <Div className={'grid grid-cols-1 md:gap-y-5 gap-y-4 w-full'}>
          {shippingOptionList && shippingOptionList.length > 0 ? shippingOptionList.map((option: any) => (
            <ShippingOptionItem inList={true} selectable={true} option={option} />
          )) : null}
        </Div>
      </Div>
    </Modal>
  );
};

export default ShippingOptionListModal;
