"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-brand-navy">
      <div className="container-main text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-gray-300">
          Join the BDSN Directory waitlist and be the first to know when we
          launch new cities and features.
        </p>

        {submitted ? (
          <p className="mt-8 text-lg font-semibold text-brand-gold">
            Thanks for signing up! We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 px-5 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-accent px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-accent/90"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
