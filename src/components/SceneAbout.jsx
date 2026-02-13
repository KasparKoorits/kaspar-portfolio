import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    { id: "basketball", label: "Basketball", tag: "🏀 Sports", body: "I've been playing basketball since I was a kid. Over the years it's taught me how to work with others and stay consistent, even when things get tough, on and off the court.", title: "BASKETBALL" },
    { id: "ravens", label: "Ravens", tag: "🏈 Ravens", body: "Huge Baltimore Ravens and Lamar Jackson fan. Watching Lamar Jackson play through tough games and still find a way to win has taught me a lot about not giving up when things look bad.", title: "RAVENS" },
    { id: "simracing", label: "Sim Racing", tag: "🏎️ Sim racing", body: "I spend way too much time sim racing. One small mistake can mess up your entire lap, and honestly that's pretty similar to coding where one typo can break everything.", title: "RACING" },
    { id: "motorsport", label: "Formula 1", tag: "🏁 Motorsport", body: "I'm into Formula 1. It's cool seeing how teams obsess over every tiny detail to get faster, from pit stops to aerodynamics. It has made me realize how much small things matter.", title: "MOTORSPORT" },
    { id: "kendrick", label: "Music", tag: "🎵 Music", body: "I listen to a lot of Kendrick Lamar. His lyrics always have deeper meanings that make you think. It reminds me to actually put some thought into the stuff I do, be it coding or playing games.", title: "MUSIC" }
];

export default function SceneAbout() {
    const [active, setActive] = useState(null);
    const activeItem = items.find(x => x.id === active);

    return (
        <section id="about" className="sectionPad">
            <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
                    <div className="space-y-10">
                        <div>
                            <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">About · Me</div>
                            <div className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight text-statement">A bit about me</div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row gap-6">

                                <div className="space-y-3">
                                    <div className="text-2xl font-black text-cream">Kaspar Koorits</div>
                                    <div className="text-cream/70 font-semibold">3rd year @ Tartu Vocational College</div>
                                    <p className="text-base text-cream/80 leading-relaxed">
                                        My name is Kaspar Koorits, and I am 18 years old. I am currently studying software development at the Tartu Vocational College.
                                        I chose this field because I have always been interested in computers and technology. Although I only had basic knowledge of software development from my primary school, Kõrveküla Põhikool, I wanted to learn more.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {items.map(item => (
                                    <Tag
                                        key={item.id}
                                        active={active === item.id}
                                        onClick={() => setActive(item.id)}
                                        label={item.tag ?? item.label}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[260px]">
                        <AnimatePresence mode="wait">
                            {activeItem ? (
                                <motion.div
                                    key={activeItem.id}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    className="flex h-full flex-col justify-center rounded-xl border border-white/12 bg-[#121216] p-7 md:p-8"
                                >
                                    <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold">{activeItem.title}</div>
                                    <div className="mt-4 text-xl sm:text-2xl md:text-4xl font-black text-cream">{activeItem.label}</div>
                                    <div className="mt-4 text-base sm:text-lg text-cream/80 leading-relaxed">{activeItem.body}</div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    className="flex h-full flex-col items-center justify-center rounded-xl border border-white/10 bg-[#121216] p-7 md:p-8 text-center"
                                >
                                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-cream/60">Select an interest</div>
                                    <div className="mt-3 text-base text-cream/40 font-medium">to see what I'm about</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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