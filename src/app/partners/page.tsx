'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from '@/components/animations'

export default function PartnersPage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <img 
            src="/hero-partners.jpg" 
            alt="Partnership and collaboration" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/70 to-forge-black/40" />
          <div className="relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="font-headline text-4xl sm:text-5xl text-iron-white mb-4">
                FOR WORKFORCE PARTNERS
              </h1>
              <p className="text-xl text-ash-gray max-w-2xl mx-auto">
                You help people find jobs. We help them get past the resume screen.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl text-center text-iron-white mb-12">
                WHAT WE OFFER PARTNERS
              </h2>
            </FadeUp>
            
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <TiltCard tiltAmount={6} className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-4">FREE FORGE ACCESS</h3>
                  <p className="text-ash-gray">
                    The Forge (Career Intelligence Report) is always free. Send your clients through it before their first meeting—you'll both start with better information.
                  </p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard tiltAmount={6} className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-4">REFERRAL SUPPORT</h3>
                  <p className="text-ash-gray">
                    When your clients need professional resume help, refer them to us. We understand the populations you serve—second-chance, blue-collar, barriers to employment.
                  </p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard tiltAmount={6} className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-4">BULK PRICING</h3>
                  <p className="text-ash-gray">
                    Have a program that could use Refinery packages for multiple participants? Contact us about volume pricing for workforce programs and reentry initiatives.
                  </p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard tiltAmount={6} className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-4">CO-BRANDED MATERIALS</h3>
                  <p className="text-ash-gray">
                    We can provide flyers, one-pagers, and QR codes with your organization's branding for distribution to your clients.
                  </p>
                </TiltCard>
              </StaggerItem>
            </StaggerContainer>

            {/* Marketing Services via TMG */}
            <FadeUp delay={0.5}>
              <div className="mt-12 glass-card p-8 border-steel-gold/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-steel-gold mb-2">NEED MARKETING SUPPORT?</h3>
                    <p className="text-ash-gray mb-4">
                      Through <a href="https://themidnightgarden.club" target="_blank" rel="noopener noreferrer" className="text-steel-gold hover:text-bright-gold">The Midnight Garden</a>, I also offer marketing and outreach services for workforce organizations. With deep connections to printers, agencies, and marketing professionals across Wisconsin, I can help you reach more job seekers.
                    </p>
                    <p className="text-iron-white text-sm">
                      Websites, print materials, social campaigns, community outreach—let's talk about what you need.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative py-20">
          <img 
            src="/hero-tools.jpg" 
            alt="Tool belt" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-crucible-charcoal/95" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl text-center text-iron-white mb-12">
                WHO WE WORK WITH
              </h2>
            </FadeUp>
            
            <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Workforce Development Boards',
                'Reentry Programs',
                'Community Colleges',
                'Vocational Rehab (DVR)',
                'Halfway Houses',
                'Recovery Centers',
                'Veterans Services',
                'Temp/Staffing Agencies',
                'Job Centers',
              ].map((partner, i) => (
                <StaggerItem key={i}>
                  <div className="glass-card p-4 text-center">
                    <p className="text-iron-white text-sm">{partner}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl text-iron-white mb-6">
                LET'S CONNECT
              </h2>
              <p className="text-ash-gray text-lg mb-8">
                Interested in partnering? Have questions about how we can support your program?
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <TiltCard tiltAmount={5} className="glass-card p-8 max-w-md mx-auto">
                <p className="text-iron-white font-medium mb-2">Troy Richard Carr</p>
                <p className="text-ash-gray mb-4">Founder, Steel Man Resumes</p>
                <div className="space-y-3">
                  <a href="tel:2623918137" className="block text-steel-gold hover:text-bright-gold text-lg">
                    (262) 391-8137
                  </a>
                  <a href="sms:2623918137" className="btn-gold w-full text-center block py-3 mt-4">
                    Text for Fastest Response
                  </a>
                </div>
              </TiltCard>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-ash-gray mt-12">
                Want to see what your clients will experience?
              </p>
              <a 
                href="https://forge.steelmanresumes.com" 
                className="btn-outline text-lg py-4 px-10 inline-block mt-4"
              >
                Try The Forge →
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
