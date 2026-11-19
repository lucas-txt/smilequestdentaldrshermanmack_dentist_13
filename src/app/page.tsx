import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { ContactPanel } from "@/components/contact-panel";
import { CountUp } from "@/components/count-up";
import { Magnetic } from "@/components/magnetic";
import { Reveal, ScaleReveal } from "@/components/reveal";
import { SectionHeading, PaymentPanel } from "@/components/sections";
import {
  ServiceFeatureCard,
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
  values,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Home — SmileQuest Dental — Comprehensive Dentistry — ND",
  description: practice.description,
};

const featuredReviews = reviews.filter((review) => review.featured);

export default function HomePage() {
  return (
    <>
      <section className="noise relative overflow-hidden border-b border-forest/10 bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-24 size-[30rem] rounded-full bg-sage/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 size-[34rem] rounded-full bg-rose/[0.09] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="hairline-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_68%)]"
        />

        <div className="container-x relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
          <div className="relative z-10">
            <Reveal>
              <p className="eyebrow text-rose">Your dental experts in Devils Lake, ND</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-3xl font-display text-[3rem] leading-[0.92] tracking-[-0.055em] text-forest text-balance sm:text-[4.4rem] lg:text-[5.4rem]">
                Uncompromising{" "}
                <span className="relative inline-block text-rose">
                  excellence
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 14"
                    className="absolute -bottom-2 left-0 w-full text-sage"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10C62 3 132 2 258 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                in dentistry.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-forest/80 sm:text-lg">
                At SmileQuest Dental, we don’t believe in quick fixes or
                one-size-fits-all solutions. We take the time to understand where
                you’ve been and where you want your smile to go.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Button asChild size="lg">
                    <Link href="/request-appointment">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      Request appointment
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild size="lg" variant="outline">
                  <a href={practice.phoneHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    {practice.phone}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-forest/10 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl leading-none tracking-tight text-forest sm:text-5xl">
                      <CountUp value={stat.value} />
                      <span className="text-rose">{stat.suffix}</span>
                    </p>
                    <p className="mt-2 text-[0.62rem] font-bold uppercase leading-snug tracking-[0.12em] text-forest/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[3.5rem] border border-forest/10 bg-white/20"
            />
            <ScaleReveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-sand shadow-lift sm:aspect-[5/6]">
                <Image
                  src="/assets/images/main-hero.webp"
                  alt="SmileQuest Dental in Devils Lake, North Dakota"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent"
                />

                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/20 bg-forest/55 p-4 text-cream backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-sage/25 text-sage">
                      <Star className="size-4 fill-sage" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sage">
                        Patient-reviewed care
                      </p>
                      <p className="text-sm font-semibold">
                        Real stories from Devils Lake
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/reviews"
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-cream/80 transition hover:border-white/40 hover:text-white"
                  >
                    Read reviews
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScaleReveal>

            <div className="glass absolute -left-3 top-8 hidden rounded-2xl px-4 py-3 sm:block lg:-left-6">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                Under one roof
              </p>
              <p className="mt-0.5 text-sm font-bold text-forest">3 dentists</p>
            </div>
            <div className="glass absolute -right-3 top-1/3 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex lg:-right-5">
              <Clock className="size-4 text-rose" aria-hidden="true" />
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                  Office hours
                </p>
                <p className="text-xs font-semibold text-forest">Mon–Fri · 8am–4pm</p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-forest/10 bg-cream px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-forest/70 shadow-soft sm:flex">
              <MapPin className="size-3 text-rose" aria-hidden="true" />
              Devils Lake, ND
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-forest/10 bg-ivory/80 py-10 sm:py-14">
        <div className="container-x">
          <div className="grid gap-3 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <article className="group flex h-full gap-4 rounded-2xl border border-transparent p-4 transition hover:border-forest/10 hover:bg-white/60">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-sand/60">
                    <Image
                      src={value.icon}
                      alt=""
                      width={44}
                      height={52}
                      loading="eager"
                      unoptimized
                      className="h-10 w-auto"
                    />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-rose">
                      0{index + 1}
                    </p>
                    <h2 className="mt-1 font-display text-xl tracking-tight text-forest">
                      {value.title}
                    </h2>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-forest/70">
                      {value.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-[1.05fr_0.95fr] gap-3">
              <Reveal>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-sand">
                  <Image
                    src="/assets/images/office-building.webp"
                    alt="SmileQuest Dental office building in Devils Lake"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="mt-10 space-y-3">
                <Reveal delay={0.08}>
                  <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-sand">
                    <Image
                      src="/assets/images/smile-quest-small-team.webp"
                      alt="The SmileQuest Dental team"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 40vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sand">
                    <Image
                      src="/assets/images/smile-quest-rock-reception.webp"
                      alt="SmileQuest Dental reception area"
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 40vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="glass absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-8">
              <span className="flex size-10 items-center justify-center rounded-full bg-sage/25 text-forest">
                <HeartHandshake className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg leading-none text-forest">22 people</p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-forest/70">
                  One caring team
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="More than a dental office"
              title={
                <>
                  A tailored approach for{" "}
                  <span className="text-rose">lasting results.</span>
                </>
              }
            />
            <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-forest/80">
              <p>
                Whether you’re ready to rebuild your smile from the ground up or
                simply want preventive care you can count on for the whole
                family, our experienced team is here to help you. Our advanced
                training in oral surgery, endodontics, and periodontics means we
                can handle complex cases—while never losing sight of the personal
                care and comfort that matter most.
              </p>
              <p>
                We are an experienced, dependable team that you can count on for
                the long haul. Our personalized approach helps you and your
                family maintain healthier smiles for life.
              </p>
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Three dentists under one roof",
                "Advanced training in specialty care",
                "Personalized treatment planning",
                "A calm, welcoming environment",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.82rem] font-medium text-forest/80"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage/30 text-forest">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="dark">
                <Link href="/about-us">
                  Meet the SmileQuest team
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-ivory/70 py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Everything you need is right here"
              title={
                <>
                  Care that covers all your{" "}
                  <span className="text-rose">oral health needs.</span>
                </>
              }
              description="From everyday checkups to complex restorative care, SmileQuest brings advanced dentistry together in one comfortable Devils Lake practice."
            />
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/services">
                  Explore all services
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {coreServices.slice(0, 3).map((service, index) => (
              <ServiceFeatureCard key={service.href} service={service} index={index} />
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[...coreServices.slice(3), ...specialtyServices].map((service, index) => (
              <ServiceTile key={service.href} service={service} index={index} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-forest/10 bg-white/50 px-5 py-4 text-xs text-forest/70">
              <span className="inline-flex items-center gap-2 font-semibold text-forest">
                <ShieldCheck className="size-4 text-rose" aria-hidden="true" />
                One practice. Every stage of care.
              </span>
              <span>{services.length} dental services in one location</span>
              <Link href="/plan-your-visit" className="link-underline font-bold text-rose">
                Plan your first visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-rose/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 size-[30rem] rounded-full bg-sage/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="mask-arch relative aspect-[4/5] overflow-hidden bg-pine shadow-lift">
                <Image
                  src="/assets/images/smile-quest-hall.webp"
                  alt="Inside the SmileQuest Dental practice"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent"
                />
              </div>
              <div className="glass-dark absolute -bottom-5 -right-2 rounded-2xl px-5 py-4 sm:right-6">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Our vision for your care
                </p>
                <p className="mt-1 font-display text-lg text-cream">
                  Uncompromising excellence, every visit.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <p className="eyebrow text-sage">Meet the SmileQuest team</p>
            <h2 className="mt-5 max-w-xl font-display text-[2.2rem] leading-[1.02] tracking-[-0.04em] text-cream text-balance sm:text-5xl">
              Advanced training. Gentle care.{" "}
              <span className="text-sage">Truly personalized dentistry.</span>
            </h2>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-cream/70">
              The SmileQuest team brings together advanced training, gentle care,
              and a commitment to truly personalized dentistry. From complex oral
              surgery to everyday checkups, our highly qualified team tailors
              every treatment to your unique needs. We listen first, explain your
              options clearly, and ensure you feel comfortable every step of the
              way.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl leading-none text-cream sm:text-4xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-[0.58rem] font-bold uppercase leading-snug tracking-[0.13em] text-cream/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="cream">
                <Link href="/about-us">
                  Meet the team
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="light">
                <Link href="/request-appointment">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Request appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel
        reviews={featuredReviews.length >= 3 ? featuredReviews : reviews.slice(0, 5)}
        title="Kind words from the people we care for."
        description="Real reviews from patients in Devils Lake and around the region, published via Google."
      />

      <section id="appointment" className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 size-[28rem] rounded-full bg-sage/25 blur-3xl"
        />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-rose">Start your SmileQuest</p>
              <h2 className="mt-5 font-display text-[2.3rem] leading-[1.02] tracking-[-0.04em] text-forest text-balance sm:text-5xl">
                Connect with our team.
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-forest/80">
                Give us a call or request an appointment online—we’ll help you
                take the first step toward care that lasts.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-forest/70">
                Find out what you can expect at your first appointment with
                SmileQuest Dental, including our thorough 90-minute evaluation.
              </p>
              <Link
                href="/plan-your-visit"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rose transition hover:text-rose-deep"
              >
                Plan your visit
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>

              <ContactPanel className="mt-8" showCta={false} />

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-forest/10 bg-white/50 p-4 text-xs leading-relaxed text-forest/70">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                <p>
                  Prefer to talk now? Call{" "}
                  <a
                    href={practice.phoneHref}
                    className="font-bold text-forest underline decoration-rose/40 underline-offset-2"
                  >
                    {practice.phone}
                  </a>{" "}
                  and our team will help you find a time.
                </p>
              </div>
            </div>

            <Reveal delay={0.08}>
              <AppointmentForm variant="compact" />
            </Reveal>
          </div>

          <div className="mt-12">
            <PaymentPanel />
          </div>
        </div>
      </section>
    </>
  );
}
