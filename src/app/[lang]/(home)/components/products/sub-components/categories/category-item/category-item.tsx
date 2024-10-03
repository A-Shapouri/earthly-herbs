import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import { CategoryItemProps } from './category-item.props';

const CategoryItem = ({ children, title }: CategoryItemProps) => {
  return (
    <Div className={'flex-col items-start gap-4 p-5 md:p-0 w-full'}>
      <Text typography={['md', 'base']}>{title}</Text>
      <Div className={'w-full grid grid-cols-2 gap-4 md:grid-cols-1'}>
        {children}
      </Div>
    </Div>
  );
};

export default CategoryItem;
