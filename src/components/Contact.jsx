import { useState } from "react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    hint: "github.com/kasparkoorits",
    url: "https://github.com/kasparkoorits",
  },
  {
    name: "Instagram",
    hint: "@KasparKoorits21",
    url: "https://instagram.com/kasparkoorits21",
  },
  {
    name: "Twitter/X",
    hint: "@KasparKoorits21",
    url: "https://twitter.com/kasparkoorits21",
  },
];

const STATUS_MESSAGES = {
  sent: { text: "Message sent ✅", error: false },
  error: { text: "Something went wrong.", error: true },
};

function SocialLink({ name, hint, url }) {
  return (
    <a className="socialItem" href={url} target="_blank" rel="noreferrer">
      <div className="socialItem__name">{name}</div>
      <div className="socialItem__hint">{hint}</div>
    </a>
  );
}

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
          <p className="contact__subtitle">Send me a message or find me online.</p>
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

              {STATUS_MESSAGES[status] && (
                <div className={`contactNote ${STATUS_MESSAGES[status].error ? "contactNote--error" : ""}`}>
                  {STATUS_MESSAGES[status].text}
                </div>
              )}
            </form>
          </div>

          <div className="surface">
            <div className="contact__panelTitle">Socials</div>
            <div className="socialList">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
