import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// React Bits — RotatingText: cycles words with a slide/blur transition
const RotatingText = ({ texts, interval = 2400, className = '' }) => {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % texts.length), interval)
    return () => clearInterval(id)
  }, [texts.length, interval])

  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[i]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {texts[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
