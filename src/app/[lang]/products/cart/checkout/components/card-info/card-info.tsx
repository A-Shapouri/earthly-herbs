import React from 'react'
import Div from '@elements/div';
import Text from '@elements/text';
import TextField from "@elements/text-field";
import Bank3 from "@images-components/banks/bank-3";


const CardInfo = () => {
  return (
    <Div className={'w-full grid grid-cols-2 border border-grey-100 rounded-3xl p-4 gap-y-3 gap-x-4'}>
      <Div className={'w-full col-span-2 flex-col gap-2'}>
        <Text type={'medium'} color={'black'} typography={['base', 'base']}>Card Number</Text>
        <TextField endAdornmentClassName={'mr-4'} endAdornment={<Bank3/>} color={'control'} className={'w-full'} placeholder={'1234 1234 1234 1234'} />
      </Div>
      <Div className={'w-full flex-col gap-2'}>
        <Text type={'medium'} color={'black'} typography={['base', 'base']}>Expiration date</Text>
        <TextField color={'control'} className={'w-full'} placeholder={'MM / YY'} />
      </Div>
      <Div className={'w-full flex-col gap-2'}>
        <Text type={'medium'} color={'black'} typography={['base', 'base']}>CVV</Text>
        <TextField color={'control'} className={'w-full'} placeholder={'1234'} />
      </Div>
    </Div>
  );
}

export default CardInfo;


