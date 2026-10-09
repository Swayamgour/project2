import { buildMetadata } from "@/lib/seo";
import View from "@/views/why-us/OnboardingGuide";

export const metadata = buildMetadata(
    "Onboarding Guide | JJC Systems",
    "How onboarding works: your certified project and account managers, an independent customer success team, and six stages from consultation to continuous optimization.",
    {},
    { path: "/why-us/onboarding-guide" }
  );

export default function Page() {
  return <View />;
}
