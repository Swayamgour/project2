import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/industries/IndustriesHealthcare";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getCategory");
  const root = (data?.data || []).find((c) => c.slug === "industries");
  return (root?.subcategories || [])
    .flatMap((c) => c.items || [])
    .filter((i) => i.slug)
    .map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getIndustryBySlug", slug);
  const pageData = apiData?.data;
  return buildMetadata(
    pageData?.seo?.metaTitle || "Healthcare Technology Consulting | JJC Systems",
    pageData?.seo?.metaDescription || "Microsoft technology consulting for healthcare providers, payers and life sciences.",
    {
      keywords: pageData?.seo?.keywords,
      canonicalUrl: pageData?.seo?.canonicalUrl,
      ogImage: pageData?.seo?.ogImage,
    },
    { path: `/industries/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getIndustryBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getIndustryBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
