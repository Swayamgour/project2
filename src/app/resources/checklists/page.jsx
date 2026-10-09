import { buildMetadata } from "@/lib/seo";
import { fetchApi, assertUpstream } from "@/lib/server-data";
import PreloadApi from "@/components/PreloadApi";
import View from "@/views/resources/Checklists";

export const revalidate = 600;

export const metadata = buildMetadata(
    "Checklists | JJC Systems",
    "Working readiness and audit checklists for Microsoft platforms — tick through them, see a live readiness score, and find out what to do about the gaps.",
    {},
    { path: "/resources/checklists" }
  );

export default async function Page() {
  const [getChecklistsRes] = await Promise.all([
    fetchApi("getChecklists", { page: 1, limit: 12 }),
  ]);
  assertUpstream(getChecklistsRes);

  return (
    <>
      <PreloadApi
        entries={[
            { endpointName: "getChecklists", arg: { page: 1, limit: 12 }, value: getChecklistsRes.data },
        ]}
      />
      <View />
    </>
  );
}
