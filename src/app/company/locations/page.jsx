import { buildMetadata } from "@/lib/seo";
import View from "@/views/company/CompanyLocations";

export const metadata = buildMetadata(
    "Locations | JJC Systems",
    "JJC Systems offices across the United States, Saudi Arabia, the United Arab Emirates and India, delivering genuine 24/7 follow-the-sun coverage.",
    {},
    { path: "/company/locations" }
  );

export default function Page() {
  return <View />;
}
