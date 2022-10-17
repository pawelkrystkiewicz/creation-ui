import { motion } from 'framer-motion'

export interface AnimatePresenceProps {
  isVisible?: boolean
  children: React.ReactNode | React.ReactNode[]
  animationProps?: React.ComponentProps<typeof motion.div>
  className?: string
}
