import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Facebook,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { practice } from "@/lib/site";
import { cn } from "@/lib/utils";

type ContactPanelProps = {
  className?: string;
  tone?: "light" | "dark";
  showCta?: boolean;
  heading?: string;
  eyebrow?: string;
};

export function ContactPanel({
  className,
  tone = "light",
  showCta = true,
  heading = "Visit SmileQuest Dental",
  eyebrow = "Contact & location",
}: ContactPanelProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border p-6 sm:p-8",
        dark
          ? "border-white/10 bg-white/[0.05] text-cream backdrop-blur-md"
          : "border-forest/10 bg-white/65 text-forest shadow-soft",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-48 rounded-full blur-3xl",
          dark ? "bg-rose/20" : "bg-sage/25",
        )}
      />
      <div className="relative">
        <p className={cn("eyebrow", dark ? "text-sage" : "text-rose")}>
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-4 font-display text-2xl tracking-tight sm:text-3xl",
            dark ? "text-cream" : "text-forest",
          )}
        >
          {heading}
        </h2>

        <div className="mt-6 grid gap-5 text-sm">
          <a
            href={practice.mapUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group flex items-start gap-3.5 transition",
              dark ? "text-cream/70 hover:text-white" : "text-forest/70 hover:text-forest",
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full",
                dark ? "bg-white/10 text-sage" : "bg-sand/60 text-rose",
              )}
            >
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold">
                {practice.addressAlt}
              </span>
              <span className={dark ? "text-cream/65" : "text-forest/70"}>
                {practice.city}, {practice.state} {practice.zip}
              </span>
              <span
                className={cn(
                  "mt-1 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.13em]",
                  dark ? "text-sage" : "text-rose",
                )}
              >
                Get directions
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </span>
            </span>
          </a>

          <a
            href={practice.phoneHref}
            className={cn(
              "flex items-start gap-3.5 transition",
              dark ? "text-cream/70 hover:text-white" : "text-forest/70 hover:text-forest",
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full",
                dark ? "bg-white/10 text-sage" : "bg-sand/60 text-rose",
              )}
            >
              <Phone className="size-4" aria-hidden="true" />
            </span>
            <span>
              <span className={cn("block text-[0.65rem] font-bold uppercase tracking-[0.13em]", dark ? "text-cream/65" : "text-forest/70")}>
                Call our team
              </span>
              <span className="block font-display text-xl tracking-tight">
                {practice.phone}
              </span>
            </span>
          </a>

          <div
            className={cn(
              "flex items-start gap-3.5",
              dark ? "text-cream/70" : "text-forest/70",
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full",
                dark ? "bg-white/10 text-sage" : "bg-sand/60 text-rose",
              )}
            >
              <Clock className="size-4" aria-hidden="true" />
            </span>
            <span>
              <span className={cn("block text-[0.65rem] font-bold uppercase tracking-[0.13em]", dark ? "text-cream/65" : "text-forest/70")}>
                Office hours
              </span>
              <span className="block">{practice.hours}</span>
              <span className={cn("text-xs", dark ? "text-cream/65" : "text-forest/70")}>
                Saturday and Sunday closed
              </span>
            </span>
          </div>
        </div>

        {showCta ? (
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Button asChild variant={dark ? "cream" : "dark"} size="sm">
              <Link href="/request-appointment">
                <CalendarDays className="size-4" aria-hidden="true" />
                Request appointment
              </Link>
            </Button>
            <Button asChild variant={dark ? "light" : "outline"} size="sm">
              <a
                href={practice.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="size-4" aria-hidden="true" />
                Facebook
              </a>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
