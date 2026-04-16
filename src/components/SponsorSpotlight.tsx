import Link from "next/link";

export default function SponsorSpotlight() {
  return (
    <section className="rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-navy to-brand-blue p-8 text-center">
      <span className="inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
        Sponsor Spotlight
      </span>
      <h3 className="mt-4 text-xl font-extrabold text-white">Want your program featured here?</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-300">
        BDSN Directory partners with programs, brands, and organizations that invest in youth sports. Get
        premium placement and reach thousands of families.
      </p>
      <Link
        href="/advertise"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold text-brand-navy transition hover:bg-brand-gold/90"
      >
        Become a Sponsor
      </Link>
    </section>
  );
}
