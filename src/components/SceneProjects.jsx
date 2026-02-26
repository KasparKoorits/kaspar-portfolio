import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

const projects = [
  { title: "NBA Higher or Lower", desc: "NBA statistics guessing game.", tags: ["HTML", "CSS", "MySQL", "JS"], link: "https://github.com/KasparKoorits/NBA_HigherOrLower", featured: true },
  { title: "Scouting Portal", desc: "Web application for football scouts to track and manage player information.", tags: ["Node.JS", "CSS", "MySQL", "React", "Express"], link: "https://github.com/KasparKoorits/scout-portal", featured: true },
  { title: "Mobile Furniture App (Work In Progress)", desc: "Mobile application for furniture shopping and customization.", tags: ["TypeScript", "Javascript", "CSS"], link: "https://github.com/KasparKoorits/Mobile-Furniture-App", featured: false },
  { title: "Simracing Fuel Calculator", desc: "Web application for calculating fuel usage in sim racing.", tags: ["JavaScript", "CSS", "React"], link: "https://github.com/KasparKoorits/react-fuelcalc", featured: false },
];

const fadeUp = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25, margin: "0px 0px -100px 0px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

function ProjectCard({ project, index, variant = "spotlight" }) {
  const isSpotlight = variant === "spotlight";
  const variantMotion = isSpotlight
    ? {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2, margin: "0px 0px -100px 0px" },
      transition: { delay: 0.06 + index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
    : {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -6 },
      transition: { delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    };

  const cardClasses = `group relative ink rounded-xl border transition-all duration-300 bg-black/40 backdrop-blur ${isSpotlight ? "p-6 border-kendrick-red/20 hover:border-kendrick-red/40" : "p-5 sm:p-6 border-white/10 hover:border-white/30"
    }`;

  return (
    <motion.a
      {...variantMotion}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
      whileHover={{ y: isSpotlight ? -6 : -4, scale: 1.01 }}
    >
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="font-black tracking-tight text-lg sm:text-xl text-cream text-cinematic">{project.title}</div>
          <div className="text-kendrick-red/80 group-hover:text-kendrick-red group-hover:scale-125 transition-all duration-300 text-xl">↗</div>
        </div>
        <div className="mt-2 text-cream/70 text-base leading-relaxed font-medium">{project.desc}</div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={`${project.title}-${tag}`} className="pill text-sm px-3 py-1.5">
              <span className="pillDot" />
              <span className="pillMain">{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function SceneProjects() {
  const [showArchive, setShowArchive] = useState(false);
  const spotlightProjects = projects.filter((project) => project.featured);
  const highlightedProjects = spotlightProjects.length
    ? spotlightProjects
    : projects.slice(0, Math.min(3, projects.length));
  const hiddenCount = Math.max(projects.length - highlightedProjects.length, 0);
  const archiveLabel = showArchive ? "Hide project list" : `View all projects (${projects.length})`;

  return (
    <section id="projects" className="sectionPad">
      <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
        <motion.div {...fadeUp}>
          <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">Projects · My Work</div>
          <div className="mt-3 text-2xl sm:text-3xl md:text-5xl font-black tracking-[-0.03em] text-statement">Things I've made</div>
          <div className="mt-4 text-base text-cream/75 max-w-[70ch] font-medium leading-relaxed">
            Projects I've worked on during my studies and free time. Just trying to build stuff and learn along the way.
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4 sm:gap-5">
          {highlightedProjects.map((project, index) => (
            <ProjectCard key={`spotlight-${project.title}`} project={project} index={index} variant="spotlight" />
          ))}
        </div>

        {projects.length > 0 && (
          <div className="mt-10 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-cream/70 font-semibold">Full Archive</div>
                <p className="text-sm text-cream/60">
                  {hiddenCount > 0
                    ? `${hiddenCount} additional project${hiddenCount === 1 ? "" : "s"} stay tucked away until you open the list.`
                    : "See the complete list without stretching the page."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowArchive((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cream/80 hover:text-cream hover:border-cream transition"
              >
                {archiveLabel}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {showArchive && (
                <motion.div
                  key="project-archive"
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 rounded-2xl border border-white/5 bg-black/40 px-4 sm:px-7 md:px-8 py-6 sm:py-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.35em] text-cream/70">Project List</div>
                    <p className="mt-2 text-sm text-cream/60">All projects, including the highlighted ones.</p>
                    <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 sm:gap-5">
                      {projects.map((project, index) => (
                        <ProjectCard key={`archive-${project.title}`} project={project} index={index} variant="archive" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(SceneProjects);