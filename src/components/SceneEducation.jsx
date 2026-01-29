import { m } from "framer-motion";
import { memo } from "react";

const education = [
  { school: "Tartu Vocational College", years: "2023 - Present", program: "Software Development" },
  { school: "Kõrveküla Põhikool", years: "2014 - 2023", program: "Primary Education" }
];

const fadeUp = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

function SceneEducation() {
  return (
    <section id="education" className="sectionPad">
      <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
        <m.div {...fadeUp}>
          <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">Education · Background</div>
          <div className="mt-3 text-3xl md:text-5xl font-black tracking-[-0.03em] text-statement">
            <span className="impact-text">Where</span> I've studied
          </div>
          <div className="mt-4 text-cream/75 max-w-[70ch] font-medium leading-relaxed">
            My education from primary school to where I am now.
          </div>
        </m.div>

        <div className="mt-10 grid gap-6">
          {education.map((edu, idx) => (
            <m.div
              key={edu.school}
              className="ink p-6 border border-kendrick-red/20 hover:border-kendrick-red/40 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 + idx * 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-black tracking-tight text-xl text-cream text-cinematic">{edu.school}</div>
                  <div className="mt-1 text-silver/80 font-semibold text-sm">{edu.program}</div>
                </div>
                <div className="text-cream/60 font-bold text-sm md:text-base tracking-wide">{edu.years}</div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SceneEducation);
