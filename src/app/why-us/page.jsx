import { buildMetadata } from "@/lib/seo";
import View from "@/views/why-us/WhyUS";

export const metadata = buildMetadata(
    "Why Us | JJC Systems",
    "We are a technology company delivering industry-specific solutions. Small and mid-size firms rely on us as a one-stop shop for applications, network and systems, security, monitoring, adoption, and procurement.",
    {},
    { path: "/why-us" }
  );

export default function Page() {
  return <View />;
}
