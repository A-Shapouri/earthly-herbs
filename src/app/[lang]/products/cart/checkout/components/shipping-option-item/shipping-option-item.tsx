import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useDispatch, useSelector } from 'react-redux';
import { ShippingOptionItemProps } from './shipping-option-item.props';
import classNames from '@utils/helpers/class-names';
import { RootState } from '@store/root-reducer';
import { ShopActions } from '@store/shop/shop-actions';

const ShippingOptionItem = ({ option, selectable = false, inList = false }: ShippingOptionItemProps) => {
  const dispatch = useDispatch();
  const { shippingOption, shippingCouriersList } = useSelector((state: RootState) => state.shop);
  const isSelected = inList && (option.id === shippingOption.id);
  const handleOnChange = () => {
    dispatch(ShopActions.setShippingOptionListModal({ open: true }));
  };
  console.log(shippingCouriersList);
  const handleOnSelect = () => {
    dispatch(ShopActions.setShippingOption({ option: option }));
  };
  return (
    <Div className={classNames('rounded-3xl justify-between border p-4 w-full gap-2 items-center',
      isSelected ? 'border-primary-100' : 'border-grey-100'
    )}>
      <Div className={'flex-col gap-2'}>
        <Text type={'normal'} color={'black'} typography={['md', 'md']}>{shippingCouriersList.find(item => item.id === option?.id)?.shippingCourierCode}</Text>
        <Text type={'normal'} color={'grey.700'} typography={['base', 'base']}>{shippingCouriersList.find(item => item.id === option?.id)?.shippingCourierName}</Text>
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

export default ShippingOptionItem;
