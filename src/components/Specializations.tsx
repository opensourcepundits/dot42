import {
  Focus,
  Eye,
  Network,
  LineChart,
  Cpu,
  FileText,
  Terminal,
  CircuitBoard,
} from "lucide-react";

export function Specializations() {
  return (
    <section className="px-10 pb-section-gap max-w-[1440px] mx-auto" id="specializations">
      <header className="mb-20">
        <div className="font-label-caps text-label-caps tracking-widest text-primary-container mb-4 uppercase">
          01 // EXPERTISE
        </div>
        <h2 className="font-headline-lg text-headline-lg max-w-2xl text-on-surface">
          Our Functional Specializations
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* 1. Computer Vision */}
        <div className="md:col-span-4 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[440px] rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Focus className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                SPATIAL INTEL
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              Computer Vision & Spatial Intelligence
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We engineer high-fidelity vision pipelines using custom
              segmentation and spatial tracking models. From advanced kinetic
              analysis to automated industrial inspection, we transform raw
              pixels into deterministic operational data.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <Eye className="text-primary-container/20 group-hover:text-primary-container transition-colors w-12 h-12" />
          </div>
        </div>

        {/* 2. LLMs & Agentic Networks */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[440px] rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Network className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                COGNITIVE SYSTEMS
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              Large Language Models & Agentic Networks
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed max-w-2xl">
              Move beyond basic chatbots. We architect secure, private LLM
              pipelines and autonomous multi-agent networks that execute
              complex, multi-step enterprise workflows with strict deterministic
              accuracy and zero data leakage.
            </p>
          </div>
          <div className="mt-8 border-t border-outline-variant/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase">
              AUTONOMOUS_AGENTS
            </div>
            <div className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase">
              ZERO_LEAKAGE
            </div>
            <div className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase">
              PRIVATE_PIPELINES
            </div>
            <div className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase">
              DETERMINISTIC
            </div>
          </div>
        </div>

        {/* 3. Predictive Analytics */}
        <div className="md:col-span-7 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[400px] rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LineChart className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                MATHEMATICAL ARCHITECTURE
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              High-Dimensional Predictive Analytics
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We build custom mathematical architectures designed to find signals
              in high-dimensional corporate noise. Anticipate demand surges,
              quantify risk parameters, and automate strategic decision-making
              with validated confidence intervals.
            </p>
          </div>
          <div className="h-20 flex items-end gap-1 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="flex-1 bg-primary-container/40 h-[40%] rounded-sm"></div>
            <div className="flex-1 bg-primary-container/40 h-[60%] rounded-sm"></div>
            <div className="flex-1 bg-primary-container/40 h-[50%] rounded-sm"></div>
            <div className="flex-1 bg-primary-container/40 h-[80%] rounded-sm"></div>
            <div className="flex-1 bg-primary-container/40 h-[95%] rounded-sm"></div>
            <div className="flex-1 bg-primary-container/40 h-[70%] rounded-sm"></div>
          </div>
        </div>

        {/* 4. Edge AI */}
        <div className="md:col-span-5 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[400px] rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                HARDWARE_OPTIMIZED
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              Edge AI & Embedded Machine Learning
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We optimize and compile custom neural networks for localized
              hardware environments (NVIDIA Jetson, embedded systems). Achieve
              sub-millisecond local inference speeds while eliminating cloud
              compute dependencies entirely.
            </p>
          </div>
          <div className="font-data-metric text-data-metric text-primary-container/80 group-hover:text-primary-container transition-colors mt-8">
            &lt;1ms LATENCY
          </div>
        </div>

        {/* 5. Document Intelligence */}
        <div className="md:col-span-6 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[440px] rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                SEMANTIC INFRASTRUCTURE
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              Document Intelligence & Cognitive File Infrastructure
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We replace rigid, traditional folder hierarchies with semantic
              document intelligence pipelines. By parsing and vectorizing
              unstructured multi-format data at scale, we build custom
              knowledge infrastructure that extracts latent metadata, maps
              cross-document dependencies, and provides instant contextual
              search.
            </p>
          </div>
        </div>

        {/* 6. MCP Frameworks */}
        <div className="md:col-span-6 bg-surface-container border border-outline-variant/30 p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between min-h-[440px] relative overflow-hidden rounded-lg">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-primary-container w-6 h-6" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                OPEN_STANDARDS
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
              Model Context Protocol (MCP) Frameworks
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We design and deploy open-standard MCP servers to anchor your
              agentic workflows. By standardizing the interface between
              foundational LLMs and your internal data layers (SQL, CRMs, local
              filesystems), we deliver hyper-contextual AI utility while
              maintaining absolute compliance and strict row-level access
              controls.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
            <CircuitBoard className="w-60 h-60 text-current" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
