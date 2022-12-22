import { Button } from '@creation-ui/button'
import { Card } from '@creation-ui/core'
import { PopoverProps } from '@creation-ui/popover'
import { DocumentedProperty } from 'models/system'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Popover = dynamic(
  () => import('@creation-ui/popover').then(C => C.Popover),
  {
    ssr: false,
  }
)

export const PopoverExample = ({ ...props }: PopoverProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Popover
      open={open}
      position='bottom center'
      node={
        <Card className='m-1 shadow-2xl bg-white dark:bg-zinc-900 dark:text-white rounded-lg'>
          <h5 className='text-zinc-900 text-xl leading-tight font-medium mb-2'>
            New Post
          </h5>
          <p className='text-zinc-700 text-base mb-4'>
            This is the preview of your content
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Card>
      }
      {...props}
    >
      <Button variant='contained' onClick={handleOpen}>
        Click me
      </Button>
    </Popover>
  )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'Content inside Popover',
    name: 'node',
    type: 'React.ReactNode',
  },
  {
    description: 'Trigger of Popover',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Is Popover open',
    name: 'open',
    type: 'boolean',
    defaultValue: 'false',
  },
]