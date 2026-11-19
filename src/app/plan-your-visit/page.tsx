import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  Check,
  Clock,
  FileText,
  Images,
  ScanLine,
  Sparkles,
  Wallet,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { ContactPanel } from "@/components/contact-panel";
import { PageHero } from "@/components/page-hero";
import { QuotePanel } from "@/components/testimonial-carousel";
import { Reveal } from "@/components/reveal";
import { CtaBand, SectionHeading } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { practice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan Your Visit — SmileQuest Dental — Comprehensive Care",
  description:
    "What to expect at your first visit to SmileQuest Dental in Devils Lake, ND, including a 90-minute evaluation and advanced imaging.",
};

const firstVisit = [
  {
    title: "A conversation about you",
    body: "We begin with your dental history, current concerns, and overall health—so your care starts with your story, not a checklist.",
  },
  {
    title: "Digital full-mouth X-rays",
    body: "Full-mouth X-rays, including bitewings, assess your current oral health and establish a baseline for future comparison.",
  },
  {
    title: "Periodontal assessment",
    body: "A periodontal assessment, including probing, evaluates your gum health and gives us a clear picture of your foundation.",
  },
  {
    title: "Complete oral evaluation",
    body: "We screen for cavities, bite issues, signs of grinding, and more as part of a complete evaluation.",
  },
  {
    title: "Periodontal charting",
    body: "We document gum measurements for long-term monitoring, so changes are easy to track over time.",
  },
  {
    title: "See what we see",
    body: "We present our findings with intraoral photos and radiographs, so you can see exactly what we see.",
  },
  {
    title: "A personalized treatment plan",
    body: "Your comprehensive treatment plan is tailored to your needs, goals, and priorities.",
  },
  {
    title: "A private financial consultation",
    body: "We review costs, insurance coverage, and available payment options with you privately.",
  },
];

