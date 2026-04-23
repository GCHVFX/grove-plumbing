"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui";
import { phoneNumber, services, serviceAreas } from "@/lib/content";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-grove-100 bg-cream/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-12 w-12 place-items-center rounded-md bg-grove-700 text-lg font-black text-white">
            GP
          </span>
          <span>
            <span className="block text-lg font-black leading-5 text-pipe">
              Grove Plumbing
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-grove-700">
              Plumbing Heating Gas
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-slate-700 hover:text-grove-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${phoneNumber.replace(/\D/g, "")}`}
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-pipe"
          >
            <Phone className="h-4 w-4 text-grove-700" />
            {phoneNumber}
          </a>
          <Button href="/book-service">Request Service</Button>
        </div>

        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-grove-200 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-grove-100 bg-cream lg:hidden">
          <div className="container grid gap-5 py-5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-pipe"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-2 border-t border-grove-100 pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-grove-700">
                Popular services
              </p>
              {services.slice(0, 3).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-slate-700"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="grid gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-grove-700">
                Areas
              </p>
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-slate-700"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Button href="/book-service">Request Service</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
