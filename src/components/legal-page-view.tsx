import { LegalShell } from "@/components/legal-shell";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections";
import type { LegalDocument } from "@/lib/legal";

export function LegalPageView({ document }: { document: LegalDocument }) {
  return (
    <>
      <PageHero
        eyebrow={document.eyebrow}
        title={document.title}
        description={document.description}
        breadcrumb={document.title}
        compact
      />
      <LegalShell document={document} />
      <CtaBand
        eyebrow="Questions?"
        title="We’re happy to help."
        description="If anything in this document is unclear, contact our Devils Lake team and we’ll do our best to answer your question."
        primaryLabel="Contact SmileQuest"
        primaryHref="/contact"
      />
    </>
  );
}
