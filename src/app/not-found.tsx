import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practice, services } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-rose/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[26rem] rounded-full bg-sage/25 blur-3xl"
      />
      <div className="container-x relative max-w-3xl text-center">
        <p className="eyebrow justify-center text-rose">Page not found</p>
        <h1 className="mt-5 font-display text-[3rem] leading-[0.95] tracking-[-0.05em] text-forest text-balance sm:text-6xl">
          This page has moved on.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-forest/80">
          The page you’re looking for isn’t here, but your SmileQuest team is.
          Explore our services or contact us and we’ll point you in the right
          direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/request-appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Request appointment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">
              Explore services
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {practice.phone}
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-2 text-left sm:grid-cols-2">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between rounded-xl border border-forest/10 bg-white/50 px-4 py-3 text-sm font-semibold text-forest/80 transition hover:border-rose/25 hover:bg-white/80 hover:text-forest"
            >
              {service.name}
              <ArrowUpRight className="size-3.5 text-forest/70" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rose"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
