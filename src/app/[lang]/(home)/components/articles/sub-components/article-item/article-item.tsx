import Div from '@elements/div';
import React from 'react';
import Image from 'next/image'
import Text from '@elements/text'
import { ArticleItemProps } from './article-item.props'
import Button from '@elements/button';
import PointerRightIcon from '@icons-components/pointer-right';
const ArticleItem = ({ day, description, image, month, title }: ArticleItemProps) => {
  return (
    <Div className={'flex-col bg-white p-6 rounded-2xl gap-6 group shadow-md'}>
      <Div className={'relative'}>
        <Div className={'group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300'}>
          <Image src={image} alt={'test'} />
        </Div>
        <Div className={'flex-col transition-colors duration-500 group-hover:bg-black bg-white w-[58px] h-[58px] rounded items-center justify-center absolute bottom-5 left-5'}>
          <Text className={'group-hover:text-white transition-colors duration-300'} typography={['md', 'md']}>{day}</Text>
          <Text className={'group-hover:text-grey-300 transition-colors duration-300'} color={'grey.700'} typography={['xxs', 'xxs']}>{month}</Text>
        </Div>
      </Div>
      <Div className={'flex-col gap-4 items-start'}>
        <Div className={'flex-col gap-2'}>
          <Text color={'brown'}>{title}</Text>
          <Text typography={['xs', 'xs']} type={'medium'}>{description}</Text>
        </Div>
        <Button className={'!pl-0'} variant={'text'} startAdornment={<PointerRightIcon />}>
          Read More
        </Button>
      </Div>
    </Div>
  );
};

export default ArticleItem;
