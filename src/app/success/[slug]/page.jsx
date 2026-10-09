import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/success/SuccessIndustryHealthcare";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getCaseStudyBySlug", slug);
  const pageData = apiData?.data;
  return buildMetadata(
    pageData?.seo?.metaTitle || "Healthcare Success Stories | JJC Systems",
    pageData?.seo?.metaDescription || "Documented Microsoft platform outcomes in Healthcare, with the challenge, the approach and the measured result.",
    {
      keywords: pageData?.seo?.keywords,
      canonicalUrl: pageData?.seo?.canonicalUrl,
      ogImage: pageData?.seo?.ogImage,
    },
    { path: `/success/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getCaseStudyBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getCaseStudyBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
