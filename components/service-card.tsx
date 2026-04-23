import Image from "next/image";
import Link from "next/link";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

type ServiceCardImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function ServiceCard({
  service,
  image
}: {
  service: Service;
  image?: ServiceCardImage;
}) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group rounded-md border border-grove-100 bg-[#fffdfa] p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      {image ? (
        <div className="overflow-hidden rounded-md border border-grove-100 bg-cream">
          <div className="relative h-[180px] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      ) : (
        <span className="grid h-12 w-12 place-items-center rounded-md bg-grove-50 text-grove-700">
          <Icon className="h-6 w-6" />
        </span>
      )}
      <h3 className="mt-4 text-xl font-semibold text-pipe">{service.title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-grove-700">
        <span>View service</span>
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
