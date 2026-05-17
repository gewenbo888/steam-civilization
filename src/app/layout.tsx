import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const TITLE_EN = "Steam Civilization · The World Never Escaped Steam";
const TITLE_ZH = "蒸汽文明 · 世界从未真正离开蒸汽";
const DESC =
  "A cinematic bilingual atlas of the hidden continuity between the First Industrial Revolution and modern civilization. Coal became uranium, factories became data centers — but the thermodynamic core never changed: heat → pressure → rotation → electricity → civilization.";

export const metadata: Metadata = {
  metadataBase: new URL("https://steam-civilization.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "steam civilization",
    "industrial revolution",
    "thermodynamics",
    "heat engine",
    "steam turbine",
    "power generation",
    "nuclear power",
    "coal power",
    "geothermal",
    "solar thermal",
    "data center energy",
    "AI infrastructure",
    "hyperscale",
    "energy systems",
    "energy gradient",
    "entropy",
    "civilization scale",
    "Watt engine",
    "industrial philosophy",
    "蒸汽文明",
    "工业革命",
    "热力学",
    "汽轮机",
    "数据中心",
    "能源系统",
    "热机",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: TITLE_EN,
    description:
      "Modernity never escaped steam. It miniaturized it, electrified it, computerized it — but heat still becomes motion, motion still becomes civilization. A thermodynamic atlas.",
    url: "https://steam-civilization.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description:
      "The cloud is made of steel, copper, water, and heat. Modern civilization is a planetary heat engine.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#08070a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800;900&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://steam-civilization.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void text-steam-100 antialiased">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
