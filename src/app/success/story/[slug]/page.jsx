import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/success/SuccessStoryPatientOutreachThatPeopleActuallyRespondTo";

// SSG + ISR: pages from generateStaticParams are built at `next build`;
// anything else is rendered on first request. All are re-validated every 10 minutes.
export const revalidate = 600;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: apiData } = await fetchApi("getCaseStudyStoryBySlug", slug);
  const pageData = apiData?.data;
  return buildMetadata(
    pageData?.seo?.metaTitle || "Patient outreach that people actually respond to | Client Success | JJC Systems",
    pageData?.seo?.metaDescription || "Communication delays and fragmented patient data were limiting access to care. Outreach was generic, arrived late, and the organization could not tell which channels were working.",
    {
      keywords: pageData?.seo?.keywords,
      canonicalUrl: pageData?.seo?.canonicalUrl,
      ogImage: pageData?.seo?.ogImage,
    },
    { path: `/success/story/${slug}` }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const storyRes = await fetchApi("getCaseStudyStoryBySlug", slug);
  if (storyRes.status === 404) notFound();
  assertUpstream(storyRes);

  // Related stories are keyed by the story's _id (same arg the view passes to its hook)
  const storyId = storyRes.data?.data?._id;
  const relatedRes = storyId ? await fetchApi("getRelatedStoryById", storyId) : { data: null };
  if (storyId) assertUpstream(relatedRes, { allow404: true });

  return (
    <>
      <PreloadApi
        entries={[
          { endpointName: "getCaseStudyStoryBySlug", arg: slug, value: storyRes.data },
          { endpointName: "getRelatedStoryById", arg: storyId, value: relatedRes.data },
        ]}
      />
      <View />
    </>
  );
}
