import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import EditorialGrid from "@/components/ui/EditorialGrid";

export const metadata: Metadata = {
  title: "Inzynk | Precision ABM Platform",
  description:
    "Move beyond broad-spectrum marketing. Inzynk provides the scalpel for enterprise ABM, turning account intelligence into surgical advertising execution.",
};

export default function PlatformPage() {
  return (
    <>
      <Navbar activeLink="Platform" />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <EditorialGrid>
            <div className="col-span-12 md:col-span-7">
              <SectionHeader
                eyebrow="The Platform"
                headline="Precision <br/> Orchestration."
              />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-auto">
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Move beyond broad-spectrum marketing. Inzynk provides the
                scalpel for enterprise ABM, turning account intelligence into
                surgical advertising execution.
              </p>
            </div>
          </EditorialGrid>
        </section>

        {/* Feature 1: Target Account Orchestration */}
        <section className="bg-surface-container-low py-32 mb-32">
          <div className="max-w-screen-2xl mx-auto px-8">
            <EditorialGrid className="items-center">
              <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
                <h2 className="text-4xl font-headline font-bold text-primary mb-6">
                  Target Account Orchestration
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Define your high-value universe. Our orchestration engine
                  syncs directly with your CRM and intent providers to build
                  dynamic account lists that evolve in real-time.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bi-directional CRM Syncing",
                    "Intent-based Dynamic Refresh",
                    "Account Scoring Tiering",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UI Representation Card */}
              <div className="col-span-12 md:col-span-7">
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(23,28,33,0.06)] relative overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-on-secondary-container"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-1 8h2v2h3v2h-3v3h-2v-3H8v-2h3v-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold">
                          Account Intelligence
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          Active Sync: Salesforce &amp; 6sense
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      LIVE DATA
                    </div>
                  </div>

                  {/* Mock List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-surface-dim" />
                        <span className="font-bold">
                          Global Enterprises Inc.
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-right">
                          <div className="text-xs text-on-surface-variant">
                            Score
                          </div>
                          <div className="text-sm font-bold">98</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-on-surface-variant">
                            Status
                          </div>
                          <div className="text-sm font-bold text-primary">
                            Priority 1
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-surface-dim" />
                        <span className="font-bold">
                          Stellar Cloud Systems
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-right">
                          <div className="text-xs text-on-surface-variant">
                            Score
                          </div>
                          <div className="text-sm font-bold">84</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-on-surface-variant">
                            Status
                          </div>
                          <div className="text-sm font-bold text-on-surface-variant">
                            Nurturing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none border border-outline-variant/15 rounded-xl" />
                </div>
              </div>
            </EditorialGrid>
          </div>
        </section>

        {/* Feature 2: Ad Channel Integration */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <EditorialGrid className="items-center">
            <div className="col-span-12 md:col-span-6 md:order-2">
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">
                Ad Channel Integration
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                One command center, infinite reach. Deploy personalized creative
                across LinkedIn, Google Display, and Premium Programmatic
                channels with zero friction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-surface-container-low rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.88 4.88l.7 2.03zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8S4 7.58 4 12s3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z" />
                  </svg>
                  <div className="font-bold mb-1">Unified Creative</div>
                  <div className="text-sm text-on-surface-variant">
                    Auto-adapt assets across all platforms.
                  </div>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.93 8.35l-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83a.753.753 0 0 0-.56 0L12.4 4.15a.75.75 0 0 0-.4.67V7.7L9.67 9.03 7.35 7.7V4.82c0-.27-.14-.52-.4-.67L3.28 2.47c-.38-.18-.82-.01-1 .36-.18.38-.01.82.36 1l3.6 1.68L6.24 8l-2.33 2.33-3.6-1.68c-.38-.18-.82-.01-1 .36-.18.38-.01.82.36 1l3.92 1.83c.09.04.18.06.28.06.1 0 .19-.02.28-.06L7.83 10.16 10 11.5v2.67l-2.33 2.33-3.6-1.68c-.38-.18-.82-.01-1 .36-.18.38-.01.82.36 1l3.92 1.83c.09.04.18.06.28.06.1 0 .19-.02.28-.06l3.68-1.68a.75.75 0 0 0 .4-.67v-2.88l2.33-1.33 2.33 1.33v2.88c0 .27.14.52.4.67l3.68 1.68c.09.04.18.06.28.06.1 0 .19-.02.28-.06l3.92-1.83c.38-.18.54-.62.36-1-.18-.38-.62-.54-1-.36l-3.6 1.68-2.33-2.33V11.5l2.17-1.33 3.68 1.68c.09.04.18.06.28.06.1 0 .19-.02.28-.06l3.92-1.83c.38-.18.54-.62.36-1a.758.758 0 0 0-1-.36z" />
                  </svg>
                  <div className="font-bold mb-1">Precision Bidding</div>
                  <div className="text-sm text-on-surface-variant">
                    AI-optimized budget allocation per account.
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Diagram */}
            <div className="col-span-12 md:col-span-6 md:order-1">
              <div className="relative p-8">
                <div className="aspect-square bg-gradient-to-br from-surface-container-highest to-surface-dim rounded-full flex items-center justify-center relative">
                  <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-outline-variant/30 rounded-full" />
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10">
                    <div className="text-3xl font-black text-primary">
                      INZYNK
                    </div>
                  </div>

                  {/* Floating Channel Icons */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    <span className="font-bold text-xs uppercase">
                      LinkedIn
                    </span>
                  </div>
                  <div className="absolute bottom-10 left-1/4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.88 4.88l.7 2.03zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8S4 7.58 4 12s3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z" />
                    </svg>
                    <span className="font-bold text-xs uppercase">Google</span>
                  </div>
                  <div className="absolute top-1/2 right-0 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                    </svg>
                    <span className="font-bold text-xs uppercase">
                      Programmatic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </EditorialGrid>
        </section>

        {/* Feature 3: Performance Analytics (Bento Grid) */}
        <section className="bg-surface-container py-32">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">
                Performance Analytics
              </h2>
              <p className="text-lg text-on-surface-variant">
                Our analytics go beyond impressions. We measure true account
                lift, buying committee engagement, and direct revenue
                attribution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
              {/* Metric Card 1: Account Reach Lift */}
              <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/10">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Account Reach Lift
                    </div>
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <div className="text-7xl font-headline font-extrabold text-on-surface mb-4">
                    +312%
                  </div>
                  <div className="text-on-surface-variant">
                    Average increase in target account engagement within the
                    first 60 days of deployment.
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-surface-variant">
                  <div className="flex gap-2">
                    <div className="h-12 w-full bg-primary/10 rounded-sm" />
                    <div className="h-12 w-full bg-primary/20 rounded-sm" />
                    <div className="h-12 w-full bg-primary/40 rounded-sm" />
                    <div className="h-12 w-full bg-primary/60 rounded-sm" />
                    <div className="h-12 w-full bg-primary rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Metric Card 2: 84% */}
              <div className="md:col-span-2 bg-secondary-container p-8 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-headline font-bold text-on-secondary-container">
                    84%
                  </div>
                  <div className="text-lg font-medium text-on-secondary-container/80 leading-tight">
                    Decrease in cost per meaningful engagement compared to broad
                    display.
                  </div>
                </div>
              </div>

              {/* Metric Card 3: Pipeline Value */}
              <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-center">
                <div className="text-sm font-bold mb-4">Pipeline Value</div>
                <div className="text-2xl font-bold">$4.2M</div>
                <div className="w-full bg-white/30 h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary" />
                </div>
              </div>

              {/* Metric Card 4: Active Committees */}
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center">
                <div className="text-sm font-bold mb-4">Active Committees</div>
                <div className="text-2xl font-bold">128</div>
                <div className="text-xs text-on-surface-variant mt-2">
                  +12 this week
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <CTASection
          headline="Ready to engineer your growth?"
          subtitle="Join the precision revolution in B2B enterprise marketing."
          primaryLabel="Start Precision Campaign"
          secondaryLabel="Request Platform Tour"
          variant="light"
        />
      </main>
      <Footer />
    </>
  );
}
