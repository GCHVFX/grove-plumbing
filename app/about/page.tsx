import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="container">
          <h1 className="text-4xl font-black leading-tight text-pipe md:text-5xl">
            About Grove Plumbing
          </h1>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Local, family-run service in South Delta
          </p>

          <div className="mt-10 grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4 leading-7 text-slate-700">
              <p>
                Born and raised in South Delta, David Mueller started Grove
                Plumbing &amp; Heating to provide straightforward service for
                local homeowners.
              </p>
              <p>
                This is a family-run business, and we still work in the same
                community we live in. We keep communication clear, do the work
                properly, and treat people fairly.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-grove-100 bg-white shadow-soft">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/owner-van.png"
                  alt="David Mueller beside the Grove Plumbing van in South Delta"
                  fill
                  className="object-cover"
                  style={{ objectFit: "cover", objectPosition: "center left" }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-xl border border-grove-100 bg-white shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src="/family.png"
                alt="Grove Plumbing family in South Delta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight text-pipe">
              Rooted in South Delta
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              This is the community we grew up in, and it&rsquo;s still where
              we work every day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black leading-tight text-pipe">
            How We Work
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            We try to keep things simple. One principle we believe in:
          </p>
          <p className="text-sm leading-6 text-slate-500">
            &quot;Integrity is doing the right thing, even when no one is
            watching.&quot;
            <span className="block">&mdash; C.S. Lewis</span>
          </p>

          <ul className="mt-6 grid gap-3">
            {[
              "We show up when we say we will",
              "We explain things clearly before starting",
              "We keep work clean and respectful in your home",
              "No pressure, no upselling"
            ].map((point) => (
              <li
                key={point}
                className="rounded-md border border-grove-100 bg-cream px-5 py-4 text-slate-700"
              >
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-10 leading-7 text-slate-700">
            If you need help with plumbing, heating, or gas, feel free to reach
            out. We&rsquo;re happy to take a look and let you know what&rsquo;s
            involved.
          </p>
        </div>
      </section>
    </>
  );
}
