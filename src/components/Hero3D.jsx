import { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Deterministic PRNG so the particle field is stable between renders
const mulberry32 = (a) => () => {
  a |= 0; a = (a + 0x6d2b79f5) | 0
  let t = Math.imul(a ^ (a >>> 15), 1 | a)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const CYAN = '#38e1ff'
const VIOLET = '#8b7bff'

const Scene = ({ mouse }) => {
  const group = useRef()
  const ico = useRef()
  const ringA = useRef()
  const ringB = useRef()
  const cloud = useRef()
  const orbiters = useRef([])

  const positions = useMemo(() => {
    const rnd = mulberry32(7)
    const n = 1100
    const arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const r = 3 + rnd() * 3.2
      const theta = rnd() * Math.PI * 2
      const phi = Math.acos(2 * rnd() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const orbitData = useMemo(() => {
    const rnd = mulberry32(21)
    return Array.from({ length: 7 }, (_, i) => ({
      radius: 2.7 + rnd() * 1.6,
      speed: 0.15 + rnd() * 0.25,
      offset: (i / 7) * Math.PI * 2,
      tilt: (rnd() - 0.5) * 1.2,
      size: 0.12 + rnd() * 0.12,
      violet: i % 2 === 0,
    }))
  }, [])

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    const g = group.current
    // ease the whole rig toward the cursor
    g.rotation.y += (mouse.current.x * 0.7 - g.rotation.y) * 0.04
    g.rotation.x += (-mouse.current.y * 0.4 - g.rotation.x) * 0.04
    g.position.x += (mouse.current.x * 0.35 - g.position.x) * 0.04
    g.position.y += (mouse.current.y * 0.25 - g.position.y) * 0.04

    ico.current.rotation.x += dt * 0.18
    ico.current.rotation.y += dt * 0.25
    ringA.current.rotation.z += dt * 0.2
    ringB.current.rotation.x += dt * 0.12
    cloud.current.rotation.y += dt * 0.025

    orbiters.current.forEach((m, i) => {
      if (!m) return
      const d = orbitData[i]
      const a = t * d.speed + d.offset
      m.position.set(Math.cos(a) * d.radius, Math.sin(a * 1.3) * d.tilt * 1.5, Math.sin(a) * d.radius)
      m.rotation.x += dt
      m.rotation.y += dt * 0.7
    })
  })

  return (
    <group ref={group}>
      {/* core wireframe */}
      <mesh ref={ico}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.45} />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color={VIOLET} wireframe transparent opacity={0.5} />
      </mesh>

      {/* rings */}
      <mesh ref={ringA} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[2.3, 0.012, 8, 160]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.8} />
      </mesh>
      <mesh ref={ringB} rotation={[0.3, 0.9, 0]}>
        <torusGeometry args={[3.1, 0.01, 8, 200]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.7} />
      </mesh>

      {/* orbiting shards */}
      {orbitData.map((d, i) => (
        <mesh key={i} ref={(el) => (orbiters.current[i] = el)}>
          <octahedronGeometry args={[d.size, 0]} />
          <meshBasicMaterial color={d.violet ? VIOLET : CYAN} wireframe />
        </mesh>
      ))}

      {/* particle field */}
      <points ref={cloud}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#9fe9ff" size={0.035} sizeAttenuation transparent opacity={0.75} depthWrite={false} />
      </points>
    </group>
  )
}

const Hero3D = () => {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Scene mouse={mouse} />
    </Canvas>
  )
}

export default Hero3D
