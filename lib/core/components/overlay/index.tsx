import { useTheme } from '@root/lib/context/theme'
import clsx from 'clsx'
import AnimateAppearance from '../animate-appearance'
import './overlay.scss'

interface OverlayProps {
  visible?: boolean
  onClick?: () => void
}

const Overlay = ({ visible, onClick }: OverlayProps) => {
  const { zIndex } = useTheme()
  return (
    <AnimateAppearance isVisible={visible}>
      <div className={clsx('overlay', zIndex.overlays)} onClick={onClick}>
        &nbsp;
      </div>
    </AnimateAppearance>
  )
}

export default Overlay
