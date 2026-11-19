import Link from "next/link";
import { ArrowUpRight, CalendarDays, Phone, ShieldCheck } from "lucide-react";
import type { LegalDocument } from "@/lib/legal";
import { practice } from "@/lib/site";

export function LegalShell({ document }: { document: LegalDocument }) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-forest/10 bg-white/55 p-5">
            <p className="eyebrow text-rose">On this page</p>
            <nav aria-label="Document sections" className="mt-4">
              <ol className="space-y-1.5">
                {document.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-2.5 rounded-lg px-1.5 py-1.5 text-[0.78rem] leading-snug text-forest/70 transition hover:bg-forest/[0.04] hover:text-forest"
                    >
                      <span className="mt-px text-[0.6rem] font-bold tabular-nums text-rose">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6 border-t border-forest/10 pt-5">
              <div className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-forest/70">
                <CalendarDays className="size-3.5 text-rose" aria-hidden="true" />
                {document.lastUpdated
                  ? `Updated ${document.lastUpdated}`
                  : document.effectiveDate
                    ? `Effective ${document.effectiveDate}`
                    : "Patient information"}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-forest/70">
                Questions about this document? Our team is glad to help.
              </p>
              <a
                href={practice.phoneHref}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:text-rose"
              >
                <Phone className="size-3.5 text-rose" aria-hidden="true" />
                {practice.phone}
              </a>
              <Link
                href="/contact"
                className="mt-1.5 flex items-center gap-1.5 text-[0.68rem] font-semibold text-rose transition hover:text-rose-deep"
              >
                Contact SmileQuest
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-sage/40 bg-sage/15 p-4 text-xs leading-relaxed text-forest/70">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-forest/70" aria-hidden="true" />
            <p>
              This page is part of SmileQuest Dental&apos;s commitment to clear,
              transparent communication with our patients.
            </p>
          </div>
        </aside>

        <article className="legal-prose min-w-0 max-w-3xl">
          {document.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => {
                if (block.type === "h3") {
                  return <h3 key={`${section.id}-h3-${index}`}>{block.text}</h3>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={`${section.id}-list-${index}`}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={`${section.id}-p-${index}`}>{block.text}</p>;
              })}
            </section>
          ))}

          <div className="mt-14 rounded-2xl border border-forest/10 bg-white/55 p-6">
            <h2 className="!mt-0 !text-xl">Contact our practice</h2>
            <p className="!mb-0 text-sm">
              SmileQuest Dental · {practice.addressAlt}, {practice.city},{" "}
              {practice.state} {practice.zip} · {practice.phone}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
