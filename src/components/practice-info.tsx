import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  CreditCard,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { practice } from "@/lib/site";

type PracticeInfoItem = {
  title: string;
  body: string;
  sub: string;
  href?: string;
  icon: LucideIcon;
};

const items: PracticeInfoItem[] = [
  {
    title: "Call",
    body: practice.phone,
    sub: "Speak with our team",
    href: practice.phoneHref,
    icon: Phone,
  },
  {
    title: "Visit",
    body: practice.address,
    sub: "Devils Lake, North Dakota",
    href: practice.mapUrl,
    icon: MapPin,
  },
  {
    title: "Hours",
    body: practice.hours,
    sub: "Saturday and Sunday closed",
    icon: Clock,
  },
  {
    title: "Payment",
    body: "Cash, credit card & insurance",
    sub: "Most major dental insurance plans",
    icon: CreditCard,
  },
];

export function PracticeInfo() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-rose">Practice information</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-forest sm:text-3xl">
            Everything you need for your visit.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-rose transition hover:text-rose-deep"
        >
          Contact & directions
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const content = (
            <>
              <span className="flex size-10 items-center justify-center rounded-xl bg-sand/60 text-rose">
                <item.icon className="size-4" aria-hidden="true" />
              </span>
              <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-forest/70">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-forest">
                {item.body}
              </p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-forest/70">
                {item.sub}
              </p>
            </>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-forest/10 bg-white/50 p-4 transition hover:border-rose/25 hover:bg-white/80"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.title}
              className="rounded-2xl border border-forest/10 bg-white/50 p-4"
            >
              {content}
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-forest/70">
        {practice.payment} {practice.paymentNote}
      </p>
    </div>
  );
}
