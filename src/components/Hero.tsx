export function Hero() {
  return (
    <section
      className="min-h-screen pt-[120px] pb-section-gap px-10 flex flex-col justify-center"
      id="hero"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/30 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-primary-container uppercase">
              System Online: Protocol v4.0.1
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-[100px] leading-[0.9] tracking-tighter">
            Custom Machine Learning Architecture.{" "}
            <span className="text-primary-container">Engineered for Scale.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Architecting bespoke neural networks and enterprise data pipelines.
            Precision engineering for the next generation of data-driven
            intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary-container text-on-primary font-label-caps text-label-caps px-10 py-5 rounded-none transition-transform hover:brightness-110 active:scale-95 uppercase">
              START INFERENCE
            </button>
            <button className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-10 py-5 rounded-none transition-all hover:bg-on-surface/5 active:scale-95 uppercase">
              VIEW FRAMEWORKS
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant/20">
            <div>
              <p className="font-data-metric text-data-metric text-on-surface">
                99.98%
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">
                Inference Reliability
              </p>
            </div>
            <div>
              <p className="font-data-metric text-data-metric text-on-surface">
                &lt;4ms
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">
                Latent Throughput
              </p>
            </div>
            <div>
              <p className="font-data-metric text-data-metric text-on-surface">
                4.0 PFLOPS
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">
                Compute Capacity
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 relative flex justify-end items-center mt-12 md:mt-0">
          <div className="relative w-full aspect-square md:aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden bento-border">
            <img
              alt="Neural Network Visual"
              className="w-full h-full object-cover mix-blend-lighten opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbCNfxrt79qEk9VnKWEChPNfhDa_eQatVoh-MbFa4kB2JnC4Vbff_qImjz6T8ukTjFcRHmg9I4PTIZ3AxTVOT7o4AAQiemEZ_Vyxs8lsTtuoTRLospaOvQWVapGx4USdRLLtLRhjlObMNyrI2HpryyOMbJVpvI3UNByIK-t6CrKJdjjJ662xMBr0CZT5pp95Vp9MANCw2OkgFc3Sp26zaeaqXxbeGwcjkuCatZHxm8B16iPg-sxA9E46DNZxz3Ybo_RrMXXbbE1k"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
