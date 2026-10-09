import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/company/CompanyPartners";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Partners | JJC Systems",
    "Our vendor and technology partnerships: Microsoft, Dell, Lenovo, OpenText, ConnectWise, Cisco, Check Point, Fortinet, HPE, SentinelOne, Proofpoint and more.",
    {},
    { path: "/why-us/partners" }
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
