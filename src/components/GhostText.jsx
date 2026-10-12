import ParallaxLayer from './ParallaxLayer'

// Huge outlined word that slides horizontally behind a section as you scroll
const GhostText = ({ children, className = '', speed = 0.6 }) => (
  <div className={`pointer-events-none absolute left-0 right-0 overflow-hidden select-none ${className}`} aria-hidden>
    <ParallaxLayer axis="x" speed={speed} distance={500}>
      <span
        className="block whitespace-nowrap font-black uppercase leading-none text-[22vw]"
        style={{ WebkitTextStroke: '1.5px rgba(56,225,255,0.14)', color: 'transparent' }}
      >
        {children}
      </span>
    </ParallaxLayer>
  </div>
)

export default GhostText
