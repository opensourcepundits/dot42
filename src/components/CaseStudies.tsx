import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";

const ARTICLE_CONTENT = `The initial wave of unbridled optimism surrounding artificial intelligence (AI) has given way to a stark macroeconomic reality: building and maintaining these systems is staggeringly expensive. While early narratives focused on the ease of software deployment, recent data shows that the underlying infrastructure, compute power, and energy demands are straining corporate balance sheets and electrical grids alike.

Far from a low-cost software revolution, the current era of frontier AI resembles a capital-intensive heavy industry.

The Staggering Scale of Capital Expenditure
To keep up with the demands of training next-generation large language models (LLMs) and expanding data centers, the world’s largest tech companies, often referred to as hyperscalers, have aggressively scaled up their spending.

According to financial analyses, hyperscalers like Amazon, Google, Meta, Microsoft, and Oracle allocated approximately $342 billion to capital expenditures in 2025 alone, representing a massive 62 percent increase from the prior year (Wyonch, 2026). This historic upward trajectory shows no signs of slowing down, with AI-related capital expenditures projected to hit a jaw-dropping $527 billion in 2026 (Wyonch, 2026).

These massive outlays are primarily funneled into three high-cost areas:

Specialized Semiconductors: Procuring leading-edge AI chips (like Nvidia’s H100 and B200 platforms), which command premium pricing due to hardware monopolies and supply chain bottlenecks.

Data Center Construction: Building specialized facilities engineered specifically to handle high-density computing server configurations.

Advanced Cooling & Networking: Upgrading infrastructure to handle intense heat outputs and high-bandwidth networking requirements.

Infrastructure Costs: Hundreds of Millions Per Run
The sheer cost of developing frontier models creates a high barrier to entry that only a handful of well-capitalized tech giants can afford. Industry data highlights a massive cost disparity depending on the development approach:

Closed-Source Frontier Models: Major closed-source models (such as GPT-5) are estimated to cost $500 million or more for a single full training run when accounting for the vast infrastructure, R&D overhead, dataset scale, and safety engineering required (Li, 2026).

Open-Source Efficiencies: In contrast, open-source developers have found highly efficient alternative architectures. For example, DeepSeek reported that its V3 model required roughly $5.6 million in direct GPU-hours to train, operating at a mere fraction of the budget utilized by major closed-source labs (Li, 2026).

However, training is only the first hurdle. Operating these models at scale creates a continuous, compounding financial drain. Closed-source frontier models can cost anywhere from several dollars to tens of dollars per million tokens via APIs, with premium outputs easily climbing past $10 to $70 per million tokens (Li, 2026). When millions of users query these models simultaneously, operational costs climb drastically.

The Energy Crunch and Grid Stress
Beyond the price of silicon and software, the hidden structural bottleneck of the AI boom is energy. Data centers are exceptionally power-hungry, consuming anywhere from 10 to 50 times more energy per square foot than a standard commercial office building (Pekny, 2026).

The aggregate impact on global utilities is immense. Global electricity demand from data centers alone is estimated to reach roughly 700 Terawatt-hours (TWh) (BERAHAB, 2026). To illustrate the severity of this load growth, meeting the projected surge in computing demand over the next few years would theoretically require constructing the equivalent of dozens of new 1,000-megawatt nuclear reactors operating at a 90% capacity factor (Pekny, 2026).

Because traditional power grids are struggling to absorb these localized energy shocks, tech companies are forced to explore capital-heavy alternative power agreements, further driving up the total cost of ownership.

The Return on Investment Dilemma
The central anxiety currently gripping the financial sector is whether these historic investments will ever translate into proportional macroeconomic productivity.

Historically, large IT companies funded their expansions internally out of their operating cash flows. Today, the sheer scale of the AI infrastructure boom is forcing leading firms to transition heavily toward debt financing (Aldasoro, 2026).

While AI investments have significantly boosted gross domestic product (GDP) via capital deepening, accounting for a substantial portion of recent US economic growth through the construction of facilities and chip manufacturing, macroeconomic data shows that this investment has not yet fueled widespread, measurable productivity growth across G7 countries (Wyonch, 2026). Economists remain sharply divided on the long-term impact, with projections ranging from a robust 1.5 percent annual labor-productivity growth down to a conservative 1 percent cumulative gain spread out over an entire decade (Wyonch, 2026).

Ultimately, as the cost of electricity, hardware amortizations, and debt servicing remain high, enterprises are facing a sobering reality: artificial intelligence is currently an incredibly expensive asset to maintain, and the clock is ticking for the software to generate the revenue needed to justify its historic price tag.

References
Aldasoro, I. (2026). Financing the AI boom: from cash flows to debt. Bank for International Settlements, (120), 1-5.
Cited by: 1

BERAHAB, R. (2026). WHAT 2025-2026 TELLS US ABOUT THE FUTURE OF GLOBAL ENERGY. Policy Center for the New South, (02/26), 1-8.
Cited by: 1

Li, C. (2026). The Coming Disruption: How Open-Source AI Will Challenge Closed-Model Giants. California Management Review, 1-6.

Pekny, J. (2026). The AI-Energy Nexus. Frontiers in Energy Research, 1-7.

Wyonch, R. (2026). From Hype to Output: How AI Investment Translates to Real Productivity Gains. C.D. Howe Institute Commentary, 1-12.`;

