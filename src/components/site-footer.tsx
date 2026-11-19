import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { practice, services, siteLinks } from "@/lib/site";

export function SiteFooter() {
  const core = services.filter((service) => service.group === "core");
  const specialty = services.filter((service) => service.group === "specialty");

  return (
    <footer className="relative overflow-hidden bg-forest text-cream/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 size-[28rem] rounded-full bg-sage/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-rose/15 blur-3xl"
      />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Image
              src="/assets/images/smile-quest-logo-footer.svg"
              alt="SmileQuest Dental"
              width={689}
              height={300}
              loading="eager"
              unoptimized
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Comprehensive dentistry in Devils Lake, ND. Three dentists, a
              large supporting team, and one standard of care: uncompromising
              excellence.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={practice.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition hover:border-sage/50 hover:bg-white/5 hover:text-white"
                aria-label="SmileQuest Dental on Facebook"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
              <a
                href={practice.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-cream/70 transition hover:border-sage/50 hover:text-white"
              >
                <Sparkles className="size-3.5 text-sage" aria-hidden="true" />
                Google reviews
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {siteLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-cream/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
              Core care
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {core.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-cream/65 transition hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-7 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
              Specialty
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {specialty.slice(0, 4).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-cream/65 transition hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-sage">
              Visit us
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={practice.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-cream/70 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                  <span>
                    206 5th Avenue SE
                    <br />
                    Devils Lake, ND 58301
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={practice.phoneHref}
                  className="flex items-center gap-3 font-semibold text-white transition hover:text-sage"
                >
                  <Phone className="size-4 text-rose" aria-hidden="true" />
                  {practice.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <Clock className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                <span>
                  {practice.hours}
                  <br />
                  Saturday and Sunday closed
                </span>
              </li>
            </ul>
            <Link
              href="/request-appointment"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-xs font-bold text-forest transition hover:bg-white"
            >
              Request appointment
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-8 text-xs sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {siteLinks.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/65 transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-cream/65 lg:text-right">
            © {new Date().getFullYear()} SmileQuest Dental. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.68rem] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Site designed by{" "}
            <a
              href="https://jmsn.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-2 transition hover:text-cream/70"
            >
              Jameson Management &amp; Marketing
            </a>
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-sage/70" aria-hidden="true" />
            Care that covers all your oral health needs.
          </p>
        </div>
      </div>
    </footer>
  );
}
