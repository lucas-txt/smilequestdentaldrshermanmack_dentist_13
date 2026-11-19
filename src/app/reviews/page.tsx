import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ReviewWall } from "@/components/review-wall";
import { Reveal } from "@/components/reveal";
import { CtaBand, SectionHeading } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import { practice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews — SmileQuest Dental — Devils Lake, ND",
  description:
    "Read patient reviews for SmileQuest Dental in Devils Lake, ND. Real words from patients, published via Google.",
};

const featured = reviews[0];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title="Patient Reviews"
        description="Real words from patients in Devils Lake and around the region. Reviews shown here were published via Google."
        image="/assets/images/main-testimonial-bg.webp"
        imageAlt="A warm, welcoming space at SmileQuest Dental"
        icon="/assets/images/quote.svg"
        breadcrumb="Reviews"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2 text-xs font-semibold text-forest/70">
            <Star className="size-3.5 fill-rose text-rose" aria-hidden="true" />
            {reviews.length} patient reviews shared here
          </div>
          <Button asChild variant="outline">
            <a href={practice.googleReviewsUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" aria-hidden="true" />
              View on Google
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden border-b border-forest/10 py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[28rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <Reveal>
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-7 text-cream shadow-lift sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-rose/20 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Quote className="size-9 text-sage" aria-hidden="true" />
                  <div className="flex gap-0.5" role="img" aria-label="5 star review">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-3.5 fill-sage text-sage"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 max-w-2xl font-display text-2xl leading-snug tracking-tight text-cream sm:text-[2rem]">
                  “{featured.quote}”
                </blockquote>
              </div>
              <figcaption className="relative mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-xs">
                <span className="font-bold text-cream">{featured.name}</span>
                <span className="text-cream/65">via {featured.source}</span>
                {featured.treatment ? (
                  <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-sage">
                    {featured.treatment}
                  </span>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-forest/10 bg-white/60 p-6 shadow-soft">
              <div>
                <p className="eyebrow text-rose">Why patients share</p>
                <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight text-forest">
                  Care that feels personal.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">
                  The reviews patients share often come back to the same things:
                  a team that listens, explains each step, and makes a dental
                  visit feel comfortable.
                </p>
              </div>
              <div className="mt-6 space-y-3 border-t border-forest/10 pt-5">
                {[
                  "Gentle, attentive care",
                  "Clear explanations at every step",
                  "A welcoming team for all ages",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-2.5 text-xs font-medium text-forest/70">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <Link
                href="/request-appointment"
                className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-rose transition hover:text-rose-deep"
              >
                <CalendarDays className="size-3.5" aria-hidden="true" />
                Start your SmileQuest
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Every review, in their words"
            title="The SmileQuest experience."
            description="Filter by treatment to read reviews from patients who have visited us for similar care."
          />
          <div className="mt-10">
            <ReviewWall reviews={reviews} />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-white/50 px-5 py-4">
            <p className="text-sm text-forest/70">
              Want to share your experience? Find us on Google.
            </p>
            <a
              href={practice.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-xs font-bold text-cream transition hover:bg-pine"
            >
              Google reviews
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-ivory/70 py-14 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src="/assets/images/main-testimonial-bg.webp"
                alt="SmileQuest Dental patient care space"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <p className="eyebrow text-rose">Your story starts here</p>
            <h2 className="mt-5 max-w-2xl font-display text-[2.2rem] leading-[1.03] tracking-[-0.04em] text-forest text-balance sm:text-5xl">
              A dental home you’ll want to tell people about.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-forest/80">
              We’re honored to care for patients in Devils Lake and around the
              region. If you’re looking for a team that listens, explains, and
              delivers care with uncompromising excellence, we’d love to meet you.
            </p>
            <div className="mt-7">
              <Button asChild variant="dark">
                <Link href="/request-appointment">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Request appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="We’d love to meet you"
        title="Experience the care behind the reviews."
        description="Request an appointment with SmileQuest Dental and see what personalized, uncompromising care feels like."
      />
    </>
  );
}
