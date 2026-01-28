import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getGuideBySlug, getAllGuides, getGuideImage } from '@/lib/guides';
import { loadMarkdown, markdownToHtml, loadSchema } from '@/lib/markdown';
import { FadeUp } from '@/components/animations';
import type { Metadata } from 'next';

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
        <article className="py-12 md:py-20 bg-forge-black">
          <div className="max-w-4xl mx-auto px-4">
            <FadeUp>
              {/* Category Badge */}
              <div className="inline-block px-4 py-1 rounded-full bg-steel-gold/20 text-steel-gold text-sm font-medium mb-6">
                {categoryLabel}
              </div>

              {/* Article Header */}
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-iron-white mb-6 leading-tight">
                {guide.title}
              </h1>

              <p className="text-xl text-ash-gray mb-12">
                {guide.description}
              </p>
            </FadeUp>

            {/* Markdown Content */}
            <FadeUp delay={0.1}>
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-headline prose-headings:text-steel-gold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-ash-gray prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-iron-white prose-strong:font-semibold
                  prose-em:text-steel-gold prose-em:not-italic
                  prose-ul:text-ash-gray prose-ul:mb-6
                  prose-li:mb-2
                  prose-a:text-steel-gold prose-a:no-underline hover:prose-a:underline
                  prose-hr:border-anvil-gray prose-hr:my-12
                  prose-blockquote:border-l-steel-gold prose-blockquote:text-iron-white
                  prose-code:text-steel-gold prose-code:bg-crucible-charcoal prose-code:px-2 prose-code:py-1 prose-code:rounded
                "
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </FadeUp>

            {/* Navigation to other guides */}
            <div className="mt-16 pt-12 border-t border-anvil-gray">
              <Link
                href="/guide"
                className="inline-flex items-center gap-2 text-steel-gold hover:text-bright-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Guides
              </Link>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-crucible-charcoal to-forge-black" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-headline text-3xl sm:text-4xl text-iron-white mb-6">
                READY FOR YOUR PERSONALIZED PLAN?
              </h2>
              <p className="text-ash-gray text-lg mb-10">
                Get a free Career Intelligence Report analyzing YOUR specific situation—no generic advice.
              </p>
              <a
                href="https://forge.steelmanresumes.com"
                className="btn-gold text-lg py-4 px-10 inline-block"
              >
                Start Free Report Now →
              </a>
              <p className="text-ash-gray/60 text-sm mt-4">
                5 minutes · No credit card · No commitment
              </p>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
