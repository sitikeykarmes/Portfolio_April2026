// React Bits — ShinyText: light sweep across text
const ShinyText = ({ text, speed = 3, className = '' }) => (
  <span
    className={`inline-block bg-clip-text text-transparent ${className}`}
    style={{
      backgroundImage:
        'linear-gradient(110deg, rgba(255,255,255,0.45) 35%, #ffffff 50%, rgba(255,255,255,0.45) 65%)',
      backgroundSize: '200% 100%',
      animation: `shine ${speed}s linear infinite`,
    }}
  >
    {text}
  </span>
)

export default ShinyText
