import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Facebook,
  MapPin,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand, SectionHeading } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { practice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions — SmileQuest Dental — Devils Lake, ND",
  description:
    "Contact SmileQuest Dental at 206 5th Avenue SE, Devils Lake, ND 58301. Call (701) 662-8191.",
};

type ContactDetail = {
  title: string;
  body: string;
  sub: string;
  href?: string;
  icon: LucideIcon;
  action?: string;
};

const details: ContactDetail[] = [
  {
    title: "Call our team",
    body: practice.phone,
    sub: "Monday to Friday, 8:00am–4:00pm",
    href: practice.phoneHref,
    icon: Phone,
    action: "Call now",
  },
  {
    title: "Visit the office",
    body: practice.addressAlt,
    sub: `${practice.city}, ${practice.state} ${practice.zip}`,
    href: practice.mapUrl,
    icon: MapPin,
    action: "Open in Google Maps",
  },
  {
    title: "Office hours",
    body: practice.hours,
    sub: "Saturday and Sunday closed",
    icon: Clock,
  },
  {
    title: "Follow along",
    body: "SmileQuest Dental on Facebook",
    sub: "Practice news and community updates",
    href: practice.facebookUrl,
    icon: Facebook,
    action: "Visit Facebook",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & find us"
        title="Contact & Find Us"
        description="Our dental office is easily accessible and conveniently located at 206 5th Avenue SE, Devils Lake, ND 58301. We’re here to help you take the next step."
        image="/assets/images/office-ext.webp"
        imageAlt="SmileQuest Dental office exterior in Devils Lake"
        icon="/assets/images/location.svg"
        breadcrumb="Contact"
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {practice.phone}
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/request-appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Request appointment
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden border-b border-forest/10 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 size-[28rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((detail, index) => {
              const content = (
                <>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-sand/60 text-rose">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-forest/70">
                    {detail.title}
                  </h2>
                  <p className="mt-2 font-display text-xl leading-tight tracking-tight text-forest">
                    {detail.body}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-forest/70">
                    {detail.sub}
                  </p>
                  {detail.action ? (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-rose">
                      {detail.action}
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              );

              return (
                <Reveal key={detail.title} delay={index * 0.05}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white/55 p-5 transition hover:-translate-y-1 hover:border-rose/25 hover:bg-white/85 hover:shadow-soft"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white/55 p-5">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <Reveal>
            <a
              href={practice.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[16/11] overflow-hidden rounded-[2rem] border border-forest/10 bg-sand shadow-soft"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(31,42,36,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,42,36,0.08)_1px,transparent_1px)] [background-size:52px_52px]"
              />
              <div
                aria-hidden="true"
                className="absolute left-0 top-1/3 h-10 w-full -rotate-6 bg-sage/30"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/4 top-0 h-full w-8 rotate-12 bg-white/50"
              />
              <div
                aria-hidden="true"
                className="absolute right-8 top-0 h-full w-12 -rotate-6 bg-white/40"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-forest text-cream shadow-lift transition duration-300 group-hover:scale-105 group-hover:bg-rose">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <span className="mt-4 block rounded-full border border-forest/10 bg-cream px-4 py-2 text-xs font-bold text-forest shadow-soft">
                  SmileQuest Dental
                </span>
              </div>
              <div className="glass absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3">
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-forest/70">
                    Find us
                  </p>
                  <p className="text-sm font-semibold text-forest">
                    {practice.addressAlt}, {practice.city}, {practice.state}{" "}
                    {practice.zip}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-rose">
                  Open map
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Easy to reach"
              title="Conveniently located in Devils Lake."
              description="Our dental office is easily accessible and conveniently located at 206 5th Avenue SE, Devils Lake, ND 58301."
            />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-forest/80">
              <p>
                Whether you’re a longtime resident or new to the area, we’re glad
                to help you find us. Call the team if you need a hand before your
                visit.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="dark">
                <a href={practice.mapUrl} target="_blank" rel="noreferrer">
                  <MapPin className="size-4" aria-hidden="true" />
                  Get directions
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={practice.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call the office
                </a>
              </Button>
            </div>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-forest/10 bg-white/50 p-4 text-xs leading-relaxed text-forest/70">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
              <p>
                SmileQuest Dental · {practice.address} · {practice.hours}. Saturday
                and Sunday closed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-ivory/70 py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="A look inside"
              title="A calming, comfortable space."
              description="From the moment you arrive, we want you to feel at home. Take a look around before your visit."
            />
            <Button asChild variant="outline">
              <Link href="/plan-your-visit">
                Plan your visit
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/assets/images/office-building.webp",
                alt: "SmileQuest Dental office building",
              },
              {
                src: "/assets/images/smile-quest-rock-reception.webp",
                alt: "SmileQuest Dental reception area",
              },
              {
                src: "/assets/images/smile-quest-rock-wall.webp",
                alt: "SmileQuest Dental interior stone wall",
              },
            ].map((image, index) => (
              <Reveal key={image.src} delay={index * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 92vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Request appointment"
              title="Let’s find a time that works."
              description="Please complete the form below, and our team will reach out to confirm your appointment time."
            />
            <div className="mt-8">
              <AppointmentForm variant="compact" />
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <ContactPanel />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="We’re here to help"
        title="Have a question before you visit?"
        description="Call our Devils Lake team or send an appointment request. We’ll help you find the right next step."
        primaryLabel="Request appointment"
      />
    </>
  );
}
