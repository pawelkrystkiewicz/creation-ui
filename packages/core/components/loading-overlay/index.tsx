import { Loader } from '../'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import '../../styles/index.scss'
import { LoadingOverlayProps } from './loading-overlay.types'

const LoadingOverlay = ({ active, ...props }: LoadingOverlayProps) => {
  const { zIndex, defaultSize } = useTheme()
  const { size = defaultSize } = props
  return active ? (
    <div {...props} className={clsx(zIndex.overlays, 'overlay')}>
      <Loader size={size} />
    </div>
  ) : null
}
export default LoadingOverlay
