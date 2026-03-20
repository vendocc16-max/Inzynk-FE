import Link from "next/link";

interface NavbarProps {
  activeLink?: "Platform" | "Solutions" | "Resources" | "Company";
}

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/customer-success" },
  { label: "Resources", href: "#" },
  { label: "Company", href: "/about" },
] as const;

export default function Navbar({ activeLink }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(23,28,33,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-on-surface font-headline"
        >
          Inzynk
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                activeLink === link.label
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-all duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-on-surface-variant font-headline font-semibold hover:opacity-80 transition-all">
            Login
          </button>
          <button className="bg-gradient-gold text-white px-6 py-2.5 rounded-full font-headline font-semibold hover:opacity-90 transition-all active:scale-95 duration-200">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
