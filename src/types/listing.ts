export type ListingCategory =
    | "trainers"
  | "7v7-teams"
  | "flag-football"
  | "recruiting-events"
  | "showcases"
  | "nil-resources";

export type SponsorTier = "none" | "bronze" | "silver" | "gold" | "platinum";

export interface Listing {
    id: string;
    name: string;
    slug: string;
    category: ListingCategory;
    subcategory?: string;
    state: string;
    stateSlug: string;
    city: string;
    citySlug: string;
    address?: string;
    shortDescription: string;
    fullDescription: string;
    ageGroups: string[];
    sports: string[];
    website?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    contactEmail?: string;
    phone?: string;
    pricingInfo?: string;
    eventDates?: string[];
    coachDirectorName?: string;
    isFeatured: boolean;
    isVerified: boolean;
    sponsorTier: SponsorTier;
    heroImage: string;
    galleryImages: string[];
    tags: string[];
    seoTitle: string;
    seoDescription: string;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    name: string;
    slug: ListingCategory;
    description: string;
    icon: string;
    count: number;
    seoTitle: string;
    seoDescription: string;
}

export interface StateRegion {
    name: string;
    slug: string;
    abbreviation: string;
    cities: CityInfo[];
    listingCount: number;
}

export interface CityInfo {
    name: string;
    slug: string;
    state: string;
    stateSlug: string;
    listingCount: number;
}

export interface SponsorPlacement {
    id: string;
    name: string;
    logoUrl: string;
    websiteUrl: string;
    tier: SponsorTier;
    placement: "hero" | "sidebar" | "inline" | "footer";
    category?: ListingCategory;
    state?: string;
    city?: string;
}
