import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EditorialGrid from "@/components/ui/EditorialGrid";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "The Inzynk Way | Precision Orchestration",
  description:
    "Discover the Inzynk methodology — precision orchestration for high-intent B2B relationships through signal synthesis, layered engagement, and zero-waste reach.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar activeLink="Company" />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-32">
          <EditorialGrid>
            <div className="col-span-12 md:col-span-8">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                The Methodology
              </span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8 font-headline">
                Precision in <br /> Orchestration.
              </h1>
            </div>
            <div className="col-span-12 md:col-start-8 md:col-span-5 md:-mt-20">
              <p className="text-xl text-on-surface-variant leading-relaxed font-light italic border-l-4 border-primary-container pl-8 py-4">
                We don&apos;t believe in noise. We believe in the quiet authority
                of a perfectly timed interaction. Inzynk is the architect of
                high-intent B2B relationships.
              </p>
            </div>
          </EditorialGrid>
        </section>

        {/* The Inzynk Way */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="mb-20">
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-4 font-headline">
                The Inzynk Way
              </h2>
              <p className="text-on-surface-variant max-w-2xl text-lg">
                Our four-pillar orchestration engine moves beyond generic
                account targeting into hyper-specific behavioral resonance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon="target"
                title="Signal Synthesis"
                description="We aggregate fragmented intent data into a single, high-fidelity profile. Not just who they are, but exactly where they sit in the decision cycle."
                linkText="Explore Signal Tech"
              />
              <FeatureCard
                icon="layers"
                title="Layered Engagement"
                description="Advertising shouldn't be a monolith. Our platform serves content layers that evolve as the account stakeholder engages, maintaining a narrative flow."
                linkText="The Narrative Engine"
                className="md:mt-16"
              />
              <FeatureCard
                icon="hub"
                title="Unified Reach"
                description="Precision across the open web. We bridge the gap between social intent and professional browsing through a curated inventory of premium enterprise publishers."
                linkText="Inventory Network"
              />
              <FeatureCard
                icon="query_stats"
                title="Attribution Clarity"
                description="No vanity metrics. We measure pipeline velocity and account lift, providing C-suite ready reports that prove the value of every dollar spent."
                linkText="Metric Systems"
                className="md:mt-16"
              />
            </div>
          </div>
        </section>

        {/* Game Changer Section */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl" />
                <div className="relative bg-surface-container-highest aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Sophisticated professional team collaborating on high-end technology"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1x-LpYntiJTiu4XcmdWc-Z2EiSVj4tnTauixFbPAQQZ52n1ApCWd-awvi3fgsIfCMAOjbwsvuIKhG6MVHYnrb41iO5PX208Zz7woUIp9MYglCdoj7fl4ffIqaDUship7QF6OC8tBmB23YR930til8oWmemlj3fcG8QuWU4VZnKFDZI7kuT_J9_gwY_KqPD69Y4snqJsPSwrmUpzc7271xtxbLbRXu-lucMs6L-4I32JzvwekfHcENsCIMi7NMfhQz7WVLTuDCYw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-on-surface/80 to-transparent">
                    <p className="text-white font-headline text-2xl font-bold tracking-tight italic">
                      &ldquo;The technology is only as good as the focus it
                      creates.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-tight font-headline">
                  The Game Changer: <br />
                  <span className="text-primary">Zero-Waste Reach.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <span className="text-4xl font-black text-primary/20 shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Eliminating the &apos;Spray and Pray&apos;
                      </h4>
                      <p className="text-on-surface-variant">
                        Traditional ABM platforms still waste 40% of budget on
                        irrelevant clicks. Our proprietary identity graph ensures
                        99.8% precision at the account level.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-4xl font-black text-primary/20 shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Automated Orchestration
                      </h4>
                      <p className="text-on-surface-variant">
                        Manual campaign management is the bottleneck. Inzynk
                        automates the transition between awareness and
                        consideration based on real-time engagement triggers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-4xl font-black text-primary/20 shrink-0">
                      03
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Enterprise-Grade Privacy
                      </h4>
                      <p className="text-on-surface-variant">
                        Built for the cookieless future. Our methodology relies
                        on first-party data signals and contextual intelligence,
                        making it future-proof for global scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-surface-dim py-32">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-bold tracking-tighter text-on-surface mb-6 font-headline">
                The Architects of Precision
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
                A collective of data scientists, enterprise marketers, and
                advertising veterans dedicated to redefining the B2B landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Anders Svensson */}
              <div className="group">
                <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="Portrait of Anders Svensson, CEO & Co-Founder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_56cVbSJJpcPXyx3JLw-buPpQ798oO9LGQGmXwxchwTwX0th3CxSNx9n75CwlV_2oxREhQmuqRRKSY4aTFlafERbbDsixVRG_pqEN_Oa-ZAQMZOYfYmCZqYm-xt8EPZQI_zfrL89-EtfNG_bsYF-NFznqbHMHgWHR1IBUgNehux8r_k1-zrw62QA3sOQgqENi7a_0-km3xPzexM2-xJ1MVDgl6B-FV3EVeSflirc0qXKH9XGkNTgoJT4ceBMuDx6l-6xw7LPuag"
                  />
                  <div className="absolute inset-0 border-[1rem] border-transparent group-hover:border-primary/10 transition-all" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight">
                  Anders Svensson
                </h4>
                <p className="text-primary font-semibold mb-3">
                  CEO &amp; Co-Founder
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Visionary leader with 20+ years in digital advertising
                  transformation for the Nordic enterprise sector.
                </p>
              </div>

              {/* Elena Moretti */}
              <div className="group md:mt-12">
                <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="Portrait of Elena Moretti, Chief Technology Officer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHl3QQBhglzg0O8vjUW_IrPMwZrmi8zUe_NCpAxfIvHV8l5DSru8PH2b25TnIdm7R-KxdG2ZNdDkTXO7HxcXvKW_0imSZp4cdae8Wu64S9bax-X0S21-XVykzx_msqrAkxQRREkPm31YqNAdeozs8QwxxIiLT_5HkH6G1xc2KqTKVP8lOcliAs9NoguMUPFUaDKb1wuU5SezjiuWX8QEsgm5BimAp2CtIvcvku1KUfaqDbRJS0kLD9mQgqpfE4wNe4iGeeC4Rfhw"
                  />
                  <div className="absolute inset-0 border-[1rem] border-transparent group-hover:border-primary/10 transition-all" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight">
                  Elena Moretti
                </h4>
                <p className="text-primary font-semibold mb-3">
                  Chief Technology Officer
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Architect of the Inzynk identity graph. Former lead of data
                  engineering at global SaaS titans.
                </p>
              </div>

              {/* Marcus Thorne */}
              <div className="group">
                <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="Portrait of Marcus Thorne, Head of Innovation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnns4Rqx2cdcCnBhbP0KxbwXRlREAVt_M_IGEi4ajGLv_75ZMx6oMxJgXKDwHQhiEN8fntP_AjavtVhhc4-3BxnOd3cJOGifmaiXwU6QGYPDJLBA1Mbrt-jWXPhu-Ry_PgsQ_l41aBPYOB3jOJ4HI9diuBvqEP-stgeEXHQbE3vkUFnQLmlbeKjWKU4A5yRRZMUVtoTJr0kzhxeEBgXl4NWiztVVTI6LLq5x-W9kifZsVbAI-w_AQ-khyT0_paGCRVOZpO9HmE0Q"
                  />
                  <div className="absolute inset-0 border-[1rem] border-transparent group-hover:border-primary/10 transition-all" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight">
                  Marcus Thorne
                </h4>
                <p className="text-primary font-semibold mb-3">
                  Head of Innovation
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Focusing on the intersection of AI and behavioral psychology
                  to drive meaningful brand engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to move <br/>beyond the noise?"
          primaryLabel="Book Your Precision Audit"
          secondaryLabel="Read Whitepaper"
          variant="dark"
        />
      </main>

      <Footer />
    </>
  );
}
