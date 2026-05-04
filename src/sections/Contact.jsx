import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ShapeGrid from '../components/ShapeGrid'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-32 bg-[#080808] border-t border-white/5 overflow-hidden"
    >
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-auto">
        <ShapeGrid 
          direction="left"
          speed={0.5}
          squareSize={40}
          borderColor="#514233ff"
          hoverFillColor="#4f3811"
          shape="hexagon"
          hoverTrailAmount={0}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pointer-events-none">
        
        {/* Subtitle */}
        <span className="text-white/40 text-sm font-medium tracking-[0.3em] uppercase mb-6">
          What's Next
        </span>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Let's build something <br className="hidden md:block" />
          <span className="text-[#c18556]">amazing together.</span>
        </h2>
        
        {/* Description */}
        <p className="text-white/60 max-w-xl text-lg mb-12">
          Whether you have a question, a project idea, or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        {/* CTA Button */}
        <a
          href="mailto:kartikey8025@gmail.com"
          className="
            inline-flex items-center justify-center px-8 py-4 
            bg-white text-black font-semibold rounded-full 
            hover:bg-[#c18556] hover:text-white transition-colors duration-300
            mb-16 pointer-events-auto
          "
        >
          Say Hello
        </a>

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
