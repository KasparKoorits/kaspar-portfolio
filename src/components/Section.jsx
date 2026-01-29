export default function Section({ id, label, title, subtitle, children }) {
  return (
    <section id={id} className="panel">
      <div className="relative px-7 py-8 md:px-10 md:py-10">
        <div className="absolute left-4 top-10 hidden md:block">
          <div className="text-xs tracking-[0.22em] text-muted/70 rotate-[-90deg] origin-left">
            {label}
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[68ch]">
            <h2 className="text-2xl md:text-[1.75rem] font-black tracking-tight">{title}</h2>
            {subtitle && <p className="muted mt-1 leading-relaxed">{subtitle}</p>}
          </div>
          <div className="hidden md:block h-[2px] w-28 bg-kendrick-red/80 rounded-full" />
        </div>

        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}
