const projects = [
  {
    title: "NBA Higher or Lower",
    desc: "Guessing game using real life player data.",
    tags: ["HTML","CSS", "MySQL", "JavaScript"],
    link: "#",
  },
  {
    title: "Voting System",
    desc: "Database-driven voting app with triggers, vote updates, and live results.",
    tags: ["PHP", "MySQL"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website.",
    tags: ["React", "Vite", "CSS", ],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section--designed">
      <div className="section__inner projects">
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">Some things I’ve built recently.</p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project surface surface--hover">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.desc}</p>

              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {p.link !== "#" && (
                <a className="project__link" href={p.link} target="_blank" rel="noreferrer">
                  Open
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
