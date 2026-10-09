import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/company/CompanyLeadership";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Leadership | JJC Systems",
    "The JJC Systems leadership team, and what each of them is accountable for.",
    {},
    { path: "/company/leadership" }
  );

export default async function Page() {
  const [getTeamRes] = await Promise.all([
    fetchApi("getTeam"),
  ]);
  assertUpstream(getTeamRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getTeam", arg: undefined, value: getTeamRes.data },
        ]}
      />
      <View />
    </>
  );
}
