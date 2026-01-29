import { useState, memo, useCallback } from "react";

const navItems = [
  { id: "#about", label: "About" },
  { id: "#education", label: "Education" },
  { id: "#projects", label: "Projects" },
  { id: "#skills", label: "Skills" },
  { id: "#contact", label: "Contact", special: true }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const go = useCallback((id) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    const isMobile = window.innerWidth < 768;
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: isMobile ? "start" : "center" });
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="mt-3 sm:mt-4 glass px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <a
            href="#home"
            onClick={go("#home")}
            className="text-base sm:text-lg md:text-xl font-black tracking-tight text-kendrick uppercase"
          >
            Kaspar Koorits
          </a>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm text-cream/70 font-bold uppercase tracking-wide">
            {navItems.map(item => (
              <a key={item.id} href={item.id} onClick={go(item.id)} className={`transition-colors duration-200 ${item.special ? 'hover:text-silver' : 'hover:text-kendrick-red'}`}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-3 hover:bg-kendrick-red/20 rounded-lg transition-colors relative z-50 border border-kendrick-red/30"
            aria-label="Toggle menu"
            type="button"
          >
            <span className={`w-6 h-[3px] bg-kendrick-red shadow-kendrick transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-6 h-[3px] bg-kendrick-red shadow-kendrick transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[3px] bg-kendrick-red shadow-kendrick transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 glass px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navItems.map((item, i) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={go(item.id)}
                  className={`text-cream/70 transition-colors duration-200 font-bold uppercase text-sm tracking-wide py-2 ${i < navItems.length - 1 ? 'border-b border-white/10' : ''} ${item.special ? 'hover:text-silver' : 'hover:text-kendrick-red'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
