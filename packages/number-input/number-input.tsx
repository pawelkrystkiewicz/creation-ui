import { Input, InputProps } from '@creation-ui/input'
import '@creation-ui/core/esm/index.css'
import { forwardRef } from 'react'

const NumberInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input ref={ref as any} {...{ ...props, type: 'number' }} />
})

NumberInput.displayName = 'NumberInput'

export default NumberInput
