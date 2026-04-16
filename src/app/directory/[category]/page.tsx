import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DirectoryHero from "@/components/DirectoryHero";
import ListingCard from "@/components/ListingCard";
import FilterBar from "@/components/FilterBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { categories } from "@/data/categories";
import { getListingsByCategory } from "@/data/listings";

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    alternates: { canonical: `/directory/${cat.slug}` },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();

  const listings = getListingsByCategory(params.category);

  return (
    <>
      <DirectoryHero title={cat.name} subtitle={cat.description} />

      <section className="section-padding bg-white">
        <div className="container-main">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Directory", href: "/directory" },
              { label: cat.name },
            ]}
          />

          <div className="mt-8">
            <FilterBar />
          </div>

          {listings.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center">
              <p className="text-lg font-semibold text-brand-navy">No listings yet</p>
              <p className="mt-2 text-sm text-gray-500">
                Be the first to get your program listed in {cat.name}.
              </p>
              <a href="#waitlist" className="btn-primary mt-6 inline-flex">
                Get Listed
              </a>
            </div>
          )}

          <div className="mt-16 rounded-2xl bg-brand-light p-8 text-center">
            <h3 className="text-xl font-extrabold text-brand-navy">
              Know a great {cat.name.toLowerCase()} program?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
              Help us grow the directory. Submit a program and we will review it for listing.
            </p>
            <a href="#waitlist" className="btn-primary mt-6 inline-flex">
              Submit a Program
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
