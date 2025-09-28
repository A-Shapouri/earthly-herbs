import Div from '@elements/div';
import React from 'react';
import Image from 'next/image';
import Text from '@elements/text';
import { BlogItemProps } from './blog-item.props';
import Button from '@elements/button';
import PointerRightIcon from '@icons-components/pointer-right';
import classNames from '@utils/helpers/class-names';
import Media from '@elements/media';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import Link from 'next/link';

const BlogItem = ({ id, day, description, image, month, title, tags, isPrimary = false }: BlogItemProps) => {
  return (
    <Div
      className={classNames('md:gap-8 gap-2 group', isPrimary ? 'grid md:grid-cols-2 grid-cols-1 md:col-span-2' : 'flex-col')}>
      <Link
        href={getParseRoute({ pathname: routes['route.blog.details'], locale: 'en', query: { id: id } })}
        className={'relative md:px-2 self-center w-full'}>
        <Div
          className={classNames('transition-all duration-300 w-full', isPrimary ? 'md:h-[320px] h-[160px]' : 'md:h-[320px] h-[160px]')}>
          <Image src={image} alt={title} fill={true} className={'object-fill rounded-md'} />
        </Div>
        <Div
          className={'flex-col transition-colors duration-500 group-hover:bg-black bg-white w-[58px] h-[58px] rounded items-center justify-center absolute bottom-5 left-5'}>
          <Text className={'group-hover:text-white transition-colors duration-300'}
            typography={['xl', 'md']}>{day}</Text>
          <Text className={'group-hover:text-grey-300 transition-colors duration-300'} color={'grey.700'}
            typography={['xxs', 'xxs']}>{month}</Text>
        </Div>
      </Link>
      <Div className={'flex-col md:gap-6 gap-4 items-start md:px-3'}>
        <Div className={'flex-col md:gap-2 gap-1'}>
          <Text typography={['xl', 'lg']} type={'bold'} color={'black'}>{title}</Text>
          <Text typography={['md', 'xs']} color={'grey.700'} type={'medium'}>{description}</Text>
        </Div>
        <Div className={'w-full items-center justify-between'}>
          <Div>
            <Media className={'gap-2 flex- flex-wrap'} greaterThan={'sm'}>
              {tags.map((tag, index) => (
                <Div className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'} key={index}>
                  <Text type={'bold'} typography={['xs', 'xs']}>{tag}</Text>
                </Div>
              ))}
            </Media>
            <Media className={'gap-2'} lessThan={'md'}>
              {tags.slice(0, 2).map((tag, index) => (
                <Div className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'} key={index}>
                  <Text type={'bold'} typography={['xs', 'xs']}>{tag}</Text>
                </Div>
              ))}
            </Media>
          </Div>
          <Button
            href={getParseRoute({ pathname: routes['route.blog.details'], locale: 'en', query: { id: id } })}
            size={'small'}
            className={'whitespace-nowrap w-fit'}
            variant={'text'}
            startAdornment={<PointerRightIcon />}>
            Read More
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default BlogItem;
