import { ElementPosition } from '@root/lib/types'

export interface TooltipProps {
  className?: string
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
}
