import LogoLoop from '../components/LogoLoop'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiMongodb,
  SiNodedotjs,
  SiFramer,
  SiGithub,
  SiCplusplus,
  SiJavascript
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org/" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-16 bg-[#080808] border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-12 mb-10">
        <span className="text-white/40 text-sm font-medium tracking-[0.3em] uppercase">
          Tech Stack
        </span>
      </div>

      <div className="w-full h-[160px] relative overflow-hidden text-white/50 flex items-center">
        {/* Horizontal Logo Loop */}
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={20}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#080808"
          ariaLabel="Tech Stack"
        />
      </div>
    </section>
  )
}

export default Skills
