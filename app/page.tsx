import { ArrowRight, CalendarCheck, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BookingFlow } from "@/components/booking-flow";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceCard } from "@/components/service-card";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { Button, SectionIntro } from "@/components/ui";
import { homeFaqs, services, serviceAreas, trustSignals, whyGrove } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-cream">
        <div className="container grid min-h-[calc(100vh-80px)] items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] lg:py-18">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-grove-50 px-3 py-2 text-sm font-bold text-grove-800">
              Serving Ladner, Tsawwassen, and North Delta
            </p>
            <h1 className="text-4xl font-black leading-tight text-pipe md:text-6xl">
              Local Plumbing, Heating & Gas Services You Can Count On
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Dependable plumbing, heating, gas, and drain services for South
              Delta homes, with a modern way to request service and get the next
              step moving.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-service">
                <CalendarCheck className="h-4 w-4" />
                Request Service
              </Button>
              <Button href="/services" variant="secondary">
                View Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#dfeede,#ffffff_45%,#bfdcbc)] p-5 shadow-soft">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/70 bg-white/60 p-6">
                <div className="max-w-xs rounded-md bg-white p-5 shadow-soft">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-grove-700">
                    Real Grove photos ready
                  </p>
                  <p className="mt-3 text-2xl font-black text-pipe">
                    Van, job, and family imagery would sit here.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {trustSignals.slice(0, 2).map((signal) => (
                    <div key={signal} className="rounded-md bg-pipe p-4 text-white">
                      <CheckCircle2 className="h-5 w-5 text-grove-200" />
                      <p className="mt-2 text-sm font-bold">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-grove-100 bg-white py-5">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-3 font-bold text-pipe">
              <ShieldCheck className="h-5 w-5 text-grove-700" />
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="The plumbing and mechanical help homeowners actually need"
            body="Clear service pages make it easier for customers to find the right help and easier for Grove to rank across local searches."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Why Grove"
            title="Built around trust before the phone even rings"
            body="The redesign makes Grove feel established, approachable, and easy to contact from the first screen."
          />
          <div className="grid gap-4">
            {whyGrove.map((item) => (
              <div key={item.title} className="rounded-md border border-grove-100 bg-cream p-6">
                <h3 className="text-xl font-black text-pipe">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Recent work"
            title="Real project photos can do the trust-building"
            body="This gallery is ready for Grove van photos, job-site details, before-and-after images, and family/team photography."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Service van", "Clean installation", "Family-owned team"].map((label) => (
              <div key={label} className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#f3f8f1,#ffffff,#dfeede)] p-5 shadow-sm">
                <div className="flex h-full items-end rounded-md border border-white/70 p-5">
                  <p className="rounded-md bg-white px-4 py-3 font-black text-pipe shadow-sm">
                    {label} photo
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pipe py-16 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-grove-200">
              Booking preview
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              A clearer way to turn visitors into service requests
            </h2>
            <p className="mt-4 leading-7 text-grove-50">
              The flow is front-end only for the demo, but it shows how Grove
              could collect useful job details before confirming an appointment.
            </p>
          </div>
          <BookingFlow />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Reviews"
            title="Specific local testimonials feel more believable"
            body="Short, grounded reviews help homeowners feel confident without relying on overblown claims."
          />
          <TestimonialsSlider />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Service areas"
            title="Local pages for South Delta search visibility"
            body="Dedicated area pages help Grove show up for homeowners looking for plumbing help near them."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="focus-ring rounded-md border border-grove-100 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <MapPin className="h-6 w-6 text-grove-700" />
                <h3 className="mt-4 text-2xl font-black text-pipe">{area.name}</h3>
                <p className="mt-3 leading-7 text-slate-700">{area.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="FAQs"
            title="Fast answers before customers reach out"
            body="Clear answers reduce hesitation and make the next action obvious."
          />
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
