import { useTheme } from '@root/lib/context/theme'
import clsx from 'clsx'
import AnimatedDrawer from '../animate-appearance/drawer'
import '../index.scss'
import Overlay from '../overlay'
import { DrawerProps } from './drawer.types'

const configHorizontal = {
  sizeKey: 'width',
  animateKey: 'x',
}

const configVertical = {
  sizeKey: 'height',
  animateKey: 'y',
}

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const { zIndex, defaultDrawerPosition, defaultDrawerSize } = useTheme()
  const { size = defaultDrawerSize, position = defaultDrawerPosition } = props

  const travelDistance = 10
  const config = {
    top: { ...configVertical, animateValue: -travelDistance },
    bottom: { ...configVertical, animateValue: travelDistance },
    left: { ...configHorizontal, animateValue: -travelDistance },
    right: { ...configHorizontal, animateValue: travelDistance },
  }[position]

  return (
    <>
      <Overlay visible={open} onClick={onOverlayClick} />
      <AnimatedDrawer
        isVisible={open}
        animationProps={{
          initial: { [config.sizeKey]: -travelDistance },
          animate: { [config.sizeKey]: 0 },
          exit: { [config.sizeKey]: 0 },
        }}
      >
        <div className={clsx('drawer', `drawer-${position}`, zIndex.modals)}>
          <div className='drawer-body'>{children}</div>
        </div>
      </AnimatedDrawer>
    </>
  )
}

export default Drawer
