import { CtaBand } from "@/components/cta-band";
import { ServiceCard } from "@/components/service-card";
import { SectionIntro } from "@/components/ui";
import { services } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="Plumbing, heating, gas, drains, and urgent help"
            body="A clear services hub helps visitors self-select the right page and gives Grove a stronger structure for local search."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
