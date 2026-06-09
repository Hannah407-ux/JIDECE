import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import {
  BookOpen,
  Flag,
  Lightbulb,
  GraduationCap,
  Building2,
  Monitor,
  Globe,
  Users,
  Trophy,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f7fb]">
      <Navbar />
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-[#0a1f44] mb-6">
          About Jidece Academy
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Fostering intellectual curiosity, building character, and shaping
          the global leaders of tomorrow through a tradition of academic
          excellence and modern innovation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <Flag className="w-7 h-7 text-yellow-600 mb-6" />

            <h2 className="text-4xl font-bold text-[#0a1f44] mb-5">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To provide a rigorous, inclusive, and forward-thinking
              educational environment that empowers students to reach their
              full potential, cultivate critical thinking, and contribute
              meaningfully to a rapidly changing global society.
            </p>

            <BookOpen className="w-20 h-20 text-gray-100 ml-auto mt-6" />
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <Lightbulb className="w-7 h-7 text-yellow-600 mb-6" />

            <h2 className="text-4xl font-bold text-[#0a1f44] mb-5">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To be recognized internationally as a premier institution of
              learning, where tradition meets innovation, and where every
              student is inspired to pursue lifelong intellectual and personal
              growth.
            </p>

            <div className="flex justify-end mt-6">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 text-2xl">
                ›
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="bg-[#eef1f7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 items-center">

            <div className="flex justify-center">
              <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/principal.jpg"
                  alt="Principal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0a1f44]">
                Message from the Principal
              </h2>

              <p className="uppercase tracking-widest text-yellow-700 text-sm mt-2">
                Dr. Eleanor Sterling
              </p>

              <div className="bg-white mt-6 p-8 rounded-2xl shadow-sm">
                <p className="text-gray-600 italic leading-8">
                  "Welcome to Jidece International Academy. For over two
                  decades, we have been committed to not just educating minds,
                  but shaping character. Our tradition provides a strong
                  foundation, while modern innovation builds the structures of
                  the future. We invite you to join our community of scholars,
                  where every voice is heard and every potential is nurtured."
                </p>

                <p className="mt-6 font-medium">
                  Dr. Eleanor Sterling, Ph.D.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0a1f44]">
            Why Choose Jidece?
          </h2>

          <p className="text-gray-600 mt-4">
            The pillars of our institutional excellence that ensure a superior
            educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: GraduationCap,
              title: "Qualified Teachers",
              text: "Our faculty comprises industry experts and advanced degree holders dedicated to academic mentorship.",
            },
            {
              icon: Building2,
              title: "Modern Facilities",
              text: "State-of-the-art laboratories, libraries, and athletic complexes designed to foster holistic development.",
            },
            {
              icon: Monitor,
              title: "Digital Learning",
              text: "Seamless integration of technology in the classroom, preparing students for a digital-first economy.",
            },
            {
              icon: Globe,
              title: "Global Curriculum",
              text: "Internationally recognized syllabus that provides a competitive edge for university admissions worldwide.",
            },
            {
              icon: Users,
              title: "Diverse Community",
              text: "A vibrant, multicultural student body that encourages cross-cultural understanding and global citizenship.",
            },
            {
              icon: Trophy,
              title: "Proven Excellence",
              text: "A consistent track record of outstanding academic results and placement in top-tier global universities.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#0a1f44]" />
              </div>

              <h3 className="text-2xl font-semibold text-[#0a1f44] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    <Footer/>
    </main>
  );
}