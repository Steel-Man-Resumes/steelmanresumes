import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Steel Man Resumes',
  description: 'Privacy Policy for Steel Man Resumes. Three bullets, plain language. We respect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-forge-black">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-headline text-4xl text-iron-white mb-8">
              PRIVACY POLICY
            </h1>
            <p className="text-ash-gray mb-8">
              Last updated: January 2026. Here's what you need to know—no 50-page document required.
            </p>

            <div className="glass-card p-8 mb-12">
              <h2 className="font-headline text-2xl text-steel-gold mb-6">THE SHORT VERSION</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-steel-gold font-headline text-2xl">1.</span>
                  <div>
                    <p className="text-iron-white font-medium mb-2">What we collect</p>
                    <p className="text-ash-gray">Your name, contact info, and work history—only what you give us to create your documents.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-steel-gold font-headline text-2xl">2.</span>
                  <div>
                    <p className="text-iron-white font-medium mb-2">How we use it</p>
                    <p className="text-ash-gray">To generate your resume and job search documents. That's it. We don't sell your data. We don't spam you.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-steel-gold font-headline text-2xl">3.</span>
                  <div>
                    <p className="text-iron-white font-medium mb-2">How to delete it</p>
                    <p className="text-ash-gray">Use the "Destroy Data" button in the app, or contact us and we'll delete everything. We don't keep your info after your documents are delivered.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">COOKIES & TRACKING</h2>
                <p className="text-ash-gray leading-relaxed">
                  We use basic analytics to understand how people use the site (pages visited, time on site). We don't track you across the internet or build advertising profiles.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">PAYMENT INFORMATION</h2>
                <p className="text-ash-gray leading-relaxed">
                  Payments are processed through Stripe. We never see or store your credit card number. Stripe's security is bank-level.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">THIRD PARTIES</h2>
                <p className="text-ash-gray leading-relaxed">
                  We use AI services (OpenAI, Anthropic, Perplexity) to help generate your documents. Your data is processed but not stored by these services beyond what's needed to complete your request.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">QUESTIONS?</h2>
                <p className="text-ash-gray leading-relaxed">
                  Text us at <a href="sms:2623918137" className="text-steel-gold hover:text-bright-gold">(262) 391-8137</a> or visit our <a href="/contact" className="text-steel-gold hover:text-bright-gold">contact page</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
