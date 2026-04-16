import Link from "next/link";

const footerLinks = {
  directory: [
    { label: "Trainers & Coaches", href: "/directory/trainers" },
    { label: "7v7 Teams", href: "/directory/7v7-teams" },
    { label: "Flag Football", href: "/directory/flag-football" },
    { label: "Recruiting Events", href: "/directory/recruiting-events" },
    { label: "Showcases", href: "/directory/showcases" },
    { label: "NIL Resources", href: "/directory/nil-resources" },
  ],
  regions: [
    { label: "Georgia", href: "/directory/georgia" },
    { label: "Atlanta", href: "/directory/georgia/atlanta" },
  ],
  company: [
    { label: "About BDSN", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Advertise", href: "/advertise" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-brand-navy text-gray-300">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-extrabold text-white">
              BDSN<span className="text-brand-accent">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              The premier directory for youth sports programs, trainers, and athletic development resources.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Directory</h4>
            <ul className="space-y-2">
              {footerLinks.directory.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Regions</h4>
            <ul className="space-y-2">
              {footerLinks.regions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Big Dreams Sports Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
