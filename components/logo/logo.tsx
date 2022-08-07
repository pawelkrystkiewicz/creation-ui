import { ElementSize } from '@components/types'
import classNames from 'classnames'
import Image from 'next/image'

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

const sizeMap: Record<LogoSizes, number> = {
  sm: 20,
  md: 25,
  lg: 35,
  xl: 50,
}

export const Logo = ({ size = 'sm', className }: LogoProps) => (
  <Image
    src="/logo.png"
    alt="Logo"
    width={sizeMap[size]}
    height={sizeMap[size]}
    layout={'fixed'}
    className={classNames('h-auto w-auto rounded-full', className)}
  />
)
