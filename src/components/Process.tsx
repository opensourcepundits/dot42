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
        content: "Identify the core friction and high-level technical constraints. Determine the target architecture needed.",
      },
      {
        title: "NDA Execution",
        content: "Execute a mutual NDA to guarantee strict confidentiality. Ensure absolute zero data leakage before any proprietary data is shared.",
      },
      {
        title: "Master Services Agreement (MSA) & Statement of Work (SOW)",
        content: "Execute a foundational MSA and a concise SOW defining the project scope, engineering fees, and IP terms.",
      },
    ],
  },
  {
    id: "02",
    title: "Technical Requirement Gathering & Data Audit",
    steps: [
      {
        title: "Deep-Dive Discovery Workshops",
        content: "Conduct granular interviews with your engineering teams to map out existing system topologies. Establish data residency boundaries and operational bottlenecks.",
      },
      {
        title: "Data Ingestion Audit & Schema Mapping",
        content: "Securely ingest a subset of data into a staging environment. Validate quality, identify anomalies, and establish schemas.",
      },
      {
        title: "Success Metric Definition",
        content: "Define specific Key Performance Indicators (KPIs) to quantify PoC success. Establish clear targets for latency, accuracy, or completion rates.",
      },
    ],
  },
  {
    id: "03",
    title: "Architect, Blueprint & Frame Solutions",
    steps: [
      {
        title: "System Topology Blueprinting",
        content: "Design the technical architecture and map exactly how autonomous components operate. Establish boundaries between agents and data sources.",
      },
      {
        title: "Deliverable Specification",
        content: "Enumerate the precise software artifacts and agent network structures to be built. Highlight low-level deliverables such as binaries or microservices.",
      },
      {
        title: "Architecture Review Milestone",
        content: "Obtain formal sign-off from technical leadership on the system design and security posture. Ensure all technical requirements have been fully addressed.",
      },
    ],
  },
  {
    id: "04",
    title: "Provision, Model & Develop Algorithms",
    steps: [
      {
        title: "Infrastructure Provisioning",
        content: "Deploy secure sandbox environments using Infrastructure as Code (IaC). Establish strict Role-Based Access Control and data isolation.",
      },
      {
        title: "Mathematical Modeling & Core Engineering",
        content: "Develop specialized algorithms, agents, and state-machine topologies tailored to your use case. Build custom numerical transformations where required.",
      },
      {
        title: "Rigorous Validation & Backtesting",
        content: "Subject the system to strict testing loops against extreme volatility scenarios. Verify schemas and predictive outputs within confidence intervals.",
      },
    ],
  },
  {
    id: "05",
    title: "Delivery, Evaluation & Strategic Handover",
    steps: [
      {
        title: "Functional PoC Demonstration",
        content: "Present the functioning PoC artifact executing real-world enterprise workflows. Prove end-to-end integration across agents or pipelines.",
      },
      {
        title: "Technical Performance Sign-Off",
        content: "Deliver empirical logs, lineage audits, and vulnerability reports. Verify that the architecture meets all locked-down success metrics.",
      },
      {
        title: "Handover Blueprints & Next-Steps Roadmapping",
        content: "Provide minimalist software SDK documentation and operational runbooks. Detail a scaling roadmap from PoC to a distributed production system.",
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
