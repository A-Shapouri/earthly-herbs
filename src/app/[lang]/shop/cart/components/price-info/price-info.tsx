'use client'
import React from 'react'
import Div from "@elements/div";
import Text from "@elements/text";
import Divider from "@elements/divider";
import {useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";


const PriceInfo = () => {
  const { totalPrice, currency } = useSelector((state: RootState) => state.shop);


  return(
    <Div className='flex-col border border-grey-100 rounded-3xl w-full'>
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Product Total</Text>
        <Text typography={['lg', 'lg']}>${totalPrice}</Text>
      </Div>
      <Divider color='control' />
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Shipping</Text>
        <Text typography={['lg', 'lg']}>$14.99</Text>
      </Div>
      <Divider color='control' />
      <Div className='md:h-24 h-16 items-center md:px-6 px-4 justify-between'>
        <Text color='grey.800' type='medium' typography={['md', 'md']}>Total</Text>
        <Text typography={['lg', 'lg']}>${(parseFloat(totalPrice) + parseFloat('14.99')).toFixed(2)} {currency}</Text>
      </Div>
    </Div>
  )
}

export default PriceInfo
