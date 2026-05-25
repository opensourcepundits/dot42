import React from "react";
import { Terminal } from "lucide-react";

export function Consult() {
  return (
    <section className="pt-20 pb-section-gap px-10 max-w-7xl mx-auto" id="consult">
      <div className="mb-20 max-w-3xl">
        <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
          Partner with Our Engineers
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Briefly outline your data bottleneck. We review architecture layouts
          before our initial alignment call.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-5 space-y-12">
          <section>
            <h4 className="font-label-caps text-label-caps text-primary-container mb-6 uppercase">
              CONTACT_REGISTRY
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-on-surface">
                <Terminal className="text-primary-container w-6 h-6" />
                <span className="font-data-metric text-data-metric">
                  protocols@neuralcore.io
                </span>
              </div>
            </div>
          </section>
          <div className="relative aspect-video bg-surface-container-low border border-outline-variant/20 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxzA0yr5CWCPLJ2fPbX19EQYZIqeLlUt3Kz2ZrHQiNbVNmM04puvBx0d-4eMdx8NBTpc8qsIk9J6P3KO-JqjrdACo_FRQNAENa51HOCDcwYwdl5TiiTLR1mkNWTFQcAiC4vRFHEOtHW-z3oprPLAYK8VXu2Fs-8I0VyccWJICS84AlXqbSvEEgtk1nrsxOyxYVw2SBLspBIo6lUKxwLU7hVz-98hPB5bHehG4RaHqnuSYGP7C8NB1HNGsugfWL-e5zFBjds0F7qwM"
              referrerPolicy="no-referrer"
              alt="Hardware Stack"
            />
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low p-10 border border-outline-variant/20 relative rounded-lg">
          <form className="space-y-12">
            <div className="space-y-10">
              <div className="group">
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">
                  NAME / IDENTITY
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface focus:ring-0 focus:border-primary-container font-data-metric text-data-metric focus:outline-none"
                  placeholder="OPERATOR_NAME"
                  type="text"
                />
              </div>
              <div className="group">
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">
                  WORK EMAIL
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface focus:ring-0 focus:border-primary-container font-data-metric text-data-metric focus:outline-none"
                  placeholder="DOMAIN@ORG.COM"
                  type="email"
                />
              </div>
              <div className="group">
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">
                  TECHNICAL OBJECTIVE
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-on-surface focus:ring-0 focus:border-primary-container font-data-metric text-data-metric resize-none focus:outline-none"
                  placeholder="DESCRIBE_LATENCY_OR_COMPUTE_GAP"
                  rows={4}
                ></textarea>
              </div>
            </div>
            <button
              className="w-full py-6 bg-primary-container text-on-primary font-label-caps text-label-caps text-lg tracking-widest font-bold hover:brightness-110 active:scale-[0.98] transition-all uppercase rounded-none"
              type="submit"
            >
              Submit Architecture Request
            </button>
          </form>
          <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-primary-container rounded-tr-lg"></div>
        </div>
      </div>
    </section>
  );
}
