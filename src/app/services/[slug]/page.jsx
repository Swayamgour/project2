import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/services/ServicesItStrategyConsulting";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getCategory");
  const root = (data?.data || []).find((c) => c.slug === "services");
  return (root?.subcategories || [])
    .flatMap((c) => c.items || [])
    .filter((i) => i.slug)
    .map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getServiceBySlug", slug);
  const pageData = apiData?.data;
  return buildMetadata(
    pageData?.seo?.metaTitle ||
        (pageData?.title ? `${pageData.title} | JJC Systems` : "JJC Systems"),
    pageData?.seo?.metaDescription || pageData?.shortDescription || "",
    {
            keywords: pageData?.seo?.keywords,
            canonicalUrl: pageData?.seo?.canonicalUrl,
            ogImage: pageData?.seo?.ogImage,
        },
    { path: `/services/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getServiceBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getServiceBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
