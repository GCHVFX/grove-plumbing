import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceCard } from "@/components/service-card";
import { Button, SectionIntro } from "@/components/ui";
import { services, serviceAreas } from "@/lib/content";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export default function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const area = serviceAreas.find((item) => item.slug === params.slug);

  if (!area) notFound();

  const faqs = [
    {
      question: `Does Grove serve ${area.name}?`,
      answer: `Yes. Grove provides plumbing, heating, gas, drain, and urgent plumbing support for homeowners in ${area.name}.`
    },
    {
      question: "Can I request a preferred time?",
      answer:
        "Yes. Choose a preferred date and time window online, and Grove will follow up to confirm the appointment."
    },
    {
      question: "What nearby communities are covered?",
      answer: `Grove also serves nearby communities including ${area.nearby}.`
    }
  ];

  return (
    <>
      <section className="bg-cream py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-grove-700">
              Service area
            </p>
            <h1 className="text-4xl font-black leading-tight text-pipe md:text-5xl">
              Plumbing Services in {area.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">{area.intro}</p>
            <Button href="/book-service" className="mt-8">
              Request service in {area.name}
            </Button>
          </div>
          <div className="rounded-md border border-grove-100 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-pipe">Local reassurance</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Homeowners in {area.name} need tradespeople who are easy to reach,
              clear about the work, and familiar with local homes. Grove's
              local service approach helps homeowners feel looked after from the
              first call.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Available services"
            title={`Services for ${area.name} homeowners`}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro eyebrow="FAQs" title={`Questions from ${area.name}`} />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <CtaBand title={`Need plumbing help in ${area.name}?`} />
    </>
  );
}
