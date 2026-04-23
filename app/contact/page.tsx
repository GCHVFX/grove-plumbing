import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Button, SectionIntro } from "@/components/ui";
import {
  emailAddress,
  phoneNumber,
  serviceAreas,
  serviceHours,
  textNumber,
  websiteUrl
} from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Easy to call, easy to request service"
              body="Reach Grove directly by phone, text, or email. Service is focused on homeowners in Ladner, Tsawwassen, and North Delta."
            />
            <div className="mt-8 grid gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm"
              >
                <Phone className="h-5 w-5 text-grove-700" />
                {phoneNumber}
              </a>
              <a
                href={`sms:${textNumber.replace(/\D/g, "")}`}
                className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm"
              >
                <MessageCircle className="h-5 w-5 text-grove-700" />
                {textNumber}
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm"
              >
                <Mail className="h-5 w-5 text-grove-700" />
                {emailAddress}
              </a>
              <a
                href={websiteUrl}
                className="focus-ring flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm"
              >
                <Globe className="h-5 w-5 text-grove-700" />
                groveplumbing.ca
              </a>
              <div className="flex items-center gap-3 rounded-md border border-grove-100 bg-white p-5 font-black text-pipe shadow-sm">
                <MapPin className="h-5 w-5 text-grove-700" />
                Ladner, Tsawwassen, and North Delta
              </div>
            </div>
            <p className="mt-5 rounded-md bg-grove-50 px-4 py-3 text-sm font-semibold leading-6 text-pipe">
              {serviceHours}
            </p>
            <Button href="/book-service" className="mt-8">
              Request Service
            </Button>
          </div>
          <div className="self-start overflow-hidden rounded-md border border-grove-100 bg-white shadow-soft">
            <iframe
              title="Map showing Grove Plumbing service location in Delta, BC"
              src="https://www.google.com/maps?q=Grove%20Plumbing%20Delta%20BC&output=embed"
              className="h-[320px] w-full border-0 md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
