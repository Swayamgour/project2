import { buildMetadata } from "@/lib/seo";
import View from "@/views/why-us/OurApproach";

export const metadata = buildMetadata(
    "Our Approach | JJC Systems",
    "How we work: listen first, prove the solution before you buy it, agree fixed pricing, then implement, configure, secure, train and support.",
    {},
    { path: "/why-us/our-approach" }
  );

export default function Page() {
  return <View />;
}