const ARTICLE_2_CONTENT = `The initial corporate race to deploy the largest, most powerful frontier artificial intelligence (AI) models has hit a harsh economic wall. In the early phases of the generative AI boom, enterprises defaulted to massive, closed-source Large Language Models (LLMs) for almost every task. However, as enterprise generative AI spending surged to $37 billion, executives faced a sobering realization: routing routine, high-volume tasks to trillion-parameter models is an unsustainable financial drain (Pfeifer, 2026).

The industry is undergoing a structural paradigm shift. Instead of relying on a single, massive "generalist" cloud model, modern enterprise architectures are pivoting toward right-sized, domain-specific Small Language Models (SLMs) and custom architectures.

The Economic Catalyst for Smaller Models
The primary driver behind this architectural shift is pure cost efficiency. Trillion-parameter frontier models require massive computing power, expensive token-based API fees, and complex cloud infrastructure.

Recent enterprise data highlights that small language models, typically ranging from 500 million to 10 billion parameters, deliver 70 to 90 percent of frontier model capability on standard business workloads at a mere 5 to 15 percent of the cost (Logiciel, 2026). When evaluating production metrics at scale, specialized SLMs do not just match frontier performance at a lower price point; they actively outperform them in critical operational categories:

Drastically Lower Inference Cost: Swapping a generalized model for an SLM allows organizations to slash their routine, high-volume API costs.

Reduced Latency: Because they have fewer layers and smaller hidden dimensions, smaller models process tokens rapidly, enabling near real-time user experiences (Trantor, 2026).

Hardware Flexibility: A 7-billion parameter model that previously required vast memory allocations can now be optimized to run on standard, consumer-grade corporate hardware or local edge devices instead of high-end, dedicated GPU clusters (Pfeifer, 2026).

For enterprises managing millions of daily queries, shifting from a generic cloud model to a locally hosted or specialized small model represents the difference between a bleeding balance sheet and a highly profitable AI application.

Customization and the "Specialization Advantage"
Beyond financial considerations, big generalist models bring vast amounts of capability that specific enterprise tasks simply do not require. A customer service bot or a document-parsing pipeline does not need to know how to write poetry or analyze historical precedents; it needs to understand the company's specific product line, compliance protocols, and legacy data structures.

This reality has introduced the "Specialization Advantage" (Pfeifer, 2026). When an enterprise takes a lightweight base open-source SLM (such as Microsoft's Phi series, Google's Gemma, or Meta's smaller LLaMA variants) and fine-tunes it on proprietary data, it creates a unique competitive moat. A fine-tuned, smaller model frequently beats massive, generalist models at focused tasks, such as extracting metadata from unstructured financial receipts or automating medical data transcription, because its training dataset is meticulously curated for that specific domain (Trantor, 2026; Reddit, 2026).

Privacy, Security, and Data Governance
As regulatory scrutiny intensifies, data sovereignty has become a major roadblock for cloud-based LLM adoption. Passing highly sensitive corporate data, medical records, or proprietary financial code through external, third-party cloud APIs introduces strict regulatory risks under compliance structures like GDPR or HIPAA.

Smaller models offer a definitive solution to this security bottleneck. Because of their lightweight computational footprint, SLMs can be easily deployed within an enterprise’s own air-gapped infrastructure, private virtual clouds (VPCs), or local device NPUs (Neural Processing Units) (Reddit, 2026). Keeping the data entirely in-house eliminates the risk of corporate data leaks, data-poisoning via external vendors, or compliance failures.

The Rise of Hybrid and Routing Architectures
The transition to smaller models is not a total rejection of larger frontier models; rather, it is a migration toward intelligent, hybrid orchestration. Instead of picking a single model for everything, the standard enterprise architecture uses a "routing framework" (Logiciel, 2026).

Under this routing architecture, a central gatekeeper assesses incoming user queries. If a task requires highly complex, multi-step strategic analysis or broad general knowledge, it is routed to an external frontier LLM. However, if the task is a repetitive, structured function, accounting for roughly 80% of routine enterprise workloads, it is handled by a cheap, fast, customized small model (Reddit, 2026).

Ultimately, the era of treating AI as an unstructured, experimental playground is over. As organizations focus heavily on Total Cost of Ownership (TCO) and actual return on investment, the businesses that master the rapid deployment and fine-tuning of domain-specific small models will operate with immense cost and speed advantages over competitors still dependent on bloated, external cloud APIs.

References
Logiciel. (2026). Small Models, Big Wins: When SLMs Beat LLMs in Enterprise AI. Logiciel Industry Insights, 1-4.

Pfeifer, K. (2026). Small Language Models: Your Next Path from AI Experimentation to Enterprise Production. Chief Data & AI Officer Strategy Papers, 1-7.

Reddit. (2026). Why 2026 is officially the year of Small Language Models (SLMs) - and why it matters for your privacy. r/AI_Agents Community Analysis, 1-3.

Trantor. (2026). Small Language Models (SLMs) Guide 2026: Use Cases & Benefits. Trantor Tech Publications, 1-5.`;

