"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock,
  Facebook,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mainNav, practice, services } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-3 rounded-lg"
      aria-label="SmileQuest Dental home"
    >
      <Image
        src={
          light
            ? "/assets/images/smile-quest-logo-footer.svg"
            : "/assets/images/smile-quest-logo-nav.svg"
        }
        alt="SmileQuest Dental"
        width={689}
        height={300}
        priority
        unoptimized
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-[1.03] sm:h-10"
      />
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ServiceMenu() {
  const pathname = usePathname();
  const core = services.filter((service) => service.group === "core");
  const specialty = services.filter((service) => service.group === "specialty");
  const active = services.some((service) => isActive(pathname, service.href));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-forest/70 transition hover:bg-forest/[0.05] hover:text-forest data-[state=open]:bg-forest/[0.06] data-[state=open]:text-forest",
            active && "text-rose",
          )}
          aria-label="Open services menu"
        >
          Services
          <ChevronDown className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[36rem] p-3">
        <div className="grid grid-cols-[1fr_1fr] gap-2">
          <div>
            <DropdownMenuLabel>Core care</DropdownMenuLabel>
            {core.map((service) => (
              <DropdownMenuItem key={service.href} asChild>
                <Link href={service.href} className="justify-between">
                  <span>{service.name}</span>
                  <ArrowUpRight className="size-3.5 text-forest/70" aria-hidden="true" />
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
          <div>
            <DropdownMenuLabel>Advanced & specialty</DropdownMenuLabel>
            {specialty.map((service) => (
              <DropdownMenuItem key={service.href} asChild>
                <Link href={service.href} className="justify-between">
                  <span>{service.name}</span>
                  <ArrowUpRight className="size-3.5 text-forest/70" aria-hidden="true" />
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/services"
            className="justify-between bg-rose/[0.06] font-semibold text-rose focus:bg-rose/10"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-forest/15 bg-white/50 text-forest transition hover:bg-white xl:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent
        showClose={false}
        className="left-0 top-0 h-dvh w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-none border-0 bg-cream p-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">Site navigation</DialogTitle>
        <DialogDescription className="sr-only">
          Browse SmileQuest Dental pages and services.
        </DialogDescription>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative flex min-h-dvh flex-col bg-cream"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-rose/10 blur-3xl"
          />
          <div className="flex items-center justify-between border-b border-forest/10 px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-forest/15 bg-white/60 text-forest"
              aria-label="Close navigation menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 px-5 py-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {mainNav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between border-b border-forest/10 py-3.5 font-display text-2xl tracking-tight text-forest transition hover:text-rose",
                      isActive(pathname, item.href) && "text-rose",
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="size-4 text-forest/70" aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="services" className="border-forest/10">
                <AccordionTrigger className="py-3.5 font-display text-2xl font-normal tracking-tight text-forest hover:text-rose">
                  All services
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <ul className="grid gap-1">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-forest/70 transition hover:bg-forest/[0.04] hover:text-rose"
                        >
                          {service.name}
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 grid gap-3 rounded-2xl border border-forest/10 bg-white/55 p-4 text-sm">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-3 font-semibold text-forest"
              >
                <Phone className="size-4 text-rose" aria-hidden="true" />
                {practice.phone}
              </a>
              <a
                href={practice.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-forest/70"
              >
                <MapPin className="mt-0.5 size-4 text-rose" aria-hidden="true" />
                <span>{practice.address}</span>
              </a>
              <p className="flex items-start gap-3 text-forest/70">
                <Clock className="mt-0.5 size-4 text-rose" aria-hidden="true" />
                <span>{practice.hours}</span>
              </p>
            </div>
          </nav>

          <div className="sticky bottom-0 border-t border-forest/10 bg-cream/90 p-4 backdrop-blur">
            <Button asChild size="lg" className="w-full">
              <Link href="/request-appointment" onClick={() => setOpen(false)}>
                <CalendarDays className="size-4" aria-hidden="true" />
                Request Appointment
              </Link>
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-forest text-cream/80 md:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href={practice.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <MapPin className="size-3 text-sage" aria-hidden="true" />
              {practice.address}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3 text-sage" aria-hidden="true" />
              {practice.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={practice.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Facebook className="size-3" aria-hidden="true" />
              Facebook
            </a>
            <a
              href={practice.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-sage"
            >
              <Phone className="size-3" aria-hidden="true" />
              {practice.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-forest/10 bg-cream/85 shadow-[0_10px_40px_-30px_rgba(31,42,36,0.5)] backdrop-blur-xl"
            : "border-transparent bg-cream/65 backdrop-blur-md",
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4 xl:h-20">
          <Logo />

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary navigation"
          >
            {mainNav.map((item) =>
              item.label === "Services" ? (
                <ServiceMenu key={item.href} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-forest/70 transition hover:bg-forest/[0.05] hover:text-forest",
                    isActive(pathname, item.href) && "text-rose",
                  )}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                  {isActive(pathname, item.href) ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-rose/60"
                    />
                  ) : null}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={practice.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-forest/12 bg-white/40 px-4 py-2.5 text-[0.8125rem] font-semibold text-forest transition hover:border-forest/25 hover:bg-white lg:inline-flex"
            >
              <Phone className="size-3.5 text-rose" aria-hidden="true" />
              {practice.phone}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex xl:h-11 xl:px-5">
              <Link href="/request-appointment">
                Request Appointment
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
