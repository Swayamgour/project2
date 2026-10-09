import { buildMetadata } from "@/lib/seo";
import View from "@/views/why-us/Faq";

export const metadata = buildMetadata(
    "FAQ | JJC Systems",
    "The questions you would ask on a call, answered here. If a question you care about is not here, submit it from the contact form.",
    {},
    { path: "/why-us/faq" }
  );

export default function Page() {
  return <View />;
}
