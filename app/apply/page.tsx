import Image from "next/image";

export default function ApplyPage() {
  const admissionTypes = [
    "Entrance",
    "Interview",
  ];

  const admissionYears = [
    "2026/2027",
    "2027/2028",
    "2028/2029",
    "2029/2030",
  ];

  const sexes = [
    "Male",
    "Female",
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Image Section */}
        <div className="hidden lg:block relative fixed">
          <Image
            src="https://images.pexels.com/photos/9158358/pexels-photo-9158358.jpeg?_gl=1*1w42fzc*_ga*OTgyMDg5ODc1LjE3NzM4NzEyNjM.*_ga_8JE65Q40S6*czE3ODIxNjk1NDUkbzEyJGcxJHQxNzgyMTcwMTYzJGozOCRsMCRoMA.."
            alt="Admission"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
            </div>

            <h1 className="text-center text-2xl font-semibold mb-8 text-black">
              ENTRANCE / ADMISSION APPLICATION
            </h1>

            <form className="space-y-4">
              {/* Admission Type */}
              <select
                name="admissionType"
                className="w-full rounded-lg bg-white border border-blue-300 text-black px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option value="">
                  -- ADMISSION TYPE --
                </option>

                {admissionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Admission Year */}
              <select
                name="admissionYear"
               className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option value="">
                  -- ADMISSION YEAR --
                </option>

                {admissionYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Admission Level */}
              <select
                name="admissionLevel"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option value="">
                  -- ADMISSION LEVEL --
                </option>

                <option>JSS 1</option>
                <option>JSS 2</option>
                <option>JSS 3</option>
                <option>SSS 1</option>
                <option>SSS 2</option>
                <option>SSS 3</option>
              </select>

              {/* Examination Center */}
              <select
                name="center"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option value="">
                  -- EXAMINATION CENTER --
                </option>

                <option>Ogbomoso</option>
                <option>Ibadan</option>
              </select>

              {/* Names */}
              <input
                type="text"
                placeholder="Surname"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                type="text"
                placeholder="Other Name"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              />

              {/* Sex */}
              <select
                name="sex"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option value="">
                  -- SEX --
                </option>

                {sexes.map((sex) => (
                  <option key={sex} value={sex}>
                    {sex}
                  </option>
                ))}
              </select>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
              >
                APPLY NOW
              </button>
            </form>

          
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full rounded-lg bg-white border border-blue-300 text-black placeholder:text-gray-500 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition">
            <p>© 2026 Jidece International Academy. All rights reserved.</p>
            <p className="text-xs text-gray-500">
              Built with care for education & excellence
            </p>
      </footer>
    </main>
  );
}