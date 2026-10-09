import { buildMetadata } from "@/lib/seo";
import View from "@/views/ClientPortal";

export const metadata = buildMetadata(
    "Client Portal | JJC Systems",
    "Access support, onboarding resources and your account team through the JJC Systems client portal.",
    {},
    { path: "/client-portal" }
  );

export default function Page() {
  return <View />;
}
