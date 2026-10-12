import GhostText from '../components/GhostText'
import ParallaxLayer from '../components/ParallaxLayer'
import SectionLabel from '../components/SectionLabel'
import Noise from '../components/Noise'
import SpotlightCard from '../components/SpotlightCard'
import Reveal from '../components/Reveal'
import { PROJECTS, PROJECT_CATEGORY_COLORS } from '../constants'


const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#060910] overflow-hidden py-24"
    >
      {/* ── Noise grain texture ── */}
      <Noise
        patternSize={250}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={2}
        patternAlpha={18}
      />

      <div className="pointer-events-none absolute inset-0 bg-circuit" />
      <GhostText className="top-4" speed={-0.6}>Projects</GhostText>
      <ParallaxLayer speed={0.8} className="pointer-events-none absolute -right-40 top-20">
        <div className="h-[420px] w-[420px] rounded-full bg-[#8b7bff]/15 blur-[120px]" />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.5} className="pointer-events-none absolute -left-40 bottom-10">
        <div className="h-[380px] w-[380px] rounded-full bg-[#38e1ff]/10 blur-[120px]" />
      </ParallaxLayer>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel index="03">Projects</SectionLabel>
          <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-white leading-tight">
            Projects
            <span className="text-[#38e1ff]">.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={0.12 * idx} className="h-full">
            <SpotlightCard className="group h-full" contentClassName="flex flex-col p-6">
              {/* Top row — category + links */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${PROJECT_CATEGORY_COLORS[project.category]}`}
                >
                  {project.category}
                </span>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      {/* GitHub icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      {/* External link icon */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#38e1ff] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5 whitespace-pre-line">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* View More on GitHub Link */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/sitikeykarmes"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-6 py-3
              bg-white/5 border border-white/10 rounded-full
              text-white/70 font-medium hover:text-[#38e1ff] hover:bg-[#38e1ff]/10 hover:border-[#38e1ff]/30
              transition-all duration-300
            "
          >
            <span>View more on GitHub</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
