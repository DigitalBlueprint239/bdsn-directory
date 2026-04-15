import { Category } from "@/types/listing";
import {
  Dumbbell,
  Users,
  Flag,
  Calendar,
  Trophy,
  DollarSign,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Flag,
  Calendar,
  Trophy,
  DollarSign,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Trophy;

  return (
    <a
      href={`/category/${category.slug}`}
      className="group flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-brand-gold/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy transition group-hover:bg-brand-gold group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-bold text-brand-navy">
        {category.name}
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-gray-500">
        {category.description}
      </p>

      <span className="mt-3 text-xs font-semibold text-brand-accent">
        {category.count} listings &rarr;
      </span>
    </a>
  );
}
