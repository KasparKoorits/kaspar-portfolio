import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section id="about" className="section section--glass">
      <div className="section__inner">
        <div ref={ref} className={`about__inner ${visible ? "is-visible" : ""}`}>
          <div>
            <h2 className="about__title">About</h2>
            <p className="about__text">
              Hello, I'm Kaspar Koorits and I'm studying software development at Tartu Vocational College.
              I enjoy turning ideas into working products and improving step by step with every project.
              Outside of coding, I’m into basketball, motorsport, and competing in e-motorsports.
            </p>
          </div>

          <div className="about__right">
            <div className="about__card">
              <div className="about__cardTitle">Education</div>
              <div className="about__cardText">
                <div>Kõrveküla Põhikool (2014-2023)</div>
                <div>Tartu Vocational College (2023-...)</div>
              </div>
            </div>
            <div className="about__card">
              <div className="about__cardTitle">Interests</div>
              <div className="about__cardText">Basketball • Motorsport • E-motorsports</div>
            </div>
            <div className="about__card">
              <div className="about__cardTitle">Right now</div>
              <div className="about__cardText">Working on projects and picking up new skills along the way.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
