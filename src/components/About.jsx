import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const INFO_CARDS = [
  {
    title: "Education",
    content: (
      <>
        <div>Kõrveküla Põhikool (2014-2023)</div>
        <div>Tartu Vocational College (2023-...)</div>
      </>
    ),
  },
  {
    title: "Interests",
    content: "Basketball • Motorsport • E-motorsports",
  },
  {
    title: "Right now",
    content: "Working on projects and picking up new skills along the way.",
  },
];

function InfoCard({ title, content }) {
  return (
    <div className="about__card">
      <div className="about__cardTitle">{title}</div>
      <div className="about__cardText">{content}</div>
    </div>
  );
}

export default function About() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="about" className="section section--glass">
      <div className="section__inner">
        <div ref={ref} className={`about__inner ${visible ? "is-visible" : ""}`}>
          <div>
            <h2 className="about__title">About</h2>
            <p className="about__text">
              Hello, I'm Kaspar Koorits and I'm studying software development at Tartu Vocational College.
              I enjoy turning my ideas and interests into working projects and improving step by step with every single one.
              Outside of coding, I’m into playing basketball and football, watching all kinds of motorsports, and competing in e-motorsports.
            </p>
          </div>

          <div className="about__right">
            {INFO_CARDS.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
