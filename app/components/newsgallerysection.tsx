import Image from "next/image";

const newsItems = [
  {
    id: 1,
    image: "/images/news1.jpg",
    title: "Campus Water Main Repair Nurturing Future Sytemmtxnail Deadline",
    description:
      "The West Wing will be without Wing without water from from 10 A...",
  },
  {
    id: 2,
    image: "/images/news2.jpg",
    title: "Term 2 Syllabus Upload Uploxd Deadline",
    description:
      "All taching staff shaff must osoontial information orhrai naat upload their finalized...",
    date: "14 Sept 20",
  },
];

const galleryImages = [
  "/gallery1.jpeg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function NewsGallerySection() {
  return (
    <section className="bg-[#f8f8f8] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* NEWS SECTION */}
          <div>
            <h2 className="text-[28px] font-bold text-[#1f1f1f] mb-6 font-serif">
              Recent News & Events
            </h2>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <div className="relative w-[105px] h-[105px] flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-[16px] leading-5 text-[#222]">
                        {item.title}
                      </h3>

                      <p className="text-[#666] text-[15px] mt-2 leading-6">
                        {item.description}
                      </p>

                      {item.date && (
                        <p className="text-gray-400 text-sm mt-3">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </div>

                  {index !== newsItems.length - 1 && (
                    <div className="border-b border-gray-200 mt-5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY SECTION */}
          <div>
            <h2 className="text-[28px] font-bold text-[#1f1f1f] mb-6 font-serif">
              Gallery
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[120px] rounded-xl overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}