import Footer from "./components/footer";
import Navbar from "./components/navbar";
import NewsGallerySection from "@/app/components/newsgallerysection";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] sm:h-screen">
        <img
          src="/hero.jpeg"
          alt="Jidece International Academy"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Welcome to Jidece <br />
            International Academy
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl">
            Nurturing Future Leaders Through Excellence In Education.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
              About The Academy
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl">
              Jidece International Academy is committed to nurturing future
              leaders through quality education, character development, and
              academic excellence.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Our Academy Overview
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* CARD 1 */}
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-xl text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoz80bM7cnSUtd4RKa_7asnodnRt_bbNYn5A&s"
                  alt=""
                  className="h-10 w-10"
                />
                <h1 className="text-black mt-3 font-semibold">
                  Total Students
                </h1>
                <p className="text-gray-700 text-sm">
                  Lots of students and pupils
                </p>
              </div>

              {/* CARD 2 */}
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-xl text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/046/010/545/large_2x/user-icon-simple-design-free-vector.jpg"
                  alt=""
                  className="h-10 w-10"
                />
                <h1 className="text-black mt-3 font-semibold">
                  Academics Overview
                </h1>
                <p className="text-gray-700 text-sm">
                  Science, Arts and Commercial students
                </p>
              </div>

              {/* CARD 3 */}
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-xl text-center">
                <img
                  src="https://img.icons8.com/?size=100&id=13737&format=png"
                  alt=""
                  className="h-10 w-10"
                />
                <h1 className="text-black mt-3 font-semibold">
                  Pending Connection
                </h1>
                <p className="text-gray-700 text-sm">Admission in progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsGallerySection />

      <Footer />
    </div>
  );
}
