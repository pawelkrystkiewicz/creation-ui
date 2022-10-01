import { motion, AnimatePresence } from 'framer-motion'
import { AnimatePresenceProps } from './animate-appearance.types'

const sideVariants = {
  closed: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.2, staggerDirection: 1 } },
}

const AnimatedDrawer = ({
  isVisible,
  children,
  animationProps,
  className,
}: AnimatePresenceProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.aside
        className={className}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ width: 0, transition: { delay: 0.3, duration: 0.3 } }}
        {...(animationProps as any)}
      >
        <motion.div
          initial='closed'
          animate='open'
          exit='closed'
          variants={sideVariants}
        >
          {children}
        </motion.div>
      </motion.aside>
    )}
  </AnimatePresence>
)

export default AnimatedDrawer
