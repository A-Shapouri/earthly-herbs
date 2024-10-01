import React from 'react'
import Div from '@elements/div'
import Text from '@elements/text'
import { CategoryItemProps } from './category-item.props'

const CategoryItem = ({ children, title }: CategoryItemProps) => {
  return (
    <Div className={'flex-col items-start gap-4'}>
      <Text>{title}</Text>
      {children}
    </Div>
  )
}

export default CategoryItem;