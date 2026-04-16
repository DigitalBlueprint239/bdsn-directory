import type { Metadata } from "next";
import Link from "next/link";
import { getAllListings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";

export const metadata: Metadata = {
  title: "Atlanta Youth Sports Directory",
  description: "Discover youth sports trainers, teams, events, and NIL resources in Atlanta.",
  alternates: { canonical: "/directory/georgia/atlanta" },
};

export default function AtlantaDirectoryPage() {
  const listings = getAllListings().filter((listing) => listing.citySlug === "atlanta");

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <h1 className="text-3xl font-extrabold text-brand-navy">Atlanta Directory</h1>
        <p className="mt-3 text-gray-600">Current featured listings in metro Atlanta.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <Link href="/directory" className="mt-8 inline-block text-brand-accent underline">
          Back to full directory
        </Link>
      </div>
    </section>
  );
}
