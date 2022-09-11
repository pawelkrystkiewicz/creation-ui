import { ElementSize } from '@components/types'
import React from 'react'

export type ModalProps = Omit<React.ComponentProps<'div'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  children?: React.ReactNode
  open?: boolean
  onClose: (value: boolean) => void
}

export interface ModalTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}