const caseStudies = [
  {
    id: 1,
    title: "AI is neither green nor cheap: a study of architectural malpractice",
    metric: "Macroeconomic Reality",
    description:
      "The Realities of the API Token Bleed:\n\n• The High-Volume Enterprise Bill: High-volume automated systems and RAG pipelines easily cross **1 million** requests per month, driving commercial API inference costs between **$30,000** to **$150,000+** monthly (**$360K** to **$1.8M** annually) just to keep the lights on. (Azilen Infrastructure Cost Audit)\n\n• The Per-User Scaling Trap: Major AI vendors have quietly shifted enterprise tier pricing to a combined model: flat seat fees plus un-capped API usage rates. For power users deploying coding and agentic loops, actual consumption easily spikes to **$1,000+** per user, per month in API tokens. (Anthropic Enterprise Terms / Simon Willison Audit)\n\n• The Enterprise Baseline: Over **37%** of enterprises now burn through more than **$250,000** annually strictly on external LLM APIs, with more than **1,000** top-tier organizations exceeding **$1,000,000** per year in commercial AI platform spend. (Kong Architecture Survey / Anthropic Corporate Disclosures)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    article: ARTICLE_CONTENT
  },
  {
    id: 2,
    title: "Small custom models are the way to go",
    metric: "80% Workload",
    description:
      "• The Challenge: Businesses are increasingly frustrated by the bloated infrastructure and unpredictable costs of general-purpose models, which often process unnecessary data and struggle with highly specialized, domain-specific tasks.\n\n• The Solution: We transitioned workflows to lean, custom-trained Small Language Models (SLMs) fine-tuned on curated industry datasets, enabling high-performance inference that runs entirely on cost-effective, edge-ready hardware.\n\n• The Impact: Achieved a **90%** reduction in infrastructure overhead and **4x** faster response times, while significantly boosting task-specific accuracy and ensuring total data sovereignty.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1931",
    article: ARTICLE_2_CONTENT
  },
  {
    id: 3,
    title: "Deterministic Vision Pipelines for High-Speed Manufacturing",
    metric: "$2.4M Annual Savings",
    description:
      "• The Challenge: An automotive parts supplier suffered from microscopic production-line defects that evaded human QA, resulting in systemic downstream assembly errors and massive monthly product scrap.\n\n• The Solution: We engineered and quantized a custom localized neural network (using INT8 optimization), deploying it directly onto NVIDIA Jetson hardware at the assembly line for strictly offline inference.\n\n• The Impact: Attained sub-millisecond local processing speed without ever touching the cloud. The system detected **99.8%** of defects on the line, producing immediate operational savings of **$2.4M** per year.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    title: "Preemptive Churn Interception via Behavioral Analytics",
    metric: "+22% LTV Retention",
    description:
      "• The Challenge: A massive enterprise SaaS platform struggled with reactive churn management. They were frequently losing their highest-value subscribers because their data systems could not reliably flag early dissatisfaction signals.\n\n• The Solution: We integrated algorithmic forecasting models to project precise lifetime value against highly nuanced transactional data, seamlessly hooking proactive engagement triggers into their CRM environments.\n\n• The Impact: The client successfully shifted from reactive damage repair to proactive rescue, identifying high-risk accounts weeks earlier and increasing total top-tier subscriber LTV by **22%**.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  },
];

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<{title: string, content: string} | null>(null);

  const formatText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-on-surface">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  
  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedArticle]);

  return (
    <>
      <section className="pt-20 pb-section-gap px-10 max-w-7xl mx-auto" id="case-studies">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
              Featured Articles & Implementations
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Explore our latest thoughts, architecture deployments, and infrastructure performance metrics across enterprise ecosystems.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden bg-surface-container-low border border-outline-variant/20 rounded-lg min-h-[550px] lg:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col h-full absolute inset-0"
            >
              <div className="p-8 md:p-10 flex flex-col justify-between h-full overflow-y-auto">
                <div>
                  <h3 className="font-headline-md text-2xl lg:text-3xl text-on-surface mb-5">
                    {caseStudies[currentIndex].title}
                  </h3>
                  <div className="text-on-surface-variant text-[15px] leading-relaxed bg-transparent font-body-md space-y-3 pr-4">
                    {caseStudies[currentIndex].description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{formatText(paragraph)}</p>
                    ))}
                  </div>
                </div>
                <div 
                  className={`mt-6 flex items-center gap-2 text-primary-container font-label-caps text-sm w-fit flex-shrink-0 ${caseStudies[currentIndex].article ? 'cursor-pointer group' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={() => {
                    if (caseStudies[currentIndex].article) {
                      setSelectedArticle({
                        title: caseStudies[currentIndex].title,
                        content: caseStudies[currentIndex].article!
                      });
                    }
                  }}
                >
                  <span className="group-hover:mr-2 transition-all">VIEW_FULL_CASE_STUDY</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface hover:bg-surface-container-low hover:border-primary-container transition-colors rounded-full"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 h-1.5 rounded-full ${
                  index === currentIndex
                    ? "w-8 bg-primary-container"
                    : "w-2 bg-outline-variant/40 hover:bg-outline-variant"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface hover:bg-surface-container-low hover:border-primary-container transition-colors rounded-full"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/95"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-surface border border-outline-variant/30 rounded-xl max-w-4xl w-full max-h-full overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-8 py-6 border-b border-outline-variant/20">
                <h3 className="font-headline-md text-2xl text-on-surface pr-8">{selectedArticle.title}</h3>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto space-y-6 flex-1">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-on-surface-variant leading-relaxed text-lg pb-1">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
