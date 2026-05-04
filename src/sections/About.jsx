import LineWaves from '../components/LineWaves'

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* ── LineWaves Background ── */}
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.1}
          innerLineCount={15}
          outerLineCount={40}
          warpIntensity={1.3}
          rotation={-97}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#ffffff"
          color2="#686868"
          color3="#c18556"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Label + Heading */}
        <div className="flex flex-col gap-6">
          <span className="text-white/40 text-sm font-medium tracking-[0.3em] uppercase">
            About Me
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building things
            <br />
            <span className="text-white/60">that matter.</span>
          </h2>

          <p className="text-white/100 text-lg leading-relaxed max-w-md">
            I&apos;m an engineer who builds across the full spectrum — from intelligent
            ML/DL systems and AI-powered applications to polished web and mobile
            experiences. I care about the craft: clean architecture, real performance,
            and technology that actually solves problems.
          </p>

          <p className="text-white/70 text-base leading-relaxed max-w-md">
            When I&apos;m not coding, you&apos;ll find me behind a camera, exploring
            photography and visual storytelling.
          </p>
        </div>

        {/* Right — Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: 'Web & App',  label: 'Full-Stack Development' },
            { value: 'ML / DL',    label: 'Machine Learning & Deep Learning' },
            { value: 'LLMs & AI',  label: 'AI Engineering & Agents' },
            { value: '📷',         label: 'Photography & Visual Art' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="
                bg-white/5 border border-white/10 rounded-2xl p-6
                hover:bg-white/10 hover:border-white/20
                transition-all duration-300
                backdrop-blur-sm
              "
            >
              <span className="block text-2xl font-bold text-white mb-2">{value}</span>
              <span className="text-white/50 text-sm leading-snug">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
