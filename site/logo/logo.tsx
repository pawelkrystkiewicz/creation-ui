import { ElementSize } from '@cui/core'
import clsx from 'clsx'

type LogoSizes = ElementSize | 'xl'

interface LogoProps {
  /**
   * Logo size
   */
  size?: LogoSizes
  /**
   * Additional class names
   */
  className?: string
}

const sizeMap: Record<LogoSizes, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
}

export const Logo = ({ size = 'sm', className }: LogoProps) => (
  <img
    src={'/logo.png'}
    alt='Logo'
    className={clsx('w-auto rounded-full', className, sizeMap[size])}
  />
)
