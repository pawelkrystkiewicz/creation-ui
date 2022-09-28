import { ElementSize } from '@root/lib/types'

export interface SwitchProps {
  /**
   * Is element required?
   */
  required?: boolean
  /**
   * Switch checked state
   */
  checked?: boolean
  defaultChecked?: boolean
  /**
   * Size of the switch
   */
  size?: ElementSize
  title?: string

  onChange: (value: boolean) => void
}
