import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/GuidesDetail";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getGuides");
  return (data?.data || []).filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getGuideBySlug", slug);
  const guideData = apiData?.data;
  return buildMetadata(
    guideData?.seo?.metaTitle || (guideData?.title ? `${guideData.title} | JJC Systems Guides` : "JJC Systems Guides"),
    guideData?.seo?.metaDescription || guideData?.description || "",
    {
      keywords: guideData?.seo?.keywords,
      canonicalUrl: guideData?.seo?.canonicalUrl,
      ogImage: guideData?.seo?.ogImage,
    },
    { path: `/resources/guide/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getGuideBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getGuideBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
