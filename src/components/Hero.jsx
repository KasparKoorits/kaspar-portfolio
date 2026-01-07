import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className={`hero ${visible ? "hero--visible" : ""}`}>
      <div className="hero__inner">
        <h1 className="hero__title hero__title--animated">
          Kaspar Koorits
        </h1>
        <p className="hero__subtitle">Software Developer</p>
        <button className="heroCta" onClick={scrollToAbout}>
          <span className="heroCta__text">Learn more about me</span>
          <span className="heroCta__icon">↓</span>
        </button>
      </div>
    </section>
  );
}
