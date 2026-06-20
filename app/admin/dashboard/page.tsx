import Sidebar from "@/app/components/sidebar";
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from "lucide-react";

export default function AdminDashboardPage() {
  // Mock data for display cards
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Active Courses",
      value: "42",
      change: "+4%",
      trend: "up",
      icon: BookOpen,
    },
    {
      title: "Graduation Rate",
      value: "94.2%",
      change: "-0.5%",
      trend: "down",
      icon: GraduationCap,
    },
  ];

  const recentStudents = [
    {
      name: "Amara Okafor",
      email: "a.okafor@jidece.edu",
      course: "Computer Science",
      date: "2 mins ago",
    },
    {
      name: "Tunde Bakare",
      email: "t.bakare@jidece.edu",
      course: "Data Analytics",
      date: "1 hour ago",
    },
    {
      name: "Chidi Benson",
      email: "c.benson@jidece.edu",
      course: "Cybersecurity",
      date: "3 hours ago",
    },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden">
      {/* 1. Sidebar Column */}
      <Sidebar />

      {/* 2. Main Content Canvas */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navigation Bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-xs text-slate-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* Quick Action Button */}
          <button className="flex items-center gap-2 bg-[#615000] hover:bg-[#4d3f00] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Enroll Student</span>
          </button>
        </header>

        {/* Dashboard Content Container */}
        <div className="p-8 space-y-8 max-w-7xl w-full mx-auto">
          {/* Grid: Stat Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.title}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                      {stat.value}
                    </h3>

                    {/* Trend chip */}
                    <div className="flex items-center gap-1 text-xs">
                      {stat.trend === "up" ? (
                        <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 font-medium">
                          <ArrowUpRight className="w-3 h-3" /> {stat.change}
                        </span>
                      ) : (
                        <span className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 font-medium">
                          <ArrowDownRight className="w-3 h-3" /> {stat.change}
                        </span>
                      )}
                      <span className="text-slate-400">vs last month</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid: Secondary Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Box: Performance Chart Placeholder */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-[320px]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Analytics Overview
                  </h3>
                  <p className="text-xs text-slate-500">
                    Student enrollment metrics over time
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                  <TrendingUp className="w-3.5 h-3.5 text-slate-500" />
                  <span>Real-time data</span>
                </div>
              </div>

              {/* Minimal Wireframe Background for Chart Context */}
              <div className="flex-1 w-full bg-slate-50/70 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-sm font-medium text-slate-400">
                  Chart Visualization Space
                </span>
                <span className="text-xs text-slate-400 max-w-xs mt-1">
                  Integrate Recharts or Chart.js here to map data pathways.
                </span>
              </div>
            </div>

            {/* Right Box: Recent Activity Feed */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-semibold text-slate-900">
                    New Registrations
                  </h3>
                  <a
                    href="#"
                    className="text-xs font-medium text-[#615000] hover:underline"
                  >
                    View all
                  </a>
                </div>

                <div className="space-y-4">
                  {recentStudents.map((student, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 uppercase">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-semibold text-slate-900 truncate">
                            {student.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate">
                            {student.course}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">
                        {student.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 text-center">
                <p className="text-[11px] text-slate-400">
                  System Activity Check: Healthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
