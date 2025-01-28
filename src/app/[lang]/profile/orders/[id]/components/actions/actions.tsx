import React from 'react';
import Div from '@elements/div'
import Text from '@elements/text'
import DeliveredIcon from '@icons-components/delivered';
import classNames from "@utils/helpers/class-names";
import Divider from "@elements/divider";
import Button from "@elements/button";

const Actions = () => {


  return (
    <Div className={'w-full items-center flex-col gap-4'}>
      <Button className={'w-full !h-[60px]'} color={'secondary'} size={'large'}>
        Track Order
      </Button>
     <Div className={'gap-3 w-full'}>
       <Button color={'flurries'} size={'large'} className={'w-full !h-[60px]'}>
         Cancel Order
       </Button>
       <Button className={'w-full !h-[60px] !bg-black'} size={'large'}>
         Share Comment
       </Button>
     </Div>
    </Div>
  )
}

export default Actions;
