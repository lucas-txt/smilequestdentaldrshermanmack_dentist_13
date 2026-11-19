"use client";

import * as React from "react";
import { Quote, Star } from "lucide-react";
import type { Review } from "@/lib/reviews";
import { cn } from "@/lib/utils";

export function ReviewWall({ reviews }: { reviews: Review[] }) {
  const treatments = React.useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          reviews
            .map((review) => review.treatment)
            .filter((value): value is string => Boolean(value)),
        ),
      ),
    ],
    [reviews],
  );
  const [filter, setFilter] = React.useState("All");

  const filtered =
    filter === "All"
      ? reviews
      : reviews.filter((review) => review.treatment === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter reviews by treatment">
        {treatments.map((treatment) => (
          <button
            key={treatment}
            type="button"
            onClick={() => setFilter(treatment)}
            aria-pressed={filter === treatment}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] transition",
              filter === treatment
                ? "border-forest bg-forest text-cream"
                : "border-forest/12 bg-white/50 text-forest/70 hover:border-forest/30 hover:text-forest",
            )}
          >
            {treatment}
            {treatment === "All" ? (
              <span className="ml-1.5 text-[0.6rem] opacity-70">
                {reviews.length}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs font-semibold text-forest/70" aria-live="polite">
        Showing {filtered.length} of {reviews.length} reviews
      </p>

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((review, index) => (
          <figure
            key={`${review.name}-${index}`}
            className="break-inside-avoid rounded-2xl border border-forest/10 bg-white/65 p-5 shadow-[0_18px_50px_-45px_rgba(31,42,36,0.6)] transition duration-500 hover:-translate-y-1 hover:border-rose/20 hover:bg-white/90 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <Quote className="size-6 text-rose/45" aria-hidden="true" />
              <div className="flex gap-0.5" role="img" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="size-3 fill-rose text-rose"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <blockquote className="mt-3 text-[0.9rem] leading-relaxed text-forest/80">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-t border-forest/10 pt-4 text-xs">
              <span className="font-bold text-forest">{review.name}</span>
              <span className="text-forest/70">via {review.source}</span>
              {review.treatment ? (
                <span className="rounded-full bg-sand/60 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.11em] text-forest/70">
                  {review.treatment}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-forest/20 p-8 text-center text-sm text-forest/70">
          No reviews in this category yet.
        </div>
      ) : null}
    </div>
  );
}
