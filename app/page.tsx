import Footer from "./components/footer";
import Navbar from "./components/navbar";
import NewsGallerySection from "@/app/components/newsgallerysection";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="/hero.jpeg"
          alt="Jidece International Academy"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
         <div className="absolute inset-0 bg-black/50"></div> 

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Jidece <br />
            International Academy
          </h1>

          <p className="text-xl text-white">
            Nurturing Future Leaders Through <br />
            Excellence In Education.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-10 flex grid grid-cols-2 gap-20">
        <div>
        <h2 className="text-4xl font-bold text-black mb-6">
          About The Academy
        </h2>

        <p className="text-gray-700 max-w-3xl">
          Jidece International Academy is committed to <br/> nurturing future
          leaders through quality education,<br/> character development, and
          academic excellence.
        </p>
          </div>

          {/* right side */}
          <div>
        <h1 className="text-4xl font-bold text-black mb-6">Our Academy Overview</h1>
        <div className="flex gap-5">
          {/* 1 */}
          <div className="flex flex-col items-center w-40 h-50 py-4 bg-gray-300 rounded-[12px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoz80bM7cnSUtd4RKa_7asnodnRt_bbNYn5A&s" alt=""className="h-10 w-10 bg-yellow" />
            <h1 className="text-black mt-3"> Total Students</h1>
            <p className="text-white ml-2"> lots of students and pupils</p>

          </div>

          {/* 2 */}
          <div className="flex flex-col items-center w-40 h-50 py-4 bg-gray-300 rounded-[12px]">
            <img src="https://static.vecteezy.com/system/resources/previews/046/010/545/large_2x/user-icon-simple-design-free-vector.jpg" alt="" className=" h-10 w-10"/>
            <h1 className=" text-black mt-3"> Academics Overview</h1>
            <p className="text-white ml-2"> Our science,art and commercial student</p>

          </div>

          {/* 3 */}
          <div className="flex flex-col items-center w-40 h-50 py-4 bg-gray-300 rounded-[12px]">
            <img src="https://img.icons8.com/?size=100&id=13737&format=png" alt="" className="h-10 w-10"/>
            <h1 className=" text-black mt-3"> Pendimg Connection</h1>
            <p className="ml-2"> Admission loading</p>

          </div>
  
        </div>
        </div>
      </section>
            <NewsGallerySection /> 
      <Footer/>
    </div>
  );
}

