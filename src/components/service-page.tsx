import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDot,
  Phone,
  Sparkles,
} from "lucide-react";
import { CtaBand, PaymentPanel, SectionHeading, ValueProps } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { QuotePanel } from "@/components/testimonial-carousel";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import type { ServiceContent } from "@/lib/services-content";
import { practice, services } from "@/lib/site";

export function ServicePage({ service }: { service: ServiceContent }) {
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        description={service.description}
        image={service.image}
        imageAlt={`${service.name} at SmileQuest Dental`}
        icon={service.icon}
        breadcrumb={service.name}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/request-appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Request appointment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {practice.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why patients choose SmileQuest"
              title={service.tagline}
            />
            <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-forest/80 sm:text-base">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ValueProps items={service.valueProps} />
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/60 shadow-soft">
              <div className="relative flex items-center gap-3 border-b border-forest/10 bg-sand/40 px-5 py-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-white/70">
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={48}
                    loading="eager"
                    unoptimized
                    className="h-9 w-auto"
                  />
                </span>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-forest/70">
                    SmileQuest Dental
                  </p>
                  <p className="text-sm font-semibold text-forest">{service.name}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-rose">
                  What we offer
                </p>
                <ul className="mt-3 space-y-2 text-[0.82rem] leading-snug text-forest/70">
                  {service.treatments.map((treatment, index) => (
                    <li key={treatment.title}>
                      <a
                        href={`#treatment-${index + 1}`}
                        className="group flex items-start gap-2.5 rounded-lg py-1 transition hover:text-forest"
                      >
                        <span className="mt-0.5 text-[0.6rem] font-bold tabular-nums text-rose">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {treatment.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-2 border-t border-forest/10 pt-5">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/request-appointment">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      Request appointment
                    </Link>
                  </Button>
                  <a
                    href={practice.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-forest transition hover:bg-forest/[0.04]"
                  >
                    <Phone className="size-3.5 text-rose" aria-hidden="true" />
                    {practice.phone}
                  </a>
                </div>
                <p className="mt-4 text-[0.65rem] leading-relaxed text-forest/70">
                  Questions about {service.name.toLowerCase()}? Call our Devils
                  Lake team or send an appointment request online.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-ivory/70 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Treatment details"
            title="What to expect"
            description="Every treatment at SmileQuest is planned around your needs and explained before we begin."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-label="Treatments on this page" className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-forest/70">
                  On this page
                </p>
                <ol className="mt-4 space-y-1">
                  {service.treatments.map((treatment, index) => (
                    <li key={treatment.title}>
                      <a
                        href={`#treatment-${index + 1}`}
                        className="flex items-start gap-2.5 rounded-lg px-2 py-2 text-[0.78rem] leading-snug text-forest/70 transition hover:bg-white/60 hover:text-forest"
                      >
                        <span className="mt-px text-[0.6rem] font-bold tabular-nums text-rose">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {treatment.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="min-w-0">
              {service.treatments.map((treatment, index) => (
                <article
                  key={treatment.title}
                  id={`treatment-${index + 1}`}
                  className="scroll-mt-28 border-t border-forest/10 py-9 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-[0.68rem] font-bold tabular-nums text-cream">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      {treatment.kicker ? (
                        <p className="text-[0.63rem] font-bold uppercase tracking-[0.16em] text-rose">
                          {treatment.kicker}
                        </p>
                      ) : null}
                      <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-forest sm:text-[1.8rem]">
                        {treatment.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4 pl-0 text-[0.92rem] leading-relaxed text-forest/80 sm:pl-13">
                    {treatment.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {treatment.bullets?.length ? (
                      <ul className="grid gap-2 pt-1 sm:grid-cols-2">
                        {treatment.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 rounded-xl border border-forest/10 bg-white/50 px-3.5 py-3 text-[0.8rem] leading-snug text-forest/80"
                          >
                            <Check
                              className="mt-0.5 size-3.5 shrink-0 text-rose"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {treatment.note ? (
                      <p className="flex items-start gap-3 rounded-xl border border-sage/50 bg-sage/15 px-4 py-3.5 text-[0.82rem] leading-relaxed text-forest/80">
                        <CircleDot
                          className="mt-0.5 size-4 shrink-0 text-forest/70"
                          aria-hidden="true"
                        />
                        {treatment.note}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {service.approach ? (
        <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-24 size-[30rem] rounded-full bg-rose/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 size-[26rem] rounded-full bg-sage/10 blur-3xl"
          />
          <div className="container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-sage">Our approach</p>
              <h2 className="mt-5 max-w-lg font-display text-[2.15rem] leading-[1.04] tracking-[-0.035em] text-cream text-balance sm:text-5xl">
                {service.approach.title}
              </h2>
              {service.approach.kicker ? (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
                  {service.approach.kicker}
                </p>
              ) : null}
            </div>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-cream/70">
              {service.approach.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-sage">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Tailored to you
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {service.testimonial ? (
            <Reveal>
              <QuotePanel
                quote={service.testimonial.quote}
                name={service.testimonial.name}
                treatment={service.testimonial.treatment}
              />
            </Reveal>
          ) : (
            <div />
          )}
          <Reveal delay={0.08}>
            <PaymentPanel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-ivory/60 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Keep exploring"
              title="Care that connects"
              description="SmileQuest brings every stage of dentistry together under one roof in Devils Lake."
            />
            <Link
              href="/services"
              className="link-underline text-xs font-bold uppercase tracking-[0.14em] text-rose transition hover:text-rose-deep"
            >
              All services
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-forest/10 bg-white/55 p-5 transition hover:-translate-y-1 hover:border-rose/25 hover:bg-white/85 hover:shadow-soft"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-sand/55">
                    <Image
                      src={item.icon}
                      alt=""
                      width={36}
                      height={44}
                      loading="eager"
                      unoptimized
                      className="h-8 w-auto"
                    />
                  </span>
                  <h3 className="mt-4 font-display text-xl tracking-tight text-forest">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-forest/70">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-rose">
                    Explore
                    <ArrowRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={service.ctaTitle}
        description={service.ctaText}
        primaryLabel={service.ctaLabel ?? "Request appointment"}
      />
    </>
  );
}
