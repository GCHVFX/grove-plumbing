import { Mail, MapPin, Phone } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Button, SectionIntro } from "@/components/ui";
import { emailAddress, phoneNumber, serviceAreas } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Easy to call, easy to request service"
              body="The contact page keeps the next step obvious while reinforcing the local service area and professional trust signals."
            />
            <div className="mt-8 grid gap-4">
              <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm">
                <Phone className="h-5 w-5 text-grove-700" />
                {phoneNumber}
              </a>
              <a href={`mailto:${emailAddress}`} className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm">
                <Mail className="h-5 w-5 text-grove-700" />
                {emailAddress}
              </a>
              <div className="flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm">
                <MapPin className="h-5 w-5 text-grove-700" />
                Ladner, Tsawwassen, and North Delta
              </div>
            </div>
            <Button href="/book-service" className="mt-8">
              Request Service
            </Button>
          </div>
          <div className="overflow-hidden rounded-md border border-grove-100 bg-white shadow-soft">
            <div className="grid aspect-[4/3] place-items-center bg-[linear-gradient(135deg,#dfeede,#ffffff,#bfdcbc)] p-8 text-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-grove-700">
                  Map section
                </p>
                <h2 className="mt-3 text-3xl font-black text-pipe">
                  South Delta service coverage
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  An embedded Google Map can be connected here for the final site.
                </p>
              </div>
            </div>
            <div className="grid gap-3 p-5 md:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area.slug} className="rounded-md bg-grove-50 p-4 font-bold text-pipe">
                  {area.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
