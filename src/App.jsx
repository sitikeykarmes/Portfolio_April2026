import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ScrollVelocity from './components/ScrollVelocity'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="app">
      <NavBar />
      <Hero />

      {/* ── Scroll Velocity Marquee ── */}
      <div className="bg-black py-6 overflow-hidden">
        <ScrollVelocity
          texts={['Developer • Coder • Programmer • Editor • Photographer • Engineer •', 'React • Python • Java • C++ • Git • AI •']}
          velocity={80}
          className="text-white/20 font-bold"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </div>

      {/* ── About Section ── */}
      <About />

      {/* ── Projects Section ── */}
      <Projects />

      {/* ── Skills/Tech Stack Section ── */}
      <Skills />

      {/* ── Contact Section ── */}
      <Contact />
    </main>
  )
}

export default App
