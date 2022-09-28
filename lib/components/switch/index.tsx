import { useState } from 'react'
import { Switch as HSwitch } from '@headlessui/react'
import clsx from 'clsx'
import './switch.scss'
import { SwitchProps } from './switch.types'
import { useTheme } from '@root/lib/context/theme'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { defaultSize } = useTheme()
  const { size = defaultSize } = props

  return (
    <div className={clsx('switch--wrapper', `form-element-spacing--${size}`)}>
      <div
        className={clsx(
          `size--${size}`,
          'element-title',
          `element-title--${size}`
        )}
      >
        {props.title}
      </div>
      <HSwitch
        className={clsx(
          'switch',
          checked && 'switch-checked',
          `switch--${size}`
        )}
        {...props}
      >
        <span
          aria-hidden='true'
          className={clsx(
            'switch--circle',
            `switch--circle--${size}`,
            checked && `switch-checked--${size}`
          )}
        />
      </HSwitch>
    </div>
  )
}
Switch.displayName = '_Switch'

export default Switch
