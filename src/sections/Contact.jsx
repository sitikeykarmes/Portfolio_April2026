import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ShapeGrid from '../components/ShapeGrid'
import GhostText from '../components/GhostText'
import SectionLabel from '../components/SectionLabel'
import Magnet from '../components/Magnet'
import GradientText from '../components/GradientText'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-32 bg-[#060910] border-t border-white/5 overflow-hidden"
    >
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-auto">
        <ShapeGrid 
          direction="left"
          speed={0.5}
          squareSize={40}
          borderColor="#16384a"
          hoverFillColor="#0b3a52"
          shape="hexagon"
          hoverTrailAmount={0}
        />
      </div>

      <GhostText className="bottom-2 z-[1]" speed={-0.5}>Contact</GhostText>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pointer-events-none">
        
        {/* Subtitle */}
        <SectionLabel index="05" className="mb-6">Contact</SectionLabel>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Let's build something <br className="hidden md:block" />
          <GradientText>amazing together.</GradientText>
        </h2>
        
        {/* Description */}
        <p className="text-white/60 max-w-xl text-lg mb-12">
          Whether you have a question, a project idea, or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        {/* CTA Button */}
        <Magnet padding={90} strength={2.5} className="mb-16 pointer-events-auto">
          <a
            href="mailto:kartikey8025@gmail.com"
            className="
              inline-flex items-center justify-center px-10 py-5
              bg-white text-black font-semibold rounded-full
              shadow-[0_0_60px_rgba(56, 225, 255,0.35)]
              hover:bg-[#38e1ff] hover:text-black transition-colors duration-300
            "
          >
            Say Hello
          </a>
        </Magnet>

        {/* Social Links */}
        <div className="flex gap-8 items-center justify-center pointer-events-auto">
          <a
            href="https://github.com/sitikeykarmes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kartikeyan-kumar-39a213278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:kartikey8025@gmail.com"
            className="text-white/40 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
