// Faux terminal window used in About
const TerminalCard = ({ title = 'kartikeyan@portfolio:~', lines = [], className = '' }) => (
  <div className={`overflow-hidden rounded-2xl border border-[#38e1ff]/20 bg-[#070c16]/90 shadow-[0_0_60px_rgba(56,225,255,0.08)] backdrop-blur-md ${className}`}>
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-xs text-white/40">{title}</span>
    </div>
    <div className="space-y-1.5 p-5 font-mono text-[13px] md:text-sm leading-relaxed">
      {lines.map((l, i) => (
        <div key={i} className="flex gap-2">
          {l.cmd ? (
            <>
              <span className="text-[#3dffa0]">$</span>
              <span className="text-white">{l.cmd}</span>
            </>
          ) : (
            <span className="pl-4 text-white/70">
              <span className="text-[#8b7bff]">{l.key}</span>
              <span className="text-white/30">: </span>
              <span className="text-[#38e1ff]">{l.val}</span>
            </span>
          )}
        </div>
      ))}
      <div className="flex gap-2">
        <span className="text-[#3dffa0]">$</span>
        <span className="caret" />
      </div>
    </div>
  </div>
)

export default TerminalCard
