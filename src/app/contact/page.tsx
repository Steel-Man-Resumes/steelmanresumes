'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from '@/components/animations'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    situation: '',
    situationDetails: '',
    timeline: '',
    message: '',
    preferredContact: 'text'
  })
  const [expandedSections, setExpandedSections] = useState({
    details: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const situationOptions = [
    { value: '', label: 'What brings you here?' },
    { value: 'gap', label: 'Employment gap' },
    { value: 'record', label: 'Criminal record' },
    { value: 'hopping', label: 'Job hopping history' },
    { value: 'change', label: 'Career change' },
    { value: 'recovery', label: 'Recovery journey' },
    { value: 'returning', label: 'Returning to work' },
    { value: 'exploring', label: 'Just exploring options' },
    { value: 'other', label: 'Something else' }
  ]

  const situationMessages: Record<string, string> = {
    gap: "Gaps happen. Life happens. I've helped hundreds of people explain gaps from caregiving, health issues, incarceration, or just figuring things out. We'll find the right way to tell your story.",
    record: "Your past doesn't define your future paycheck. I've worked with people coming out of county, state, and federal systems. We'll address it honestly and find employers who give real second chances.",
    hopping: "Multiple jobs isn't always a red flag—sometimes it's a pattern of growth, or just survival. We'll reframe it so employers see the value you bring.",
    change: "Switching industries takes courage. Your skills transfer more than you think. We'll translate what you've done into what you want to do.",
    recovery: "Your recovery journey is a strength, not a weakness. The discipline it takes to get clean is exactly what employers need. We'll position it right.",
    returning: "Whether you've been caregiving, serving, or just taking a break—coming back takes guts. We'll bridge the gap and get you back in the game.",
    exploring: "No pressure. Look around, see if this feels right. When you're ready, I'm here.",
    other: "Whatever your situation, I've probably seen something similar. Tell me what's going on."
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          situation: situationOptions.find(s => s.value === formData.situation)?.label,
          situationDetails: formData.situationDetails,
          timeline: formData.timeline,
          preferredContact: formData.preferredContact
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorData = await response.json()
        alert(`Form submission failed: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit form. Please try again or email us directly at troyrichardcarr@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero with Sparks Image */}
        <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
          <img 
            src="/hero-contact.jpg" 
            alt="Sparks and embers" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/70 to-forge-black/40" />
          <div className="relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="font-headline text-4xl sm:text-5xl text-iron-white mb-4">
                LET'S TALK
              </h1>
              <p className="text-xl text-ash-gray max-w-2xl mx-auto">
                No judgment. No pressure. Just a real conversation.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-forge-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <FadeUp>
                  <div className="glass-card p-8 sticky top-24">
                    <h2 className="font-headline text-2xl text-steel-gold mb-6">REACH OUT DIRECTLY</h2>
                    
                    <div className="space-y-6">
                      {/* Text */}
                      <a href="sms:2623918137" className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-forge-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-iron-white font-medium group-hover:text-steel-gold transition-colors">(262) 391-8137</p>
                          <p className="text-ash-gray text-sm">Text me — fastest response</p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a href="tel:2623918137" className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-anvil-gray flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-iron-white font-medium group-hover:text-steel-gold transition-colors">(262) 391-8137</p>
                          <p className="text-ash-gray text-sm">Call if you prefer voice</p>
                        </div>
                      </a>

                      {/* Email */}
                      <a href="mailto:troy@steelmanresumes.com" className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-anvil-gray flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-iron-white font-medium group-hover:text-steel-gold transition-colors">troy@steelmanresumes.com</p>
                          <p className="text-ash-gray text-sm">My personal inbox</p>
                        </div>
                      </a>
                    </div>

                    <div className="mt-8 pt-6 border-t border-anvil-gray">
                      <p className="text-ash-gray text-sm">
                        <span className="text-iron-white font-medium">Hours:</span><br />
                        Mon–Fri: 9am–7pm CST<br />
                        Sat: 10am–4pm CST
                      </p>
                      <p className="text-ash-gray text-sm mt-4">
                        <span className="text-iron-white font-medium">Location:</span><br />
                        Waukesha, Wisconsin<br />
                        <span className="text-steel-gold">Serving workers nationwide</span>
                      </p>
                    </div>

                    <div className="mt-6 p-4 bg-steel-gold/10 rounded-lg border border-steel-gold/20">
                      <p className="text-iron-white text-sm">
                        <strong>This is really me.</strong> Not a call center, not a bot. These are my real contact details. Use them anytime.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* The Form */}
              <div className="lg:col-span-3">
                <FadeUp delay={0.2}>
                  {submitted ? (
                    <div className="glass-card p-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-steel-gold/20 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="font-headline text-3xl text-iron-white mb-4">MESSAGE RECEIVED</h2>
                      <p className="text-ash-gray text-lg mb-6">
                        I've got your info. Expect to hear from me within a few hours during business hours, or first thing tomorrow if it's late.
                      </p>
                      <p className="text-steel-gold">
                        In the meantime, feel free to start your free Career Intelligence Report.
                      </p>
                      <a href="https://forge.steelmanresumes.com" className="btn-gold inline-block mt-6 py-3 px-8">
                        Start Free Report →
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="glass-card p-8">
                      <h2 className="font-headline text-2xl text-iron-white mb-2">NOT READY TO CALL?</h2>
                      <p className="text-ash-gray mb-8">That's okay. Fill this out and I'll reach out to you.</p>

                      {/* Name */}
                      <div className="mb-6">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          What should I call you?
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-anvil-gray border border-anvil-gray focus:border-steel-gold rounded-lg px-4 py-3 text-iron-white placeholder-ash-gray outline-none transition-colors"
                          placeholder="First name is fine"
                        />
                      </div>

                      {/* Contact Preference */}
                      <div className="mb-6">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          Best way to reach you?
                        </label>
                        <div className="flex gap-3">
                          {[
                            { value: 'text', label: 'Text', sub: 'Quick & easy' },
                            { value: 'call', label: 'Call', sub: "Let's talk" },
                            { value: 'email', label: 'Email', sub: 'Take your time' }
                          ].map(opt => (
                            <label 
                              key={opt.value}
                              className={`flex-1 p-4 rounded-lg border cursor-pointer transition-all ${formData.preferredContact === opt.value ? 'border-steel-gold bg-steel-gold/10' : 'border-anvil-gray hover:border-steel-gold/50'}`}
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={opt.value}
                                checked={formData.preferredContact === opt.value}
                                onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                                className="sr-only"
                              />
                              <span className="text-iron-white font-medium block">{opt.label}</span>
                              <span className="text-ash-gray text-xs">{opt.sub}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="mb-6">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          required={formData.preferredContact !== 'email'}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-anvil-gray border border-anvil-gray focus:border-steel-gold rounded-lg px-4 py-3 text-iron-white placeholder-ash-gray outline-none transition-colors"
                          placeholder="(555) 555-5555"
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-6">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          Email {formData.preferredContact !== 'email' && <span className="text-ash-gray font-normal">(optional)</span>}
                        </label>
                        <input
                          type="email"
                          required={formData.preferredContact === 'email'}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-anvil-gray border border-anvil-gray focus:border-steel-gold rounded-lg px-4 py-3 text-iron-white placeholder-ash-gray outline-none transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>

                      {/* Situation */}
                      <div className="mb-6">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          What's your situation?
                        </label>
                        <select
                          value={formData.situation}
                          onChange={(e) => setFormData({...formData, situation: e.target.value})}
                          className="w-full bg-anvil-gray border border-anvil-gray focus:border-steel-gold rounded-lg px-4 py-3 text-iron-white outline-none transition-colors"
                        >
                          {situationOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        
                        {/* Conditional reassurance message */}
                        {formData.situation && situationMessages[formData.situation] && (
                          <div className="mt-3 p-4 bg-steel-gold/10 rounded-lg border border-steel-gold/20">
                            <p className="text-iron-white text-sm">
                              {situationMessages[formData.situation]}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Expandable: Tell me more */}
                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={() => setExpandedSections({...expandedSections, details: !expandedSections.details})}
                          className="flex items-center gap-2 text-steel-gold hover:text-bright-gold transition-colors text-sm"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform ${expandedSections.details ? 'rotate-90' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Want to tell me more? (optional)
                        </button>
                        
                        {expandedSections.details && (
                          <div className="mt-4">
                            <textarea
                              value={formData.situationDetails}
                              onChange={(e) => setFormData({...formData, situationDetails: e.target.value})}
                              rows={4}
                              className="w-full bg-anvil-gray border border-anvil-gray focus:border-steel-gold rounded-lg px-4 py-3 text-iron-white placeholder-ash-gray outline-none transition-colors resize-none"
                              placeholder="Whatever you want to share. The more I know, the better I can help. But no pressure—we can talk about it later too."
                            />
                            <p className="text-ash-gray text-xs mt-2">
                              Everything you share stays between us. I've heard it all—nothing shocks me.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Timeline */}
                      <div className="mb-8">
                        <label className="block text-iron-white text-sm font-medium mb-2">
                          How soon do you need help?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {['ASAP', 'This week', 'This month', 'Just exploring'].map(time => (
                            <label 
                              key={time}
                              className={`p-3 rounded-lg border text-center cursor-pointer transition-all text-sm ${formData.timeline === time ? 'border-steel-gold bg-steel-gold/10 text-iron-white' : 'border-anvil-gray text-ash-gray hover:border-steel-gold/50'}`}
                            >
                              <input
                                type="radio"
                                name="timeline"
                                value={time}
                                checked={formData.timeline === time}
                                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                                className="sr-only"
                              />
                              {time}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gold w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                      <p className="text-ash-gray text-xs text-center mt-4">
                        This goes directly to my phone and email—not a queue, not a bot. I'll respond personally.
                      </p>
                    </form>
                  )}
                </FadeUp>
              </div>
            </div>

            {/* Service Options */}
            <div className="mt-20">
              <FadeUp>
                <h2 className="font-headline text-3xl text-center text-iron-white mb-4">SERVICE OPTIONS</h2>
                <p className="text-center text-ash-gray mb-12 max-w-2xl mx-auto">
                  Not sure which is right for you? Start with the free report—it'll help you figure out where you stand.
                </p>
              </FadeUp>
              
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StaggerItem>
                  <TiltCard tiltAmount={6} className="glass-card p-6 text-center h-full flex flex-col">
                    <p className="font-headline text-3xl text-steel-gold">FREE</p>
                    <p className="text-iron-white font-medium mt-2">The Forge</p>
                    <p className="text-ash-gray text-sm mt-2 flex-grow">Career Intelligence Report — understand your situation and next steps.</p>
                    <a href="https://forge.steelmanresumes.com" className="btn-gold w-full mt-4 py-3 text-sm">
                      Start Free →
                    </a>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard tiltAmount={6} className="glass-card p-6 text-center h-full flex flex-col">
                    <p className="font-headline text-3xl text-steel-gold">$37</p>
                    <p className="text-iron-white font-medium mt-2">The Refinery</p>
                    <p className="text-ash-gray text-sm mt-2 flex-grow">AI resume, cover letter, 50 matched employers, action plan.</p>
                    <a href="https://refinery.steelmanresumes.com" className="btn-gold w-full mt-4 py-3 text-sm">
                      Get Package →
                    </a>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard tiltAmount={6} className="glass-card p-6 text-center h-full flex flex-col">
                    <p className="font-headline text-3xl text-steel-gold">$175</p>
                    <p className="text-iron-white font-medium mt-2">Red Package</p>
                    <p className="text-ash-gray text-sm mt-2 flex-grow">One human-written resume. Real person, real attention.</p>
                    <a href="sms:2623918137?body=Hi%20Troy%2C%20I%27m%20interested%20in%20the%20Red%20Package" className="btn-outline w-full mt-4 py-3 text-sm">
                      Text to Start →
                    </a>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard tiltAmount={6} className="glass-card p-6 text-center h-full flex flex-col">
                    <p className="font-headline text-3xl text-steel-gold">$250</p>
                    <p className="text-iron-white font-medium mt-2">Blue Package</p>
                    <p className="text-ash-gray text-sm mt-2 flex-grow">Two resumes + cover letter. Full job search support.</p>
                    <a href="sms:2623918137?body=Hi%20Troy%2C%20I%27m%20interested%20in%20the%20Blue%20Package" className="btn-outline w-full mt-4 py-3 text-sm">
                      Text to Start →
                    </a>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>
              
              <FadeUp delay={0.5}>
                <p className="text-center text-ash-gray text-sm mt-8">
                  Need it fast? <span className="text-iron-white">Black Package ($275)</span> includes 24-hour rush. <a href="sms:2623918137?body=Hi%20Troy%2C%20I%20need%20the%20Black%20Package%20(rush)" className="text-steel-gold hover:text-bright-gold">Text me</a>.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
