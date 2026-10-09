import { buildMetadata } from "@/lib/seo";
import View from "@/views/Contact";

export const metadata = buildMetadata(
    "Contact Us | JJC Systems",
    "Get in touch with JJC Systems. Tell us what you are trying to fix and we will tell you honestly whether we are the right people for it.",
    {},
    { path: "/contact" }
  );

export default function Page() {
  return <View />;
}
