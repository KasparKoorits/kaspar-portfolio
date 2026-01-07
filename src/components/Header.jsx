import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
     <button className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Kaspar Koorits
      </button>


      <nav className="header__nav">
        <a className="header__link" href="#about">About</a>
        <a className="header__link" href="#projects">Projects</a>
        <a className="header__link" href="#skills">Skills</a>
        <a className="header__link" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
