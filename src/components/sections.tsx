import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { practice } from "@/lib/site";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "dark",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p
            className={cn(
              "eyebrow",
              tone === "dark" ? "text-rose" : "text-sage",
              align === "center" && "justify-center",
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-4 font-display text-[2.15rem] leading-[1.05] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.4rem]",
            tone === "dark" ? "text-forest" : "text-cream",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <div
            className={cn(
              "mt-5 max-w-2xl text-[0.95rem] leading-relaxed sm:text-base",
              tone === "dark" ? "text-forest/70" : "text-cream/65",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </div>
        </Reveal>
      ) : null}
      {children ? <Reveal delay={0.14}>{children}</Reveal> : null}
    </div>
  );
}

type CtaBandProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  className?: string;
};

export function CtaBand({
  eyebrow = "Start your SmileQuest",
  title,
  description,
  primaryLabel = "Request appointment",
  primaryHref = "/request-appointment",
  showPhone = true,
  className,
}: CtaBandProps) {
  return (
    <section className={cn("relative py-16 sm:py-24", className)}>
      <div className="container-x">
        <div className="noise relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-cream shadow-soft sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 size-[30rem] rounded-full bg-rose/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-sage/15 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-sage">{eyebrow}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 max-w-3xl font-display text-[2.25rem] leading-[1.02] tracking-[-0.04em] text-balance text-cream sm:text-5xl lg:text-[3.6rem]">
                  {title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-5 max-w-xl text-sm leading-relaxed text-cream/65 sm:text-base">
                  {description}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" variant="cream">
                    <Link href={primaryHref}>
                      <CalendarDays className="size-4" aria-hidden="true" />
                      {primaryLabel}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                  {showPhone ? (
                    <Button asChild size="lg" variant="light">
                      <a href={practice.phoneHref}>
                        <Phone className="size-4" aria-hidden="true" />
                        {practice.phone}
                      </a>
                    </Button>
                  ) : null}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="glass-dark rounded-2xl p-5 text-sm">
                <p className="eyebrow text-sage">Visit us</p>
                <a
                  href={practice.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-start gap-3 text-cream/80 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                  <span>
                    {practice.address}
                    <span className="mt-1 block text-xs text-cream/65">
                      Open in Google Maps
                    </span>
                  </span>
                </a>
                <a
                  href={practice.phoneHref}
                  className="mt-4 flex items-center gap-3 font-semibold text-cream transition hover:text-sage"
                >
                  <Phone className="size-4 text-rose" aria-hidden="true" />
                  {practice.phone}
                </a>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-cream/65">
                  {practice.hours}
                  <br />
                  Saturday and Sunday closed
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PaymentPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-forest/10 bg-white/55 p-6 sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-sage/20 blur-2xl"
      />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-rose">Payment & insurance</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-forest">
            Paying for your dental treatment at SmileQuest Dental Care
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/70">
            {practice.payment} {practice.paymentNote}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest/15 px-5 py-3 text-xs font-bold text-forest transition hover:border-rose/40 hover:bg-rose/[0.04] hover:text-rose"
        >
          <Sparkles className="size-3.5" aria-hidden="true" />
          Ask our team
        </Link>
      </div>
    </div>
  );
}

export function ValueProps({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <li
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/55 px-3.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-forest/70"
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              index % 2 === 0 ? "bg-rose" : "bg-sage",
            )}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
