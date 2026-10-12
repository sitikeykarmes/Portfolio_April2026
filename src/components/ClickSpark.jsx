import { useRef, useEffect, useCallback } from 'react'

// React Bits — ClickSpark: canvas spark burst on click
const ClickSpark = ({
  sparkColor = '#38e1ff',
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 450,
  children,
}) => {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let raf
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparksRef.current = sparksRef.current.filter((s) => {
        const p = (t - s.start) / duration
        if (p >= 1) return false
        const ease = p * (2 - p)
        const dist = ease * sparkRadius
        const len = sparkSize * (1 - ease)
        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(s.x + dist * Math.cos(s.angle), s.y + dist * Math.sin(s.angle))
        ctx.lineTo(s.x + (dist + len) * Math.cos(s.angle), s.y + (dist + len) * Math.sin(s.angle))
        ctx.stroke()
        return true
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [sparkColor, sparkSize, sparkRadius, duration])

  const handleClick = useCallback(
    (e) => {
      const now = performance.now()
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          start: now,
        })
      }
    },
    [sparkCount],
  )

  return (
    <div onClickCapture={handleClick}>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[200]" />
      {children}
    </div>
  )
}

export default ClickSpark
