import { buildMetadata } from "@/lib/seo";
import View from "@/views/industries/Industries";

export const metadata = buildMetadata(
    "Industries | JJC Systems",
    "Industry-focused Microsoft consulting. Dynamics 365 and Microsoft 365 solutions built around how healthcare, legal, financial services, public sector, education, manufacturing, distribution, construction, professional services, growing businesses and nonprofits actually run.",
    {},
    { path: "/industries" }
  );

export default function Page() {
  return <View />;
}
