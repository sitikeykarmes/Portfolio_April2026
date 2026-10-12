import { useRef } from 'react'

// React Bits — SpotlightCard (+ subtle 3D tilt)
const SpotlightCard = ({
  children,
  className = '',
  contentClassName = '',
  spotlightColor = 'rgba(56, 225, 255, 0.22)',
  tilt = 6,
}) => {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt) {
      const rx = (y / r.height - 0.5) * -tilt
      const ry = (x / r.width - 0.5) * tilt
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--o', '0')
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => ref.current?.style.setProperty('--o', '1')}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[transform,border-color] duration-200 will-change-transform hover:border-[#38e1ff]/40 ${className}`}
      style={{ '--mx': '50%', '--my': '50%', '--o': 0 }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: 'var(--o)',
          background: `radial-gradient(420px circle at var(--mx) var(--my), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className={`relative z-10 h-full ${contentClassName}`}>{children}</div>
    </div>
  )
}

export default SpotlightCard
