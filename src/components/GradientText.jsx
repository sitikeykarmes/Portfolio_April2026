// React Bits — GradientText: animated flowing gradient
const GradientText = ({
  children,
  className = '',
  colors = ['#38e1ff', '#c4b5fd', '#ffffff', '#38e1ff'],
  animationSpeed = 6,
}) => (
  <span
    className={`inline-block bg-clip-text text-transparent ${className}`}
    style={{
      backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
      backgroundSize: '300% 100%',
      animation: `gradient-flow ${animationSpeed}s linear infinite`,
    }}
  >
    {children}
  </span>
)

export default GradientText
