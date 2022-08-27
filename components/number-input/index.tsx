import Input from '@components/input'
import { InputProps } from '@components/input/input.types'
import clsx from 'clsx'
import { forwardRef } from 'react'

const classes = ['']

const NumberInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input ref={ref as any} {...{ ...props, type: 'number' }} className={clsx(classes)} />
})

NumberInput.displayName = 'NumberInput'

export default NumberInput
