import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  Quote,
  Sparkles,
} from "lucide-react";
import { CtaBand, SectionHeading } from "@/components/sections";
import { PageHero } from "@/components/page-hero";
import { QuotePanel } from "@/components/testimonial-carousel";
import { Reveal } from "@/components/reveal";
import { TeamDirectory } from "@/components/team-directory";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import { doctors, teamCount } from "@/lib/team";
import { practice, stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — SmileQuest Dental — Comprehensive Dental Care",
  description:
    "Meet the SmileQuest Dental team in Devils Lake, ND. Three dentists, a large supporting team, and personalized care under one roof.",
};

const jackie = reviews.find((review) => review.name === "Jackie C.");

const approach = [
  {
    title: "Understanding",
    icon: "/assets/images/understanding.svg",
    body: "We know that every smile comes with a story, and we take the time to listen to yours. From the moment you arrive, you’ll be treated with respect and care.",
  },
  {
    title: "Support",
    icon: "/assets/images/support.svg",
    body: "We don’t just treat your teeth—we provide you with valuable advice and support so you and your family can create healthy habits that support your long-term oral health.",
  },
  {
    title: "Dedication",
    icon: "/assets/images/dedicaiton.svg",
    body: "Our team is dedicated to continuing education, and we pursue advanced training so we can achieve the best possible outcomes for our patients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title="Welcome to SmileQuest Dental Care"
        description="At SmileQuest, we care for people who want to invest in their smiles. We are an experienced, dependable team that you can count on for the long haul."
        image="/assets/images/office-building.webp"
        imageAlt="SmileQuest Dental office in Devils Lake, North Dakota"
        icon="/assets/images/care.svg"
        breadcrumb="About Us"
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/request-appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Request appointment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={practice.phoneHref}>{practice.phone}</a>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden border-b border-forest/10 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[26rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-rose">More than just a dental office</p>
            <h2 className="mt-5 max-w-2xl font-display text-[2.3rem] leading-[1.02] tracking-[-0.04em] text-forest text-balance sm:text-5xl">
              Personalized care for healthier smiles, for life.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-forest/80">
              <p>
                Whether you need a full mouth rehabilitation, dental implants, or
                preventive care for the whole family, our personalized approach
                will help you and your family maintain healthier smiles for life.
              </p>
              <p>
                SmileQuest brings together advanced training, modern technology,
                and a team that genuinely enjoys getting to know the people we
                care for. We listen first, explain your options clearly, and make
                sure you feel comfortable every step of the way.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-forest/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl leading-none tracking-tight text-forest">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-[0.6rem] font-bold uppercase leading-snug tracking-[0.12em] text-forest/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {jackie ? (
              <QuotePanel quote={jackie.quote} name={jackie.name} />
            ) : null}
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={0.06}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src="/assets/images/smile-quest-hall.webp"
                    alt="SmileQuest Dental office interior"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src="/assets/images/smile-quest-rock-wall.webp"
                    alt="SmileQuest Dental stone accent wall"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ivory/70 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Meet the dentists"
            title="Three dentists. One standard of care."
            description="Our doctors bring different strengths and a shared commitment to uncompromising excellence in dentistry."
          />

          <div className="mt-12 space-y-6">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name} delay={index * 0.05}>
                <article className="grid gap-6 rounded-[2rem] border border-forest/10 bg-white/60 p-4 sm:p-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 lg:p-8">
                  <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] bg-sand lg:min-h-0">
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 90vw, 32vw"
                      className="object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/40 to-transparent"
                    />
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-forest/45 px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-md">
                      {doctor.role}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-rose">
                      Doctor {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-3xl leading-tight tracking-tight text-forest sm:text-4xl">
                      {doctor.name}
                    </h3>
                    <div className="mt-5 space-y-3.5 text-[0.9rem] leading-relaxed text-forest/80">
                      {doctor.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-5 border-t border-forest/10 pt-5 sm:grid-cols-2">
                      <div>
                        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                          <GraduationCap className="size-3.5 text-rose" aria-hidden="true" />
                          Education
                        </p>
                        <ul className="mt-3 space-y-2 text-[0.8rem] leading-snug text-forest/70">
                          {doctor.education.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-rose/70" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                          <BookOpen className="size-3.5 text-rose" aria-hidden="true" />
                          Organizations
                        </p>
                        <ul className="mt-3 space-y-2 text-[0.8rem] leading-snug text-forest/70">
                          {doctor.organizations.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
          className="pointer-events-none absolute -left-40 top-24 size-[26rem] rounded-full bg-rose/[0.07] blur-3xl"
        />
        <div className="container-x relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Meet the team"
              title="The people behind your care."
              description="From the front office to the hygiene chairs, our team makes SmileQuest feel like home. Search or filter to meet everyone."
            />
            <div className="flex items-center gap-3 rounded-full border border-forest/10 bg-white/55 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest/70">
              <HeartHandshake className="size-4 text-rose" aria-hidden="true" />
              {teamCount} people on the SmileQuest team
            </div>
          </div>
          <div className="mt-10">
            <TeamDirectory />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-rose/20 blur-3xl"
        />
        <div className="container-x relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-sage">Our approach to your dental care</p>
              <h2 className="mt-5 max-w-2xl font-display text-[2.3rem] leading-[1.02] tracking-[-0.04em] text-cream text-balance sm:text-5xl">
                Thoughtful care that achieves the results you want.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/70">
              At SmileQuest, we believe that great dentistry can change more than
              just your smile’s appearance—it can enhance your quality of life.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-white/[0.06]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={42}
                      height={50}
                      loading="eager"
                      unoptimized
                      className="h-10 w-auto brightness-0 invert"
                    />
                  </span>
                  <p className="mt-5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sage">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl tracking-tight text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-cream/70">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <Quote className="size-7 text-sage" aria-hidden="true" />
            <p className="flex-1 font-display text-lg leading-snug text-cream/80">
              We aim to exceed your expectations, ensuring you can enjoy a
              positive experience each time you visit our practice.
            </p>
            <Button asChild variant="cream" size="sm">
              <Link href="/reviews">
                Read patient reviews
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white/50 p-5">
                  <div className="flex items-center justify-between">
                    <Image
                      src={value.icon}
                      alt=""
                      width={38}
                      height={46}
                      loading="eager"
                      unoptimized
                      className="h-9 w-auto"
                    />
                    <Building2 className="size-4 text-forest/70" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-xl tracking-tight text-forest">
                    {value.title}
                  </h2>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-forest/70">
                    {value.description}
                  </p>
                  <span className="mt-4 flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-rose">
                    <Sparkles className="size-3" aria-hidden="true" />
                    The SmileQuest difference
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your smile, our focus"
        title="Ready to meet your new dental home?"
        description="Request an appointment with our Devils Lake team and experience the difference of truly personalized care."
      />
    </>
  );
}
