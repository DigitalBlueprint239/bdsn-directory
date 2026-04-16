import { Search } from "lucide-react";

interface DirectoryHeroProps {
  title: string;
  subtitle: string;
}

export default function DirectoryHero({ title, subtitle }: DirectoryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-blue">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-accent blur-3xl" />
      </div>
      <div className="container-main relative py-14 text-center sm:py-18 lg:py-20">
        <h1 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-300">{subtitle}</p>
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
