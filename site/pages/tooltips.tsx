import { NavigationTitle } from '@components/navigation/navigation'
import Tooltip from '@components/tooltip'
import { ElementSize } from '@components/types'
import type { NextPage } from 'next'
import Button from '@components/button'

const TooltipPage: NextPage = () => {
  const examples = [
    {
      label: 'Example 1',
      size: 'sm' as ElementSize,
    },
    {
      label: 'Example 2',
      size: 'md' as ElementSize,
    },
    {
      label: 'Example 3',
      size: 'lg' as ElementSize,
    },
  ]

  return (
    <>
      <div>
        {examples.map(({ label, size }) => (
          <Tooltip content={label}>
            <Button size={size}>{label}</Button>
          </Tooltip>
        ))}
      </div>
    </>
  )
}

export default TooltipPage
