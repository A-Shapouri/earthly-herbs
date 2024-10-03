import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import { ServiceItemProps } from './service-item.props';
import classNames from '@utils/helpers/class-names';

const ServiceItem = ({ children, subTitle, title, active }: ServiceItemProps) => {
  return (
    <Div className={'gap-4 items-center group ease-linear transition-all duration-300'}>
      <Div className={classNames(
        'group-hover:scale-125 ease-linear group-hover:bg-black group-hover:text-white transition-all duration-300 justify-center items-center md:h-[72px] md:w-[72px] h-12 w-14 md:p-0 p-3 rounded-lg md:rounded-2xl',
        active ? 'bg-black text-white scale-125' : 'bg-white text-brown scale-100'
      )}>
        <Div className={'w-8 md:w-10 h-6 md:h-8 min-w-8 md:min-h-8 min-h-6 md:min-w-10 max-w-8 md:max-w-10 md:max-h-8 max-h-6 justify-center items-center self-center'}>
          {children}
        </Div>
      </Div>
      <Div className={classNames(
        'flex-col gap-2 ease-linear group-hover:translate-x-12 group-hover:scale-125 transition-all duration-300',
        active ? 'translate-x-12 scale-125' : 'translate-x-0 scale-100'
      )}>
        <Text className={'whitespace-nowrap'} type={'bold'} typography={['sm', 'sm']}>{title}</Text>
        <Text className={'whitespace-nowrap'} color={'grey.500'} type={'medium'} typography={['xs', 'xs']}>{subTitle}</Text>
      </Div>

    </Div>
  );
};

export default ServiceItem;
