import { m } from "framer-motion";
import { memo, useCallback } from "react";

function SceneHero() {
  // Smooth scroll handlers
  const toAbout = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth", block: isMobile ? "start" : "center" });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-6 max-w-[800px] mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-cream">
          Kaspar Koorits
        </h1>

        <p className="mt-6 text-silver text-lg md:text-xl font-medium">
          Aspiring software developer.
        </p>

        <div className="mt-10">
          <button
            onClick={toAbout}
            className="rounded-full px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base uppercase tracking-wide border-2 border-silver/40 bg-transparent hover:border-silver/70 hover:bg-silver/10 text-silver transition-all duration-300 hover:scale-105"
          >
            Learn more about me
          </button>
        </div>
      </m.div>
    </section>
  );
}

export default memo(SceneHero);
