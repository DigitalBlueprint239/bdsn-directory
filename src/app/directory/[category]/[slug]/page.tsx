import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { getAllListings } from "@/data/listings";

interface ListingDetailPageProps {
  params: { category: string; slug: string };
}

export function generateMetadata({ params }: ListingDetailPageProps): Metadata {
  const listing = getAllListings().find(
    (item) => item.category === params.category && item.slug === params.slug,
  );

  if (!listing) {
    return { title: "Listing Not Found | BDSN Directory" };
  }

  return {
    title: listing.seoTitle,
    description: listing.seoDescription,
  };
}

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = getAllListings().find(
    (item) => item.category === params.category && item.slug === params.slug,
  );

  if (!listing) notFound();

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Directory", href: "/directory" },
              { label: listing.category, href: `/directory/${listing.category}` },
              { label: listing.name },
            ]}
          />

          <h1 className="mt-6 text-3xl font-extrabold text-brand-navy">{listing.name}</h1>
          <p className="mt-3 max-w-2xl text-gray-600">{listing.fullDescription}</p>

          <div className="mt-8 rounded-2xl bg-brand-light p-6 text-sm text-brand-navy">
            <p>
              {listing.city}, {listing.state} · {listing.category}
            </p>
            <p className="mt-2">More listing detail pages are being expanded in upcoming phases.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
