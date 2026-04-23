import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/ui";
import { trustSignals, whyGrove } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="About Grove"
            title="A local plumbing company presented with the confidence it deserves"
            body="Grove Plumbing serves South Delta homeowners with practical advice, clean workmanship, and dependable communication from start to finish."
          />
          <div className="overflow-hidden rounded-md border border-grove-100 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/family.png"
                alt="Grove Plumbing owner standing beside the service van"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pipe/55 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-2 text-sm font-black text-pipe">
                Family-owned and community-focused
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container grid gap-5 md:grid-cols-2">
          {whyGrove.map((item) => (
            <div key={item.title} className="rounded-md border border-grove-100 bg-cream p-6">
              <h2 className="text-xl font-black text-pipe">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
          <div className="rounded-md border border-grove-100 bg-pipe p-6 text-white">
            <h2 className="text-xl font-black">Trust signals</h2>
            <ul className="mt-4 grid gap-3 text-grove-50">
              {trustSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand title="Make the next call feel easy" />
    </>
  );
}
