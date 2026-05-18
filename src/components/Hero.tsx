export function Hero() {
  return (
    <section
      className="min-h-screen pt-[120px] px-10 flex flex-col justify-center max-w-[1440px] mx-auto"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <h1 className="font-display-lg text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tighter">
            Custom Machine Learning Architecture.{" "}
            <span className="text-primary-container">Engineered for Scale.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Architecting bespoke neural networks and enterprise data pipelines.
            Precision engineering for the next generation of data-driven
            intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-none transition-transform hover:brightness-110 active:scale-95 uppercase">
              START INFERENCE
            </button>
            <button className="border border-outline-variant/30 text-on-surface font-label-caps text-label-caps px-8 py-4 rounded-none transition-all hover:bg-on-surface/5 active:scale-95 uppercase">
              VIEW FRAMEWORKS
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/20">
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
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[400px] lg:max-w-md xl:max-w-[480px] aspect-square bg-surface-container-low rounded-lg overflow-hidden bento-border">
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
