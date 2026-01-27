'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from '@/components/animations'

export default function SuccessPage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <img 
            src="/hero-success.jpg" 
            alt="Handshake representing job success" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/70 to-forge-black/40" />
          <div className="relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="font-headline text-4xl sm:text-5xl text-iron-white mb-4">
                IT WORKED. THEY'RE IN.
              </h1>
              <p className="text-xl text-ash-gray max-w-2xl mx-auto">
                Real results from real workers. Names changed—stories 100% real.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-4xl mx-auto px-4">
            <StaggerContainer staggerDelay={0.15} className="space-y-12">
              {/* Story 1 */}
              <StaggerItem>
                <TiltCard tiltAmount={5} className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center">
                      <span className="font-headline text-steel-gold text-xl">M</span>
                    </div>
                    <div>
                      <p className="text-iron-white font-medium">Marcus, 34</p>
                      <p className="text-ash-gray text-sm">Warehouse Worker • Milwaukee</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Challenge</p>
                      <p className="text-ash-gray">7-year employment gap due to incarceration. Multiple short-term jobs before that.</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">What We Did</p>
                      <p className="text-ash-gray">Led with recent temp work and certifications earned inside. Created scripts for addressing background.</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Result</p>
                      <p className="text-iron-white font-medium">Hired in 3 weeks. Promoted to shift lead 18 months later.</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>

              {/* Story 2 */}
              <StaggerItem>
                <TiltCard tiltAmount={5} className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center">
                      <span className="font-headline text-steel-gold text-xl">T</span>
                    </div>
                    <div>
                      <p className="text-iron-white font-medium">Tammy, 52</p>
                      <p className="text-ash-gray text-sm">Admin/Manufacturing • Waukesha</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Challenge</p>
                      <p className="text-ash-gray">5-year gap caring for sick parent. Kept getting told she was "overqualified."</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">What We Did</p>
                      <p className="text-ash-gray">Reframed caregiving as project management. Targeted small businesses that value reliability.</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Result</p>
                      <p className="text-iron-white font-medium">Hired as office manager. They loved that she wasn't going to job-hop.</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>

              {/* Story 3 */}
              <StaggerItem>
                <TiltCard tiltAmount={5} className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center">
                      <span className="font-headline text-steel-gold text-xl">J</span>
                    </div>
                    <div>
                      <p className="text-iron-white font-medium">Jake, 28</p>
                      <p className="text-ash-gray text-sm">Food Service → Trades • Racine</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Challenge</p>
                      <p className="text-ash-gray">8 jobs in 4 years. Mix of food service and retail. No formal training.</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">What We Did</p>
                      <p className="text-ash-gray">Highlighted transferable skills. Identified apprenticeship programs. Created cover letter emphasizing eagerness.</p>
                    </div>
                    <div>
                      <p className="text-steel-gold text-sm uppercase tracking-wide mb-2">The Result</p>
                      <p className="text-iron-white font-medium">Accepted into electrical apprenticeship. Making more than ever before.</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Partner Quotes with Background */}
        <section className="relative py-20">
          <img 
            src="/hero-tools.jpg" 
            alt="Tool belt" 
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-crucible-charcoal/95 to-crucible-charcoal" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl text-center text-iron-white mb-12">
                WHAT PARTNERS SAY
              </h2>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <div className="glass-card p-6 h-full">
                  <p className="text-ash-gray italic mb-4">
                    "The clients Troy sends us are prepared. They know their story, they have their documents ready, and they're realistic about what jobs they can get."
                  </p>
                  <p className="text-steel-gold text-sm">— Workforce Development Specialist, SE Wisconsin</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-card p-6 h-full">
                  <p className="text-ash-gray italic mb-4">
                    "We've hired several people who came through Steel Man Resumes. They tend to stick around longer than average."
                  </p>
                  <p className="text-steel-gold text-sm">— HR Manager, Manufacturing Company</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl text-iron-white mb-6">
                YOUR STORY COULD BE NEXT
              </h2>
              <p className="text-ash-gray text-lg mb-10">
                Start with a free Career Intelligence Report. See where you stand—and where you could go.
              </p>
              <a 
                href="https://forge.steelmanresumes.com" 
                className="btn-gold text-lg py-4 px-10 inline-block"
              >
                Start Free Report →
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
