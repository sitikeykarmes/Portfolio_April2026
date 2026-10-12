import LineWaves from '../components/LineWaves'
import SpotlightCard from '../components/SpotlightCard'
import Reveal from '../components/Reveal'
import GradientText from '../components/GradientText'
import GhostText from '../components/GhostText'
import SectionLabel from '../components/SectionLabel'
import TerminalCard from '../components/TerminalCard'

const TILES = [
  { value: 'Web & App', label: 'Full-Stack Development' },
  { value: 'ML / DL', label: 'Machine Learning & Deep Learning' },
  { value: 'LLMs & AI', label: 'AI Engineering & Agents' },
  { value: 'Photography', label: 'Visual Storytelling' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#060910] overflow-hidden flex items-center justify-center"
    >
      {/* ── Background: dim animated waves, then overlays so text always stays readable ── */}
      <div className="absolute inset-0 z-0 opacity-60">
        <LineWaves
          speed={0.1}
          innerLineCount={15}
          outerLineCount={40}
          warpIntensity={1.3}
          rotation={-97}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.12}
          color1="#38e1ff"
          color2="#8b7bff"
          color3="#1e3a8a"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#060910]/70" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#060910] via-transparent to-[#060910]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-circuit" />

      <GhostText className="top-8 z-[2]" speed={0.5}>About</GhostText>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building things
              <br />
              <GradientText>that matter.</GradientText>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-white/85 text-lg leading-relaxed max-w-md">
              I&apos;m an engineer who builds across the full spectrum — from intelligent
              ML/DL systems and AI-powered applications to polished web and mobile
              experiences. I care about the craft: clean architecture, real performance,
              and technology that actually solves problems.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              When I&apos;m not coding, you&apos;ll find me behind a camera, exploring
              photography and visual storytelling.
            </p>
          </Reveal>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          <Reveal delay={0.1} x={30}>
            <TerminalCard
              lines={[
                { cmd: 'whoami' },
                { key: 'name', val: '"Kartikeyan Kumar"' },
                { key: 'role', val: '"Graduate Engineer Trainee"' },
                { key: 'company', val: '"Tata Motors PV"' },
                { key: 'dept', val: '"Operations Quality - Digitalization"' },
                { key: 'focus', val: '["AI", "ML/DL", "Full-Stack"]' },
              ]}
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {TILES.map(({ value, label }, i) => (
              <Reveal key={label} delay={0.1 * i + 0.2} y={30}>
                <SpotlightCard className="h-full backdrop-blur-sm bg-[#0a1220]/70" contentClassName="p-5">
                  <span className="block text-xl font-bold text-white mb-1">{value}</span>
                  <span className="text-white/55 text-sm leading-snug">{label}</span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
