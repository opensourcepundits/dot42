import { Globe, Network, CircuitBoard, Activity } from "lucide-react";

export function CustomSolutions() {
  return (
    <section
      className="px-10 pb-section-gap bg-surface-container-lowest"
      id="custom-solutions"
    >
      <div className="max-w-7xl mx-auto py-24">
        <header className="mb-16">
          <span className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] uppercase">
            04 // CUSTOM_SOLUTIONS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">
            Engineered Ecosystems
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bento-card rounded-lg p-8 flex flex-col gap-4 group hover:border-primary-container/50 transition-colors">
            <Globe className="text-primary-container w-9 h-9" />
            <h4 className="font-headline-lg text-2xl text-on-surface">
              Frontend
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              Enterprise-grade websites, dashboards, and mobile apps built for
              performance.
            </p>
          </div>
          <div className="bento-card rounded-lg p-8 flex flex-col gap-4 group hover:border-primary-container/50 transition-colors">
            <Network className="text-primary-container w-9 h-9" />
            <h4 className="font-headline-lg text-2xl text-on-surface">
              Architecture
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              Interactive Data Architecture & Lineage Map integration for full
              stack visibility.
            </p>
          </div>
          <div className="bento-card rounded-lg p-8 flex flex-col gap-4 group hover:border-primary-container/50 transition-colors">
            <CircuitBoard className="text-primary-container w-9 h-9" />
            <h4 className="font-headline-lg text-2xl text-on-surface">
              Infrastructure
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              Microservices, Docker containerization, and automated CI/CD
              pipelines.
            </p>
          </div>
          <div className="bento-card rounded-lg p-8 flex flex-col gap-4 group hover:border-primary-container/50 transition-colors">
            <Activity className="text-primary-container w-9 h-9" />
            <h4 className="font-headline-lg text-2xl text-on-surface">
              Intelligence
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              Robust APIs, dynamic reporting engines, and integrated MLOps
              workflows.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-12">
          <span className="font-label-caps text-[10px] border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant uppercase">
            WEBSITES
          </span>
          <span className="font-label-caps text-[10px] border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant uppercase">
            DASHBOARDS
          </span>
          <span className="font-label-caps text-[10px] border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant uppercase">
            MOBILE APPS
          </span>
          <span className="font-label-caps text-[10px] border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant uppercase">
            APIS
          </span>
          <span className="font-label-caps text-[10px] border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant uppercase">
            MLOPS
          </span>
        </div>
      </div>
    </section>
  );
}
