import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import MetricCard from "@/components/ui/MetricCard";
import CTASection from "@/components/ui/CTASection";
import EditorialGrid from "@/components/ui/EditorialGrid";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 pt-20 pb-32 max-w-screen-2xl mx-auto overflow-hidden">
          <EditorialGrid className="gap-8 items-center">
            <div className="col-span-12 lg:col-span-7 z-10">
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.95] mb-8">
                Precision <br />
                <span className="text-primary italic">At Scale.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                Orchestrate ABM campaigns with surgical accuracy. Inzynk
                connects high-intent signals to enterprise-grade execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="px-10 py-5 text-lg shadow-xl">
                  Launch Your Pilot
                </Button>
                <Button variant="secondary" className="px-10 py-5 text-lg">
                  Watch the Workflow
                </Button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden shadow-2xl relative">
                <img
                  alt="Data Visualization Dashboard"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnmFBx2JtwXHf77AUVSlXpj5ONPOaDFXKtglfC3rikRBnUCfvlOSBWqdj1DpdpfkWPx_hOgSadfjpXylNGdgByacoAkSOIIPjvsYwpyRaSOh95tkd__OWWgf3d4alXd-9MpPkwftb9JW8K0lpNjfIaXWOeFJZb8Mwj5zp_nvr8mmRXGSEuZclYQiEBYmeUukdcp_UxrTVUcBnJkf4SGWIMrjM-eEBRK4SD94heae754F00jFJFLGL_qTkJbafUGCSa6vmQlfwK4w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
              </div>

              {/* Overlapping Insight Card */}
              <div className="absolute -bottom-12 -left-12 hidden md:block w-72 p-6 rounded-xl bg-surface-container-lowest shadow-2xl border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    target
                  </span>
                  <span className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant">
                    Active Intent
                  </span>
                </div>
                <div className="text-3xl font-black text-on-surface mb-2">
                  94.2%
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[94%]" />
                </div>
              </div>
            </div>
          </EditorialGrid>
        </section>

        {/* Trust / Logo Grid */}
        <section className="bg-surface-container-low py-16 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <p className="font-headline text-center text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-12">
              Trusted by global enterprise leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <img
                alt="Client Logo 1"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMUpPjZqgjtwZfng_bVCPi4-jVZ2kV1RTzm1TrOMiQEeUQAHyiE3lmeBD2anJcFqY-tPXBozA3GC8Ux488U-GQrMfM6hw9h-sqojIHDP2SFbso91KCXzjTPMkvOAK6MbpKmp_Hv_5UbcYgHhMojVzS2llfcRvvOWQdga5FviaD_HRKjjgToiD-lc7fPbSbsUtizD-7sG3614nKJGobxzZv5u45MPbgyEFiVcQX2WkIsEk2kbQ9q4_z1NGx2nI6B0Vd-JZHj_AnUA"
              />
              <img
                alt="Client Logo 2"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoOyU-_mF95atKK4BtjG3uNp5wev_eJccKWdTzixmTAUuqSmBVnirO7j3egu_aGy6dn7iOkxuw3_Qgt_yWOWtcE2Dk6BgsoEHy2OaXsSKCaPXntrNB_ee-mMU_bVLavAvtmoPRfK6xmHedYj8VK7yySiCCUlRwTjsX5QRc2TXaXMeQ7btm9r-zjpwIQatHmon7fVt83TgRA4OJtkv-QdSDox8n7bnwk_DZlEixS1RUJy34KMwczmSiBckj_oJ8ev1XmFa7IVwnXQ"
              />
              <img
                alt="Client Logo 3"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJL41dbE_VEfcDMezbpT8QWQnAxNmovdcZ2o-jUaZi63xvQ_F1H1hbcnpq9ku40VMeb36i5GJNuJ6LWpbsuBQMej8SpI5Yo54dUQ_yXkzHwiO8tGQUEKuIchrx-Tjf8cmhc08GLIvp55TUJenQYU-AygXoc6yhK3jkxWCQPaTh_6krVANlVTm6pErfufj-ZnQDy6cOGgBP-yXpmxciMjSqij9c-LcENTmWFIIk-cyByrEO8glLGCdFq3oMewVaTyxkhmK3i2bPEw"
              />
              <img
                alt="Client Logo 4"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO3AOyyNtXoef21UgiFXF55s6lVgfC5lfnJEbaFPvCG58CWItS6nx5bnGIJgq26nFT_Yzx9a-wHMj4qukYAtcJsmzzx8eHQ3jXaTrbH8HjGvDr3sZZSe7Sy0nNqysIA42uZJ4he3_YqJRQZjRwwfT2ibneQUUThrHOdCftOMvMQAJNYXjcfW4Itcdy_NyUUPknHti-ZdbykqZbpHu4R5cXiCzA6giucDt7YSgseYSthhkDcMX09abRQvfLq0kFzV53jakLWiJyvA"
              />
              <img
                alt="Client Logo 5"
                className="h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgZbPVi3S-7Vt_8GoeAWwEPnIPkZh7XdYjHKgp1xmaomZDkWbhBfygIpxb5h2USKtdw_fqO6jkzq0fCQkbTcqgsmj8q9kivORRtKZxV-jfzlLczX8Zm3YRqlF7k7HG84KecwOv4fpxqzaNAXHHFGBKq1gPtVIzOGxFAK1-RR69gqgZ2DUOnhph5Y2Dt5Gj0XyWYmXrdo3GrSoPGRuLT5r4bwZqjBhwrDZnObfbNsFwI-gX563Zfp0x59MOQBY85WKjFiReZS5nKQ"
              />
            </div>
          </div>
        </section>

        {/* Why Inzynk - Editorial Section */}
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <SectionHeader
            eyebrow="The Curator's Edge"
            headline="Signal over noise. <br/>Precision over volume."
            centered
            className="mb-20 max-w-3xl mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="p-12 bg-surface-container-low group hover:bg-surface-container-highest transition-colors duration-500">
              <div className="w-12 h-12 bg-primary-fixed mb-8 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-on-primary-fixed">
                  hub
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">
                Unified Orchestration
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Centralize your ABM stack into a single source of truth. No more
                fragmented data silos.
              </p>
            </div>

            <div className="p-12 bg-surface-container-low group hover:bg-surface-container-highest transition-colors duration-500">
              <div className="w-12 h-12 bg-secondary-container mb-8 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-on-secondary-container">
                  ads_click
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">
                Account Intelligence
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Identify exactly who is in-market and which creative will
                resonate at the buyer-committee level.
              </p>
            </div>

            <div className="p-12 bg-surface-container-low group hover:bg-surface-container-highest transition-colors duration-500">
              <div className="w-12 h-12 bg-tertiary-container mb-8 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-on-tertiary-container">
                  monitoring
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">
                Predictive Attribution
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Measure the impact of every touchpoint across the long enterprise
                sales cycle with certainty.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Showcase - Layered Insight */}
        <section className="py-24 bg-surface-dim/20 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
              <div className="bg-secondary-fixed px-10 py-6">
                <h4 className="font-headline font-bold text-on-secondary-fixed flex items-center gap-2">
                  <span className="material-symbols-outlined">analytics</span>
                  Product Intelligence: Account Deep-Dive
                </h4>
              </div>
              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div>
                    <h3 className="font-headline text-3xl font-bold mb-6">
                      Target Accounts with Surgical Precision
                    </h3>
                    <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                      Our platform doesn&apos;t just show clicks; it shows
                      account penetration. See how many stakeholders within a
                      Fortune 500 company have engaged with your message.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">
                          check_circle
                        </span>
                        <div>
                          <span className="font-bold block text-on-surface">
                            IP-Based Targeting
                          </span>
                          <span className="text-sm text-on-surface-variant">
                            Reach decision makers at home or in the office with
                            verified mapping.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">
                          check_circle
                        </span>
                        <div>
                          <span className="font-bold block text-on-surface">
                            Creative Personalization
                          </span>
                          <span className="text-sm text-on-surface-variant">
                            Dynamically swap headlines based on industry or
                            account stage.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="bg-surface-container-low rounded-lg p-8 aspect-video flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="h-4 w-3/4 bg-surface-container-highest rounded" />
                        <div className="h-4 w-1/2 bg-surface-container-highest rounded" />
                        <div className="h-12 w-full bg-white rounded shadow-sm border border-outline-variant/5" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-primary-fixed rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-primary-fixed">
                            trending_up
                          </span>
                        </div>
                        <div className="h-20 bg-secondary-fixed rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-secondary-fixed">
                            pie_chart
                          </span>
                        </div>
                        <div className="h-20 bg-tertiary-fixed rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-tertiary-fixed">
                            bar_chart
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-outline-variant/10 max-w-[200px]">
                      <span className="text-[10px] font-black uppercase tracking-tighter text-on-surface-variant">
                        Real-time Lift
                      </span>
                      <div className="text-2xl font-bold text-primary">
                        +240%
                      </div>
                      <div className="text-[10px] text-on-surface-variant">
                        compared to baseline LinkedIn ads
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <EditorialGrid>
            <div className="col-span-12 lg:col-span-4 lg:pr-20 mb-16 lg:mb-0">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
                Proven <br />
                ROI.
              </h2>
              <p className="text-on-surface-variant">
                We deliver more than just vanity metrics. We deliver pipeline
                growth and enterprise velocity.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
                <MetricCard
                  value="3.5x"
                  label="Pipeline Acceleration"
                  description="Average reduction in enterprise sales cycles across our top-tier manufacturing clients."
                  size="lg"
                  className="bg-surface p-12"
                />
                <MetricCard
                  value="82%"
                  label="Account Awareness"
                  description="Targeted stakeholders reporting high brand recall within 6 months of campaign launch."
                  size="lg"
                  className="bg-surface p-12"
                />
                <MetricCard
                  value="12:1"
                  label="ROAS Average"
                  description="Directly attributable revenue generated for every dollar spent on the Inzynk platform."
                  size="lg"
                  className="bg-surface p-12"
                />
                <MetricCard
                  value="0.2%"
                  label="Waste Mitigation"
                  description="Industry-leading precision ensures your budget is never spent on non-ideal profiles."
                  size="lg"
                  className="bg-surface p-12"
                />
              </div>
            </div>
          </EditorialGrid>
        </section>

        {/* Call to Action */}
        <CTASection
          headline="Ready to orchestrate?"
          subtitle="Join the world's most sophisticated marketing teams and start seeing results in weeks, not quarters."
          primaryLabel="Request Exclusive Access"
          variant="dark"
        />
      </main>

      <Footer />
    </>
  );
}
