import { motion } from "framer-motion";
import { memo } from "react";

const projects = [
  { title: "NBA Higher or Lower", desc: "NBA statistics guessing game.", tags: ["HTML", "CSS", "MySQL", "JS"], link: "https://github.com/KasparKoorits/NBA_HigherOrLower" },
  { title: "Scouting Portal", desc: "Web application for football scouts to track and manage player information.", tags: ["Node.JS", "CSS", "MySQL", "React", "Express"], link: "https://github.com/KasparKoorits/scout-portal" }
];

const fadeUp = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

function SceneProjects() {
  return (
    <section id="projects" className="sectionPad">
      <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
        <motion.div {...fadeUp}>
          <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">Projects · My Work</div>
          <div className="mt-3 text-3xl md:text-5xl font-black tracking-[-0.03em] text-statement">
            <span className="impact-text">Things</span> I've made
          </div>
          <div className="mt-4 text-cream/75 max-w-[70ch] font-medium leading-relaxed">
            Projects I've worked on during my studies and free time. Just trying to build stuff and learn along the way.
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ink p-6 hover:border-kendrick-red/50 transition-all duration-300 border border-kendrick-red/20 rounded-[18px] overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Premium gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-kendrick-red/8 via-ravens-purple/5 to-silver/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="font-black tracking-tight text-lg text-cream text-cinematic">{p.title}</div>
                  <div className="text-kendrick-red/80 group-hover:text-kendrick-red group-hover:scale-125 transition-all duration-300 text-xl">↗</div>
                </div>
                <div className="mt-2 text-cream/70 text-sm leading-relaxed font-medium">{p.desc}</div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill text-xs px-3 py-1.5">
                      <span className="pillDot" />
                      <span className="pillMain">{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SceneProjects);
