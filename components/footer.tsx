import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  emailAddress,
  phoneNumber,
  serviceHours,
  services,
  serviceAreas,
  textNumber,
  websiteUrl
} from "@/lib/content";

export function Footer() {
  const facebookUrl = "https://www.facebook.com/groveplumbingheatinggas";
  const instagramUrl = "https://www.instagram.com/groveplumbingandheating";

  return (
    <footer className="bg-pipe text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-white px-2 py-2">
              <Image
                src="/logo.png"
                alt="Grove Plumbing logo"
                width={146}
                height={45}
                className="h-8 w-auto"
              />
            </span>
            <div>
              <p className="text-lg font-black">Grove Plumbing</p>
              <p className="text-sm text-grove-100">Local plumbing, heating, and gas</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-grove-50">
            Trusted, practical service for homeowners across Ladner, Tsawwassen,
            and North Delta.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-grove-100">
            {serviceHours}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/LBA.png"
              alt="Ladner Business Association logo"
              width={32}
              height={32}
              className="h-8 w-auto opacity-90"
            />
            <p className="text-xs leading-5 text-grove-100">
              Proud member of the Ladner Business Association
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-grove-50">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Areas</p>
          <div className="mt-4 grid gap-3 text-sm text-grove-50">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-grove-50">
            <a href={`tel:${phoneNumber.replace(/\D/g, "")}`} className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4" />
              {phoneNumber}
            </a>
            <a href={`mailto:${emailAddress}`} className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              {emailAddress}
            </a>
            <a href={`sms:${textNumber.replace(/\D/g, "")}`} className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4" />
              Text: {textNumber}
            </a>
            <a href={websiteUrl} className="flex gap-2">
              <Globe className="mt-0.5 h-4 w-4" />
              groveplumbing.ca
            </a>
            <span className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              Ladner, Tsawwassen, North Delta
            </span>
            <div className="mt-1 flex items-center gap-3 text-grove-100">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Grove Plumbing on Facebook"
                className="focus-ring rounded-sm transition hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Grove Plumbing on Instagram"
                className="focus-ring rounded-sm transition hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-xs text-grove-100 md:flex-row md:items-center md:justify-between">
          <span>Copyright 2026 Grove Plumbing.</span>
          <span>Licensed and insured. Red Seal certified experience.</span>
        </div>
      </div>
    </footer>
  );
}
