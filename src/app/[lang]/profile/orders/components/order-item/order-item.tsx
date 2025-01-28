import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Link from 'next/link';
import DeliveredIcon from '@icons-components/delivered';
import ArrowRightIcon from '@icons-components/arrow-right';
import Image from 'next/image';

const OrderItem = ({ route, type, price, date, images } : {route: string, type: string, price: number, date: string, images: Array<any>}) => {
  return (
    <Link className={'flex flex-col w-full gap-8 p-4 border border-control-300 rounded-xl'} href={route}>
      <Div className={'w-fill justify-between items-center'}>
        <Div className={'items-center gap-4'}>
          <Div className={'text-primary'}>
            <DeliveredIcon />
          </Div>
          <Div className={'flex-col'}>
            <Text typography={['lg', 'lg']} type={'normal'}>{type}</Text>
            <Text color={'grey.700'} typography={['md', 'md']} type={'medium'}>{date}</Text>
          </Div>
        </Div>
        <Div className={'items-center gap-4'}>
          <Text typography={['lg', 'lg']} type={'normal'}>${price}</Text>
          <ArrowRightIcon />
        </Div>
      </Div>
      <Div className={'w-full gap-4'}>
        {images.map((item, index) => (
          <Div className={'h-14 w-14 relative'} key={`image_${index}`}>
            <Image fill={true} src={item} alt={'image'} />
          </Div>
        ))}
      </Div>
    </Link>
  );
};

export default OrderItem;
