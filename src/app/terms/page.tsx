import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Steel Man Resumes',
  description: 'Terms of Service for Steel Man Resumes. Plain English, no lawyer-speak.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-forge-black">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-headline text-4xl text-iron-white mb-8">
              TERMS OF SERVICE
            </h1>
            <p className="text-ash-gray mb-8">
              Last updated: January 2026. Plain English version—because legal jargon helps no one.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">WHAT WE PROVIDE</h2>
                <p className="text-ash-gray leading-relaxed">
                  Steel Man Resumes provides resume writing, career intelligence reports, and job search support documents. We help you present your experience in the strongest possible way. We do not guarantee employment—no one can.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">PAYMENT & REFUNDS</h2>
                <p className="text-ash-gray leading-relaxed">
                  Payment is due at time of purchase. Once your documents have been delivered, the service is complete and payments are non-refundable. If there's an issue with your documents, contact us and we'll make it right.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">YOUR INFORMATION</h2>
                <p className="text-ash-gray leading-relaxed">
                  You provide us with your work history, contact info, and personal details to create your documents. This information is yours. We use it only to create your deliverables. See our <a href="/privacy" className="text-steel-gold hover:text-bright-gold">Privacy Policy</a> for details.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">HONESTY POLICY</h2>
                <p className="text-ash-gray leading-relaxed">
                  We help you present your experience in the best light—but we don't lie. If you ask us to fabricate experience, degrees, or credentials you don't have, we'll decline. Resumes should be truthful and defensible.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">NO LEGAL ADVICE</h2>
                <p className="text-ash-gray leading-relaxed">
                  We are not lawyers. Any information about fair chance laws, ban-the-box policies, or employment rights is general information only—not legal advice. Consult an attorney for your specific situation.
                </p>
              </div>

              <div>
                <h2 className="font-headline text-xl text-steel-gold mb-4">QUESTIONS?</h2>
                <p className="text-ash-gray leading-relaxed">
                  If anything here is unclear, just ask. Text us at <a href="sms:2623918137" className="text-steel-gold hover:text-bright-gold">(262) 391-8137</a> or visit our <a href="/contact" className="text-steel-gold hover:text-bright-gold">contact page</a>.
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