const outcomes = [
  {
    title: "A clear plan",
    body: "A comprehensive treatment plan built around your needs and goals.",
    icon: FileText,
  },
  {
    title: "A realistic timeline",
    body: "A timeline that works for you, with next steps explained clearly.",
    icon: CalendarCheck,
  },
  {
    title: "A financial overview",
    body: "Your options outlined so you can make an informed decision with confidence.",
    icon: Wallet,
  },
];

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="We welcome smiles from patients of all ages"
        title="Plan Your Visit"
        description="At SmileQuest, we’re honored to care for individuals and families within our community. Whether it’s your first visit altogether or your first visit in a while, we’re here to help you—with no judgment and a plan to move forward together."
        image="/assets/images/office-ext.webp"
        imageAlt="SmileQuest Dental office exterior"
        icon="/assets/images/plan-visit.svg"
        breadcrumb="Plan Your Visit"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2 text-xs font-semibold text-forest/70">
            <Clock className="size-3.5 text-rose" aria-hidden="true" />
            First visits typically take about 90 minutes
          </div>
          <Button asChild>
            <Link href="/request-appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Request appointment
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What to expect at your first visit"
              title="A thorough evaluation to build a clear plan."
            />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-forest/80">
              <p>
                Your initial appointment is designed to give us a full
                understanding of your oral health, your goals, and how we can
                support you going forward. To our team, your first appointment is
                more than an evaluation; it’s the beginning of a long-term
                relationship built on trust, education, and personalized care.
              </p>
              <p>
                This visit typically takes about 90 minutes. In most cases, your
                hygienist will perform a professional dental cleaning at the
                first visit as well, but not always. If we determine that scaling
                or root planing is needed, that will be scheduled as a separate
                appointment.
              </p>
            </div>

            <ol className="mt-10 grid gap-3 sm:grid-cols-2">
              {firstVisit.map((step, index) => (
                <li key={step.title} className="h-full">
                  <Reveal
                    delay={Math.min(index * 0.04, 0.25)}
                    className="h-full"
                  >
                    <div className="flex h-full gap-3.5 rounded-2xl border border-forest/10 bg-white/55 p-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest text-[0.65rem] font-bold tabular-nums text-cream">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-tight tracking-tight text-forest">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[0.78rem] leading-relaxed text-forest/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-sage/50 bg-sage/15 p-4 text-sm leading-relaxed text-forest/80">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-forest/70" aria-hidden="true" />
              <p>
                <strong className="font-semibold text-forest">A note on cleanings:</strong>{" "}
                if scaling or root planing is needed, we schedule it separately.
                This ensures you receive the right type of cleaning based on your
                specific gum health and allows us to deliver more focused care.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.75rem] border border-forest/10 bg-white/60 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-sand/60">
                  <Clock className="size-5 text-rose" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                    Your first appointment
                  </p>
                  <p className="font-display text-2xl leading-none text-forest">
                    90 minutes
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-[0.82rem] text-forest/70">
                {[
                  "Full health and dental history",
                  "Digital full-mouth X-rays",
                  "Gum health and oral evaluation",
                  "Findings reviewed together",
                  "A personalized treatment plan",
                  "Private financial consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-rose" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link href="/request-appointment">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Book your first visit
                </Link>
              </Button>
              <a
                href={practice.phoneHref}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-forest transition hover:bg-forest/[0.04]"
              >
                Call {practice.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 size-[32rem] rounded-full bg-rose/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 size-[28rem] rounded-full bg-sage/10 blur-3xl"
        />
        <div className="container-x relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-sage">Advanced imaging & diagnostic tools</p>
            <h2 className="mt-5 max-w-xl font-display text-[2.2rem] leading-[1.02] tracking-[-0.04em] text-cream text-balance sm:text-5xl">
              High-quality images with minimal radiation.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-cream/70">
              <p>
                We use digital radiography for all standard X-rays, which
                significantly reduces radiation exposure and eliminates waiting
                time for image processing. Our panoramic X-ray machine captures
                detailed, full-arch images.
              </p>
              <p>
                When needed, we also have cone-beam imaging technology (CBCT)
                available. This 3D scan provides incredibly detailed views of bone
                structure, nerves, and tooth roots, and we often use it for cases
                involving implants, endodontics, or complex treatment planning.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { title: "Digital X-rays", icon: ScanLine },
                { title: "Panoramic imaging", icon: Images },
                { title: "CBCT 3D scans", icon: Sparkles },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-3 text-[0.75rem] font-semibold text-cream/80"
                >
                  <item.icon className="size-4 text-sage" aria-hidden="true" />
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-pine shadow-lift">
              <Image
                src="/assets/images/smile-quest-rock-reception.webp"
                alt="SmileQuest Dental reception and imaging area"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent"
              />
              <div className="glass-dark absolute bottom-4 left-4 right-4 rounded-2xl p-4">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-sage">
                  See what we see
                </p>
                <p className="mt-1 text-sm leading-relaxed text-cream/80">
                  We walk you through your images and explain exactly what
                  we’re seeing before we talk about next steps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="After your evaluation"
                title="A plan designed just for you."
              />
              <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-forest/80">
                <p>
                  Once we’ve completed your full oral health evaluation, we’ll sit
                  down with you to review the findings and talk through your next
                  steps. It’s important you have a clear understanding of your
                  oral health.
                </p>
                <p>
                  We will also discuss your short-term and long-term dental goals,
                  as well as our treatment recommendations. You’ll leave our
                  office with a plan, a timeline that works for you, and a
                  financial overview that outlines your options.
                </p>
                <p>
                  At SmileQuest, our goal is to empower you to make informed
                  decisions and to feel supported every step of the way.
                </p>
              </div>
              <div className="mt-7">
                <Button asChild variant="dark">
                  <Link href="/request-appointment">
                    Schedule your visit
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {outcomes.map((outcome, index) => (
                <Reveal key={outcome.title} delay={index * 0.06}>
                  <article className="flex gap-4 rounded-2xl border border-forest/10 bg-white/55 p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sand/60 text-rose">
                      <outcome.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-tight text-forest">
                        {outcome.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-forest/70">
                        {outcome.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <QuotePanel
                quote="My first time there and people were so kind, polite and love the care they provided. They make one feel at home, like belong. I’m happy to go back."
                name="Marlene S."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-ivory/70 py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Book your first visit"
              title="Setting the stage for lifelong dental health."
              description="Call the team at SmileQuest and book an appointment today, or send a request online and we will reach out to confirm your time."
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
        title="Ready for a comfortable first visit?"
        description="No judgment, no pressure—just a clear plan and a team that listens. We look forward to welcoming you to SmileQuest."
        showPhone
      />
    </>
  );
}
