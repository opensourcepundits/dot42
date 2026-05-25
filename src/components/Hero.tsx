import React from "react";
import { NNBackground } from "./NNBackground";

export function Hero() {
  return (
    <section
      className="relative min-h-screen pt-[120px] px-10 flex flex-col justify-center max-w-[1440px] mx-auto"
      id="hero"
    >
      <div className="absolute inset-0 -z-10">
        <NNBackground />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-12 space-y-6 md:space-y-8">
          <h1 className="font-display-lg text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tighter">
            Custom Deterministic AI Architectures{" "}
            <span className="block mt-2">
              <span className="text-primary-container">for Scale.</span>
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Architecting bespoke neural networks and enterprise data pipelines.
            Precision engineering for the next generation of data-driven
            intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => {
                document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-none transition-transform hover:brightness-110 active:scale-95 uppercase"
            >
              GET IN TOUCH
            </button>
            <button 
              onClick={() => {
                document.getElementById('specializations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-8 py-4 rounded-none transition-all hover:bg-on-surface/5 active:scale-95 uppercase"
            >
              WHAT WE DO
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
