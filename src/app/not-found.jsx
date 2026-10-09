import NotFound from "@/views/NotFound";

export const metadata = {
  title: "Page not found | JJC Systems",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFound />;
}
