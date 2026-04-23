import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui";
import { phoneNumber } from "@/lib/content";

export function CtaBand({
  title = "Ready to request service?",
  body = "Tell Grove what is going on, choose a preferred time, and the team will follow up to confirm the appointment."
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-grove-700 py-14 text-white">
      <div className="container grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-3xl font-black leading-tight">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-grove-50">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book-service" variant="secondary">
            <CalendarCheck className="h-4 w-4" />
            Request Service
          </Button>
          <Button href={`tel:${phoneNumber.replace(/\D/g, "")}`} variant="ghost" className="border-white/30 text-white hover:bg-white/10">
            <Phone className="h-4 w-4" />
            {phoneNumber}
          </Button>
        </div>
      </div>
    </section>
  );
}
