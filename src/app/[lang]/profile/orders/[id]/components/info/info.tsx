import React from 'react';
import Div from '@elements/div'
import Text from '@elements/text'
import DeliveredIcon from '@icons-components/delivered';
import classNames from "@utils/helpers/class-names";
import Divider from "@elements/divider";

const Info = () => {


  return (
    <Div className={'w-full items-center flex-col'}>
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Order</Text>
        <Text typography={['sm', 'sm']} type={'medium'}>231235456446</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Order Date</Text>
        <Text typography={['sm', 'sm']} type={'medium'}>21 Jun 2025</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Delivery Type</Text>
        <Text typography={['sm', 'sm']} type={'medium'}>Fedex</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Delivery Date</Text>
        <Text typography={['sm', 'sm']} type={'medium'}>24 - 25 Jun 2025</Text>
      </Div>
      <Divider />
      <Div className={'w-full justify-between items-center px-2 py-3'}>
        <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Price</Text>
        <Text typography={['sm', 'sm']} type={'medium'}>$14.99</Text>
      </Div>
    </Div>
  )
}

export default Info;
