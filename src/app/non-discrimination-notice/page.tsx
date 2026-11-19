import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page-view";
import { legalBySlug } from "@/lib/legal";

const document = legalBySlug("non-discrimination-notice");

export const metadata: Metadata = {
  title: "Non-Discrimination Notice – SmileQuest Dental",
  description:
    "SmileQuest Dental's non-discrimination notice and commitment to equitable care.",
};

export default function NonDiscriminationPage() {
  if (!document) notFound();
  return <LegalPageView document={document} />;
}
