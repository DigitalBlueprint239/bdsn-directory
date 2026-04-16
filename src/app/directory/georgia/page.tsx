import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Georgia Youth Sports Directory",
  description: "Browse youth sports programs in Georgia, starting with Atlanta.",
  alternates: { canonical: "/directory/georgia" },
};

export default function GeorgiaDirectoryPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="Georgia Directory"
          subtitle="Browse Georgia programs by city. Atlanta is currently live."
          centered={false}
        />
        <div className="mt-8 rounded-2xl border border-gray-200 p-6">
          <Link href="/directory/georgia/atlanta" className="text-brand-accent underline">
            Explore Atlanta listings
          </Link>
        </div>
      </div>
    </section>
  );
}
