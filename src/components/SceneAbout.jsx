import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: "basketball", label: "Basketball", body: "I've been playing basketball since I was a kid. Over the years it's taught me how to work with others and stay consistent, even when things get tough, on and off the court.", title: "BASKETBALL" },
  { id: "ravens", label: "Ravens", body: "Huge Baltimore Ravens and Lamar Jackson fan. Watching Lamar Jackson play through tough games and still find a way to win has taught me a lot about not giving up when things look bad.", title: "RAVENS" },
  { id: "simracing", label: "Sim Racing", body: "I spend way too much time sim racing. One small mistake can mess up your entire lap, and honestly that's pretty similar to coding where one typo can break everything.", title: "RACING" },
  { id: "motorsport", label: "Formula 1", body: "I'm into Formula 1. It's cool seeing how teams obsess over every tiny detail to get faster, from pit stops to aerodynamics. It has made me realize how much small things matter.", title: "MOTORSPORT" },
  { id: "kendrick", label: "Music", body: "I listen to a lot of Kendrick Lamar. His lyrics always have deeper meanings that make you think. It reminds me to actually put some thought into the stuff I do, be it coding or playing games.", title: "MUSIC" }
];

export default function SceneAbout() {
  const [active, setActive] = useState(null);
  const activeItem = items.find(x => x.id === active);

  return (
    <section id="about" className="sectionPad">
      <div className="relative overflow-hidden rounded-[28px] border border-kendrick-red/20 bg-gradient-to-br from-black/60 via-kendrick-red/5 to-black/60">
        <div className="relative px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 sm:gap-12 lg:gap-16 items-start">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">About · Me</div>
              <div className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.88] text-statement">A bit about me</div>
              <div className="mt-10">
                <div className="relative max-w-[640px]">
                  <div className="relative flex flex-col sm:flex-row items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-br from-kendrick-red/20 via-ravens-purple/15 to-silver/15 blur-2xl" />
                      <div className="relative h-[160px] w-[160px] md:h-[180px] md:w-[180px] rounded-[26px] bg-gradient-to-br from-kendrick-red/20 via-ravens-purple/15 to-court-orange/20 border-2 border-kendrick-red/30 flex items-center justify-center shadow-[0_8px_32px_rgba(220,20,60,0.25)]">
                      </div>
                    </div>

                    <div className="min-w-0 pt-1">
                      <div className="text-2xl md:text-2xl font-black tracking-tight text-cream text-cinematic">
                        Kaspar Koorits
                      </div>
                      <div>3rd year @ Tartu Vocational College</div>
                      <div className="mt-4 text-base md:text-[0.98rem] text-cream/85 leading-relaxed font-medium">
                        My name is Kaspar Koorits, and I am 18 years old. I am currently studying software development at the Tartu Vocational College.
                        I chose this field because I have always been interested in computers and technology. Although I only had really basic knowledge of software development from my primary school, Kõrveküla Põhikool, I really wanted to learn more.
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Floating tags, Mobile: Flex wrap */}
                  <div className="mt-12">
                    {/* Mobile view - flex wrap */}
                    <div className="flex md:hidden flex-col gap-4">
                      <div className="flex gap-2 justify-start">
                        <Tag active={active === "basketball"} onClick={() => setActive("basketball")} label="🏀 Sports" />
                        <Tag active={active === "ravens"} onClick={() => setActive("ravens")} label="🏈 Ravens" />
                      </div>
                      <div className="flex gap-2 justify-start ml-6">
                        <Tag active={active === "simracing"} onClick={() => setActive("simracing")} label="🏎️ Sim racing" />
                        <Tag active={active === "motorsport"} onClick={() => setActive("motorsport")} label="🏁 Motorsport" />
                      </div>
                      <div className="flex gap-2 justify-start ml-12">
                        <Tag active={active === "kendrick"} onClick={() => setActive("kendrick")} label="🎵 Music" />
                      </div>
                    </div>

                    {/* Desktop view - structured rows */}
                    <div className="hidden md:flex flex-col gap-6">
                      <div className="flex gap-6">
                        <Tag active={active === "basketball"} onClick={() => setActive("basketball")} label="🏀 Sports" />
                        <Tag active={active === "ravens"} onClick={() => setActive("ravens")} label="🏈 Ravens" />
                      </div>
                      <div className="flex gap-6 ml-12">
                        <Tag active={active === "simracing"} onClick={() => setActive("simracing")} label="🏎️ Sim racing" />
                        <Tag active={active === "motorsport"} onClick={() => setActive("motorsport")} label="🏁 Motorsport" />
                      </div>
                      <div className="flex gap-6 ml-28">
                        <Tag active={active === "kendrick"} onClick={() => setActive("kendrick")} label="🎵 Music" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {!activeItem && (
                <div className="rounded-[22px] border border-kendrick-red/15 bg-gradient-to-br from-kendrick-red/5 via-ravens-purple/5 to-transparent p-7 md:p-8">
                  <div className="text-center py-16">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-cream/60">Select an interest</div>
                    <div className="mt-3 text-base text-cream/40 font-medium">to see what I'm about</div>
                  </div>
                </div>
              )}
              {activeItem && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[22px] border border-white/12 bg-white/[0.04] p-7 md:p-8"
                >
                  <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold">{activeItem.title}</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-6"
                    >
                      <div className="text-xl sm:text-2xl md:text-4xl font-black text-cream">{activeItem.label}</div>
                      <div className="mt-4 text-base sm:text-lg text-cream/80 leading-relaxed">{activeItem.body}</div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Tag = memo(function Tag({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`pill transition-all ${active ? 'border-kendrick-red/70 bg-kendrick-red/12' : ''
        }`}
    >
      <span className="pillDot" />
      <span className="pillMain">{label}</span>
    </button>
  );
});
