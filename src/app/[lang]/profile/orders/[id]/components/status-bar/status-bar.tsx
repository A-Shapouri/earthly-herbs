import React from 'react';
import Div from '@elements/div'
import Text from '@elements/text'
import DeliveredIcon from '@icons-components/delivered';
import classNames from "@utils/helpers/class-names";

const StatusBar = ({status} : {status: 'delivered' | 'canceled' | 'processing'}) => {


  return(
    <Div className={classNames(
      'w-full h-14 items-center gap-4 px-4 rounded-2xl',
      status === 'delivered' && 'bg-success-50',
      status === 'canceled' && 'bg-danger-50',
      status === 'processing' && 'bg-warning-50',
      )}>
      <Div className={'text-primary'}>
        <DeliveredIcon />
      </Div>
      <Text typography={['lg', 'lg']} type={'normal'}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
    </Div>
  )
}

export default StatusBar;
