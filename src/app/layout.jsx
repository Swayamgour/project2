import "./globals.css";

import Providers from "@/components/Providers";
import PreloadApi from "@/components/PreloadApi";
import AppShell from "@/components/AppShell";

import { fetchApi, assertUpstream } from "@/lib/server-data";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from "@/lib/site";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "JJC Systems provides IT consulting, managed services, cloud, cybersecurity and business technology solutions.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }) {
  const [categories, caseStudyCategories] = await Promise.all([
    fetchApi("getCategory"),
    fetchApi("getCaseStudyCategory"),
  ]);

  assertUpstream(categories);
  assertUpstream(caseStudyCategories);

  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Providers>
          <PreloadApi
            entries={[
              {
                endpointName: "getCategory",
                arg: undefined,
                value: categories.data,
              },
              {
                endpointName: "getCaseStudyCategory",
                arg: undefined,
                value: caseStudyCategories.data,
              },
            ]}
          />

          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}