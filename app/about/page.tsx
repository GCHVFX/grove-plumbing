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
            body="This demo positions Grove as practical, friendly, licensed, and easy to call, while leaving room for the real family and team story to shine."
          />
          <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#dfeede,#ffffff,#bfdcbc)] p-6 shadow-soft">
            <div className="flex h-full items-end rounded-md border border-white/70 p-6">
              <p className="rounded-md bg-white px-4 py-3 font-black text-pipe shadow-sm">
                Family or team photo
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
