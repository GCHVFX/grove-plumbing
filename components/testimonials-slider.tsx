"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/content";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <div className="rounded-md border border-grove-100 bg-white p-6 shadow-soft md:p-8">
      <div className="flex gap-1 text-copper">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <blockquote className="mt-5 text-xl font-semibold leading-8 text-pipe md:text-2xl">
        &quot;{active.quote}&quot;
      </blockquote>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-black text-pipe">{active.name}</p>
          <p className="text-sm font-semibold text-grove-700">{active.location}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-grove-200 text-pipe"
            onClick={() =>
              setIndex((value) =>
                value === 0 ? testimonials.length - 1 : value - 1
              )
            }
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-grove-200 text-pipe"
            onClick={() =>
              setIndex((value) =>
                value === testimonials.length - 1 ? 0 : value + 1
              )
            }
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
