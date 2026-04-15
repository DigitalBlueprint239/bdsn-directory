import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import CTASection from "@/components/CTASection";
import { categories } from "@/data/categories";
import { Shield, TrendingUp, MapPin, Star } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Verified Programs",
    description: "Every listing is reviewed to ensure quality and legitimacy for young athletes.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "From training to recruiting events to NIL — we cover the full athlete journey.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Find programs in your city. Starting in Georgia and expanding nationwide.",
  },
  {
    icon: Star,
    title: "Trusted by Coaches",
    description: "Built for the community, by people who understand youth sports culture.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Category Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            title="Browse by Category"
            subtitle="Explore programs across every area of youth sports development."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BDSN */}
      <section className="section-padding bg-brand-light">
        <div className="container-main">
          <SectionHeading
            title="Why BDSN Directory?"
            subtitle="We are building the most trusted resource for youth sports families and coaches."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            title="Our Partners"
            subtitle="Trusted by leading organizations in youth sports."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"].map((name) => (
              <div
                key={name}
                className="flex h-12 w-32 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-xs font-medium text-gray-400"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">
            Interested in sponsoring? <a href="/advertise" className="font-medium text-brand-accent underline">Learn more</a>
          </p>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <CTASection />
    </>
  );
}
