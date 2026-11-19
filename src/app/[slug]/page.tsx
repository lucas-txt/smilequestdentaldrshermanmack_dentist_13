import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug, serviceContent } from "@/lib/services-content";

export const dynamicParams = false;

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceContent.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.name} — SmileQuest Dental — Devils Lake, ND`,
    description: service.description,
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
