import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-brand-accent blur-3xl" />
      </div>

      <div className="container-main relative section-padding text-center">
        <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1.5 text-sm font-semibold text-brand-gold">
          Launching in Georgia — Expanding Nationwide
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find the Best Youth Sports Programs Near You
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
          Trainers, 7v7 teams, showcases, recruiting events, and NIL resources
          — all in one trusted directory.
        </p>

        <div className="mx-auto mt-8 flex max-w-lg items-center overflow-hidden rounded-full bg-white shadow-lg">
          <Search className="ml-4 h-5 w-5 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search programs, events, or cities..."
            className="flex-1 border-0 bg-transparent px-3 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none"
            readOnly
          />
          <button className="mr-1 rounded-full bg-brand-accent px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-accent/90">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
