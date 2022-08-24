import { ElementSize } from '@components/types'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import Props, { AvatarVariant } from './avatar.types'

const staticClassNames = ['inline-block', 'ring-2', 'ring-white']

const sizes: Record<ElementSize, string> = {
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-20 w-20',
}

const variants: Record<AvatarVariant, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-lg',
  square: '',
}

const Input = forwardRef<HTMLDivElement, Props>(({ variant = 'circle', size = 'md', className, ...props }, ref) => {
  const sizeClass = sizes[size]
  const variantClass = variants[variant]

  return (
    <div ref={ref}>
      <img {...props} className={clsx(staticClassNames, sizeClass, variantClass, className)} />
    </div>
  )
})
export default Input
