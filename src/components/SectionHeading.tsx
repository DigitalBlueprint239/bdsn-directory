interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
