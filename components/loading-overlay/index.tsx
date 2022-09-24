import Loader from '@components/loader'
import { selector } from './loading-overlay.classes'
import { LoadingOverlayProps } from './loading-overlay.types'

const LoadingOverlay = ({
  active,
  size = 'md',
  ...props
}: LoadingOverlayProps) => {
  const classes = selector(props)
  return active ? (
    <div {...props} className={classes('overlay')}>
      <Loader size={size} />
    </div>
  ) : null
}
export default LoadingOverlay
