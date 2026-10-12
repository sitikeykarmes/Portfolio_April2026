import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ScrollVelocity from './components/ScrollVelocity'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import ClickSpark from './components/ClickSpark'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <ClickSpark>
    <main className="app">
      <ScrollProgress />
      <CursorGlow />
      <NavBar />
      <Hero />

      {/* ── Scroll Velocity Marquee ── */}
      <div className="bg-[#060910] border-y border-[#38e1ff]/10 py-6 overflow-hidden font-mono">
        <ScrollVelocity
          texts={['Developer • Coder • Programmer • Editor • Photographer • Engineer •', 'React • Python • Java • C++ • Git • AI •']}
          velocity={80}
          className="text-[#38e1ff]/25 font-bold"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </div>

      {/* ── About Section ── */}
      <About />

      {/* ── Experience Section ── */}
      <Experience />

      {/* ── Projects Section ── */}
      <Projects />

      {/* ── Skills/Tech Stack Section ── */}
      <Skills />

      {/* ── Contact Section ── */}
      <Contact />
    </main>
    </ClickSpark>
  )
}

export default App
