import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal-page-view";
import { legalBySlug } from "@/lib/legal";

const document = legalBySlug("privacy-policy");

export const metadata: Metadata = {
  title: "Privacy Policy – SmileQuest Dental",
  description:
    "How SmileQuest Dental collects, uses, discloses, and protects information collected through this website.",
};

export default function PrivacyPolicyPage() {
  if (!document) notFound();
  return <LegalPageView document={document} />;
}
