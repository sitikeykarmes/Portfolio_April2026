import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// Scroll parallax wrapper. Moves its children along `axis` as it crosses the viewport.
// speed > 0 drifts slower than the page (feels far away), speed < 0 faster (feels close).
const ParallaxLayer = ({ children, speed = 0.3, axis = 'y', distance = 240, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const v = useTransform(scrollYProgress, [0, 1], [-distance * speed, distance * speed])

  return (
    <motion.div ref={ref} className={className} style={axis === 'x' ? { x: v } : { y: v }}>
      {children}
    </motion.div>
  )
}

export default ParallaxLayer
