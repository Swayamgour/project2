import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/blog/BlogDetails";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  const { data } = await fetchApi("getPublishedBlogs");
  return (data?.data || []).filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getBlogBySlug", slug);
  const blogData = apiData?.data;
  return buildMetadata(
    blogData?.seo?.metaTitle || (blogData?.title ? `${blogData.title} | JJC Systems Blog` : "JJC Systems Blog"),
    blogData?.seo?.metaDescription || blogData?.description || "",
    {
      keywords: blogData?.seo?.keywords,
      canonicalUrl: blogData?.seo?.canonicalUrl,
      ogImage: blogData?.seo?.ogImage || blogData?.featureImage,
    },
    { path: `/blog/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, status } = await fetchApi("getBlogBySlug", slug);
  if (status === 404) notFound();
  assertUpstream({ data, status });

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getBlogBySlug", arg: slug, value: data }]} />
      <View />
    </>
  );
}
