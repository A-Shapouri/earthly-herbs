import React from 'react'
import Div from "@elements/div";
import Button from "@elements/button";
import classNames from "@utils/helpers/class-names";


const Amounts = ({data} : {data: Array<string>}) => {

  const [amount, setAmount] = React.useState<string>(data[0])
  return (
    <Div className={'gap-4 flex-wrap'}>
      {data.map((item, index) => (
        <Button
          className={'min-w-24'}
          rounded={'large'}
          variant={amount === item ? 'filled' : 'outlined'}
          color={amount === item ? 'primary' : 'control'}
          key={index}
          onClick={() => setAmount(item)}>
          {item} g
        </Button>
      ))}
    </Div>
  )
}

export default Amounts