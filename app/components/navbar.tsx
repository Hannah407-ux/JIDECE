import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Jidece International Academy
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/academics">Academics</Link>
         
          <Link href="/contact">Contact Us</Link>

          <Link
            href="/apply"
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400"
          >
            Apply Now
          </Link>

          <Link
            href="/admin/login"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
}