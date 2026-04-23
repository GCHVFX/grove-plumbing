import { Phone } from "lucide-react";
import { phoneNumber } from "@/lib/content";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${phoneNumber.replace(/\D/g, "")}`}
      className="focus-ring fixed bottom-4 left-4 right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-grove-700 px-5 py-3 text-sm font-black text-white shadow-soft md:hidden"
    >
      <Phone className="h-4 w-4" />
      Call Grove Plumbing
    </a>
  );
}
