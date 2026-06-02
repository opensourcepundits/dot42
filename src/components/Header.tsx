import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check initial preference from class on html element or default to false
    setIsLightMode(document.documentElement.classList.contains("light"));
  }, []);

  const toggleLightMode = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
      return next;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { href: "#specializations", label: "Specializations" },
    { href: "#process", label: "Work with Us" },
    { href: "#deliverables", label: "Deliverables" },
    { href: "#case-studies", label: "Case Studies" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[110] bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-6 md:px-10 py-5 md:py-6">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className={`h-8 w-auto object-contain transition-all duration-300 ${isLightMode ? 'invert' : ''}`}
          />
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLightMode}
            className="text-on-surface-variant hover:text-primary-container transition-colors p-2 rounded-full hover:bg-surface-container-low"
            aria-label="Toggle light mode"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <a
            className="bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 scale-95 active:scale-90 transition-transform hover:brightness-110 uppercase"
            href="#consult"
          >
            GET_IN_TOUCH
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLightMode}
            className="text-on-surface-variant hover:text-primary-container p-2"
            aria-label="Toggle light mode"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-on-surface-variant hover:text-primary-container p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 md:hidden w-full bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 z-[105] py-6 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-label-caps text-label-caps tracking-widest text-on-surface hover:text-primary-container transition-colors duration-300 uppercase"
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-primary-container text-center text-on-primary font-label-caps text-label-caps px-6 py-4 mt-2 hover:brightness-110 uppercase"
              href="#consult"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET_IN_TOUCH
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
