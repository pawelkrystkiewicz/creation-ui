import { Input, InputProps } from '@creation-ui/input'
import '@creation-ui/core/styles/index.scss'
import { forwardRef } from 'react'

const NumberInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input ref={ref as any} {...{ ...props, type: 'number' }} />
})

NumberInput.displayName = 'NumberInput'

export default NumberInput
