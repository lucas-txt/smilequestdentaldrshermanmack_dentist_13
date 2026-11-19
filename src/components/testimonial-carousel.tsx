"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
} from "lucide-react";
import type { Review } from "@/lib/reviews";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  reviews: Review[];
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "light" | "dark";
  showAllLink?: boolean;
};

export function TestimonialCarousel({
  reviews,
  eyebrow = "Patient stories",
  title = "Kind words from the people we care for.",
  description = "Real reviews from patients in Devils Lake and around the region.",
  tone = "light",
  showAllLink = true,
}: TestimonialCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const current = reviews[index];

  const goTo = React.useCallback(
    (next: number) => {
      setIndex((next + reviews.length) % reviews.length);
    },
    [reviews.length],
  );

  React.useEffect(() => {
    if (paused || reduceMotion || reviews.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, reviews.length]);

  if (!current) return null;

  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-24",
        dark ? "bg-forest text-cream" : "bg-cream text-forest",
      )}
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {dark ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-rose/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-sage/10 blur-3xl"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-sage/20 blur-3xl"
        />
      )}

      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className={cn("eyebrow", dark ? "text-sage" : "text-rose")}>
            {eyebrow}
          </p>
          <h2
            className={cn(
              "mt-5 font-display text-[2.15rem] leading-[1.04] tracking-[-0.035em] text-balance sm:text-5xl",
              dark ? "text-cream" : "text-forest",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-5 max-w-md text-sm leading-relaxed",
              dark ? "text-cream/65" : "text-forest/70",
            )}
          >
            {description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className={cn(
                "inline-flex size-11 cursor-pointer items-center justify-center rounded-full border transition",
                dark
                  ? "border-white/15 text-cream/70 hover:border-sage/50 hover:bg-white/5 hover:text-white"
                  : "border-forest/15 text-forest/70 hover:border-rose/35 hover:bg-white hover:text-rose",
              )}
              aria-label="Previous review"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className={cn(
                "inline-flex size-11 cursor-pointer items-center justify-center rounded-full border transition",
                dark
                  ? "border-white/15 text-cream/70 hover:border-sage/50 hover:bg-white/5 hover:text-white"
                  : "border-forest/15 text-forest/70 hover:border-rose/35 hover:bg-white hover:text-rose",
              )}
              aria-label="Next review"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
            <span
              className={cn(
                "ml-1 text-[0.7rem] font-semibold tabular-nums tracking-widest",
                dark ? "text-cream/65" : "text-forest/70",
              )}
              aria-live="polite"
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>

          {showAllLink ? (
            <Link
              href="/reviews"
              className={cn(
                "mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] transition",
                dark ? "text-sage hover:text-white" : "text-rose hover:text-rose-deep",
              )}
            >
              Read all reviews
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <div
          className={cn(
            "relative min-h-[22rem] rounded-[1.75rem] border p-6 sm:min-h-[20rem] sm:p-9",
            dark
              ? "border-white/12 bg-white/[0.045] backdrop-blur-md"
              : "border-forest/10 bg-white/60 shadow-soft",
          )}
        >
          <Quote
            className={cn(
              "size-9",
              dark ? "text-sage/70" : "text-rose/35",
            )}
            aria-hidden="true"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name + index}
              initial={reduceMotion ? false : { y: 12 }}
              animate={{ y: 0 }}
              exit={reduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="mt-5 flex gap-0.5"
                role="img"
                aria-label="5 star review"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={cn(
                      "size-3.5 fill-current",
                      dark ? "text-sage" : "text-rose",
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote
                className={cn(
                  "mt-4 font-display text-xl leading-snug tracking-tight text-balance sm:text-2xl",
                  dark ? "text-cream" : "text-forest",
                )}
              >
                “{current.quote}”
              </blockquote>
              <div
                className={cn(
                  "mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-5 text-xs",
                  dark ? "border-white/10" : "border-forest/10",
                )}
              >
                <span
                  className={cn(
                    "font-bold",
                    dark ? "text-cream" : "text-forest",
                  )}
                >
                  {current.name}
                </span>
                <span className={dark ? "text-cream/65" : "text-forest/70"}>
                  via {current.source}
                </span>
                {current.treatment ? (
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em]",
                      dark
                        ? "bg-white/[0.06] text-sage"
                        : "bg-sand/60 text-forest/70",
                    )}
                  >
                    {current.treatment}
                  </span>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="mt-7 flex flex-wrap gap-1.5"
            role="group"
            aria-label="Choose a review"
          >
            {reviews.map((review, dotIndex) => (
              <button
                key={review.name + dotIndex}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  dotIndex === index
                    ? dark
                      ? "w-7 bg-sage"
                      : "w-7 bg-rose"
                    : dark
                      ? "w-1.5 bg-white/20 hover:bg-white/40"
                      : "w-1.5 bg-forest/15 hover:bg-forest/30",
                )}
                aria-label={`Show review from ${review.name}`}
                aria-current={dotIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuotePanel({
  quote,
  name,
  treatment,
}: {
  quote: string;
  name: string;
  treatment?: string;
}) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-forest/10 bg-white/60 p-6 shadow-soft sm:p-8">
      <Quote className="size-8 text-rose/30" aria-hidden="true" />
      <blockquote className="mt-4 font-display text-xl leading-snug tracking-tight text-forest text-balance">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex flex-wrap items-center gap-2 border-t border-forest/10 pt-4 text-xs">
        <span className="font-bold text-forest">{name}</span>
        <span className="text-forest/70">via Google</span>
        {treatment ? (
          <span className="rounded-full bg-sand/60 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-forest/70">
            {treatment}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
