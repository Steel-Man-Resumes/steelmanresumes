import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steel Man Resumes | Truth. Told Strong.',
  description: 'Job-ready resumes for blue-collar workers and second-chance candidates. Real talk, no BS. Based in Wisconsin, serving workers nationwide.',
  keywords: 'resume service, blue collar resume, second chance employment, felony friendly jobs, employment gaps, Wisconsin resume service',
  openGraph: {
    title: 'Steel Man Resumes | Truth. Told Strong.',
    description: 'Job-ready resumes for blue-collar workers and second-chance candidates. Real talk, no BS.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Steel Man Resumes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
