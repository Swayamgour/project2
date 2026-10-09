import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/Guides";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Guides | JJC Systems",
    "Each guide opens with what the change means for the business and what it will involve technically, then works through prerequisites, configuration, verification and the pitfalls that catch most first attempts.",
    {},
    { path: "/resources/guides" }
  );

export default async function Page() {
  const [getGuidesRes] = await Promise.all([
    fetchApi("getGuides"),
  ]);
  assertUpstream(getGuidesRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getGuides", arg: undefined, value: getGuidesRes.data },
        ]}
      />
      <View />
    </>
  );
}
