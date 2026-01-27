'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter, EmberParticles } from '@/components/animations'

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero with Video + Ember Particles */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/hero-molten.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/60 to-forge-black/30" />
          <EmberParticles particleCount={60} />
          <div className="relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl text-iron-white mb-4">
                TRUTH. TOLD STRONG.
              </h1>
              <p className="text-xl sm:text-2xl text-ash-gray max-w-2xl mx-auto">
                The Steel Man Resumes philosophy
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Troy Section */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <FadeUp>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden border-2 border-steel-gold/30 shadow-gold-glow">
                    <img 
                      src="/troy-about-hero.jpg" 
                      alt="Troy Richard Carr in the forge" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forge-black via-forge-black/90 to-transparent p-6">
                    <p className="font-headline text-2xl text-steel-gold">TROY RICHARD CARR</p>
                    <p className="text-ash-gray">Founder & Resume Specialist</p>
                    <p className="text-ash-gray text-sm">Waukesha, Wisconsin</p>
                  </div>
                </div>
              </FadeUp>

              {/* Bio */}
              <div className="space-y-6">
                <FadeUp delay={0.1}>
                  <h2 className="font-headline text-4xl text-iron-white">THE MAN BEHIND THE MISSION</h2>
                </FadeUp>
                
                <FadeUp delay={0.2}>
                  <p className="text-ash-gray text-lg leading-relaxed">
                    I'm not a career coach who learned about blue-collar work from a textbook. I've <span className="text-iron-white">lived it</span>: manufacturing floors, kitchens, warehouses, logistics operations. I've supervised teams and been supervised. I know what it's like to wonder if your past will keep you from your future.
                  </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="text-ash-gray text-lg leading-relaxed">
                    I built Steel Man Resumes because I got tired of watching good people get passed over for bad reasons. The system is broken—but I know how to work it. And now I use that knowledge to help others.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Strip */}
        <section className="py-12 bg-crucible-charcoal border-y border-steel-gold/20">
          <div className="max-w-5xl mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StaggerItem>
                <p className="font-headline text-3xl text-steel-gold">
                  <AnimatedCounter target={10} suffix="+" />
                </p>
                <p className="text-ash-gray text-sm mt-1">Years Writing Resumes</p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-headline text-3xl text-steel-gold">LSS</p>
                <p className="text-ash-gray text-sm mt-1">Six Sigma Trained</p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-headline text-3xl text-steel-gold">
                  <AnimatedCounter target={900} suffix="+" />
                </p>
                <p className="text-ash-gray text-sm mt-1">Resumes Created</p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-headline text-3xl text-steel-gold">WI</p>
                <p className="text-ash-gray text-sm mt-1">Wisconsin Based</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Background & Skills */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-5xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl text-center text-iron-white mb-16">
                MORE THAN RESUMES
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeUp delay={0.1}>
                <div className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-3">LEAN SIX SIGMA</h3>
                  <p className="text-ash-gray">
                    Lean Six Sigma trained. I apply process optimization to everything—including how I build resumes. Systematic, efficient, effective.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-3">BEHAVIORAL PSYCHOLOGY</h3>
                  <p className="text-ash-gray">
                    Studied at UW-Waukesha. I understand how hiring managers think, what biases they carry, and how to reframe your story to land.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="glass-card p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-steel-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl text-steel-gold mb-3">BLUE-COLLAR ROOTS</h3>
                  <p className="text-ash-gray">
                    Manufacturing, warehouses, kitchens, logistics. I've done the work, not just studied it. I know what employers in these fields actually want.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* TMG & Marketing */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeUp delay={0.4}>
                <div className="glass-card p-8 h-full">
                  <h3 className="font-headline text-xl text-steel-gold mb-3">THE MIDNIGHT GARDEN</h3>
                  <p className="text-ash-gray mb-4">
                    Beyond resumes, I run <a href="https://themidnightgarden.club" target="_blank" rel="noopener noreferrer" className="text-steel-gold hover:text-bright-gold">The Midnight Garden</a>—a consulting agency specializing in AI-powered research, strategy, and operations for businesses ready to work smarter.
                  </p>
                  <p className="text-ash-gray">
                    Same philosophy: real talk, no BS, results that matter.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="glass-card p-8 h-full">
                  <h3 className="font-headline text-xl text-steel-gold mb-3">MARKETING & CONNECTIONS</h3>
                  <p className="text-ash-gray">
                    Years of experience in marketing, print production, and building relationships with agencies across Wisconsin. I understand how to position a message—whether that's a resume or a brand.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Philosophy with Video Background */}
        <section className="relative py-20 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/video/hero-molten.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-forge-black/85" />
          <EmberParticles particleCount={40} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-center text-iron-white mb-16">
                THE STEEL MAN PHILOSOPHY
              </h2>
            </FadeUp>

            <div className="space-y-12">
              <FadeUp delay={0.1}>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">Why "Steel Man"?</h3>
                  <p className="text-ash-gray text-lg leading-relaxed">
                    You've heard of a "straw man" argument—a weak version of something that's easy to knock down. A <span className="text-iron-white">"steel man"</span> is the opposite: the strongest possible version of an argument.
                  </p>
                  <p className="text-ash-gray text-lg leading-relaxed mt-4">
                    That's what we do with your resume. We don't make a flimsy version of you that crumbles under scrutiny. We build the strongest possible case for why you should be hired.
                  </p>
                </div>
              </FadeUp>

              <div className="h-px bg-gradient-to-r from-transparent via-steel-gold/50 to-transparent" />

              <FadeUp delay={0.2}>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">We Don't Pretend Your Past Doesn't Exist</h3>
                  <p className="text-ash-gray text-lg leading-relaxed">
                    If you have a gap, a record, or a rocky work history—employers are going to find out anyway. We help you get ahead of it. Address it on your terms. Turn a red flag into a story of growth.
                  </p>
                </div>
              </FadeUp>

              <div className="h-px bg-gradient-to-r from-transparent via-steel-gold/50 to-transparent" />

              <FadeUp delay={0.3}>
                <div>
                  <h3 className="font-headline text-2xl text-steel-gold mb-4">Real Talk, Real Results</h3>
                  <p className="text-ash-gray text-lg leading-relaxed">
                    We won't tell you that you can be anything you want to be. We'll tell you what's <span className="text-iron-white">realistic</span> for your situation—and then help you get there. The first job isn't always the dream job. But it's the job that gets you moving forward.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-crucible-charcoal">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl text-iron-white mb-6">
                READY TO BUILD YOUR CASE?
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
