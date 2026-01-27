'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from '@/components/animations'
import Link from 'next/link'

export default function GuidePage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero - Person approaching shop */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <img 
            src="/hero-guide.jpg" 
            alt="Person approaching opportunity" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/70 to-forge-black/40" />
          <div className="relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="font-headline text-4xl sm:text-5xl text-iron-white mb-4">
                THE GUIDE
              </h1>
              <p className="text-xl text-ash-gray max-w-2xl mx-auto">
                Free resources for job seekers facing real challenges. No fluff, no gatekeeping.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-4xl mx-auto px-4">
            {/* Second Chance Pillar */}
            <div className="mb-20">
              <FadeUp>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-headline text-3xl text-steel-gold">SECOND-CHANCE EMPLOYMENT</h2>
                    <p className="text-ash-gray">For those navigating barriers to employment</p>
                  </div>
                </div>
              </FadeUp>
              
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StaggerItem>
                  <Link href="/guide/second-chance-employment/felony-resume">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">How to Write a Resume with a Felony</h3>
                      <p className="text-ash-gray text-sm">Address your record without lying—and still get interviews.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/second-chance-employment/employment-gaps">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Explaining Employment Gaps</h3>
                      <p className="text-ash-gray text-sm">How to frame gaps from incarceration, caregiving, health, or just life.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/second-chance-employment/interview-scripts">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Interview Scripts for Tough Questions</h3>
                      <p className="text-ash-gray text-sm">Word-for-word scripts for "Tell me about your background."</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/second-chance-employment/fair-chance-laws">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Fair Chance & Ban-the-Box Laws</h3>
                      <p className="text-ash-gray text-sm">Know your rights. What employers can and can't ask.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/second-chance-employment/recovery-jobs">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Jobs That Support Recovery</h3>
                      <p className="text-ash-gray text-sm">Industries and employers that understand addiction recovery.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="section-divider" />

            {/* Blue Collar Pillar */}
            <div className="mt-20">
              <FadeUp>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-headline text-3xl text-steel-gold">BLUE-COLLAR CAREERS</h2>
                    <p className="text-ash-gray">For warehouse, trades, manufacturing, and more</p>
                  </div>
                </div>
              </FadeUp>
              
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StaggerItem>
                  <Link href="/guide/blue-collar-careers/warehouse-resume">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Warehouse & Distribution Resumes</h3>
                      <p className="text-ash-gray text-sm">What hiring managers actually look for in warehouse candidates.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/blue-collar-careers/trades-resume">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Trades & Skilled Labor Resumes</h3>
                      <p className="text-ash-gray text-sm">Electrician, plumber, welder, HVAC—how to stand out without a degree.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/blue-collar-careers/certifications">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Certifications Worth Getting</h3>
                      <p className="text-ash-gray text-sm">Which certifications actually help you get hired.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <Link href="/guide/blue-collar-careers/job-search-strategy">
                    <TiltCard tiltAmount={8} className="glass-card p-6 h-full cursor-pointer hover:border-steel-gold/50 transition-colors">
                      <h3 className="font-headline text-lg text-iron-white mb-2">Blue-Collar Job Search Strategy</h3>
                      <p className="text-ash-gray text-sm">Walk-ins, staffing agencies, online apps—what works best and when.</p>
                    </TiltCard>
                  </Link>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20">
          <img 
            src="/hero-polished.jpg" 
            alt="Polished steel" 
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-crucible-charcoal/95" />
          
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl text-iron-white mb-6">
                WANT PERSONALIZED GUIDANCE?
              </h2>
              <p className="text-ash-gray text-lg mb-10">
                The free Career Intelligence Report analyzes YOUR situation and gives you a custom action plan.
              </p>
              <a 
                href="https://forge.steelmanresumes.com" 
                className="btn-gold text-lg py-4 px-10 inline-block"
              >
                Get Your Free Report →
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
