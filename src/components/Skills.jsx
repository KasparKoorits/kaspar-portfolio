import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Skills() {
  const [ref, visible] = useIntersectionObserver(0.2);

  return (
    <section id="skills" className="section section--solid">
      <div ref={ref} className={`section__inner skills__inner ${visible ? "is-visible" : ""}`}>
        <div className="skills__header">
          <h2 className="skills__title">Skills</h2>
          <p className="skills__subtitle">Technologies I work with.</p>
        </div>

        <div className="skills__grid">
          <div className="panel surface surface--hover">
            <div className="panel__top">
              <div className="panel__title">Frontend</div>
              <div className="panel__tag">UI</div>
            </div>
            <div className="panel__items">
              <span className="pill">React</span>
              <span className="pill">Vite</span>
              <span className="pill">HTML</span>
              <span className="pill">CSS</span>
            </div>
          </div>

          <div className="panel surface surface--hover">
            <div className="panel__top">
              <div className="panel__title">Backend</div>
              <div className="panel__tag">Logic</div>
            </div>
            <div className="panel__items">
              <span className="pill">Node</span>
              <span className="pill">Express</span>
            </div>
          </div>

          <div className="panel surface surface--hover">
            <div className="panel__top">
              <div className="panel__title">Databases</div>
              <div className="panel__tag">Data</div>
            </div>
            <div className="panel__items">
              <span className="pill">MySQL</span>
              <span className="pill">MongoDB</span>
              <span className="pill">MariaDB</span>
              <span className="pill">Oracle APEX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
