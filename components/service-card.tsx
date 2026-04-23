import Link from "next/link";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group rounded-md border border-grove-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <span className="grid h-12 w-12 place-items-center rounded-md bg-grove-50 text-grove-700">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-black text-pipe">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{service.summary}</p>
      <span className="mt-5 inline-block text-sm font-black text-grove-700">
        View service
      </span>
    </Link>
  );
}
