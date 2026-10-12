// Tech-themed section eyebrow: "// 01 — about"
const SectionLabel = ({ index, children, className = '' }) => (
  <span className={`inline-flex items-center gap-3 font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#38e1ff]/80 ${className}`}>
    <span className="text-white/30">//</span>
    <span>{index}</span>
    <span className="h-px w-8 bg-gradient-to-r from-[#38e1ff]/70 to-transparent" />
    <span className="text-white/60">{children}</span>
  </span>
)

export default SectionLabel
