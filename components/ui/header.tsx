import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-display font-semibold tracking-tight text-gray-900">
          YourBrand
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-sans text-gray-600">
          <Link href="#"><a className="hover:text-black transition">Solutions</a></Link>
          <Link href="#"><a className="hover:text-black transition">Pricing</a></Link>
          <Link href="#"><a className="hover:text-black transition">About</a></Link>
          <Link href="#"><a className="hover:text-black transition">Contact</a></Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-4 py-2 text-sm font-sans bg-black text-white rounded-md hover:bg-gray-900 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}