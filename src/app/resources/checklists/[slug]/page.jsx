import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/ChecklistsDetail";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getChecklists");
  return (data?.data || []).filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getChecklistsBySlug", slug);
  const checklist = apiData?.data;
  return buildMetadata(
    checklist?.seo?.metaTitle || (checklist?.title ? `${checklist.title} | JJC Systems Checklists` : "JJC Systems Checklists"),
    checklist?.seo?.metaDescription || checklist?.description || "",
    {
            keywords: checklist?.seo?.keywords,
            canonicalUrl: checklist?.seo?.canonicalUrl,
            ogImage: checklist?.seo?.ogImage,
        },
    { path: `/resources/checklists/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getChecklistsBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getChecklistsBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
