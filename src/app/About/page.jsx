import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/company/CompanyAbout";

export const revalidate = 600;

export const metadata = buildMetadata(
    "About Us | JJC Systems",
    "One partner, one point of contact, one invoice. Four decades of Microsoft consulting and managed IT across eleven industries.",
    {},
    { path: "/About" }
  );

export default async function Page() {
  const [getHomeSectionRes] = await Promise.all([
    fetchApi("getHomeSection", "clientLogos"),
  ]);
  assertUpstream(getHomeSectionRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getHomeSection", arg: "clientLogos", value: getHomeSectionRes.data },
        ]}
      />
      <View />
    </>
  );
}
