import { Box, Code2, Server, LayoutDashboard, Database, Globe, Smartphone, Binary } from "lucide-react";

const deliverables = [
  {
    title: "Agents",
    description: "Autonomous, specialized AI agents crafted to execute complex, multi-step enterprise workflows with deterministic accuracy.",
    icon: Box,
  },
  {
    title: "Agent harness",
    description: "Robust orchestration infrastructure to securely manage, evaluate, and scale your proprietary multi-agent networks.",
    icon: Code2,
  },
  {
    title: "Data lineage/audit report",
    description: "Comprehensive empirical validation logs and data audits tracking exact provenance and system vulnerability reports.",
    icon: Server,
  },
  {
    title: "Dashboard",
    description: "Custom observability consoles providing real-time telemetry, model metrics, and actionable analytics.",
    icon: LayoutDashboard,
  },
  {
    title: "Model Weights",
    description: "Securely delivered foundational or fine-tuned model artifacts, ready for internal deployment and version control.",
    icon: Database,
  },
  {
    title: "Web App",
    description: "Full-stack scalable web applications providing intuitive operational interfaces for complex AI architectures.",
    icon: Globe,
  },
  {
    title: "Mobile App",
    description: "Hardware-optimized mobile applications designed for robust edge inference in field scenarios.",
    icon: Smartphone,
  },
  {
    title: "Compiled Binaries",
    description: "Highly optimized, standalone executables tailored for specific hardware architectures and performance-critical environments.",
    icon: Binary,
  }
];

export function Deliverables() {
  return (
    <section className="pt-20 pb-section-gap" id="deliverables">
      <header className="max-w-[1440px] mx-auto px-10 mb-20">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] uppercase">
            03 // TANGIBLE OUTPUTS
          </span>
          <h2 className="font-display-md text-headline-lg md:text-display-md text-on-surface">
            Our Deliverables
          </h2>
        </div>
      </header>
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {deliverables.map((item, index) => (
            <div 
              key={index} 
              className="bg-surface-container border border-outline-variant/30 rounded-lg p-8 md:p-10 flex flex-col gap-6 hover:border-primary-container/50 transition-colors group cursor-default h-full"
            >
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
                <div className="bg-surface-container-low p-3 md:p-4 rounded-full shrink-0 group-hover:bg-primary-container/10 transition-colors">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-container" />
                </div>
                <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface m-0 md:!mb-4">
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-col h-full -mt-2 md:mt-0">
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
