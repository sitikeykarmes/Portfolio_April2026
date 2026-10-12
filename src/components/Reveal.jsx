import { motion } from 'motion/react'

// Scroll-triggered fade/slide-in wrapper
const Reveal = ({ children, delay = 0, y = 36, x = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default Reveal
