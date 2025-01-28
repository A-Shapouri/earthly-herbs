import React from 'react'
import Div from "@elements/div";
import Text from '@elements/text'
import classNames from "@utils/helpers/class-names";

const Section = ({title, selected, onClick}: { title: string, selected: boolean, onClick: () => void }) => {


  return (
    <Div className={classNames(
      'h-10 rounded-lg items-center justify-center px-2 w-full',
      selected ? 'border-2 border-primary' : 'border border-grey-800',
    )}>
      <Text typography={['md', 'md']} type={selected ? 'bold' : 'medium'} color={selected ? 'primary' : 'grey.700'}>{title}</Text>
    </Div>
  )
}


export default Section;
