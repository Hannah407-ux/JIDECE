import {
  Mail,
  Phone,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
  Landmark,
  Users,
  Headphones,
} from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  const departments = [
    {
      icon: GraduationCap,
      title: "Admissions",
      email: "admissions@jideceacademy.com",
    },
    {
      icon: Briefcase,
      title: "Academic Affairs",
      email: "academics@jideceacademy.com",
    },
    { icon: Landmark, title: "Finance", email: "finance@jideceacademy.com" },
    { icon: Users, title: "Administration", email: "admin@jideceacademy.com" },
    { icon: Headphones, title: "Support", email: "support@jideceacademy.com" },
  ];

  return (
    <main className="bg-slate-50 min-h-screen text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="bg-blue-950 text-white py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>

        <p className="mt-4 text-slate-200 max-w-2xl mx-auto text-sm md:text-base">
          We’re here to help. Send us a message and we’ll respond as soon as
          possible.
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-4">
            <InfoRow icon={<MapPin />} title="Address" text="Ogbomoso, Nigeria" />
            <InfoRow
              icon={<Mail />}
              title="Email"
              text="jideceacademy@gmail.com"
            />
            <InfoRow icon={<Phone />} title="Phone" text="+234 8084654907" />
            <InfoRow
              icon={<Clock />}
              title="Hours"
              text="Mon - Fri, 8AM - 5PM"
            />

            <div className="mt-6 bg-white p-4 rounded-xl border text-sm text-gray-600">
              You can also contact any department directly below.
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full border rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

/* INFO ROW */
function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border">
      <div className="text-blue-900 mt-1">{icon}</div>

      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}
