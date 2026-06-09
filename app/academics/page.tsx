import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import {
  FlaskConical,
  Palette,
  Globe,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="bg-[#F5F7FC] min-h-screen">
         <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0B2345] font-serif">
          Our Academic Excellence
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-10 max-w-4xl mx-auto">
          At Jidece International Academy, we foster a culture of
          intellectual curiosity and rigorous scholarship. Our holistic
          curriculum blends traditional academic excellence with
          innovative, future-ready learning approaches to prepare
          students for global leadership.
        </p>
      </section>

      {/* Academic Pathways */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-bold text-[#0B2345] font-serif mb-20">
          Academic Pathways
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Nursery */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[250px]">
              <Image
                src="/nursery.jpg"
                alt="Nursery School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-6"></div>

              <h3 className="text-4xl font-bold text-[#0B2345] font-serif mb-5">
                Nursery School
              </h3>

              <p className="text-gray-600 leading-8">
                Our Early Years foundation follows a blended Montessori
                approach, encouraging self-directed learning,
                exploration, and the development of fundamental
                cognitive and social skills in a nurturing environment.
              </p>

              <h4 className="mt-8 mb-4 text-sm font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Phonics & Literacy
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Numeracy
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Creative Play
                </span>
              </div>

              <button className="w-full border border-[#0B2345] rounded-md py-3 font-medium hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Primary */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[250px]">
              <Image
                src="/primary.jpg"
                alt="Primary School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-6"></div>

              <h3 className="text-4xl font-bold text-[#0B2345] font-serif mb-5">
                Primary School
              </h3>

              <p className="text-gray-600 leading-8">
                Building on early foundations, our primary curriculum
                integrates core subjects with critical thinking and
                inquiry-based learning, fostering independent thought
                and a robust academic base.
              </p>

              <h4 className="mt-8 mb-4 text-sm font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Mathematics
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Sciences
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Languages
                </span>
              </div>

              <button className="w-full border border-[#0B2345] rounded-md py-3 font-medium hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[250px]">
              <Image
                src="/secondary.jpg"
                alt="Secondary School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-6"></div>

              <h3 className="text-4xl font-bold text-[#0B2345] font-serif mb-5">
                Secondary School
              </h3>

              <p className="text-gray-600 leading-8">
                Offering a rigorous dual British-Nigerian curriculum
                designed to challenge students and prepare them for
                top-tier universities worldwide through specialized
                subjects and leadership opportunities.
              </p>

              <h4 className="mt-8 mb-4 text-sm font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Advanced STEM
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Humanities
                </span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-sm">
                  Global Economics
                </span>
              </div>

              <button className="w-full border border-[#0B2345] rounded-md py-3 font-medium hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond The Classroom */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-bold text-[#0B2345] font-serif mb-20">
          Beyond the Classroom
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border rounded-3xl p-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <FlaskConical className="w-8 h-8 text-[#0B2345]" />
            </div>

            <h3 className="text-3xl font-bold font-serif text-[#0B2345] mb-4">
              STEM Labs
            </h3>

            <p className="text-gray-600 leading-8">
              Equipped with cutting-edge technology, our laboratories
              provide hands-on experience in robotics, coding, and
              advanced scientific research methodologies.
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <Palette className="w-8 h-8 text-[#0B2345]" />
            </div>

            <h3 className="text-3xl font-bold font-serif text-[#0B2345] mb-4">
              Creative Arts
            </h3>

            <p className="text-gray-600 leading-8">
              Dedicated studios for visual arts, music, and performing
              arts encourage expressive thinking and cultural
              appreciation alongside academic rigor.
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <Globe className="w-8 h-8 text-[#0B2345]" />
            </div>

            <h3 className="text-3xl font-bold font-serif text-[#0B2345] mb-4">
              Global Citizenship
            </h3>

            <p className="text-gray-600 leading-8">
              Integrated programs focusing on international awareness,
              Model UN, and community service to develop ethically
              responsible global leaders.
            </p>
          </div>

        </div>
      </section>
         <Footer/>
    </main>
  );
}