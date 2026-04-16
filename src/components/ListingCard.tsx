import Link from "next/link";
import { Listing } from "@/types/listing";
import { MapPin, CheckCircle, Star } from "lucide-react";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/directory/${listing.category}/${listing.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-brand-gold/40 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-brand-navy/10 to-brand-blue/10">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-brand-navy/20">
          BDSN
        </div>
        {listing.sponsorTier !== "none" && (
          <span className="absolute right-3 top-3 rounded-full bg-brand-gold px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
            {listing.sponsorTier}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-brand-navy transition-colors group-hover:text-brand-accent">
            {listing.name}
          </h3>
          {listing.isVerified && <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />}
        </div>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          <span>
            {listing.city}, {listing.state}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">{listing.shortDescription}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {listing.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-light px-2.5 py-0.5 text-[10px] font-medium text-brand-navy"
            >
              {tag}
            </span>
          ))}
        </div>

        {listing.isFeatured && (
          <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-accent">
            <Star className="h-3 w-3" />
            Featured
          </div>
        )}
      </div>
    </Link>
  );
}
