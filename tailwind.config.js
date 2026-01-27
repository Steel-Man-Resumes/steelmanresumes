/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SMR Brand Colors
        'forge-black': '#0D0D0D',
        'crucible-charcoal': '#1A1A1A',
        'anvil-gray': '#2A2A2A',
        'steel-gold': '#D4A84B',
        'bright-gold': '#E8C060',
        'deep-gold': '#B8923F',
        'trash-red': '#C41E3A',
        'iron-white': '#F5F5F5',
        'ash-gray': '#A0A0A0',
      },
      fontFamily: {
        'headline': ['Anton', 'sans-serif'],
        'body': ['Work Sans', 'sans-serif'],
        'accent': ['Permanent Marker', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(180deg, #E8C060 0%, #D4A84B 50%, #B8923F 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(232, 192, 96, 0.4), transparent)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 168, 75, 0.3)',
        'gold-glow-strong': '0 0 30px rgba(212, 168, 75, 0.5)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 75, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 168, 75, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
