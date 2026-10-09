import { buildMetadata } from "@/lib/seo";
import View from "@/views/resources/Events";

export const metadata = buildMetadata(
    "Events | Resources | JJC Systems",
    "Upcoming webinars and on-demand sessions from JJC Systems.",
    {},
    { path: "/resources/events" }
  );

export default function Page() {
  return <View />;
}
