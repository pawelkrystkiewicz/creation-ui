import { useState } from 'react'
import * as HeadlessUI from '@headlessui/react'
import clsx from 'clsx'
import { ElementSize } from '@components/types'

interface SwitchProps {
  /**
   * Switch checked state
   */
  checked?: boolean
  /**
   * Size of the switch
   */
  size?: ElementSize
}

const sizeMap: Record<ElementSize, Record<'body' | 'circle', string>> = {
  sm: { body: 'h-[22px] w-[42px]', circle: 'h-[18px] w-[18px]' },
  md: { body: 'h-[25px] w-[52px]', circle: 'h-[21px] w-[21px]' },
  lg: { body: 'h-[28px] w-[57px]', circle: 'h-[25px] w-[25px]' },
}

const staticClassesBody = [
  'relative',
  'inline-flex',

  'shrink-0',
  'cursor-pointer',
  'rounded-full',
  'border-2',
  'border-transparent',
  'transition-colors',
  'duration-200',
  'ease-in-out',
  'focus:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-white',
  'focus-visible:ring-opacity-75',
]

const staticClassesCircle = [
  'pointer-events-none',
  'inline-block',

  'transform',
  'rounded-full',
  'bg-white',
  'shadow-lg',
  'ring-0',
  'transition',
  'duration-200',
  'ease-in-out',
]

const enabledPositionForSize: Record<ElementSize, string> = {
  sm: 'translate-x-5',
  md: 'translate-x-7',
  lg: 'translate-x-7',
}

const Switch = ({ checked, size = 'sm', ...props }: SwitchProps) => {
  const [enabled, setEnabled] = useState(false)
  const enabledColors = enabled ? 'bg-blue-500' : 'bg-gray-300'
  const enabledCirclePosition = enabled ? enabledPositionForSize[size] : 'translate-x-0'

  const sizeClass = sizeMap[size]
  return (
    <HeadlessUI.Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(enabledColors, staticClassesBody, sizeClass.body)}>
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={clsx(enabledCirclePosition, staticClassesCircle, sizeClass.circle)} />
    </HeadlessUI.Switch>
  )
}

export default Switch
