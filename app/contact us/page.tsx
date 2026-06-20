import {
  Mail,
  Phone,
  MapPin,
  Clock,
  GraduationCap,
  Headphones,
  Briefcase,
  Landmark,
  Users,
} from "lucide-react";

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
    {
      icon: Landmark,
      title: "Finance",
      email: "finance@jideceacademy.com",
    },
    {
      icon: Users,
      title: "Administration",
      email: "admin@jideceacademy.com",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      email: "support@jideceacademy.com",
    },
  ];

  const faqs = [
    "How do I apply for admission?",
    "What programs are available?",
    "How can I pay school fees?",
    "When does the academic session begin?",
    "How do I contact student support?",
  ];

  return (
    <main>
      {/* HERO */}
      <section
        className="relative h-[300px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Jidece International Academy
          </h1>

          <p className="text-lg text-gray-200">
            We'd love to hear from you. Reach out with your questions,
            feedback, or inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <InfoCard
              icon={<MapPin />}
              title="Address"
              text="123 Academic Way, Education City, Country"
            />

            <InfoCard
              icon={<Mail />}
              title="Email"
              text="info@jideceacademy.com"
            />

            <InfoCard
              icon={<Phone />}
              title="WhatsApp"
              text="+234 800 000 0000"
            />

            <InfoCard
              icon={<Clock />}
              title="Office Hours"
              text="Mon - Fri, 8:00 AM - 5:00 PM"
            />
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Your Message..."
                className="input resize-none"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Department Contacts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {departments.map((dept, index) => {
              const Icon = dept.icon;

              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-semibold">{dept.title}</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {dept.email}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow p-4"
              >
                <summary className="cursor-pointer font-medium">
                  {faq}
                </summary>

                <p className="mt-3 text-gray-600">
                  Add your answer here.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Facebook",
              "Instagram",
              "LinkedIn",
              "YouTube",
              "WhatsApp",
            ].map((item) => (
              <button
                key={item}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4 items-start">
      <div className="text-blue-600">{icon}</div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}