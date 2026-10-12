import { motion, useScroll, useSpring } from 'motion/react'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#38e1ff] via-[#c4b5fd] to-white"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
