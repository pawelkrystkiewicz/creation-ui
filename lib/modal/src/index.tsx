import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Overlay } from '@cui/core/components'
import { useTheme } from '@cui/core/theme'
import clsx from 'clsx'
import { ModalProps, ModalTitleProps } from './modal.types'
import '@cui/core/styles/index.scss'

const transitionProps = {
  modal: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
}
const Modal = ({ onOverlayClick, ...props }: ModalProps) => {
  const { children, className, onClose, open, ...rest } = props
  const { zIndex } = useTheme()
  return (
    <>
      <Overlay visible={open} onClick={onOverlayClick} />
      <Transition appear={true} show={open} as={Fragment}>
        <Dialog
          as='div'
          open={open}
          className={clsx('dialog', zIndex.modals, className)}
          onClose={onClose as any}
          {...rest}
        >
          <div className='dialog-layer-1'>
            <div className='dialog-layer-2'>
              <Transition.Child as={Fragment} {...transitionProps.modal}>
                <Dialog.Panel className={'dialog-panel'}>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

const Title = (props: ModalTitleProps) => {
  const { children, className, as = 'h3' } = props
  return (
    <Dialog.Title as={as} className={clsx('dialog-title', className)}>
      {children}
    </Dialog.Title>
  )
}

Modal.Title = Title

export default Modal
