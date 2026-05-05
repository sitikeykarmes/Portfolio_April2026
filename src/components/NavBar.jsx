import { useEffect, useState } from 'react'
import { NAV_LINKS, RESUME_LINK } from '../constants'
import { FaBars, FaTimes, FaLock, FaUnlock } from 'react-icons/fa'
import ResumeModal from './ResumeModal'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isResumeUnlocked, setIsResumeUnlocked] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    let rafId = null

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10)
        rafId = null
      })
    }

    setScrolled(window.scrollY > 10)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">

      {/* Main Pill / Bar */}
      <div
        className="pointer-events-auto flex items-center justify-between w-[92%] md:w-full border"
        style={{
          maxWidth:        scrolled ? '820px'                   : '100%',
          marginTop:       scrolled ? '14px'                    : '0px',
          paddingLeft:     scrolled ? '20px'                    : 'max(24px, 5vw)',
          paddingRight:    scrolled ? '20px'                    : 'max(24px, 5vw)',
          paddingTop:      scrolled ? '10px'                    : '20px',
          paddingBottom:   scrolled ? '10px'                    : '20px',
          borderRadius:    scrolled ? '18px'                    : '0px',
          backdropFilter:  scrolled ? 'blur(20px)'              : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px)'         : 'blur(0px)',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.45)'        : 'transparent',
          borderColor:     scrolled ? 'rgba(255,255,255,0.12)'  : 'transparent',
          boxShadow:       scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >

        {/* ── Logo ── */}
        <a
          href="#hero"
          className="inline-flex items-center gap-0.5 text-lg md:text-xl font-semibold tracking-tight select-none leading-none flex-shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-white/70 -translate-y-0.5 inline-block">&lt;</span>
          <span className="text-white/90">Kartikeyan Kr</span>
          <span className="text-white/70 -translate-y-0.5 inline-block">/&gt;</span>
        </a>

        {/* ── Nav Links (Desktop) ── */}
        <ul
          className="hidden md:flex items-center"
          style={{
            gap: scrolled ? '24px' : '40px',
            transition: 'gap 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-white/90 hover:text-white text-base font-normal transition-colors duration-200 group pb-0.5"
              >
                {link.label}
                <span 
                  className={`absolute left-0 -bottom-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full ${
                    scrolled ? 'h-px' : 'h-[2px]'
                  }`} 
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Actions (Resume + Hamburger) ── */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Resume Button */}
          {isResumeUnlocked ? (
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 font-medium md:font-normal bg-white text-black rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-out cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5"
              style={{
                padding: scrolled ? '6px 14px' : '8px 20px',
                fontSize: scrolled ? '13px' : '15px',
                transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <FaUnlock size={scrolled ? 12 : 14} />
              RESUME
            </a>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 font-medium md:font-normal bg-white text-black rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-out cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5"
              style={{
                padding: scrolled ? '6px 14px' : '8px 20px',
                fontSize: scrolled ? '13px' : '15px',
                transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <FaLock size={scrolled ? 12 : 14} />
              RESUME
            </button>
          )}

          {/* Hamburger Icon (Mobile) */}
          <button 
            className="md:hidden text-white/80 hover:text-white p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          pointer-events-auto md:hidden w-[92%] mt-2 overflow-hidden
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) rounded-2xl
          ${menuOpen ? 'max-h-[300px] border border-white/10 opacity-100' : 'max-h-0 border-transparent opacity-0'}
        `}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}
      >
        <ul className="flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUnlock={() => {
          setIsResumeUnlocked(true)
          setIsModalOpen(false)
          window.open(RESUME_LINK, '_blank')
        }}
      />

    </nav>
  )
}

export default NavBar
