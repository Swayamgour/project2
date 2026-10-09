import { buildMetadata } from "@/lib/seo";
import View from "@/views/why-us/OpenTicket";

export const metadata = buildMetadata(
    "Open a Support Ticket | JJC Systems",
    "Log in, provide the necessary details, and our team will start working on your issue right away. Three routes are available \u2014 the portal, email, or the phone if something is genuinely urgent.",
    {},
    { path: "/why-us/open-a-ticket" }
  );

export default function Page() {
  return <View />;
}
