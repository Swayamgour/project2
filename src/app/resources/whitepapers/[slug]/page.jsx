import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/WhitepapersDetail";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getWhitepapers");
  return (data?.data || []).filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getWhitepapersBySlug", slug);
  const whitepaper = apiData?.data;
  return buildMetadata(
    whitepaper?.seo?.metaTitle || (whitepaper?.title ? `${whitepaper.title} | JJC Systems Whitepapers` : "JJC Systems Whitepapers"),
    whitepaper?.seo?.metaDescription || whitepaper?.description || "",
    {
            keywords: whitepaper?.seo?.keywords,
            canonicalUrl: whitepaper?.seo?.canonicalUrl,
            ogImage: whitepaper?.seo?.ogImage,
        },
    { path: `/resources/whitepapers/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getWhitepapersBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getWhitepapersBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
