import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PracticeInfo } from "@/components/practice-info";
import { Button } from "@/components/ui/button";
import { practice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Appointment — SmileQuest Dental — Devils Lake, ND",
  description:
    "Request a dental appointment at SmileQuest Dental in Devils Lake, ND. Call (701) 662-8191 or complete the online form.",
};

const nextSteps = [
  {
    title: "Send your request",
    body: "Tell us a little about you and the reason for your visit.",
    icon: MessageCircle,
  },
  {
    title: "We reach out",
    body: "A member of our team will contact you to confirm your appointment time.",
    icon: Phone,
  },
  {
    title: "We welcome you",
    body: "Arrive to a calm, comfortable office and a team ready to listen.",
    icon: CalendarDays,
  },
];

export default function RequestAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Start your SmileQuest"
        title="Request Appointment"
        description="Are you looking for a dental office that can provide you and your family with comprehensive care? Get in touch with our team, and we can schedule your next dental appointment."
        image="/assets/images/main-hero.webp"
        imageAlt="SmileQuest Dental care in Devils Lake"
        icon="/assets/images/appointment.svg"
        breadcrumb="Request Appointment"
        compact
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call {practice.phone}
            </a>
          </Button>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2 text-xs font-semibold text-forest/70">
            <Clock className="size-3.5 text-rose" aria-hidden="true" />
            {practice.hours}
          </span>
        </div>
      </PageHero>

      <section className="relative overflow-hidden py-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 size-[30rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <p className="eyebrow text-rose">Book an appointment online</p>
            <h2 className="mt-5 font-display text-[2.2rem] leading-[1.03] tracking-[-0.04em] text-forest text-balance sm:text-5xl">
              Let’s find a time that works for you.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-forest/80">
              Please complete the form, and our team will reach out to confirm
              your appointment time. Submitting this form is a request, not a
              confirmed appointment.
            </p>

            <div className="mt-8 space-y-3">
              {nextSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="flex gap-3.5 rounded-2xl border border-forest/10 bg-white/55 p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sand/60 text-rose">
                      <step.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-tight tracking-tight text-forest">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-forest/70">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-forest/10 bg-white/55 p-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                I am making an appointment for
              </p>
              <ul className="mt-3 grid gap-2 text-[0.8rem] text-forest/70">
                {practice.appointmentTypes.map((type) => (
                  <li key={type} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 size-3.5 shrink-0 text-rose"
                      aria-hidden="true"
                    />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <ContactPanel className="mt-6" showCta={false} heading="Prefer to call?" />
          </div>

          <div>
            <AppointmentForm variant="full" />

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-sage/50 bg-sage/15 p-4 text-xs leading-relaxed text-forest/80">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-forest/70" aria-hidden="true" />
              <p>
                If this is a dental emergency, please call{" "}
                <a
                  href={practice.phoneHref}
                  className="font-bold text-forest underline decoration-forest/30 underline-offset-2"
                >
                  {practice.phone}
                </a>{" "}
                so our team can help you right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-ivory/70 py-12 sm:py-16">
        <div className="container-x">
          <PracticeInfo />
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-8 rounded-[2rem] border border-forest/10 bg-white/55 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-rose">New patients welcome</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-forest sm:text-4xl">
              Your first visit is about getting to know you.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-forest/70">
              Your initial appointment typically takes about 90 minutes and
              includes a thorough evaluation, imaging, and a plan designed around
              your goals.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <Button asChild variant="dark">
              <Link href="/plan-your-visit">Plan your visit</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about-us">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
