import { MapPin } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/ui";
import { serviceAreas } from "@/lib/content";

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Service areas"
            title="Local pages for Ladner, Tsawwassen, and North Delta"
            body="Each area page reinforces Grove as a nearby, credible option for homeowners searching in their own community."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="focus-ring rounded-md border border-grove-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <MapPin className="h-6 w-6 text-grove-700" />
                <h2 className="mt-4 text-2xl font-black text-pipe">{area.name}</h2>
                <p className="mt-3 leading-7 text-slate-700">{area.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
