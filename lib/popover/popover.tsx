import * as UI from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import '@creation-ui/core/styles/index.scss'

interface PopoverProps {
  className?: string
  trigger: any
  body: any
}

export default function Popover({
  className,
  trigger: Trigger,
  body: Body,
}: PopoverProps) {
  const triggerIsComponent = typeof Trigger === 'function'
  const bodyIsComponent = typeof Body === 'function'

  return (
    <div className={clsx(className)}>
      <UI.Popover className='relative'>
        {({ open }) => (
          <>
            <UI.Popover.Button>
              {triggerIsComponent ? <Trigger /> : Trigger}
            </UI.Popover.Button>
            <UI.Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <UI.Popover.Panel className='absolute left-0 z-10 mt-3 w-auto max-w-sm lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid gap-8 bg-white p-3 lg:grid-cols-2'>
                    {bodyIsComponent ? <Body /> : Body}
                  </div>
                </div>
              </UI.Popover.Panel>
            </UI.Transition>
          </>
        )}
      </UI.Popover>
    </div>
  )
}
