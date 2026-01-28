import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getGuideBySlug, getAllGuides, getGuideImage } from '@/lib/guides';
import { loadMarkdown, markdownToHtml, loadSchema } from '@/lib/markdown';
import { FadeUp } from '@/components/animations';
import type { Metadata } from 'next';
import '../../article.css';

interface GuidePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const SITE_URL = 'https://steelmanresumes.com';

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const guide = getGuideBySlug(category, slug);

  if (!guide) {
    return {
      title: 'Guide Not Found | Steel Man Resumes',
    };
  }

  const canonicalUrl = `${SITE_URL}/guide/${category}/${slug}`;
  const ogImage = getGuideImage(slug);
  const fullImageUrl = `${SITE_URL}${ogImage}`;

  return {
    title: `${guide.title} | Steel Man Resumes`,
    description: guide.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonicalUrl,
      siteName: 'Steel Man Resumes',
      type: 'article',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { category, slug } = await params;
  const guide = getGuideBySlug(category, slug);

  if (!guide) {
    notFound();
  }

  // Load markdown content
  const markdown = await loadMarkdown(guide.markdownFile);
  const htmlContent = await markdownToHtml(markdown);

  // Load schema (now returns parsed JSON objects)
  const schemas = await loadSchema(guide.schemaFile);

  const categoryLabel = category === 'second-chance-employment'
    ? 'Second-Chance Employment'
    : 'Blue-Collar Careers';

  const guideImage = getGuideImage(slug);

  return (
    <>
      {/* Inject JSON-LD schemas into head */}
      {schemas && schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />

      <main className="pt-16 md:pt-20">
        {/* Breadcrumb Navigation */}
        <section className="bg-crucible-charcoal border-b border-anvil-gray py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-ash-gray">
              <Link href="/" className="hover:text-steel-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/guide" className="hover:text-steel-gold transition-colors">
                The Guide
              </Link>
              <span>/</span>
              <span className="text-iron-white">{categoryLabel}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 md:py-24 bg-forge-black">
          <div className="max-w-4xl mx-auto px-4">
            <FadeUp>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-steel-gold/10 border border-steel-gold/30 mb-8">
                <div className="w-2 h-2 rounded-full bg-steel-gold animate-pulse" />
                <span className="text-steel-gold font-medium text-sm uppercase tracking-wide">
                  {categoryLabel}
                </span>
              </div>

              {/* Article Header */}
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-iron-white mb-6 leading-[1.1] font-bold tracking-tight">
                {guide.title}
              </h1>

              <p className="text-2xl text-ash-gray/90 mb-12 leading-relaxed font-light border-l-4 border-steel-gold pl-6">
                {guide.description}
              </p>

              {/* Featured Infographic */}
              {guideImage && guideImage.includes('infographic') && (
                <div className="my-12 rounded-xl overflow-hidden border-2 border-anvil-gray/30 shadow-2xl">
                  <Image
                    src={guideImage}
                    alt={guide.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              )}
            </FadeUp>

            {/* Markdown Content with Enhanced Styling */}
            <FadeUp delay={0.1}>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </FadeUp>

            {/* Back Navigation */}
            <div className="mt-20 pt-12 border-t-2 border-anvil-gray/30">
              <Link
                href="/guide"
                className="inline-flex items-center gap-3 text-steel-gold hover:text-bright-gold transition-colors group text-lg font-medium"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Guides
              </Link>
            </div>
          </div>
        </article>

        {/* CTA Section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-forge-black via-crucible-charcoal to-forge-black" />

          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-steel-gold to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <FadeUp>
              {/* Icon/Badge */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-steel-gold/10 border-2 border-steel-gold/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-steel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="font-headline text-4xl sm:text-5xl text-center text-iron-white mb-6 leading-tight">
                READY FOR YOUR<br />
                <span className="text-steel-gold">PERSONALIZED PLAN?</span>
              </h2>

              <p className="text-ash-gray text-xl text-center mb-12 leading-relaxed max-w-2xl mx-auto">
                Get a free Career Intelligence Report analyzing <span className="text-iron-white font-semibold">YOUR specific situation</span>—no generic advice.
              </p>

              {/* CTA Button - Enhanced */}
              <div className="flex flex-col items-center gap-6">
                <a
                  href="https://forge.steelmanresumes.com"
                  className="group relative inline-flex items-center gap-3 bg-gold-gradient text-forge-black font-bold text-xl py-6 px-12 rounded-lg shadow-[0_0_30px_rgba(212,168,75,0.3)] hover:shadow-[0_0_50px_rgba(212,168,75,0.5)] transition-all duration-300 hover:scale-105"
                >
                  <span>Start Free Report Now</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Sub-text */}
                <div className="flex items-center gap-4 text-ash-gray/60 text-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    5 minutes
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No commitment
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
