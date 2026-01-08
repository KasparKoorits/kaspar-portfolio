export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__name">Kaspar Koorits</div>
          <div className="footer__copy">© {new Date().getFullYear()} • Built with React + Vite</div>
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
