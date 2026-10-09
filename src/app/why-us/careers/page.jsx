import { buildMetadata } from "@/lib/seo";
import View from "@/views/company/CompanyCareers";

export const metadata = buildMetadata(
    "Careers | JJC Systems",
    "Build a career at JJC Systems. Funded certification, scheduled learning, work across eleven industries and three regions.",
    {},
    { path: "/why-us/careers" }
  );

export default function Page() {
  return <View />;
}
