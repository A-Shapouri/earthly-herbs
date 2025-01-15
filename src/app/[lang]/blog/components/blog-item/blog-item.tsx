import Div from '@elements/div';
import React from 'react';
import Image from 'next/image'
import Text from '@elements/text'
import { BlogItemProps } from './blog-item.props'
import Button from '@elements/button';
import PointerRightIcon from '@icons-components/pointer-right';
import classNames from "@utils/helpers/class-names";
const BlogItem = ({ day, description, image, month, title, tags, className, isPrimary = false }: BlogItemProps) => {
  return (
    <Div className={classNames('md:gap-8 gap-2 group', isPrimary ? 'grid grid-cols-2 col-span-2' : 'flex-col')}>
      <Div className={'relative px-2 self-center w-full'}>
        <Div className={classNames('transition-all duration-300 w-full', isPrimary ? 'h-[320px]' : 'h-[200px]')}>
          <Image src={image} alt={'test'} fill={true} className={'object-fill rounded-xl'} />
        </Div>
        <Div className={'flex-col transition-colors duration-500 group-hover:bg-black bg-white w-[58px] h-[58px] rounded items-center justify-center absolute bottom-5 left-5'}>
          <Text className={'group-hover:text-white transition-colors duration-300'} typography={['md', 'md']}>{day}</Text>
          <Text className={'group-hover:text-grey-300 transition-colors duration-300'} color={'grey.700'} typography={['xxs', 'xxs']}>{month}</Text>
        </Div>
      </Div>
      <Div className={'flex-col md:gap-4 gap-1 items-start px-3'}>
        <Div className={'flex-col md:gap-2 gap-1'}>
          <Text typography={['xs', 'lg']} type={"bold"} color={'black'}>{title}</Text>
          <Text typography={['xxs', 'xs']} color={'grey.700'} type={'medium'}>{description}</Text>
        </Div>
        <Button className={'!pl-0'} variant={'text'} startAdornment={<PointerRightIcon />}>
          Read More
        </Button>
      </Div>
    </Div>
  );
};

export default BlogItem;
