import { buildMetadata } from "@/lib/seo";
import View from "@/views/services/Services";

export const metadata = buildMetadata(
    "Services | JJC Systems",
    "The full JJC Systems service catalog \u2014 strategy, managed IT and security, Dynamics 365 business applications, data and integration, modern work and automation, and IT staffing.",
    {},
    { path: "/services" }
  );

export default function Page() {
  return <View />;
}
