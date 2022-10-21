import Overlay from '@cui/core/components/overlay'
import { useTheme } from '@cui/core/theme'
import '@cui/core/styles/index.scss'
import clsx from 'clsx'

import { DrawerProps } from './drawer.types'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { zIndex, defaultDrawerPosition, defaultDrawerSize } = useTheme()
  const { size = defaultDrawerSize, position = defaultDrawerPosition } = props

  return (
    <>
      <Overlay visible={open} onClick={onOverlayClick} />
      <div className={clsx('drawer', `drawer-${position}`, zIndex.modals)}>
        <div className='drawer-body'>{children}</div>
      </div>
    </>
  )
}

export default Drawer
