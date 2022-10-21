import Loader from '@cui/core/components/loader'
import { useTheme } from '@cui/core/theme'
import clsx from 'clsx'
import AnimateAppearance from '../animate-appearance'
import '@cui/core/styles/index.scss'
import { LoadingOverlayProps } from './loading-overlay.types'

const LoadingOverlay = ({ active, ...props }: LoadingOverlayProps) => {
  const { zIndex, defaultSize } = useTheme()
  const { size = defaultSize } = props
  return (
    <AnimateAppearance
      isVisible={active}
      {...props}
      className={clsx(zIndex.overlays, 'overlay')}
    >
      <Loader size={size} />
    </AnimateAppearance>
  )
}
export default LoadingOverlay
