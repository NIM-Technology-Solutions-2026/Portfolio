import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://nimtechsolutions.com";
const siteDescription =
  "NIM Technology Solutions builds custom software for government bodies and private companies — engineered for quality and built around service.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Software for Government & Enterprise`,
    template: `%s · ${company.shortName}`,
  },
  description: siteDescription,
  applicationName: company.name,
  keywords: [
    "custom software development",
    "government software",
    "public sector software",
    "enterprise software",
    "GIS platform",
    "government insurance scheme software",
    "web application development",
    "mobile app development",
    "software company Buldhana",
    "software company Maharashtra",
    "NIM Technology Solutions",
  ],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    title: `${company.name} — Software for Government & Enterprise`,
    description: company.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#2C5DA8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.shortName,
    url: siteUrl,
    email: company.email,
    telephone: company.phone,
    slogan: company.tagline,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 6, Tulsi Nagar, Kalwaghe Layout",
      addressLocality: "Buldhana",
      addressRegion: "Maharashtra",
      postalCode: "443001",
      addressCountry: "IN",
    },
    areaServed: "IN",
    knowsAbout: [
      "Custom Software Development",
      "Government Software",
      "Enterprise Systems",
      "Cloud & DevOps",
      "Cybersecurity & Compliance",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: company.name },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}