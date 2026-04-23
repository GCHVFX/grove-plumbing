import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { Button, SectionIntro } from "@/components/ui";
import { services } from "@/lib/content";

const serviceFaqs = [
  {
    question: "How quickly can you come out?",
    answer:
      "Timing depends on the schedule and urgency. Use the request form or call so Grove can confirm the soonest sensible option."
  },
  {
    question: "Do you provide estimates?",
    answer:
      "Grove can discuss the issue, inspect where needed, and explain recommended work before moving ahead."
  },
  {
    question: "Can you help with older homes?",
    answer:
      "Yes. Older South Delta homes often need careful troubleshooting, practical recommendations, and tidy repair work."
  }
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) notFound();

  return (
    <>
      <section className="bg-cream py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-grove-700">
              Grove service
            </p>
            <h1 className="text-4xl font-black leading-tight text-pipe md:text-5xl">
              {service.title} in South Delta
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">{service.intro}</p>
            <Button href="/book-service" className="mt-8">
              Request this service
            </Button>
          </div>
          <div className="rounded-md border border-grove-100 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-pipe">Common problems</h2>
            <ul className="mt-5 grid gap-3 text-slate-700">
              {service.problems.map((problem) => (
                <li key={problem} className="rounded-md bg-grove-50 p-4">
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Included"
            title="Straightforward service from first call to finished work"
            body="The page explains what customers can expect, which builds trust and reduces uncertainty before they reach out."
          />
          <div className="grid gap-3">
            {service.included.map((item) => (
              <div key={item} className="rounded-md border border-grove-100 bg-cream p-5 font-semibold text-pipe">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="FAQs"
            title={`Questions about ${service.shortTitle.toLowerCase()}`}
            body="Helpful answers make it easier for homeowners to decide what to do next."
          />
          <FaqAccordion faqs={serviceFaqs} />
        </div>
      </section>
      <CtaBand title={`Need ${service.shortTitle.toLowerCase()} help?`} />
    </>
  );
}
