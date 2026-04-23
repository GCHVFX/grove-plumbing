import { CalendarCheck, MapPin, Phone } from "lucide-react";
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
  serviceAreas
} from "@/lib/content";

export default function HomePage() {
  const serviceCardImages: Record<
    string,
    { src: string; alt: string; objectPosition?: string }
  > = {
    "plumbing-services": {
      src: "/quick-kitchen-sink-drain-fix-plumbing-job.jpg",
      alt: "Kitchen sink drain repair in a residential home",
      objectPosition: "50% 50%"
    },
    "drain-cleaning": {
      src: "/sink-drain.jpg",
      alt: "Hands clearing a residential sink drain pipe",
      objectPosition: "50% 60%"
    },
    "water-heater-repair-installation": {
      src: "/modern-electric-boiler-room-in-the-house.jpg",
      alt: "Modern residential boiler and water heater equipment",
      objectPosition: "60% 50%"
    },
    "heating-services": {
      src: "/heating-system-final-adjustment-performed-by-technician.jpeg",
      alt: "Technician completing a heating system adjustment",
      objectPosition: "50% 50%"
    },
    "gas-fitting": {
      src: "/mechanical-room.png",
      alt: "Mechanical room equipment for gas fitting and service"
    },
    "emergency-plumbing": {
      src: "/bathroom.png",
      alt: "Active bathroom plumbing repair work"
    }
  };

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
              Local, family-run service for homes in Ladner, Tsawwassen, and
              North Delta. If something isn&rsquo;t working the way it should,
              we&rsquo;ll come take a look and get it sorted.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-service">
                <CalendarCheck className="h-4 w-4" />
                Request Service
              </Button>
              <Button href={`tel:${phoneNumber.replace(/\D/g, "")}`} variant="secondary">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Same-day service available for most calls. We&rsquo;ll confirm your
              time quickly.
            </p>
            <p className="mt-4 text-sm font-bold text-pipe">
              Licensed & insured &bull; Red Seal certified &bull; Local, reliable
              service
            </p>
          </div>
          <div className="grid gap-4">
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
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md border border-grove-100 bg-white shadow-soft">
              <div className="relative aspect-[1175/360]">
                <Image
                  src="/modern-electric-boiler-room-in-the-house.jpg"
                  alt="Modern residential boiler room equipment"
                  fill
                  className="object-cover object-[center_48%]"
                  sizes="(max-width: 768px) 100vw, 52vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-grove-100 bg-white py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-pipe md:gap-4">
            {[
              "15+ years experience",
              "100+ local jobs completed",
              "Fully licensed & insured"
            ].map((item, index, list) => (
              <div key={item} className="inline-flex items-center gap-2 md:gap-4">
                <span>{item}</span>
                {index < list.length - 1 ? (
                  <span aria-hidden="true" className="text-grove-300">
                    &bull;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-sm text-slate-600">
            ★ 4.9 Google rating from local homeowners
          </p>
        </div>
      </section>

      <section className="mt-8 md:mt-12">
        <div className="container grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-grove-700">
              About Grove
            </p>
            <h2 className="text-3xl font-bold leading-tight text-pipe md:text-4xl">
              South Delta roots. Straightforward work.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Born and raised in South Delta, David Mueller started Grove
              Plumbing &amp; Heating to serve homeowners right here in the
              community.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              Grove is a family-run business built on doing the job properly,
              treating people fairly, and being the kind of company people feel
              comfortable calling again.
            </p>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-700 md:text-base">
              We keep things simple, show up when we say we will, and take pride
              in doing the work properly.
            </p>
            <Button href="/about" variant="secondary" className="mt-5">
              Learn more about how we work
            </Button>
          </div>
          <div className="overflow-hidden rounded-[16px] border border-grove-100 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/tsawwassen-view.jpg"
                alt="View of Tsawwassen in South Delta"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-20 md:mt-14">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="Plumbing, Heating & Gas Services for Your Home"
            body="From small repairs to bigger jobs, we handle the kind of work homeowners deal with every day. If something&rsquo;s leaking, clogged, or not working properly, we&rsquo;ll take care of it."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.slug !== "emergency-plumbing")
              .map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                image={serviceCardImages[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="Why Grove"
              title="Why Homeowners Call Grove Plumbing"
            />
            <p className="mt-4 leading-7 text-slate-700">
              We focus on straightforward service and doing the job properly.
            </p>
          </div>
          <ul className="grid gap-3 rounded-md border border-grove-100 bg-cream p-6 md:p-7">
            {[
              "Shows up when scheduled",
              "Clear recommendations before work starts",
              "Clean, respectful work in your home",
              "No pressure, no upselling"
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 leading-7 text-slate-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-grove-700"
                />
                <span className="font-semibold text-pipe">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Recent work"
            title="Recent Work Around South Delta"
            body="A look at the kind of work we do in Ladner, Tsawwassen, and North Delta homes."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "/new-bath-installation-new-house.jpg",
                alt: "New bathroom plumbing installation in a home"
              },
              {
                src: "/shower.png",
                alt: "Shower plumbing and fixture installation"
              },
              {
                src: "/bathroom.png",
                alt: "Bathroom plumbing service and repair"
              },
              {
                src: "/laundry.png",
                alt: "Laundry plumbing and appliance connection work"
              }
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
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
              Tell us what you need, choose a preferred time, and we&rsquo;ll get
              back to you quickly to confirm the details.
            </p>
          </div>
          <BookingFlow />
          <p className="text-sm leading-6 text-grove-100 lg:col-start-2">
            You&rsquo;ll be dealing directly with a local plumber, not a call centre.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Reviews"
            title="What Local Homeowners Are Saying"
            body="Real feedback from customers we&rsquo;ve helped across South Delta."
          />
          <TestimonialsSlider />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Service areas"
            title="Proudly Serving South Delta"
            body="We work in Ladner, Tsawwassen, and North Delta every day, helping homeowners with plumbing, heating, and gas work they can rely on."
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
            title="Common Questions"
            body="Quick answers to questions we hear from homeowners."
          />
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand
        title="Need Plumbing, Heating, or Gas Help?"
        body="Tell us what&rsquo;s going on and we&rsquo;ll get back to you quickly to confirm the details."
      />
    </>
  );
}
