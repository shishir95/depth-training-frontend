import Header from "@/components/common/Header";
import FooterStrip from "@/components/common/FooterStrip";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";


const client = createClient({
  projectId: "xva04acb",      
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});


const portableComponents = {
  types: {},
  marks: {},
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-neutral-300 text-sm mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc text-neutral-300 ml-6 space-y-1 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal text-neutral-300 ml-6 space-y-1 mb-6">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-sm">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-sm">{children}</li>
    ),
  },
};



const serviceQuery = `
  *[_type == "service" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    serviceCategory->{title},
    heroLabel,
    heroHeading,
    heroHighlight,
    heroSubheading,
    heroImage,
    shortDescription,
    // try multiple possible field names, always return an array
    "detailedContent": coalesce(detailedContent, detailedcontent, body, []),
    "keyBenefits": coalesce(keyBenefits, []),
    "processSteps": coalesce(processSteps, []),
    "faqs": coalesce(faqs, []),
    ctaLabel,
    ctaLink
  }
`;


export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "service" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((item) => ({ slug: item.slug }));
}

export const revalidate = 300;


function getTextField(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  return item.text || item.title || item.label || item.name || "";
}

function getStepTitle(step) {
  if (!step) return "";
  if (typeof step === "string") return step;
  return step.title || step.heading || "";
}

function getStepDescription(step) {
  if (!step) return "";
  if (typeof step === "string") return "";
  return step.description || step.body || step.text || "";
}

function getFaqQuestion(faq) {
  if (!faq) return "";
  if (typeof faq === "string") return faq;
  return faq.question || faq.q || "";
}

function getFaqAnswer(faq) {
  if (!faq) return "";
  if (typeof faq === "string") return "";
  return faq.answer || faq.a || faq.body || "";
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = await client.fetch(serviceQuery, { slug });

  if (!service) {
    notFound();
  }

  const {
    title,
    heroLabel,
    heroHeading,
    heroHighlight,
    heroSubheading,
    detailedContent,
    keyBenefits = [],
    processSteps = [],
    faqs = [],
    ctaLabel,
    ctaLink,
  } = service;

  const safeCtaLabel = ctaLabel || `Book ${title}`;
  const safeCtaLink =
    ctaLink || "https://www.depthtraining.ca/contact/";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        
        <section className="w-full border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-center">
              
              <div>
                {heroLabel && (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
                    {heroLabel}
                  </p>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {heroHeading || title}
                  {heroHighlight && (
                    <span className="block text-red-400">
                      {heroHighlight}
                    </span>
                  )}
                </h1>

                {heroSubheading && (
                  <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-6">
                    {heroSubheading}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href={safeCtaLink}
                    target={safeCtaLink.startsWith("http") ? "_blank" : undefined}
                    rel={safeCtaLink.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 hover:bg-red-600 transition-colors"
                  >
                    {safeCtaLabel}
                  </a>
                  <a
                    href="https://www.depthtraining.ca/contact/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Contact &amp; Location Details
                  </a>
                </div>
              </div>

              
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7">
                <h2 className="text-lg font-semibold mb-2">
                  What you get with {title}
                </h2>
                <p className="text-xs text-neutral-400 mb-4">
                  A quick snapshot of how this service helps you.
                </p>
                <ul className="space-y-3 text-sm text-neutral-200">
                  {keyBenefits && keyBenefits.length > 0 ? (
                    keyBenefits.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>{getTextField(item)}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-neutral-400 text-xs">
                      Key details will be added soon.
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        
        {Array.isArray(detailedContent) && detailedContent.length > 0 && (
          <section className="w-full bg-black border-b border-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                <PortableText value={detailedContent} components={portableComponents} />
              </div>
            </div>
          </section>
        )}

        
        {processSteps && processSteps.length > 0 && (
          <section className="w-full bg-neutral-950 border-b border-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Your treatment journey
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border border-neutral-800 rounded-2xl p-5 shadow-md shadow-black/30"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                      Step {index + 1}
                    </p>
                    <h3 className="font-semibold mb-2">
                      {getStepTitle(step) || `Step ${index + 1}`}
                    </h3>
                    {getStepDescription(step) && (
                      <p className="text-neutral-300 text-sm">
                        {getStepDescription(step)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        
        {faqs && faqs.length > 0 && (
          <section className="w-full bg-black border-b border-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-neutral-800 pb-4"
                  >
                    <h3 className="font-semibold mb-2">
                      {getFaqQuestion(faq) || `Question ${index + 1}`}
                    </h3>
                    {getFaqAnswer(faq) && (
                      <p className="text-sm text-neutral-300">
                        {getFaqAnswer(faq)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        
      </main>

      <FooterStrip />
    </div>
  );
}
