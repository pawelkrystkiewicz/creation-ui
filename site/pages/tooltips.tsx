import { Button } from '@creation-ui/button'
import { ElementSize } from '@creation-ui/core'
import { Tooltip } from 'packages/tooltip'

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
  const positions = [
    {
      label: 'Example 1',
      position: 'top',
    },
    {
      label: 'Example 1',
      position: 'right',
    },
    {
      label: 'Example 1',
      position: 'bottom',
    },
    {
      label: 'Example 1',
      position: 'left',
    },
  ]

  return (
    <>
      <div className='flex flex-col gap-10'>
        {examples.map(({ label, size }) => (
          <div key={label}>
            <div className='py-2 font-semibold'>{label}</div>
            <Tooltip content={label}>
              <Button size={size}>{label}</Button>
            </Tooltip>
          </div>
        ))}
        {positions.map(({ label, position }) => {
          const title = `${label} - ${position}`
          return (
            <div key={title}>
              <div className='py-2 font-semibold'>{title}</div>
              <Tooltip content={title} position={position as any}>
                <Button>Button</Button>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TooltipPage
