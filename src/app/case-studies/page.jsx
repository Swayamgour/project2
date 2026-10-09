import { buildMetadata } from "@/lib/seo";
import View from "@/views/success/Success";

export const metadata = buildMetadata(
    "Client Success | JJC Systems",
    "Documented outcomes from Microsoft platform deployments, organized by industry and by capability.",
    {},
    { path: "/case-studies" }
  );

export default function Page() {
  return <View />;
}
