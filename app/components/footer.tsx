import Link from "next/link";
import {
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#061F3E] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Academics", "/academics"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-yellow-400 transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-gray-300 leading-6">
              <p>
                Idi-Oro off Ogojo Road,
                <br />
                Ogbomoso, Oyo State
              </p>

              <p>📞 +234 701 956 2291</p>
              <p>✉️ jidece@gmail.com</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-6">
      <a
        href="https://facebook.com/JideceAcademyOgbomoso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>

      <a
         href="https://wa.me/2348084654907"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>

      
    </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-blue-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2026 Jidece International Academy. All rights reserved.</p>

            <p className="text-xs text-gray-500">
              Built with care for education & excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
