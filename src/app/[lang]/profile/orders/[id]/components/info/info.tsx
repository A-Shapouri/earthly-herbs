import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Divider from '@elements/divider';

const Info = () => {
  return (
    <Div className={'w-full items-center flex-col'}>
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['xxs', 'xxs']} type={'medium'}>Order</Text>
        <Text typography={['xxs', 'xxs']} type={'medium'}>231235456446</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['xxs', 'xxs']} type={'medium'}>Order Date</Text>
        <Text typography={['xxs', 'xxs']} type={'medium'}>21 Jun 2025</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['xxs', 'xxs']} type={'medium'}>Delivery Type</Text>
        <Text typography={['xxs', 'xxs']} type={'medium'}>Fedex</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['xxs', 'xxs']} type={'medium'}>Delivery Date</Text>
        <Text typography={['xxs', 'xxs']} type={'medium'}>24 - 25 Jun 2025</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['xxs', 'xxs']} type={'medium'}>Price</Text>
        <Text typography={['xxs', 'xxs']} type={'medium'}>$14.99</Text>
      </Div>
    </Div>
  );
};

export default Info;
