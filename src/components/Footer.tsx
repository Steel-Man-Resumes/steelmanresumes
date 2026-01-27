'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-steel-gold/20">
      {/* Glass background */}
      <div className="absolute inset-0 bg-forge-black/60 backdrop-blur-md" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <img 
                src="/logo-footer.png" 
                alt="Steel Man Resumes" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-ash-gray text-sm leading-relaxed">
              Job-ready resumes for blue-collar workers and second-chance candidates. Real talk, no BS.
            </p>
            <p className="text-ash-gray text-sm mt-2">
              Based in Wisconsin, serving workers nationwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline text-lg text-iron-white mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://forge.steelmanresumes.com" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  The Forge (Free Report)
                </a>
              </li>
              <li>
                <a href="https://refinery.steelmanresumes.com" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  The Refinery ($37)
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  Human Resume Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-headline text-lg text-iron-white mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  About / The Manifesto
                </Link>
              </li>
              <li>
                <Link href="/success" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  For Workforce Partners
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-ash-gray hover:text-steel-gold transition-colors text-sm">
                  The Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline text-lg text-iron-white mb-4">GET IN TOUCH</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:2623918137" className="text-ash-gray hover:text-steel-gold transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (262) 391-8137
                </a>
              </li>
              <li>
                <a href="sms:2623918137" className="text-ash-gray hover:text-steel-gold transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Text Us (Fastest)
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-ash-gray hover:text-steel-gold transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Form
                </Link>
              </li>
            </ul>
            <p className="text-ash-gray text-xs mt-4">
              Waukesha, Wisconsin<br />
              Available 9am-7pm CST
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-steel-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-ash-gray text-xs">
            <p>© {new Date().getFullYear()} Steel Man Resumes LLC. All rights reserved.</p>
            <p className="mt-1">
              Crafted by <a href="https://themidnightgarden.club" target="_blank" rel="noopener noreferrer" className="text-steel-gold hover:text-bright-gold transition-colors">The Midnight Garden</a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-ash-gray text-xs hover:text-steel-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-ash-gray text-xs hover:text-steel-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="mobile-bottom-bar">
        <a 
          href="https://forge.steelmanresumes.com" 
          className="btn-gold flex-1 text-center text-sm py-3"
        >
          Start Free Report
        </a>
        <a 
          href="sms:2623918137" 
          className="btn-outline flex-1 text-center text-sm py-3"
        >
          Text Us
        </a>
      </div>
    </footer>
  )
}
