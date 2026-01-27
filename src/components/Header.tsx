'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-forge-black/80 backdrop-blur-md border-b border-steel-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Mobile: Icon only */}
            <img 
              src="/logo-icon.png" 
              alt="Steel Man Resumes" 
              className="h-10 w-auto sm:hidden"
            />
            {/* Desktop: Full wordmark with man */}
            <img 
              src="/logo-header.png" 
              alt="Steel Man Resumes" 
              className="hidden sm:block h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/guide" className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide">
              The Guide
            </Link>
            <Link href="/success" className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide">
              Success Stories
            </Link>
            <Link href="/about" className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide">
              About
            </Link>
            <a 
              href="https://forge.steelmanresumes.com" 
              className="btn-gold text-sm py-3 px-6"
            >
              Start Free Report
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-iron-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-steel-gold/20 bg-forge-black/95 backdrop-blur-md -mx-4 px-4">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/guide" 
                className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Guide
              </Link>
              <Link 
                href="/success" 
                className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                href="/about" 
                className="text-iron-white/80 hover:text-steel-gold transition-colors text-sm font-medium uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://forge.steelmanresumes.com" 
                className="btn-gold text-sm py-3 px-6 text-center mt-2"
              >
                Start Free Report
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
