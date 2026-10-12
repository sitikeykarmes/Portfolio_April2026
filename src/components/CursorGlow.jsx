import { useEffect, useRef } from 'react'

// Soft accent glow + ring that trails the cursor (fine pointers only)
const CursorGlow = () => {
  const glow = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let gx = tx, gy = ty, rx = tx, ry = ty
    let raf

    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    const onOver = (e) => {
      const hot = e.target.closest?.('a, button, [data-cursor]')
      ring.current?.classList.toggle('cursor-hot', !!hot)
    }
    const tick = () => {
      gx += (tx - gx) * 0.08
      gy += (ty - gy) * 0.08
      rx += (tx - rx) * 0.22
      ry += (ty - ry) * 0.22
      if (glow.current) glow.current.style.transform = `translate3d(${gx - 250}px, ${gy - 250}px, 0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hidden [@media(pointer:fine)]:block">
      <div
        ref={glow}
        className="pointer-events-none fixed top-0 left-0 z-[5] h-[500px] w-[500px] rounded-full mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(56, 225, 255,0.10), transparent 65%)' }}
      />
      <div ref={ring} className="cursor-ring pointer-events-none fixed top-0 left-0 z-[300]" />
    </div>
  )
}

export default CursorGlow
