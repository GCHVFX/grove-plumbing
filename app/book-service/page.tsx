import { BookingFlow } from "@/components/booking-flow";
import { SectionIntro } from "@/components/ui";

export default function BookServicePage() {
  return (
    <section className="bg-cream py-16">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionIntro
            eyebrow="Request service"
            title="Choose your preferred date and time"
            body="Tell Grove what you need help with. This demo flow would collect the details, then the team would follow up to confirm your appointment shortly."
          />
          <div className="mt-8 rounded-md border border-grove-100 bg-white p-5 shadow-sm">
            <p className="font-black text-pipe">What happens next?</p>
            <p className="mt-2 leading-7 text-slate-700">
              Grove reviews the request, confirms timing, and lets you know if
              more details are needed before the visit.
            </p>
          </div>
        </div>
        <BookingFlow />
      </div>
    </section>
  );
}
