import { ArrowRight, CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingFlow } from "@/components/booking-flow";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceCard } from "@/components/service-card";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { Button, SectionIntro } from "@/components/ui";
import {
  homeFaqs,
  phoneNumber,
  services,
  serviceAreas,
  trustSignals,
  whyGrove
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(160deg,#fbf7ef_5%,#f3f8f1_48%,#ffffff_100%)]">
        <div className="container grid items-center gap-7 py-8 md:grid-cols-[1.05fr_0.95fr] md:py-10">
          <div>
            <p className="mb-3 inline-flex rounded-md bg-grove-100 px-4 py-2 text-sm font-bold text-grove-800">
              Serving Ladner, Tsawwassen, and North Delta
            </p>
            <h1 className="text-4xl font-black leading-tight text-pipe md:text-6xl">
              Plumbing, Heating & Gas Done Right
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">
              Serving Ladner, Tsawwassen, and North Delta with dependable
              service, clear communication, and work done properly the first
              time.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-service">
                <CalendarCheck className="h-4 w-4" />
                Request Service
              </Button>
              <Button href="/services" variant="secondary">
                View Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-md bg-white px-3 py-2 text-sm font-bold text-pipe shadow-sm">
                Licensed and insured
              </span>
              <span className="rounded-md bg-white px-3 py-2 text-sm font-bold text-pipe shadow-sm">
                Red Seal certified
              </span>
              <a
                href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                className="focus-ring rounded-md bg-white px-3 py-2 text-sm font-bold text-pipe shadow-sm"
              >
                Call {phoneNumber}
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md border border-grove-100 bg-white shadow-soft">
            <div className="relative aspect-[1175/452]">
              <Image
                src="/van.png"
                alt="Grove Plumbing service van in South Delta"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pipe/35 via-transparent to-transparent" />
            </div>
            <div className="grid gap-3 border-t border-grove-100 bg-white p-5 sm:grid-cols-2">
              <div className="rounded-md bg-grove-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-grove-700">
                  Trusted locally
                </p>
                <p className="mt-2 text-lg font-black text-pipe">Family-owned in South Delta</p>
              </div>
              <div className="rounded-md bg-grove-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-grove-700">
                  Straightforward service
                </p>
                <p className="mt-2 text-lg font-black text-pipe">
                  Clear recommendations and no runaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-grove-100 bg-white py-6">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex min-h-14 items-center gap-3 rounded-md border border-grove-100 bg-cream px-4 font-bold text-pipe"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-grove-700" />
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="The plumbing and mechanical help homeowners actually need"
            body="Clear service pages make it easy for homeowners to choose the right service and request a visit quickly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Why Grove"
            title="Why homeowners choose Grove"
            body="You get practical recommendations, dependable workmanship, and clear updates from a local team that treats your home with care."
          />
          <div className="grid gap-4">
            {whyGrove.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-grove-100 bg-cream p-6 md:p-7"
              >
                <h3 className="text-xl font-black text-pipe">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Recent work"
            title="Real project photos from day-to-day service"
            body="Homeowners can see the kind of work Grove handles across bathrooms, laundry rooms, and mechanical spaces."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { src: "/bathroom.png", alt: "Bathroom plumbing repair and fixture work", label: "Bathroom plumbing" },
              { src: "/laundry.png", alt: "Laundry plumbing installation and updates", label: "Laundry updates" },
              { src: "/mechanical-room.png", alt: "Mechanical room service and troubleshooting", label: "Mechanical room service" }
            ].map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-md border border-grove-100 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-black text-pipe">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pipe py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-grove-200">
              Request service
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Need Plumbing, Heating, or Gas Help?
            </h2>
            <p className="mt-4 leading-7 text-grove-50">
              Tell us what you need, choose a preferred time, and we'll get back
              to you quickly to confirm the details.
            </p>
            <p className="mt-3 text-sm leading-6 text-grove-100">
              For urgent issues, call us directly and we will do our best to
              help right away.
            </p>
          </div>
          <BookingFlow />
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Reviews"
            title="Specific local testimonials feel more believable"
            body="Short, grounded reviews help homeowners feel confident without relying on overblown claims."
          />
          <TestimonialsSlider />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Service areas"
            title="Local pages for South Delta search visibility"
            body="Dedicated area pages help Grove show up for homeowners looking for plumbing help near them."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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

      <section className="py-20">
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
