import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import MetricCard from "@/components/ui/MetricCard";
import CTASection from "@/components/ui/CTASection";
import EditorialGrid from "@/components/ui/EditorialGrid";

export const metadata: Metadata = {
  title: "Inzynk | Precision in ABM - Success Stories",
  description:
    "Discover how the world's leading enterprise B2B brands use Inzynk to turn account data into high-velocity pipeline and measurable ROI.",
};

const filterChips = [
  { label: "ALL INDUSTRIES", active: true },
  { label: "SAAS", active: false },
  { label: "FINTECH", active: false },
  { label: "MANUFACTURING", active: false },
];

const caseStudyCards = [
  {
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALsAO5qL2guLOsqXVEGovR_-ios8cBj54bf-T7HeyhXhtl475cQHTshEHUWXqvLnvW51Q89L0Y2xPLAqQBzIfawiYwVFTNq1MrU6hbGpaEuaTSGwHCHkoakcdK_ZgPnug1BEkNARBxfb3lUHnTS7LaKut83lgwRe6SFTvrI-fgXTIuPmFH-roW1GqByFHxT9WE37Q0-WmT_WIRoNRqQqWAOtr2cvg3SbZIFs4b2FD5s-kfWHADGWVbZtPbW9G06Sv1Xh45TqJoIg",
    logoAlt: "Tech logo of a cybersecurity firm",
    metric: "+40%",
    title: "Pipeline efficiency achieved through predictive account scoring.",
    industry: "Cybersecurity",
  },
  {
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEA6YA1hDGrBQjscmOvQYHrmYrx30Sj0jKmT5-ewjlgrWRFtZlW_0HaauQlRpUbzs4EPbMT8PCs7CFuyKTeu6Wm_k0V-o7wyPeoZLKmKnpgB3OK3L1AdAnH7JZ2aVUe3XC6bYr9M7QsqDdGYs_g6sGONCyzAkWFhovT0sDg0mpOzwwubQg2-vcNlufKRUQjaq9QrOnGhwnFSSDvwKLSF2IGgYerN03shvrem-zpdV1cBq3aiZnYCDe8ZWGVpGGNOunWdW7cKQotw",
    logoAlt: "Modern logo of a global logistics company",
    metric: "12x",
    title: "ROI within first 90 days of implementation.",
    industry: "Logistics",
  },
  {
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJXAe--ojGQ3PuToq6QHTRbaryF5KBcevykEO7p_UwgQkouOWQ4i-lm9nMBNJ2s2TaECT0sACmvMIl0SlW4EbdsztGfdcAwm5TSfjCYp1XgTGWmoG9knacoc5OCXMr7b8B4gGt6zk6zJgCuF5tWgPzImSpfqvNZH6GbH3b8J_45U2TX20BVnK8N4jVzt3hNo4-pKxQ2SbOIfuDf_bTBlUBLmuM8pwecV4xAEuH7CW8yADab8-ZpBqYL1OHmrt6BACJHiit64bkIg",
    logoAlt: "Sophisticated fintech brand logo",
    metric: "-65%",
    title: "Reduction in customer acquisition cost for key accounts.",
    industry: "Fintech",
  },
];

const impactStats = [
  { value: "$4.2B+", label: "Pipeline Managed" },
  { value: "94%", label: "Precision Score" },
  { value: "150+", label: "Enterprise Clients" },
  { value: "22 min", label: "Avg. Time to Insight" },
];

