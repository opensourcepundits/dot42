import { Code2, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-10 gap-8">
      <div className="flex flex-col gap-4">
        <div
          className="font-display-md text-display-md text-on-surface"
          style={{ fontSize: "32px", fontWeight: 700 }}
        >
          .42
        </div>
        <p className="font-label-caps text-label-caps text-on-surface-variant max-w-xs leading-loose uppercase">
          © 2026 .42 ARCHITECTURES. ALL RIGHTS RESERVED. PROTOCOL v4.0.1
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
          href="#capabilities"
        >
          Capabilities
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
          href="#process"
        >
          Process
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
          href="#gallery"
        >
          Gallery
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
          href="#consult"
        >
          Consult
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary-container/10 transition-colors cursor-pointer">
          <Code2 className="text-on-surface w-5 h-5" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary-container/10 transition-colors cursor-pointer">
          <Terminal className="text-on-surface w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
