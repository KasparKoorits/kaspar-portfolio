export default function Contact() {
  return (
    <section id="contact" className="section section--glass">
      <div className="section__inner contact__inner">
        <div className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__subtitle">Send a message or find me online.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__panel surface">
            <div className="contact__panelTitle">Send a message</div>

            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <label className="field">
                <span className="field__label">Name</span>
                <input className="field__input" placeholder="Your name" />
              </label>

              <label className="field">
                <span className="field__label">Email</span>
                <input className="field__input" type="email" placeholder="you@example.com" />
              </label>

              <label className="field">
                <span className="field__label">Message</span>
                <textarea className="field__input" rows={5} placeholder="Write your message..." />
              </label>

              <button className="btn btn--primary" type="submit">
                Send (soon)
              </button>
            </form>
          </div>

          <div className="contact__panel contact__panel--socials surface">
            <div className="contact__panelTitle">Socials</div>

            <div className="socialList">
              <a
                className="socialItem"
                href="https://github.com/KasparKoorits"
                target="_blank"
                rel="noreferrer"
              >
                <div className="socialItem__name">GitHub</div>
                <div className="socialItem__hint">github.com/KasparKoorits</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
