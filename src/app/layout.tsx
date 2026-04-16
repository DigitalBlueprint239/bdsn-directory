import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bdsn.directory";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BDSN Directory | Youth Sports Programs & Resources",
    template: "%s | BDSN Directory",
  },
  description:
    "Discover youth sports trainers, 7v7 teams, flag football programs, recruiting events, showcases, and NIL resources.",
  keywords: [
    "youth sports directory",
    "7v7 teams",
    "sports trainers",
    "recruiting events",
    "NIL resources",
    "Atlanta youth sports",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BDSN Directory | Youth Sports Programs & Resources",
    description:
      "Find trusted youth sports programs and resources by category and location.",
    siteName: "BDSN Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDSN Directory | Youth Sports Programs & Resources",
    description:
      "Find trusted youth sports programs and resources by category and location.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-navy antialiased">
        <MicrosoftClarity />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
