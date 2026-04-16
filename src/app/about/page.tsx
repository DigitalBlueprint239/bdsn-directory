import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Big Dreams Sports Network Directory.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-extrabold text-brand-navy">About BDSN Directory</h1>
        <p className="mt-4 text-gray-600">
          BDSN Directory helps families and athletes discover trusted youth sports programs, events, and resources.
        </p>
      </div>
    </section>
  );
}
