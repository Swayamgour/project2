import { buildMetadata } from "@/lib/seo";
import View from "@/views/platforms/Platforms";

export const metadata = buildMetadata(
    "Platforms | JJC Systems",
    "Microsoft platform consulting: Microsoft 365, Copilot, Intune, Purview, the Dynamics 365 applications, Power Platform, Fabric, Azure, Azure Virtual Desktop and Defender.",
    {},
    { path: "/platforms" }
  );

export default function Page() {
  return <View />;
}
