'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter, TiltCard, ShimmerText } from '@/components/animations'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/video/hero-flame.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-forge-black/70 via-forge-black/50 to-forge-black z-[1]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
            <FadeUp>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-iron-white leading-tight mb-6">
                GET A JOB-READY RESUME—<br />
                <ShimmerText className="text-steel-gold drop-shadow-[0_0_30px_rgba(212,168,75,0.5)]">
                  EVEN WITH GAPS, JOB HOPPING, OR A RECORD.
                </ShimmerText>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-lg sm:text-xl text-ash-gray max-w-2xl mx-auto mb-10">
                Start with a free report. If you want, we'll turn it into a resume that <span className="text-iron-white font-medium">survives scrutiny</span>.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://forge.steelmanresumes.com" 
                  className="btn-gold text-lg py-4 px-8"
                >
                  Start Free Report →
                </a>
                <a 
                  href="https://refinery.steelmanresumes.com" 
                  className="btn-outline text-lg py-4 px-8"
                >
                  Get AI Resume · $37
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Trust Strip with Animated Counters */}
        <section className="bg-crucible-charcoal py-12 border-y border-anvil-gray">
          <div className="max-w-6xl mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <p className="font-headline text-4xl text-steel-gold mb-2">
                  <AnimatedCounter target={10} suffix="+" />
                </p>
                <p className="text-ash-gray text-sm uppercase tracking-wide">Years in Business</p>
                <p className="text-iron-white text-xs mt-1">Helping Wisconsin Workers Since 2014</p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-headline text-4xl text-steel-gold mb-2">
                  <AnimatedCounter target={900} suffix="+" />
                </p>
                <p className="text-ash-gray text-sm uppercase tracking-wide">Resumes Created</p>
                <p className="text-iron-white text-xs mt-1">Blue-Collar & Second-Chance Specialists</p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-headline text-4xl text-steel-gold mb-2">
                  <AnimatedCounter target={100} suffix="%" />
                </p>
                <p className="text-ash-gray text-sm uppercase tracking-wide">Real Talk, No BS</p>
                <p className="text-iron-white text-xs mt-1">Honest Strategies That Work</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-6xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-center text-iron-white mb-16">
                HOW IT WORKS
              </h2>
            </FadeUp>
            
            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <StaggerItem>
                <TiltCard className="glass-card p-8 text-center relative h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center font-headline text-forge-black">
                    1
                  </div>
                  <h3 className="font-headline text-2xl text-steel-gold mt-4 mb-4">THE FORGE</h3>
                  <p className="text-ash-gray">
                    Upload your resume. AI analyzes your experience, goals, and challenges. Get a free Career Intelligence Report in 5 minutes.
                  </p>
                  <p className="text-iron-white font-medium mt-4">FREE</p>
                </TiltCard>
              </StaggerItem>

              {/* Step 2 */}
              <StaggerItem>
                <TiltCard className="glass-card p-8 text-center relative h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center font-headline text-forge-black">
                    2
                  </div>
                  <h3 className="font-headline text-2xl text-steel-gold mt-4 mb-4">THE REFINERY</h3>
                  <p className="text-ash-gray">
                    AI writes your resume, cover letter, and follow-up templates. 50 matched employers with application strategies. Download immediately.
                  </p>
                  <p className="text-iron-white font-medium mt-4">$37</p>
                </TiltCard>
              </StaggerItem>

              {/* Step 3 */}
              <StaggerItem>
                <TiltCard className="glass-card p-8 text-center relative h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center font-headline text-forge-black">
                    3
                  </div>
                  <h3 className="font-headline text-2xl text-steel-gold mt-4 mb-4">HUMAN TOUCH</h3>
                  <p className="text-ash-gray">
                    Want a human to review or write it? We offer resume review ($175) and full custom service ($250+). Real person, real attention.
                  </p>
                  <p className="text-iron-white font-medium mt-4">$175-$275</p>
                </TiltCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 bg-crucible-charcoal">
          <div className="max-w-6xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-center text-iron-white mb-6">
                WHO WE HELP
              </h2>
              <p className="text-center text-ash-gray max-w-2xl mx-auto mb-12">
                Not people with perfect work histories. Real people with real situations.
              </p>
            </FadeUp>
            
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Employment Gaps', desc: 'Life happens. We help you explain it.' },
                { title: 'Criminal Record', desc: 'Your past doesn\'t define your paycheck.' },
                { title: 'Job Hopping', desc: 'Multiple jobs? We show the pattern of growth.' },
                { title: 'Career Change', desc: 'Transferable skills, told the right way.' },
                { title: 'Recovery', desc: 'Your journey is a strength, not a weakness.' },
                { title: 'No Degree', desc: 'Experience beats paper. We prove it.' },
                { title: 'Returning to Work', desc: 'Caregivers, military, anyone starting fresh.' },
                { title: 'Blue Collar', desc: 'Warehouse, trades, food service—our specialty.' },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <TiltCard tiltAmount={8} className="glass-card p-6 h-full">
                    <h3 className="font-headline text-lg text-steel-gold mb-2">{item.title}</h3>
                    <p className="text-ash-gray text-sm">{item.desc}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How We Work - with Video Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/video/hero-molten.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-forge-black via-forge-black/95 to-forge-black" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-center text-iron-white mb-16">
                HOW WE WORK
              </h2>
            </FadeUp>
            
            <div className="space-y-12">
              <FadeUp>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">No Corporate Fluff</h3>
                  <p className="text-ash-gray text-lg">
                    We don't write resumes that sound like LinkedIn influencers. We write resumes that sound like <span className="text-iron-white">you</span>—just the best version of you.
                  </p>
                </div>
              </FadeUp>
              
              <div className="section-divider" />
              
              <FadeUp delay={0.1}>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">Honest Assessment</h3>
                  <p className="text-ash-gray text-lg">
                    If your resume has red flags, we don't ignore them. We address them directly and give you scripts that work.
                  </p>
                </div>
              </FadeUp>
              
              <div className="section-divider" />
              
              <FadeUp delay={0.2}>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">Real Results</h3>
                  <p className="text-ash-gray text-lg">
                    We've helped thousands of people get hired. Not imaginary success stories—real workers in Wisconsin.
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.3}>
              <div className="mt-16 p-8 glass-card">
                <p className="text-lg text-iron-white mb-4">
                  <strong>We believe everyone deserves another shot.</strong> But we don't believe in false hope.
                </p>
                <p className="text-ash-gray">
                  If you've got 3 felonies from last year and zero work experience, you're not getting hired as a bank teller. That's reality. But you can get hired at a warehouse, a construction site, or a kitchen. And if you show up, work hard, and stay clean, you can build from there. <span className="text-iron-white font-medium">That's what we help with.</span> The first step. The honest path forward.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-crucible-charcoal to-forge-black">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-iron-white mb-6">
                READY TO GET STARTED?
              </h2>
              <p className="text-ash-gray text-lg mb-10">
                Your free Career Intelligence Report takes 5 minutes. No credit card. No commitment.
              </p>
              <a 
                href="https://forge.steelmanresumes.com" 
                className="btn-gold text-lg py-4 px-10 inline-block"
              >
                Start Free Report Now →
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
