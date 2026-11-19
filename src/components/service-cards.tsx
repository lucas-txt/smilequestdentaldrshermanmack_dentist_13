import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { ServiceSummary } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceFeatureCard({
  service,
  index = 0,
}: {
  service: ServiceSummary;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        href={service.href}
        className="card-hover group relative flex h-full min-h-[30rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-forest p-6 text-cream sm:min-h-[34rem]"
      >
        {service.image ? (
          <Image
            src={service.image}
            alt=""
            fill
            loading="eager"
            sizes="(max-width: 768px) 92vw, 33vw"
            className="object-cover opacity-90 transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        ) : null}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-transparent"
        />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-forest/25 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-cream/80 backdrop-blur-md">
          <Image
            src={service.icon}
            alt=""
            width={20}
            height={24}
            loading="eager"
            unoptimized
            className="h-5 w-auto brightness-0 invert"
          />
          Core care
        </div>
        <div className="relative">
          <h3 className="font-display text-3xl tracking-tight text-cream">
            {service.name}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            {service.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sage">
            Learn more
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceTile({
  service,
  index = 0,
  dark = false,
}: {
  service: ServiceSummary;
  index?: number;
  dark?: boolean;
}) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="h-full">
      <Link
        href={service.href}
        className={cn(
          "card-hover group flex h-full flex-col rounded-2xl border p-5 transition",
          dark
            ? "border-white/10 bg-white/[0.04] hover:border-sage/30 hover:bg-white/[0.07]"
            : "border-forest/10 bg-white/55 hover:border-rose/25 hover:bg-white/80",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-xl",
              dark ? "bg-white/[0.06]" : "bg-sand/55",
            )}
          >
            <Image
              src={service.icon}
              alt=""
              width={40}
              height={48}
              loading="eager"
              unoptimized
              className="h-9 w-auto"
            />
          </span>
          <ArrowUpRight
            className={cn(
              "size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              dark ? "text-cream/65" : "text-forest/70",
            )}
            aria-hidden="true"
          />
        </div>
        <h3
          className={cn(
            "mt-5 font-display text-xl tracking-tight",
            dark ? "text-cream" : "text-forest",
          )}
        >
          {service.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-[0.82rem] leading-relaxed",
            dark ? "text-cream/65" : "text-forest/70",
          )}
        >
          {service.description}
        </p>
      </Link>
    </Reveal>
  );
}

export function ServiceRowCard({
  service,
  index = 0,
}: {
  service: ServiceSummary;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.25)}>
      <Link
        href={service.href}
        className="group grid gap-5 rounded-2xl border border-forest/10 bg-white/45 p-5 transition duration-500 hover:border-rose/25 hover:bg-white/80 sm:grid-cols-[auto_1fr_auto] sm:items-center"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-sand/55">
          <Image
            src={service.icon}
            alt=""
            width={44}
            height={52}
            loading="eager"
            unoptimized
            className="h-10 w-auto"
          />
        </span>
        <div>
          <h3 className="font-display text-xl tracking-tight text-forest">
            {service.name}
          </h3>
          <p className="mt-1 max-w-2xl text-[0.82rem] leading-relaxed text-forest/70">
            {service.description}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-rose">
          Explore
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Reveal>
  );
}
