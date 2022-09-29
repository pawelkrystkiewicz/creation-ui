import { ElementPosition } from '@root/lib/types'

export interface DrawerProps {
  size?: number | string
  children?: React.ReactNode
  position?: ElementPosition
  open?: boolean
  onClose?: () => void
  onOverlayClick?: () => void
}
