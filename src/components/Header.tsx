export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-10 py-6">
      <div className="flex items-center">
        {/* Replace '/logo.png' with your actual logo filename once placed in the public/ folder */}
        <img 
          src="/logo.png" 
          alt="Company Logo" 
          className="h-8 w-auto object-contain"
        />
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#specializations"
        >
          Specializations
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#process"
        >
          Work with Us
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#deliverables"
        >
          Deliverables
        </a>
        <a
          className="font-label-caps text-label-caps tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300 uppercase"
          href="#case-studies"
        >
          Case Studies
        </a>
      </nav>
      <div className="flex items-center gap-6">
        <a
          className="bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 scale-95 active:scale-90 transition-transform hover:brightness-110 uppercase"
          href="#consult"
        >
          GET_IN_TOUCH
        </a>
      </div>
    </header>
  );
}
