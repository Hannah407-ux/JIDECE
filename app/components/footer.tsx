import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#072B5A] text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-yellow-400">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-yellow-400">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                idi-oro off ogojo road ,
                <br />
                ogbomoso,oyo state
              </p>

              <p>Phone: (+234) 7019562291</p>

              <p>Email: jidece@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Social Media</h3>

            <div className="grid grid-cols-3 gap-4 w-fit">
              <a href="#" className="text-4xl hover:text-yellow-400 transition">
                <FaFacebook />
              </a>

              <a href="#" className="text-4xl hover:text-yellow-400 transition">
                <FaInstagram />
              </a>

              <a href="#" className="text-4xl hover:text-yellow-400 transition">
                <FaLinkedinIn />
              </a>

              <a href="#" className="text-4xl hover:text-yellow-400 transition">
                <FaYoutube />
              </a>

              <a href="#" className="text-4xl hover:text-yellow-400 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Newsletter Subscription
            </h3>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full h-12 px-4 rounded-md text-black outline-none"
              />

              <button
                type="submit"
                className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 mt-10 pt-6">
          <p className="text-center text-gray-300 text-sm">
            © 2026 Jidece International Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
