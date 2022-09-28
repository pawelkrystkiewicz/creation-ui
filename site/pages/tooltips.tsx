import { NavigationTitle } from '@root/lib/components/navigation/navigation'
import Tooltip from '@root/lib/components/tooltip'
import { ElementSize } from '@root/lib/types'

import Button from '@root/lib/components/button'

const TooltipPage = () => {
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
