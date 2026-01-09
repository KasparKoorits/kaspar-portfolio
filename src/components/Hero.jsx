export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <h1 className="hero__title hero-animate hero-delay-1">
          Kaspar Koorits
        </h1>

        <p className="hero__subtitle hero-animate hero-delay-2">
          Aspiring software developer.
        </p>

        <button
          className="hero__cta hero-animate hero-delay-3"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          Learn more about me
        </button>
      </div>
    </section>
  );
}
