import { motion } from "framer-motion";
import { memo } from "react";

const skills = [
  { group: "Frontend", list: ["React", "Vite", "HTML", "CSS"] },
  { group: "Backend", list: ["JavaScript", "Express", "REST API"] },
  { group: "Databases", list: ["MySQL", "MariaDB", "Oracle", "MongoDB"] },
  { group: "Design", list: ["Figma", "Photoshop"] }
];

const fadeUp = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25, margin: "0px 0px -100px 0px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

function SceneSkills() {
  return (
    <section id="skills" className="sectionPad">
      <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
        <motion.div {...fadeUp}>
          <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">Skills · Tech Stack</div>
          <div className="mt-3 text-2xl sm:text-3xl md:text-5xl font-black tracking-[-0.03em] text-statement">What I use</div>
          <div className="mt-4 text-base text-cream/75 max-w-[70ch] font-medium leading-relaxed">
            Technologies I've picked up and used in different projects.
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6">
          {skills.map((g, idx) => (
            <motion.div
              key={g.group}
              className="ink p-6 border border-kendrick-red/20 hover:border-kendrick-red/40 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
              transition={{ delay: 0.06 + idx * 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="font-black tracking-tight text-lg sm:text-xl text-cream text-cinematic uppercase">{g.group}</div>
                <div className="flex flex-wrap gap-2">
                  {g.list.map((s) => (
                    <span key={s} className="pill-simple">
                      <span className="pillDot" />
                      <span className="pillMain">{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SceneSkills);
