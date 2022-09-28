import { ElementSize } from '@root/lib/types'
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
  sm: 'h-7',
  md: 'h-15',
  lg: 'h-24',
  xl: 'h-28',
}

export const Logo = ({ size = 'sm', className }: LogoProps) => (
  <img
    src={'/logo.png'}
    alt='Logo'
    className={clsx('w-auto rounded-full', className, sizeMap[size])}
  />
)
