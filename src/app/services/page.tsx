import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  HeartHandshake,
  Layers,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PaymentPanel, SectionHeading, CtaBand } from "@/components/sections";
import {
  ServiceFeatureCard,
  ServiceRowCard,
  ServiceTile,
} from "@/components/service-cards";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import {
  coreServices,
  practice,
  services,
  specialtyServices,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services — SmileQuest Dental — Devils Lake, ND",
  description:
    "Explore general, cosmetic, restorative, children’s, endodontic, surgical, periodontal, implant, and orthodontic care at SmileQuest Dental.",
};

const careSteps = [
  {
    title: "We listen first",
    body: "Your story, your goals, and your concerns shape every recommendation we make.",
  },
  {
    title: "We explain clearly",
    body: "We walk you through your options in plain language, with the detail you want.",
  },
  {
    title: "We care completely",
    body: "From everyday checkups to complex treatment, your comfort stays at the center.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete dentistry under one roof"
        title="Dental Services"
        description="SmileQuest brings general, cosmetic, restorative, children’s, endodontic, surgical, periodontal, implant, and orthodontic care together in one Devils Lake practice."
        image="/assets/images/general-home.webp"
        imageAlt="Dental care at SmileQuest Dental"
        icon="/assets/images/general.svg"
        breadcrumb="Services"
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

      <section className="border-b border-forest/10 bg-ivory/80 py-8 sm:py-10">
        <div className="container-x grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <p className="font-display text-3xl leading-none text-forest sm:text-4xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="max-w-32 text-[0.58rem] font-bold uppercase leading-snug tracking-[0.12em] text-forest/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Core care"
              title="Everyday dentistry, done exceptionally well."
              description="These are the services that keep your smile healthy year after year—and the foundation for everything else we do."
            />
            <Reveal delay={0.08}>
              <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/55 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-forest/70">
                <HeartHandshake className="size-4 text-rose" aria-hidden="true" />
                Care for every age
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {coreServices.slice(0, 3).map((service, index) => (
              <ServiceFeatureCard key={service.href} service={service} index={index} />
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            {coreServices.slice(3).map((service, index) => (
              <ServiceRowCard key={service.href} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-forest py-16 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-rose/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 size-[28rem] rounded-full bg-sage/10 blur-3xl"
        />
        <div className="container-x relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-sage">Advanced & specialty care</p>
              <h2 className="mt-5 max-w-2xl font-display text-[2.2rem] leading-[1.02] tracking-[-0.04em] text-cream text-balance sm:text-5xl">
                Complex care, close to home.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/70">
              Our doctors pursue advanced training so more treatment can happen
              right here in Devils Lake—with the team you already know.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyServices.map((service, index) => (
              <ServiceTile
                key={service.href}
                service={service}
                index={index}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="How it works"
                title="A clear path from first conversation to lasting care."
              />
              <div className="mt-7 space-y-3">
                {careSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 0.06}>
                    <div className="flex gap-4 rounded-2xl border border-forest/10 bg-white/55 p-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-[0.65rem] font-bold text-cream">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-tight text-forest">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-forest/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="dark">
                  <Link href="/plan-your-visit">
                    Plan your visit
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about-us">Meet our team</Link>
                </Button>
              </div>
            </div>

            <Reveal>
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-sand shadow-lift">
                  <Image
                    src="/assets/images/smile-quest-small-team.webp"
                    alt="The SmileQuest Dental team"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-forest/55 p-4 text-cream backdrop-blur-md">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sage">
                      One practice
                    </p>
                    <p className="mt-1 font-display text-2xl leading-tight">
                      {services.length} dental services under one roof.
                    </p>
                  </div>
                </div>
                <div className="glass absolute -right-3 -top-3 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex">
                  <Layers className="size-4 text-rose" aria-hidden="true" />
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-forest/70">
                      Comprehensive
                    </p>
                    <p className="text-xs font-semibold text-forest">Care that connects</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12">
            <PaymentPanel />
          </div>
        </div>
      </section>

      <TestimonialCarousel
        reviews={reviews.slice(0, 5)}
        eyebrow="Patient stories"
        title="Care you can feel confident about."
        description="Hear from patients who found a dental home at SmileQuest."
        tone="dark"
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Cash and credit card accepted",
              "Most major dental insurance plans",
              "Help understanding your options",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/50 px-4 py-4 text-sm font-semibold text-forest/80">
                  <span className="flex size-7 items-center justify-center rounded-full bg-sage/30 text-forest">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[0.65rem] text-forest/70">
            <Sparkles className="size-3.5 text-rose" aria-hidden="true" />
            Not sure if we’re in your network? Our team is happy to help.
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your next step"
        title="Let’s find the right care for your smile."
        description="Tell us what you need, and our Devils Lake team will help you plan the next step."
      />
    </>
  );
}
