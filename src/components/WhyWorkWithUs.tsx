import { Zap, Puzzle, ShieldCheck, Gem } from "lucide-react";

const reasons = [
  {
    title: "Agile & Transparent",
    description: "We bypass bureaucratic bloat. You get direct access to engineering talent, clear milestones, and rapid iterations.",
    icon: Zap,
  },
  {
    title: "Custom Topologies",
    description: "We don't sell off-the-shelf wrappers. We architect bespoke neural network deployments that align perfectly with your infrastructure constraints.",
    icon: Puzzle,
  },
  {
    title: "Data Privacy & Integrity",
    description: "Your proprietary data remains yours. We prioritize data integrity, operate under strict NDAs, and ensure zero data leakage across our localized sandbox environments.",
    icon: ShieldCheck,
  },
  {
    title: "Elite Craftsmanship",
    description: "We take pride in writing elegant, highly optimized code. Our deliverables are robust, well-documented, and production-ready from day one.",
    icon: Gem,
  }
];

export function WhyWorkWithUs() {
  return (
    <section className="pt-20 pb-section-gap" id="why-work-with-us">
      <header className="max-w-[1440px] mx-auto px-10 mb-20">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] uppercase">
            02 // WHY US
          </span>
          <h2 className="font-display-md text-headline-lg md:text-display-md text-on-surface">
            Why Work with Us
          </h2>
        </div>
      </header>
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="bg-surface-container border border-outline-variant/30 rounded-lg p-8 md:p-10 flex flex-col gap-6 hover:border-primary-container/50 transition-colors group cursor-default h-full"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="bg-surface-container-low p-3 rounded-full shrink-0 group-hover:bg-primary-container/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-container" />
                </div>
                <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface m-0">
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
