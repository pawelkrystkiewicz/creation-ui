import Modal from '@components/modal'
import Button from '@components/button'
import { NavigationTitle } from '@components/navigation/navigation'

import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)
  const onClose = (value: any) => {
    console.log(value)
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div className='bg-red-400 h-full w-full'>
        <Button onClick={onOpen}>Modal</Button>
        <Modal onClose={onClose} open={open}>
          <Modal.Title>I am title of Modal</Modal.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We've sent you an
              email with all of the details of your order.
            </p>
          </div>
          <div className='mt-4'>
            <button
              type='button'
              className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            >
              Got it, thanks!
            </button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Home
