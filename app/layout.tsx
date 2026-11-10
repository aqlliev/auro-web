import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

function siteUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:43123";
}

const description =
  "Qodiriy Aqlliev, junior AI engineer. MBA in Big Data & AI at Sejong University, with a background in credit risk at Ipoteka Bank.";

export const viewport: Viewport = {
  themeColor: "#F3EEE3",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Qodiriy Aqlliev - Junior AI Engineer",
    template: "%s · Qodiriy Aqlliev",
  },
  description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: "Qodiriy Aqlliev - Junior AI Engineer",
    description: "MBA, Big Data & AI at Sejong University. Credit risk at a bank, now AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aqlliev",
    title: "Qodiriy Aqlliev - Junior AI Engineer",
    description: "MBA, Big Data & AI at Sejong University.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: site.email,
  url: siteUrl(),
  homeLocation: {
    "@type": "Place",
    name: "Seoul",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Sejong University",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tashkent State University of Economics",
  },
  jobTitle: "Junior AI Engineer",
  sameAs: [site.github, site.x, site.telegram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
