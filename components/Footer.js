import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[
          { title: 'Company', links: ['About', 'Careers', 'Contact'] },
          { title: 'Legal', links: ['Privacy Policy', 'Terms & Conditions'] },
          { title: 'Follow', links: ['LinkedIn', 'YouTube'] },
          { title: 'Contact', links: ['info@example.com'] },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="font-semibold mb-2">{col.title}</h5>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}