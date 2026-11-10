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
  "Qodiriy Aqlliev. MBA student in Big Data & AI at Sejong University, Seoul, with a bank internship in overdue loan collection.";

export const viewport: Viewport = {
  themeColor: "#F3EEE3",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Qodiriy Aqlliev - From credit risk to AI",
    template: "%s · Qodiriy Aqlliev",
  },
  description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: "Qodiriy Aqlliev - From credit risk to AI",
    description: "MBA student in Big Data & AI at Sejong University. A bank internship in loan collection, now learning AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aqlliev",
    title: "Qodiriy Aqlliev - From credit risk to AI",
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
  sameAs: [site.github, site.x, site.telegram, site.linkedin].filter(Boolean),
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
        {children}
      </body>
    </html>
  );
}
