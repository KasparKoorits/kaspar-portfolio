import { useMemo, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interest items with labels and descriptions
const items = [
  { id: "basketball", label: "Basketball", body: "I've been playing basketball since I was a kid. Over the years it's taught me how to work with others and stay consistent, even when things get tough, on and off the court.", emoji: "🏀", title: "BASKETBALL" },
  { id: "ravens", label: "Ravens", body: "Huge Baltimore Ravens and Lamar Jackson fan. Watching Lamar Jackson play through tough games and still find a way to win has taught me a lot about not giving up when things look bad.", emoji: "🏈", title: "RAVENS" },
  { id: "simracing", label: "Sim Racing", body: "I spend way too much time sim racing. One small mistake can mess up your entire lap, and honestly that's pretty similar to coding where one typo can break everything.", emoji: "🏎️", title: "RACING" },
  { id: "motorsport", label: "Formula 1", body: "I'm into Formula 1. It's cool seeing how teams obsess over every tiny detail to get faster, from pit stops to aerodynamics. It has made me realize how much small things matter.", emoji: "🏁", title: "MOTORSPORT" },
  { id: "kendrick", label: "Music", body: "I listen to a lot of Kendrick Lamar. His lyrics always have deeper meanings that make you think. It reminds me to actually put some thought into the stuff I do, be it coding or playing games.", emoji: "🎵", title: "MUSIC" }
];

export default function SceneAbout() {
  const [active, setActive] = useState(null);
  const activeItem = useMemo(() => items.find(x => x.id === active) ?? null, [active]);

  const handleTagClick = useMemo(() =>
    items.reduce((acc, item) => {
      acc[item.id] = () => setActive(item.id);
      return acc;
    }, {}),
    []);

  return (
    <section id="about" className="sectionPad">
      <div className="relative overflow-hidden rounded-[28px] border border-kendrick-red/20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_15%_25%,rgba(220,20,60,0.14),transparent_65%),radial-gradient(1000px_600px_at_85%_40%,rgba(255,215,0,0.08),transparent_65%),linear-gradient(to_bottom,rgba(15,10,10,0.60),rgba(10,10,10,0.88))]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(135deg,rgba(220,20,60,0.08)_0px,rgba(220,20,60,0.08)_1px,transparent_1px,transparent_24px)]" />
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[10px]" />

        <div className="relative px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 sm:gap-12 lg:gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">About · Me</div>
                <div className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.88] text-statement">
                  <span className="impact-text">A bit</span> about me
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35, margin: "0px 0px -100px 0px" }}
                transition={{ delay: 0.06, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <div className="relative max-w-[640px]">
                  <div className="relative flex flex-col sm:flex-row items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-br from-kendrick-red/20 via-ravens-purple/15 to-silver/15 blur-2xl" />
                      <div className="relative h-[160px] w-[160px] md:h-[180px] md:w-[180px] rounded-[26px] bg-gradient-to-br from-kendrick-red/20 via-ravens-purple/15 to-court-orange/20 border-2 border-kendrick-red/30 flex items-center justify-center shadow-[0_8px_32px_rgba(220,20,60,0.25)]">
                      </div>
                    </div>

                    <div className="min-w-0 pt-1">
                      <div className="text-xl md:text-2xl font-black tracking-tight text-cream text-cinematic">
                        Kaspar Koorits
                      </div>
                      <div className="mt-1 text-sm md:text-[0.98rem] text-purple font-bold uppercase tracking-wide">
                        3rd year @ Tartu Vocational College
                      </div>
                      <div className="mt-4 text-sm md:text-[0.98rem] text-cream/85 leading-relaxed font-medium">
                        Studying software development and working on projects that interest me. Learning how things work under the hood and trying to make them better.
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Floating tags, Mobile: Flex wrap */}
                  <div className="mt-12 relative min-h-[190px]">
                    {/* Mobile view - flex wrap */}
                    <div className="flex md:hidden flex-col gap-4">
                      <div className="flex gap-2 justify-start">
                        <Tag active={active === "basketball"} onClick={handleTagClick.basketball} theme="basketball" label="🏀 Sports" />
                        <Tag active={active === "ravens"} onClick={handleTagClick.ravens} theme="ravens" label="🏈 Ravens" />
                      </div>
                      <div className="flex gap-2 justify-start ml-6">
                        <Tag active={active === "simracing"} onClick={handleTagClick.simracing} theme="simracing" label="🏎️ Sim racing" />
                        <Tag active={active === "motorsport"} onClick={handleTagClick.motorsport} theme="motorsport" label="🏁 Motorsport" />
                      </div>
                      <div className="flex gap-2 justify-start ml-12">
                        <Tag active={active === "kendrick"} onClick={handleTagClick.kendrick} theme="kendrick" label="🎵 Music" />
                      </div>
                    </div>

                    {/* Desktop view - structured rows */}
                    <div className="hidden md:flex flex-col gap-6">
                      <div className="flex gap-6">
                        <Tag active={active === "basketball"} onClick={handleTagClick.basketball} theme="basketball" label="🏀 Sports" />
                        <Tag active={active === "ravens"} onClick={handleTagClick.ravens} theme="ravens" label="🏈 Ravens" />
                      </div>
                      <div className="flex gap-6 ml-12">
                        <Tag active={active === "simracing"} onClick={handleTagClick.simracing} theme="simracing" label="🏎️ Sim racing" />
                        <Tag active={active === "motorsport"} onClick={handleTagClick.motorsport} theme="motorsport" label="🏁 Motorsport" />
                      </div>
                      <div className="flex gap-6 ml-28">
                        <Tag active={active === "kendrick"} onClick={handleTagClick.kendrick} theme="kendrick" label="🎵 Music" />
                      </div>
                    </div>

                    {/* Decorative animated gradient orbs */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                      <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-kendrick-red/40 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                      <div className="absolute bottom-[25%] right-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-ravens-purple/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                      <div className="absolute top-[50%] left-[40%] w-24 h-24 rounded-full bg-gradient-to-br from-court-orange/25 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25, margin: "0px 0px -100px 0px" }}
              transition={{ delay: 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {!activeItem && (
                <div className="relative rounded-[22px] border border-kendrick-red/15 bg-gradient-to-br from-kendrick-red/5 via-ravens-purple/5 to-transparent p-7 md:p-8 overflow-hidden">
                  <div className="relative text-center py-16">
                    <div className="text-2xl md:text-3xl font-black text-cream/60 tracking-tight">
                      Select an interest
                    </div>
                    <div className="mt-3 text-cream/40 font-medium">
                      to see what I'm about
                    </div>
                  </div>
                </div>
              )}
              {activeItem && (
                <>
                  <div className="absolute -inset-8 rounded-[26px] bg-[radial-gradient(closest-side,rgba(183,255,0,0.10),transparent_70%)] blur-2xl" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-[22px] border border-white/12 bg-white/[0.04] p-7 md:p-8 overflow-hidden"
                  >
                    {/* Dynamic themed accent bar */}
                    <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-500 ${{ kendrick: 'bg-ravens-purple', basketball: 'bg-court-orange', ravens: 'bg-ravens-purple', simracing: 'bg-[#00D9FF]', motorsport: 'bg-kendrick-red' }[activeItem.id] || 'bg-kendrick-red'
                      }`} />

                    <div className="flex items-center gap-4 relative z-20">
                      <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold">
                        {activeItem.title}
                      </div>
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-kendrick-red/30 to-transparent" />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeItem.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6"
                      >
                        <div className="text-2xl md:text-4xl font-black tracking-tight text-cream text-statement">
                          {activeItem.label}
                        </div>
                        <div className="mt-4 text-cream/80 leading-relaxed font-medium text-lg">
                          {activeItem.body}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Tag = memo(function Tag({ active, onClick, label, theme }) {
  const styles = useMemo(() => ({
    kendrick: { base: '!border-ravens-purple/30 hover:!border-ravens-purple/60 hover:bg-ravens-purple/8', active: '!border-ravens-purple/70 bg-ravens-purple/12' },
    basketball: { base: '!border-court-orange/20 hover:!border-court-orange/40 hover:bg-court-orange/8', active: '!border-court-orange/60 bg-court-orange/10' },
    ravens: { base: '!border-ravens-purple/20 hover:!border-ravens-purple/40 hover:bg-ravens-purple/8', active: '!border-ravens-purple/60 bg-ravens-purple/10' },
    simracing: { base: '!border-[#00D9FF]/20 hover:!border-[#00D9FF]/40 hover:bg-[#00D9FF]/8', active: '!border-[#00D9FF]/60 bg-[#00D9FF]/10' },
    motorsport: { base: 'motorsport-theme', active: '!border-kendrick-red/60 bg-kendrick-red/10' },
  }), []);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`pill transition-all duration-300 ${active ? styles[theme]?.active || "pillActive" : styles[theme]?.base || ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: active ? 1.1 : 1
      }}
      transition={{
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 250,
        damping: 18
      }}
      whileHover={{ scale: active ? 1.15 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="pillDot" />
      <span className="pillMain">{label}</span>
    </motion.button>
  );
});
