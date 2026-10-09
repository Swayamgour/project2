import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import { TOPICS } from "@/config/topics";
import View from "@/views/resources/Topic";

export const revalidate = 600;

export function generateStaticParams() {
  return Object.keys(TOPICS).map((topic) => ({ topic }));
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  const meta = TOPICS[topic] || { label: topic, icon: "#i-docs" };
  return buildMetadata(
    `${meta.label} | Resources | JJC Systems`,
    `Articles and resources on ${meta.label} from JJC Systems.`,
    {},
    { path: `/resources/topics/${topic}` }
  );
}

export default async function Page() {
  const blogsRes = await fetchApi("getPublishedBlogs");
  assertUpstream(blogsRes);

  return (
    <>
      <PreloadApi entries={[{ endpointName: "getPublishedBlogs", arg: undefined, value: blogsRes.data }]} />
      <View />
    </>
  );
}
