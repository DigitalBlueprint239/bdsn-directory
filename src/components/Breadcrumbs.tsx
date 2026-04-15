import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500">
            {items.map((item, i) => (
                    <span key={item.label} className="flex items-center gap-1.5">
                      {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}
                      {item.href ? (
                                  <Link href={item.href} className="transition-colors hover:text-brand-navy">
                                    {item.label}
                                  </Link>Link>
                                ) : (
                                  <span className="font-medium text-brand-navy">{item.label}</span>span>
                              )}
                    </span>span>
                  ))}
          </nav>nav>
        );
}</nav>
