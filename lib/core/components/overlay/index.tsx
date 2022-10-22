import { useTheme } from '@cui/core'
import clsx from 'clsx'
import './overlay.scss'

interface OverlayProps {
  visible?: boolean
  onClick?: () => void
}

const Overlay = ({ visible, onClick }: OverlayProps) => {
  const { zIndex } = useTheme()
  return visible ? (
    <div>
      <div className={clsx('overlay', zIndex.overlays)} onClick={onClick}>
        &nbsp;
      </div>
    </div>
  ) : null
}

export default Overlay
