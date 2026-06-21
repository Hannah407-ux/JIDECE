import Navbar from "../components/navbar";

export default function ApplyPage() {
  return (
    <main className="min-h-scree w-full">
      <Navbar/>
      <div className="mt-40">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            Apply to Jidece International Academy
          </h1>

          <p className="mt-3 text-gray-600 text-sm">
            Start your journey by completing the application form below.
          </p>
        </div>
      </div>
      </main>
  )
}
