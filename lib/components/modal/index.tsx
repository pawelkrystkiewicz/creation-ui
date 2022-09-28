import { selector } from './modal.classes'
import { ModalProps, ModalTitleProps } from './modal.types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import clsx from 'clsx'
import { settings } from '@root/lib/components/settings'

const transitionProps = {
  overlay: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  modal: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
}
const Modal = (props: ModalProps) => {
  const { children, className, onClose, open, ...rest } = props

  const classes = selector(props)
  //  TODO: just pass children and do whatever you want with them
  // export Title as Modal.Title

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as='div'
        className={classes('dialog', className)}
        onClose={onClose}
        {...rest}
      >
        <Transition.Child as={Fragment} {...transitionProps.overlay}>
          <div className={classes('overlay')} />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child as={Fragment} {...transitionProps.modal}>
              <Dialog.Panel className={classes('panel')}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const Title = (props: ModalTitleProps) => {
  const { children, className, as = 'h3' } = props
  const classes = selector(props)
  return (
    <Dialog.Title as={as} className={classes('title', className)}>
      {children}
    </Dialog.Title>
  )
}

Modal.defaultProps = {
  // size: 'md',
}

Modal.Title = Title

export default Modal
