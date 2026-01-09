import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const groups = [
  { title: "Frontend", tag: "UI", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", tag: "Logic", items: ["PHP", "MySQL", "REST basics"] },
  { title: "Tools", tag: "Workflow", items: ["Git/GitHub", "Vite", "VS Code"] },
];

export default function Skills() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="skills" className="section section--solid">
      <div className="section__inner">
        <div ref={ref} className={`skills__inner ${visible ? "is-visible" : ""}`}>
          <div className="skills__header">
            <h2 className="skills__title">Skills</h2>
            <p className="skills__subtitle">Stuff I use or have used before to make school projects and random ideas.</p>
          </div>

          <div className="skills__grid">
            {groups.map((g) => (
              <div key={g.title} className="panel surface surface--hover">
                <div className="panel__top">
                  <div className="panel__title">{g.title}</div>
                  <div className="panel__tag">{g.tag}</div>
                </div>
                <div className="panel__items">
                  {g.items.map((i) => (
                    <span key={i} className="pill">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
