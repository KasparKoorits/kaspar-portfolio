const PROJECTS = [
  {
    title: "NBA Higher or Lower",
    desc: "Guessing game using player PPG data",
    stack: ["React", "MySQL", "Node"],
  },
  {
    title: "Voting System",
    desc: "Database-driven voting app",
    stack: ["PHP", "MySQL"],
  },
  {
    title: "Portfolio Website",
    desc: "Interactive personal portfolio",
    stack: ["React", "Vite"],
  },
];

export default function Projects() {

  return (
    <section id="projects" className="section section--designed">
      <div className="section__inner projects__inner">
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">Some things I’ve built recently.</p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="projectCard surface surface--hover">
              <div className="projectCard__title">{p.title}</div>
              <div className="projectCard__sub">{p.desc}</div>

              <div className="projectCard__stack">
                {p.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
