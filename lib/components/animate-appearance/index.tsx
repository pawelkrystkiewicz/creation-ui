import { motion, AnimatePresence } from 'framer-motion'

interface AnimatePresenceProps {
  isVisible?: boolean
  children: React.ReactNode | React.ReactNode[]
  animationProps?: React.ComponentProps<typeof motion.div>
  className?: string
}

const AnimateAppearance = ({
  isVisible,
  children,
  animationProps,
  className,
}: AnimatePresenceProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className={className}
        transition={{ delay: 0.1, duration: 0.3 }}
        {...(animationProps as any)}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)

export default AnimateAppearance
