import { Loader } from '@components/loader'
import { LoadingOverlayProps } from './loading-overlay.types'


const LoadingOverlay = ({ active, size = 'md', ...props }: LoadingOverlayProps) => {
  return active ? (
    <div
      {...props}
      className="fixed top-0 left-0 z-10 block h-full w-full bg-gray-500 opacity-75 blur-md transition duration-200 ease-in">
      <Loader size={size} />
    </div>
  ) : null
}
export default LoadingOverlay
