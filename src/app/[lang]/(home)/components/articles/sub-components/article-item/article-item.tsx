import Div from '@elements/div';
import React from 'react';
import Image from 'next/image'
import Text from '@elements/text'
import { ArticleItemProps } from './article-item.props'
import Button from '@elements/button';
import PointerRightIcon from '@icons-components/pointer-right';
const ArticleItem = ({ day, description, image, month, title }: ArticleItemProps) => {
  return (
    <Div className={'flex-col bg-white md:p-6 py-2 rounded-2xl md:gap-6 gap-2 group shadow-md'}>
      <Div className={'relative px-2 self-center'}>
        <Div className={'md:group-hover:scale-105 md:group-hover:-translate-y-2 transition-all duration-300'}>
          <Image src={image} alt={'test'} />
        </Div>
        <Div className={'flex-col transition-colors duration-500 group-hover:bg-black bg-white w-[58px] h-[58px] rounded items-center justify-center absolute bottom-5 left-5'}>
          <Text className={'group-hover:text-white transition-colors duration-300'} typography={['md', 'md']}>{day}</Text>
          <Text className={'group-hover:text-grey-300 transition-colors duration-300'} color={'grey.700'} typography={['xxs', 'xxs']}>{month}</Text>
        </Div>
      </Div>
      <Div className={'flex-col md:gap-4 gap-1 items-start px-3'}>
        <Div className={'flex-col md:gap-2 gap-1'}>
          <Text typography={['xs', 'base']} color={'brown'}>{title}</Text>
          <Text typography={['xxs', 'xs']} type={'medium'}>{description}</Text>
        </Div>
        <Button className={'!pl-0'} variant={'text'} startAdornment={<PointerRightIcon />}>
          Read More
        </Button>
      </Div>
    </Div>
  );
};

export default ArticleItem;
