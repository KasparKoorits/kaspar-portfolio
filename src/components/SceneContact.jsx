import { motion } from "framer-motion";
import { memo } from "react";

const socialLinks = [
  { href: "https://github.com/KasparKoorits", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kaspar-koorits-2bb1a4245/", label: "LinkedIn" }
];

const inputClass = "rounded-[12px] border border-kendrick-red/20 bg-white/[0.04] px-4 py-3 outline-none focus:border-kendrick-red/50 transition-colors text-cream placeholder:text-cream/40";
const fadeUp = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };

function SceneContact() {
  return (
    <section id="contact" className="sectionPad">
      <div className="glass px-4 sm:px-7 md:px-12 py-10 sm:py-14 md:py-16">
        <motion.div {...fadeUp}>
          <div className="text-xs tracking-[0.3em] uppercase text-silver font-bold subtitle-text">Contact · Get in Touch</div>
          <div className="mt-3 text-3xl md:text-5xl font-black tracking-[-0.03em] text-statement">
            <span className="impact-text">Get</span> in touch
          </div>
          <div className="mt-4 text-cream/75 max-w-[70ch] font-medium leading-relaxed">
            Feel free to reach out if you want to chat or have any questions.
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-2 gap-5 sm:gap-6">
          <form action="https://formspree.io/f/mwvpgqvb" method="POST" className="ink p-6 border border-kendrick-red/20">
            <div className="font-black text-cream text-cinematic">Send a message</div>
            <div className="mt-5 grid gap-4">
              <input type="text" name="name" required className={inputClass} placeholder="Your name" />
              <input type="email" name="email" required className={inputClass} placeholder="your.email@example.com" />
              <textarea name="message" required className={`min-h-[140px] resize-none ${inputClass}`} placeholder="Your message..." />
              <button
                type="submit"
                className="rounded-full px-6 py-3 font-black uppercase text-sm tracking-wider border-2 border-kendrick-red/60 bg-kendrick-red/15 hover:border-kendrick-red hover:bg-kendrick-red/25 transition-all duration-300 text-cream shadow-[0_4px_16px_rgba(220,20,60,0.3)] hover:shadow-[0_8px_24px_rgba(220,20,60,0.5)]"
              >
                Send Message →
              </button>
            </div>
          </form>

          <div className="ink p-6 border border-kendrick-red/20">
            <div className="font-black text-cream text-cinematic">Connect with me</div>
            <div className="mt-5 grid gap-3">
              {socialLinks.map(link => (
                <a key={link.label} className="pill justify-between hover:scale-[1.02] transition-transform" href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-3">
                    <span className="pillDot" />
                    <span className="pillMain">{link.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SceneContact);