export default function CustomerSuccessPage() {
  return (
    <>
      <Navbar activeLink="Solutions" />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <header className="max-w-screen-2xl mx-auto px-8 mb-20">
          <EditorialGrid>
            <div className="col-span-12 md:col-span-7">
              <SectionHeader
                eyebrow="SUCCESS STORIES"
                headline='The Precision of <span class="text-primary italic">Impact</span>.'
                className="mb-0"
              />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Discover how the world&apos;s leading enterprise B2B brands use
                Inzynk to turn account data into high-velocity pipeline and
                measurable ROI.
              </p>
            </div>
          </EditorialGrid>
        </header>

        {/* Featured Case Study */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-24">
          <div className="relative bg-surface-container-low rounded-xl overflow-hidden min-h-[600px] flex items-center">
            <div className="absolute inset-0 opacity-10">
              <img
                className="w-full h-full object-cover"
                alt="Abstract geometric data visualization pattern"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJi8n_y1pFeipUAjisYZaGjefXkhI62DWYjrWHEGW2KxAIrXrgH9sSmkQExUFrlQ7UHR8hY5pkeiexHdajc6v0tmb58C0ZZ5f9KNXOemDgKc8RzqZRYcjIk1086LJNVt6h1XBUNrWZWtN4Teq9RsYoOKNUnIm-KV80UsJDonhC1zwMxMDnik24bVGAIz3NMIoBk5vK8UxUpx6xsz2TQ19z7Z6RAgLXwfRPYKc3vhU2SnSNEMOp0oVU8iHHUeXKf4rBws8t76SQw"
              />
            </div>
            <div className="grid grid-cols-12 gap-8 w-full relative z-10 p-12 lg:p-20">
              <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest p-10 lg:p-16 rounded-lg shadow-[0_20px_40px_rgba(23,28,33,0.06)]">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">
                      domain
                    </span>
                  </div>
                  <span className="font-headline font-bold text-xl">
                    CloudScale Enterprise
                  </span>
                </div>
                <h2 className="font-headline text-4xl font-bold tracking-tight mb-6 leading-tight">
                  How CloudScale generated $12M in new pipeline within 6 months.
                </h2>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <MetricCard
                    value="+340%"
                    label="Account Engagement"
                    size="md"
                  />
                  <MetricCard
                    value="2.4x"
                    label="Win Rate Increase"
                    size="md"
                  />
                </div>
                <button className="group flex items-center text-primary font-bold space-x-2">
                  <span>Read the full analysis</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                <div className="relative">
                  <span
                    className="material-symbols-outlined text-primary-container text-7xl absolute -top-10 -left-6 opacity-40"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    format_quote
                  </span>
                  <blockquote className="text-2xl font-headline font-semibold text-on-surface italic leading-snug mb-8 relative z-10">
                    &ldquo;Inzynk didn&apos;t just give us data; they gave us a
                    strategic roadmap. We&apos;ve completely transformed our
                    go-to-market motion from guesswork to precision
                    execution.&rdquo;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-dim">
                      <img
                        className="w-full h-full object-cover"
                        alt="Professional headshot of a female marketing executive"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcMHb7KvmdHDQ-oYk5HmZBrqXyC2dnXV8v6Yax4b3INyXiepXY2yF2TaQ6RhNMUiWZaQ93oksrqgWxtZbx1PPbu8zcg3iL-yI2g57eILVq8oNSq-JOn8yJYKRJ-c4jIGhMI5BgRi1GtsPgVIZ1K2FyFr03l4F8jei798XrXjmJc8WMqX053iwhJFyXCBAx_nmqWuNORpF-iZmoVpJ6XjGkoUqssO5BldSvWx9JKATP1j7UefVXPsoToSJPaFGV2B3hY3JB5pwg"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">
                        Sarah Jenkins
                      </div>
                      <div className="text-on-surface-variant text-sm">
                        VP of Growth, CloudScale
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Grid */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-headline text-3xl font-bold tracking-tight mb-2">
                Portfolio of Precision
              </h3>
              <p className="text-on-surface-variant">
                Real results from the front lines of B2B marketing.
              </p>
            </div>
            <div className="flex space-x-2">
              {filterChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`px-4 py-2 rounded-full text-xs font-bold ${
                    chip.active
                      ? "bg-secondary-container text-on-secondary-container"
                      : "hover:bg-surface-container-high transition-colors cursor-pointer"
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudyCards.map((card) => (
              <div
                key={card.industry}
                className="group bg-surface-container-low p-1 rounded-lg hover:bg-surface-container-high transition-all duration-300 cursor-pointer"
              >
                <div className="bg-surface-container-lowest p-8 rounded-lg h-full flex flex-col">
                  <div className="mb-12 h-10 flex items-center">
                    <img
                      className="h-8 grayscale group-hover:grayscale-0 transition-all"
                      alt={card.logoAlt}
                      src={card.logoSrc}
                    />
                  </div>
                  <div className="text-primary text-5xl font-black mb-4 tracking-tighter">
                    {card.metric}
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-4 flex-grow">
                    {card.title}
                  </h4>
                  <div className="pt-6 mt-6 border-t border-outline-variant/20 flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      {card.industry}
                    </span>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stats Banner */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="bg-on-surface text-surface py-20 px-12 rounded-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              {impactStats.map((stat) => (
                <div key={stat.label} className="md:col-span-1">
                  <div className="text-primary-container text-5xl font-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-surface-variant text-sm font-semibold uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <CTASection
            headline="Ready to lead with precision?"
            subtitle="Join the world's most sophisticated B2B marketing teams and start generating measurable impact today."
            primaryLabel="Get Your ABM Audit"
            secondaryLabel="Watch Product Film"
            variant="light"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
