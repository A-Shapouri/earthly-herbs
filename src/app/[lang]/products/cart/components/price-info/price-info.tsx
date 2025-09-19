'use client';
import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Divider from '@elements/divider';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import AnimatedNumber from '@modules/animated-number';

const PriceInfo = () => {
  const { totalPrice, currency } = useSelector((state: RootState) => state.shop);

  return (
    <Div className='flex-col border border-grey-100 rounded-3xl w-full'>
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Product Total</Text>
        <Div className={'justify-end md:mr-12 mr-8'}>
          <AnimatedNumber typography={['lg', 'lg']} color={'black'} price={true} amount={totalPrice || 0} />
        </Div>
      </Div>
      <Divider color='control' />
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Shipping</Text>
        <Text typography={['lg', 'lg']}>$Shipping Price</Text>
      </Div>
      <Divider color='control' />
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Total</Text>
        <Div className={'justify-end md:mr-[70px] mr-[52px]'}>
          <AnimatedNumber typography={['lg', 'lg']} color={'black'} price={true} currency={currency} amount={parseFloat((parseFloat(totalPrice) + parseFloat('14.99')).toFixed(2))} />
        </Div>
      </Div>
    </Div>
  );
};

export default PriceInfo;
