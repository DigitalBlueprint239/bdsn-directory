import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Big Dreams Sports Network Directory.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-extrabold text-brand-navy">Contact</h1>
        <p className="mt-4 text-gray-600">
          For listing questions and partnerships, please email hello@bdsn-directory.com.
        </p>
      </div>
    </section>
  );
}
