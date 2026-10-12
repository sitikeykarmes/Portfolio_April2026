import { useRef, useState, useEffect } from 'react'

// React Bits — Magnet: element is pulled toward the cursor
const Magnet = ({ children, padding = 80, strength = 3, className = '' }) => {
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const cx = left + width / 2
      const cy = top + height / 2
      const dx = Math.abs(cx - e.clientX)
      const dy = Math.abs(cy - e.clientY)
      if (dx < width / 2 + padding && dy < height / 2 + padding) {
        setActive(true)
        setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? 'transform 0.3s ease-out' : 'transform 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Magnet
