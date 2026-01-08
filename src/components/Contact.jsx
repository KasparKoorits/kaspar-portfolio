import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mwvpgqvb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--glass">
      <div className="section__inner">
        <div className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__subtitle">Send a message or find me online.</p>
        </div>

        <div className="contact__grid">
          <div className="surface">
            <div className="contact__panelTitle">Send a message</div>

            <form className="contactForm" onSubmit={onSubmit}>
              <div className="field">
                <div className="field__label">Name</div>
                <input className="field__input" name="name" required />
              </div>

              <div className="field">
                <div className="field__label">Email</div>
                <input className="field__input" name="_replyto" type="email" required />
              </div>

              <div className="field">
                <div className="field__label">Message</div>
                <textarea className="field__input" name="message" rows="5" required />
              </div>

              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              {status === "sent" && <div className="contactNote">Message sent ✅</div>}
              {status === "error" && (
                <div className="contactNote contactNote--error">Something went wrong.</div>
              )}
            </form>
          </div>

          <div className="surface">
            <div className="contact__panelTitle">Socials</div>
            <div className="socialList">
              <a
                className="socialItem"
                href="https://github.com/kasparkoorits"
                target="_blank"
                rel="noreferrer"
              >
                <div className="socialItem__name">GitHub</div>
                <div className="socialItem__hint">github.com/kasparkoorits</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
