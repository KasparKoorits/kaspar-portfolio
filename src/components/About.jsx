import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function About() {
  const [ref, visible] = useIntersectionObserver(0.2);

  return (
    <section id="about" className="section section--glass">
      <div ref={ref} className={`section__inner about__inner ${visible ? "is-visible" : ""}`}>
        <div>
          <h2 className="about__title">About</h2>
          <p className="about__text">
            Hello, I’m Kaspar and I’m studying software development. I chose this field because I enjoy turning ideas into
            working applications and continuously improving my skills through hands-on projects.
          </p>
          <p className="about__text">
            I’m especially interested in building interactive web experiences and learning modern development tools.
            Outside of coding, I enjoy playing basketball, following motorsport, and competing in e-motorsports.
          </p>
        </div>

        <div className="about__right">
          <div className="about__card">
            <div className="about__cardTitle">Focus</div>
            <div className="about__cardText">Frontend • Backend • Databases</div>
          </div>

          <div className="about__card">
            <div className="about__cardTitle">Strengths</div>
            <div className="about__cardText">Structure • Creativity • Determination</div>
          </div>

          <div className="about__card">
            <div className="about__cardTitle">Currently learning</div>
            <div className="about__cardText">React + Vite</div>
          </div>
        </div>
      </div>
    </section>
  );
}
