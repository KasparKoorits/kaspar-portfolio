import { useEffect, useRef, useState } from "react";

const groups = [
  { title: "Frontend", tag: "UI", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", tag: "Logic", items: ["PHP", "MySQL", "REST basics"] },
  { title: "Tools", tag: "Workflow", items: ["Git/GitHub", "Vite", "VS Code"] },
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section section--solid">
      <div className="section__inner">
        <div ref={ref} className={`skills__inner ${visible ? "is-visible" : ""}`}>
          <div className="skills__header">
            <h2 className="skills__title">Skills</h2>
            <p className="skills__subtitle">What I use to build projects.</p>
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
