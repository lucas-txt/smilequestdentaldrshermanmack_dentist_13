import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page-view";
import { legalBySlug } from "@/lib/legal";

const document = legalBySlug("terms-of-use");

export const metadata: Metadata = {
  title: "Terms of Use – SmileQuest Dental",
  description:
    "The terms that govern your use of the SmileQuest Dental website.",
};

export default function TermsOfUsePage() {
  if (!document) notFound();
  return <LegalPageView document={document} />;
}
