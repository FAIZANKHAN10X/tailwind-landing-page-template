import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <a className="text-xl font-semibold">YourLogo</a>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {['Solutions', 'About', 'Careers', 'Contact'].map((item) => (
            <Link key={item} href="#">
              <a className="text-gray-700 hover:text-gray-900">{item}</a>
            </Link>
          ))}
        </nav>
        <Link href="#">
          <a className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Get In Touch
          </a>
        </Link>
        <button className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}