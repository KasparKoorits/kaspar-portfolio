export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__name">Kaspar Koorits</div>
          <div className="footer__copy">© {year} Kaspar Koorits</div>
        </div>

        <div className="footer__right">
          <a className="footer__link" href="#about">About</a>
          <a className="footer__link" href="#projects">Projects</a>
          <a className="footer__link" href="#skills">Skills</a>
          <a className="footer__link" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
