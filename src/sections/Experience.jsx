import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FaBriefcase } from 'react-icons/fa'
import GhostText from '../components/GhostText'
import ParallaxLayer from '../components/ParallaxLayer'
import SectionLabel from '../components/SectionLabel'
import Noise from '../components/Noise'
import Reveal from '../components/Reveal'
import SpotlightCard from '../components/SpotlightCard'
import GradientText from '../components/GradientText'
import { EXPERIENCE } from '../constants'

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#060910] py-24 md:py-32 border-t border-white/5"
    >
      <Noise patternSize={250} patternScaleX={2} patternScaleY={2} patternRefreshInterval={2} patternAlpha={14} />

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-circuit" />
      <GhostText className="top-10">Experience</GhostText>
      <ParallaxLayer speed={0.6} className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2">
        <div className="h-[500px] w-[700px] rounded-full bg-[#38e1ff]/10 blur-[120px]" />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-12">
        <Reveal>
          <SectionLabel index="02">Experience</SectionLabel>
          <h2 className="mt-4 mb-16 text-5xl lg:text-6xl font-bold text-white leading-tight">
            Experience<span className="text-[#38e1ff]">.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative pl-10 md:pl-16">
          {/* timeline rail */}
          <div className="absolute left-[15px] md:left-[23px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            className="absolute left-[15px] md:left-[23px] top-2 w-px bg-gradient-to-b from-[#38e1ff] to-[#c4b5fd]"
            style={{ height: lineHeight }}
          />

          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1} x={-30}>
              <div className="relative">
                {/* node */}
                <span className="absolute -left-10 md:-left-16 top-8 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#38e1ff]/40" style={{ animation: 'pulse-ring 2.4s ease-out infinite' }} />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full border border-[#38e1ff]/60 bg-[#0a1220] text-[#38e1ff]">
                    <FaBriefcase className="text-xs md:text-base" />
                  </span>
                </span>

                <SpotlightCard className="p-6 md:p-8" tilt={3}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 text-lg md:text-xl font-semibold">
                        <GradientText>{job.company}</GradientText>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm tracking-widest uppercase text-white/50">
                    Dept. <span className="text-white/80">{job.department}</span>
                  </p>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-white/60 leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#38e1ff]" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/50 transition-colors hover:border-[#38e1ff]/40 hover:text-[#38e1ff]">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
