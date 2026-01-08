import { useEffect, useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <button
        className="header__logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Kaspar Koorits
      </button>

      <nav className="header__nav">
        {links.map((l) => (
          <button key={l.id} className="header__link" onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
