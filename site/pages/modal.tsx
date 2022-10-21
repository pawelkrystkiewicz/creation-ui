import Modal from '@cui/core/components/modal'
import Button from '@cui/core/components/button'

import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)

  const onClose = (value: any) => {
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Button onClick={onOpen}>Modal</Button>
      <Modal
        onClose={onClose}
        open={open}
        onOverlayClick={() => setOpen(false)}
      >
        <Modal.Title>I am title of Modal</Modal.Title>
        <div className='mt-2'>
          <p className='text-sm text-gray-500'>
            Your payment has been successfully submitted. We've sent you an
            email with all of the details of your order.
          </p>
        </div>
        <div className='mt-4'>
          <Button onClick={onClose}>Got it, thanks!</Button>
        </div>
      </Modal>
    </>
  )
}

export default Home
