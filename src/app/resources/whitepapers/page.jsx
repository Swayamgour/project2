import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/Whitepapers";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Whitepapers | JJC Systems",
    "Long-form research on Microsoft platforms and the industries that run on them — a thesis, evidence, an applicable framework, and references to Microsoft documentation.",
    {},
    { path: "/resources/whitepapers" }
  );

export default async function Page() {
  const [getWhitepapersRes] = await Promise.all([
    fetchApi("getWhitepapers"),
  ]);
  assertUpstream(getWhitepapersRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getWhitepapers", arg: undefined, value: getWhitepapersRes.data },
        ]}
      />
      <View />
    </>
  );
}
