import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  icon?: string;
  badge?: string;
  breadcrumb?: string;
  compact?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "SmileQuest Dental",
  icon,
  badge = "SmileQuest Dental · Devils Lake, ND",
  breadcrumb,
  compact = false,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "noise relative overflow-hidden border-b border-forest/10 bg-cream",
        compact ? "py-10 sm:py-14" : "py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 size-[32rem] rounded-full bg-rose/[0.075] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[28rem] rounded-full bg-sage/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(31,42,36,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,42,36,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-forest/70">
            <li>
              <Link href="/" className="transition hover:text-rose">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3" />
            </li>
            <li className="text-forest/70">{breadcrumb ?? title}</li>
          </ol>
        </nav>

        <div
          className={cn(
            "grid items-center gap-10",
            image ? "lg:grid-cols-[1.08fr_0.92fr]" : "max-w-4xl",
          )}
        >
          <div>
            <p className="eyebrow text-rose">{eyebrow}</p>
            <h1 className="mt-5 font-display text-[2.5rem] leading-[0.98] tracking-[-0.045em] text-forest text-balance sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            {description ? (
              <div className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-forest/70 sm:text-base">
                {description}
              </div>
            ) : null}
            {children ? <div className="mt-7">{children}</div> : null}
            <Reveal delay={0.08}>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/55 px-4 py-2 text-[0.68rem] font-semibold tracking-wide text-forest/70">
                <Sparkles className="size-3.5 text-rose" aria-hidden="true" />
                {badge}
              </div>
            </Reveal>
          </div>

          {image ? (
            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[3rem] border border-forest/10 bg-white/25 backdrop-blur-sm"
              />
              <div className="mask-arch relative aspect-[4/5] overflow-hidden bg-sand shadow-lift">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent"
                />
              </div>
              {icon ? (
                <div className="glass absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-6">
                  <Image
                    src={icon}
                    alt=""
                    width={44}
                    height={56}
                    loading="eager"
                    unoptimized
                    className="h-10 w-auto"
                  />
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-forest/70">
                      Care at SmileQuest
                    </p>
                    <p className="text-xs font-semibold text-forest">
                      Uncompromising excellence
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
