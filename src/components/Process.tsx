import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const PHASES = [
  {
    id: "01",
    title: "Initiation & Legal Safeguards",
    steps: [
      {
        title: "Initial Discovery Call",
        content: "Align on the core business friction, high-level technical constraints, and define whether the target problem requires an agentic, predictive, or edge hardware architecture.",
      },
      {
        title: "NDA Execution",
        content: "Draft and sign a mutual Non-Disclosure Agreement (NDA) to guarantee strict confidentiality and ensure absolute zero data leakage protocols before any proprietary schemas or corporate data files are shared.",
      },
      {
        title: "Master Services Agreement (MSA) & Statement of Work (SOW)",
        content: "Execute a foundational MSA governing the consulting relationship, accompanied by a precise SOW that bounds the PoC scope, timelines, engineering fees, and explicit intellectual property (IP) terms.",
      },
    ],
  },
  {
    id: "02",
    title: "Technical Requirement Gathering & Data Audit",
    steps: [
      {
        title: "Deep-Dive Discovery Workshops",
        content: "Conduct granular interviews with internal engineering teams, domain experts, and stakeholders to map out existing system topologies, data residency parameters, and operational bottlenecks.",
      },
      {
        title: "Data Ingestion Audit & Schema Mapping",
        content: "Securely ingest a representative subset of historical data into a VPC-isolated or self-hosted staging environment, validating data quality, feature dimensions, and structural anomalies.",
      },
      {
        title: "Success Metric Definition",
        content: "Programmatically define what constitutes a successful PoC by locking down verifiable Key Performance Indicators (KPIs), such as target prediction latency, statistical confidence intervals, or autonomous agent task-completion rates.",
      },
    ],
  },
  {
    id: "03",
    title: "Architectural Design & Solution Framing",
    steps: [
      {
        title: "System Topology Blueprinting",
        content: "Design the end-to-end technical architecture, specifying the exact components needed—whether it is a localized compute pipeline running optimized vision models, or an interoperable multi-agent cluster utilizing the Model Context Protocol (MCP) framework.",
      },
      {
        title: "Deliverable Specification",
        content: "Enumerate the precise software artifacts to be built, moving past basic web applications to specify low-level deliverables like Ahead-of-Time (AOT) compiled binaries, custom OS images with strict swap/memory bounds, or containerized microservices.",
      },
      {
        title: "Architecture Review Milestone",
        content: "Present the comprehensive system design and security posture to the client’s technical leadership for formal sign-off before initializing the development cycle.",
      },
    ],
  },
  {
    id: "04",
    title: "Agile Development & Algorithmic Modeling",
    steps: [
      {
        title: "Infrastructure Provisioning",
        content: "Initialize secure sandbox environments using Infrastructure as Code (IaC) blueprints, ensuring strict Role-Based Access Control (RBAC) and total data isolation boundaries.",
      },
      {
        title: "Mathematical Modeling & Core Engineering",
        content: "Build custom statistical architectures, write parallelized tensor transformations using high-performance numerical computing frameworks, or orchestrate state-machine topologies for autonomous agent interaction.",
      },
      {
        title: "Rigorous Validation & Backtesting",
        content: "Run the models or agent workflows through strict testing loops—evaluating performance against extreme volatility scenarios, verifying data schemas, and bounding predictive outputs within validated confidence intervals.",
      },
    ],
  },
  {
    id: "05",
    title: "Delivery, Evaluation & Strategic Handover",
    steps: [
      {
        title: "Functional PoC Demonstration",
        content: "Present the working PoC artifact (e.g., an operational dashboard, an integrated MCP server tool catalog, or a live edge inference server pipeline) executing real-world multi-step enterprise workflows.",
      },
      {
        title: "Technical Performance Sign-Off",
        content: "Deliver the empirical validation logs, model cards, data lineage audits, and system vulnerability reports to prove the architecture satisfies all locked-down success metrics.",
      },
      {
        title: "Handover Blueprints & Next-Steps Roadmapping",
        content: "Deliver clean, minimalist developer SDK documentation, operational runbooks, and an enterprise scaling roadmap detailing the path from a localized PoC to a production-grade, distributed system rollout.",
      },
    ],
  },
];

export function Process() {
  const [expandedId, setExpandedId] = useState<string | null>(PHASES[0].id);

  return (
    <section className="px-10 pb-section-gap max-w-7xl mx-auto" id="process">
      <header className="mb-20">
        <div className="font-label-caps text-label-caps text-primary-container mb-4 tracking-[0.2em] uppercase">
          02 // PIPELINE
        </div>
        <h2 className="font-headline-lg text-headline-lg max-w-3xl mb-4 text-on-surface">
          Our Pipeline
        </h2>
        <div className="w-24 h-1 bg-primary-container"></div>
      </header>
      
      <div className="pipeline-container flex flex-col gap-4">
        {PHASES.map((phase) => {
          const isExpanded = expandedId === phase.id;

          return (
            <div
              key={phase.id}
              onClick={() => setExpandedId(isExpanded ? null : phase.id)}
              className={`pipeline-card bento-card rounded-lg p-6 md:p-8 transition-all duration-300 border-outline-variant/30 cursor-pointer group ${
                isExpanded ? "bg-surface-container-low border-primary-container/30" : "hover:border-primary-container/20"
              }`}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div
                    className="font-display-md text-primary-container leading-none"
                    style={{ fontSize: "40px" }}
                  >
                    {phase.id}
                  </div>
                  <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface">
                    {phase.title}
                  </h3>
                </div>
                <div className="text-on-surface-variant flex-shrink-0">
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8">
                      <div className="flex flex-col gap-6 pl-0 md:pl-20 border-t border-outline-variant/20 pt-6">
                        {phase.steps.map((step, idx) => (
                          <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-primary-container/20 hover:before:bg-primary-container/60 transition-colors">
                            <h4 className="font-label-caps text-label-caps text-primary-container uppercase mb-2">
                              {step.title}
                            </h4>
                            <p className="font-body-md text-on-surface-variant/80">
                              {step.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
