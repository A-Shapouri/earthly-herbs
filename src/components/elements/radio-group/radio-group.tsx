'use client';

import React, {forwardRef} from 'react';
import {RadioGroupProps} from './radio-group.props'
import Div from "../div";
import classNames from '@utils/helpers/class-names';

const RadioGroup = forwardRef<any, RadioGroupProps>(function RadioGroup(props, ref) {
  const {children, className, onChange, value, ...rest} = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && onChange) {
      onChange(e)
    }
  }

  return (
    <Div
      onClick={handleChange}
      data-value={value}
      className={classNames('md:flex-col', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Div>
  )
})

export default RadioGroup;