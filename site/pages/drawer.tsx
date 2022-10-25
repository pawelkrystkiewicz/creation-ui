import { Button } from '@creation-ui/button'
import { Drawer } from '@creation-ui/drawer'
import { useState } from 'react'

const DrawerPage = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen(!open)

  return (
    <>
      <Button onClick={toggleDrawer}>Open drawer</Button>
      <Drawer open={open} onOverlayClick={toggleDrawer}>
        <div className='px-3 py-1'>
          <div>
            Hello I'm content
            <div>
              <Button onClick={toggleDrawer}>Close</Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerPage
