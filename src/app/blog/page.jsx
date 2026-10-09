import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/blog/Blog";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Blog | JJC Systems",
    "Not product announcements. These are the arguments we find ourselves making in client meetings \u2014 why a project stalls, what a platform genuinely changes, and where the expensive mistakes hide.",
    {},
    { path: "/blog" }
  );

export default async function Page() {
  const [getPublishedBlogsRes] = await Promise.all([
    fetchApi("getPublishedBlogs"),
  ]);
  assertUpstream(getPublishedBlogsRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getPublishedBlogs", arg: undefined, value: getPublishedBlogsRes.data },
        ]}
      />
      <View />
    </>
  );
}
