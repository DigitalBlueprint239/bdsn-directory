import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise",
  description: "Advertising and sponsor opportunities with BDSN Directory.",
  alternates: { canonical: "/advertise" },
};

export default function AdvertisePage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-extrabold text-brand-navy">Advertise with BDSN</h1>
        <p className="mt-4 text-gray-600">
          Sponsor opportunities are available for programs and brands supporting youth sports.
        </p>
        <a href="#waitlist" className="btn-primary mt-6 inline-flex">
          Request Sponsorship Info
        </a>
      </div>
    </section>
  );
}
