import { Code2, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    window.history.pushState(null, "", window.location.pathname);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-10 gap-10">
      <div className="flex flex-col items-center md:items-start gap-6">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <img 
            src={isDarkMode ? "/logo.png" : "/logo-dark.png"} 
            alt="Company Logo" 
            className="h-8 w-auto object-contain transition-all duration-300 md:h-8"
          />
        </div>
        <p className="font-label-caps text-label-caps tracking-widest text-on-surface-variant max-w-xs text-center md:text-left leading-loose uppercase">
          © 2026 ALL RIGHTS RESERVED. PROTOCOL v4.0.1
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#specializations"
          onClick={(e) => handleNavClick(e, '#specializations')}
        >
          Specializations
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#process"
          onClick={(e) => handleNavClick(e, '#process')}
        >
          Work with Us
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#deliverables"
          onClick={(e) => handleNavClick(e, '#deliverables')}
        >
          Deliverables
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#case-studies"
          onClick={(e) => handleNavClick(e, '#case-studies')}
        >
          Case Studies
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary-container/10 transition-colors cursor-pointer text-on-surface hover:text-primary-container">
          <Code2 className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary-container/10 transition-colors cursor-pointer text-on-surface hover:text-primary-container">
           <Terminal className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
