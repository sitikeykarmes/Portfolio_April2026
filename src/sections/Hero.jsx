import Silk from '../components/Silk'
import BlurText from '../components/BlurText'

const PHOTO = '/images/Gemini_Generated_Image_d1q4lvd1q4lvd1q4-removebg-preview.png'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* ── Silk WebGL Background ── pointer-events-none lets wheel/scroll events pass through */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Silk
          speed={5}
          scale={1}
          color="#e6ccb7ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="relative flex items-center justify-center w-full">

          {/* Name text — sits BEHIND the photo (lower z-index) */}
          <div className="absolute z-10 flex justify-center w-full pointer-events-none select-none">
            <BlurText
              text="KARTIKEYAN KUMAR"
              delay={60}
              animateBy="letters"
              direction="top"
              animationFrom={{ filter: 'blur(12px)', opacity: 0, x: -40, y: 0 }}
              animationTo={[
                { filter: 'blur(6px)', opacity: 0.4, x: -10, y: 0 },
                { filter: 'blur(0px)', opacity: 1,   x: 0,   y: 0 },
              ]}
              stepDuration={0.45}
              className="text-[7vw] font-bold text-white/60 tracking-widest leading-none whitespace-nowrap"
            />
          </div>

          {/* Photo — sits ON TOP of the text (higher z-index) */}
          <div className="relative z-20 flex justify-center items-end">
            <img
              src={PHOTO}
              alt="Kartikeyan Kumar"
              className="h-[75vh] w-auto object-contain drop-shadow-2xl"
              draggable={false}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
