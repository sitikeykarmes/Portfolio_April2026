import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import Silk from '../components/Silk'
import BlurText from '../components/BlurText'
import RotatingText from '../components/RotatingText'
import ShinyText from '../components/ShinyText'
import Magnet from '../components/Magnet'
import Hero3D from '../components/Hero3D'

const PHOTO = '/images/Gemini_Generated_Image_d1q4lvd1q4lvd1q4-removebg-preview.png'

// Floating glass chips — each sits at a different "depth" (how much it reacts to the mouse)
const CHIPS = [
  { label: 'Python',     pos: 'left-[12%] top-[26%]',   depth: 38,  delay: 0 },
  { label: 'LLMs',       pos: 'left-[20%] top-[58%]',   depth: -26, delay: 0.8 },
  { label: 'React',      pos: 'right-[14%] top-[24%]',  depth: -42, delay: 0.4 },
  { label: 'YOLO · CV',  pos: 'right-[19%] top-[56%]',  depth: 30,  delay: 1.2 },
  { label: 'FastAPI',    pos: 'left-[30%] top-[16%]',   depth: 56,  delay: 1.6 },
  { label: 'Digitalization',pos: 'right-[30%] top-[66%]',  depth: -56, delay: 2 },
]

const Chip = ({ label, pos, depth, delay, mx, my }) => {
  const x = useTransform(mx, [-1, 1], [-depth, depth])
  const y = useTransform(my, [-1, 1], [-depth, depth])
  return (
    <motion.div className={`absolute ${pos} hidden md:block`} style={{ x, y }}>
      <div
        className="rounded-xl border border-[#38e1ff]/30 bg-[#060910]/55 px-3.5 py-1.5 font-mono text-xs text-[#9fe9ff] shadow-[0_0_30px_rgba(56,225,255,0.18)] backdrop-blur-md"
        style={{ animation: `float-y ${3.5 + delay}s ease-in-out ${delay}s infinite` }}
      >
        <span className="mr-1.5 text-[#3dffa0]">●</span>
        {label}
      </div>
    </motion.div>
  )
}

const Hero = () => {
  const ref = useRef(null)

  // ── mouse → normalized [-1, 1], smoothed
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 })
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 })

  useEffect(() => {
    const onMove = (e) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1)
      rawY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  // ── scroll → each layer travels at a different speed
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  // ── mouse transforms per layer
  const bgX = useTransform(mx, [-1, 1], [14, -14])
  const bgMY = useTransform(my, [-1, 1], [10, -10])
  const nameX = useTransform(mx, [-1, 1], [-28, 28])
  const nameMY = useTransform(my, [-1, 1], [-12, 12])
  const photoX = useTransform(mx, [-1, 1], [18, -18])
  const rotY = useTransform(mx, [-1, 1], [-9, 9])
  const rotX = useTransform(my, [-1, 1], [6, -6])

  return (
    <section ref={ref} id="hero" className="relative w-full h-screen overflow-hidden">
      {/* ── L0: Silk WebGL background (slowest) ── */}
      <motion.div className="absolute -inset-10 z-0 pointer-events-none" style={{ x: bgX, y: bgY }}>
        <motion.div className="h-full w-full" style={{ y: bgMY }}>
          <Silk speed={5} scale={1} color="#3b6cff" noiseIntensity={1.5} rotation={0} />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-circuit opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#060910] to-transparent" />

      {/* ── Content stage ── */}
      <motion.div className="relative z-10 flex h-full w-full items-center justify-center -mt-[14vh]" style={{ opacity: fade }}>
        <div className="relative flex w-full items-center justify-center">
          {/* L1: name (behind everything, moves opposite to the photo) */}
          <motion.div
            className="absolute z-10 flex w-full justify-center pointer-events-none select-none"
            style={{ x: nameX, y: nameY }}
          >
            <motion.div style={{ y: nameMY }}>
              <BlurText
                text="KARTIKEYAN KUMAR"
                delay={60}
                animateBy="letters"
                direction="top"
                animationFrom={{ filter: 'blur(12px)', opacity: 0, x: -40, y: 0 }}
                animationTo={[
                  { filter: 'blur(6px)', opacity: 0.4, x: -10, y: 0 },
                  { filter: 'blur(0px)', opacity: 1, x: 0, y: 0 },
                ]}
                stepDuration={0.45}
                className="text-[7vw] font-bold text-white/60 tracking-widest leading-none whitespace-nowrap"
              />
            </motion.div>
          </motion.div>

          {/* L2: 3D scene — sits between the name and the photo */}
          <motion.div className="absolute left-0 right-0 z-[15] pointer-events-none" style={{ y: sceneY, top: '-12vh', bottom: '-12vh' }}>
            <Hero3D />
          </motion.div>

          {/* L3: photo with real 3D tilt (closest layer) */}
          <motion.div
            className="relative z-20 flex items-end justify-center"
            style={{ x: photoX, y: photoY, rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
          >
            <img
              src={PHOTO}
              alt="Kartikeyan Kumar"
              className="h-[58vh] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              draggable={false}
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, #000 78%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, #000 78%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* L4: floating chips at varied depths */}
          <div className="pointer-events-none absolute inset-0 z-30">
            {CHIPS.map((c) => (
              <Chip key={c.label} {...c} mx={mx} my={my} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Role tagline + CTAs ── */}
      <motion.div
        className="absolute bottom-20 md:bottom-24 left-0 right-0 z-30 px-4 pointer-events-none"
        style={{ y: textY, opacity: fade }}
      >
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-full border border-white/20 bg-[#060910]/70 backdrop-blur-md px-5 py-2 text-sm md:text-base">
            <ShinyText text="Graduate Engineer Trainee · Tata Motors Passenger Vehicles" />
          </div>
          <p className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
            I build{' '}
            <RotatingText
              texts={['AI systems', 'web apps', 'ML pipelines', 'digital quality tools']}
              className="text-[#7df0ff]"
            />
          </p>
          <div className="mt-2 flex gap-4 pointer-events-auto">
            <Magnet padding={50}>
              <a href="#projects" className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#38e1ff]">
                View Projects
              </a>
            </Magnet>
            <Magnet padding={50}>
              <a href="#contact" className="inline-block rounded-full border border-white/40 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/10">
                Contact Me
              </a>
            </Magnet>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <div
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ animation: 'float-y 2s ease-in-out infinite' }}
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">Scroll</span>
        <span className="h-8 w-5 rounded-full border border-white/50 p-1">
          <span className="block h-2 w-full rounded-full bg-white/80" />
        </span>
      </div>
    </section>
  )
}

export default Hero
