import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { FlaskConical, Palette, Globe } from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="bg-[#F5F7FC] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center py-20 md:py-28 px-4">
        <h1 className="text-3xl md:text-6xl font-bold text-[#0B2345] font-serif">
          Our Academic Excellence
        </h1>

        <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-600 leading-7 md:leading-10 max-w-4xl mx-auto">
          At Jidece International Academy, we foster a culture of intellectual
          curiosity and rigorous scholarship. Our holistic curriculum blends
          traditional academic excellence with innovative, future-ready
          learning.
        </p>
      </section>

      {/* PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#0B2345] font-serif mb-12 md:mb-20">
          Academic Pathways
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* NURSERY */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[220px]">
              <Image
                src="https://media.gettyimages.com/id/2254939960/photo/teacher-raising-hand-while-playing-leisure-games.jpg?s=612x612&w=0&k=20&c=wBFIfNqArd6pfwf4YyF63VjxU3KoBpu2cgYwiZr9uLw="
                alt="Nursery School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-5" />

              <h3 className="text-2xl md:text-4xl font-bold text-[#0B2345] font-serif mb-4">
                Nursery School
              </h3>

              <p className="text-gray-600 leading-7">
                Montessori-based early learning encouraging creativity and
                foundational skills.
              </p>

              <h4 className="mt-6 mb-3 text-xs font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              {/* TAGS FIXED */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Phonics & Literacy", "Numeracy", "Creative Play"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-100 rounded-full text-xs md:text-sm text-gray-700"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <button className="w-full border cursor-pointer border-[#0B2345] rounded-md py-3 font-medium text-[#0B2345] hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* PRIMARY */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                alt="Primary School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-5" />

              <h3 className="text-2xl md:text-4xl font-bold text-[#0B2345] font-serif mb-4">
                Primary School
              </h3>

              <p className="text-gray-600 leading-7">
                Inquiry-based learning building strong academic foundations.
              </p>

              <h4 className="mt-6 mb-3 text-xs font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Mathematics", "Sciences", "Languages"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-100 rounded-full text-xs md:text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="w-full border cursor-pointer border-[#0B2345] rounded-md py-3 font-medium text-[#0B2345] hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* SECONDARY */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[220px]">
              <Image
                src="https://media.gettyimages.com/id/2148729202/photo/happy-friends-talking-while-walking-with-arms-in-arms.jpg?s=612x612&w=0&k=20&c=HLxQapZLpu8TAUjPSlWPXBtQQl0K1pmXJ9RmaMJwr4Q="
                alt="Secondary School"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="w-14 h-1 bg-yellow-600 mb-5" />

              <h3 className="text-2xl md:text-4xl font-bold text-[#0B2345] font-serif mb-4">
                Secondary School
              </h3>

              <p className="text-gray-600 leading-7">
                Advanced curriculum preparing students for global universities.
              </p>

              <h4 className="mt-6 mb-3 text-xs font-bold tracking-wider text-gray-700 uppercase">
                Key Focus Areas
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Advanced STEM", "Humanities", "Economics"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-100 rounded-full text-xs md:text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="w-full border cursor-pointer border-[#0B2345] rounded-md py-3 font-medium text-[#0B2345] hover:bg-[#0B2345] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND CLASSROOM */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#0B2345] font-serif mb-14 md:mb-20">
          Beyond the Classroom
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FlaskConical,
              title: "STEM Labs",
              text: "Hands-on robotics, coding, and science labs.",
            },
            {
              icon: Palette,
              title: "Creative Arts",
              text: "Music, visual arts, and performance training.",
            },
            {
              icon: Globe,
              title: "Global Citizenship",
              text: "Leadership, UN model, and community impact.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-3xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-[#0B2345]" />
              </div>

              <h3 className="text-xl md:text-3xl font-bold font-serif text-[#0B2345] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
