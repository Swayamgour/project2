import { buildMetadata } from "@/lib/seo";
import View from "@/views/FeaturedSuccessStory";

export const metadata = buildMetadata(
    "Featured Success Story | JJC Systems",
    "A public-sector IT provider unified nearly forty siloed systems into one citizen record and resolved 30% of cases at first level within weeks.",
    {},
    { path: "/FeaturedSuccess" }
  );

export default function Page() {
  return <View />;
}
