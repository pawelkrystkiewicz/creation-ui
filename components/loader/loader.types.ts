import { ElementSize } from '../types'

export interface LoaderProps {
  /**
   * Use white loader
   */
  white?: boolean
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Classes to be added to the component
   */
  className?: string
}
