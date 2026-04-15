import type { Metadata } from "next";
import DirectoryHero from "@/components/DirectoryHero";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ListingCard from "@/components/ListingCard";
import FilterBar from "@/components/FilterBar";
import SponsorSpotlight from "@/components/SponsorSpotlight";
import CTASection from "@/components/CTASection";
import { categories } from "@/data/categories";
import { getFeaturedListings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Browse the Directory | BDSN Directory",
    description: "Explore youth sports trainers, 7v7 teams, flag football leagues, recruiting events, showcases, and NIL resources.",
    };

    export default function DirectoryPage() {
      const featured = getFeaturedListings();

        return (
            <>
                  <DirectoryHero
                          title="Explore the BDSN Directory"
                                  subtitle="Find verified youth sports programs, events, and resources across Georgia and Florida."
                                        />

                                              <section className="section-padding bg-white">
                                                      <div className="container-main">
                                                                <SectionHeading title="Browse by Category" subtitle="Jump into a category to find exactly what you need." />
                                                                          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                                                                      {categories.map((cat) => (
                                                                                                    <CategoryCard key={cat.slug} category={cat} />
                                                                                                                ))}
                                                                                                                          </div>
                                                                                                                                  </div>
                                                                                                                                        </section>
                                                                                                                                        
                                                                                                                                              <section className="section-padding bg-brand-light">
                                                                                                                                                      <div className="container-main">
                                                                                                                                                                <SectionHeading title="Featured Programs" subtitle="Hand-picked programs trusted by the BDSN community." />
                                                                                                                                                                          <div className="mt-6"><FilterBar /></div>
                                                                                                                                                                                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                                                                                                                                                                                {featured.map((listing) => (
                                                                                                                                                                                                              <ListingCard key={listing.id} listing={listing} />
                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                        <section className="section-padding bg-white">
                                                                                                                                                                                                                                                                <div className="container-main grid gap-10 lg:grid-cols-2">
                                                                                                                                                                                                                                                                          <SponsorSpotlight />
                                                                                                                                                                                                                                                                                    <div className="flex flex-col items-center justify-center text-center">
                                                                                                                                                                                                                                                                                                <h3 className="text-2xl font-extrabold text-brand-navy">Run a youth sports program?</h3>
                                                                                                                                                                                                                                                                                                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
                                                                                                                                                                                                                                                                                                                          Get your program listed on the most trusted directory for youth sports families and coaches.
                                                                                                                                                                                                                                                                                                                                      </p>
                                                                                                                                                                                                                                                                                                                                                  <a href="#waitlist" className="btn-primary mt-6">Get Listed Free</a>
                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                <CTASection />
                                                                                                                                                                                                                                                                                                                                                                                    </>
                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                      }
