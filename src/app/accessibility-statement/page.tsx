import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page-view";
import { legalBySlug } from "@/lib/legal";

const document = legalBySlug("accessibility-statement");

export const metadata: Metadata = {
  title: "Accessibility Statement – SmileQuest Dental",
  description:
    "SmileQuest Dental's commitment to making our website accessible to all patients and visitors.",
};

export default function AccessibilityStatementPage() {
  if (!document) notFound();
  return <LegalPageView document={document} />;
}
