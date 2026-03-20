import Link from "next/link";

const footerLinks = {
  platform: [
    { label: "Account Scoring", href: "#" },
    { label: "Intent Data", href: "#" },
    { label: "Campaign Execution", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-surface-container-low">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 px-8 max-w-screen-2xl mx-auto">
        <div className="col-span-2">
          <div className="text-xl font-black text-on-surface mb-4">Inzynk</div>
          <p className="text-sm leading-relaxed text-on-surface-variant max-w-xs mb-8">
            Precision in ABM. Empowering enterprise teams to build relationships
            through hyper-focused advertising orchestration.
          </p>
          <div className="flex space-x-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">
              share
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">
              language
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70">
              contact_support
            </span>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-on-surface">Platform</h5>
          <ul className="space-y-4">
            {footerLinks.platform.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-on-surface">Company</h5>
          <ul className="space-y-4">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-on-surface">Legal</h5>
          <ul className="space-y-4">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/10">
        <p className="text-on-surface-variant text-sm">
          © {new Date().getFullYear()} Inzynk. Precision in ABM.
        </p>
      </div>
    </footer>
  );
}
