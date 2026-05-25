import React from "react";

export function Gallery() {
  return (
    <section className="pt-20 pb-section-gap" id="gallery">
      <header className="max-w-7xl mx-auto px-10 mb-20">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] uppercase">
            03 // IMPACT
          </span>
          <h2 className="font-display-md text-headline-lg md:text-display-md text-on-surface">
            Validated Technical Outcomes
          </h2>
        </div>
      </header>
      <div className="flex flex-col gap-section-gap max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 bento-card rounded-lg p-container-padding flex flex-col justify-center min-h-[480px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#00e5ff,transparent_70%)]"></div>
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">
              ACCURACY BENCHMARK
            </span>
            <div className="font-display-lg text-[80px] md:text-[140px] text-primary-container font-bold leading-none tracking-tighter mb-4">
              99.4%
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface">
              Inference Accuracy
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="h-1 w-12 bg-primary-container"></div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Solving Latency-Bound Bottlenecks
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Engineered a high-throughput pipeline utilizing a custom JAX/PyTorch
              hybrid stack.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border-b border-outline-variant/30 pb-4">
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase">
                  COMPUTE STACK
                </p>
                <p className="font-data-metric text-data-metric text-on-surface">
                  JAX + PyTorch
                </p>
              </div>
              <div className="border-b border-outline-variant/30 pb-4">
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase">
                  LATENCY REDUCTION
                </p>
                <p className="font-data-metric text-data-metric text-on-surface">
                  -120ms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
