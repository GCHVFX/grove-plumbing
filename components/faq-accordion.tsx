"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({
  faqs
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="rounded-md border border-grove-100 bg-white shadow-sm"
        >
          <button
            className="focus-ring flex w-full items-center justify-between gap-4 rounded-md px-5 py-4 text-left font-bold text-pipe"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {faq.question}
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-grove-700 transition ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === index ? (
            <p className="px-5 pb-5 leading-7 text-slate-700">{faq.answer}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
