import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page-view";
import { legalBySlug } from "@/lib/legal";

const document = legalBySlug("hipaa-notice-of-privacy-practices");

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices – SmileQuest Dental",
  description:
    "SmileQuest Dental's HIPAA Notice of Privacy Practices, including how protected health information may be used and disclosed.",
};

export default function HipaaNoticePage() {
  if (!document) notFound();
  return <LegalPageView document={document} />;
}
