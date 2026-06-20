"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Backdrop (mobile only) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 shrink-0">
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md border border-slate-200"
            >
              <Menu className="w-5 h-5 bg-black" />
            </button>

            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                Dashboard
              </h1>
              <p className="text-xs text-slate-500">
                Welcome back! Here's what's happening today.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-8 max-w-7xl w-full mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      {stat.title}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </h3>

                    <div className="flex items-center gap-2 text-xs">
                      {stat.trend === "up" ? (
                        <span className="text-emerald-600 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          {stat.change}
                        </span>
                      ) : (
                        <span className="text-rose-600 flex items-center gap-1">
                          <ArrowDownRight className="w-3 h-3" />
                          {stat.change}
                        </span>
                      )}
                      <span className="text-slate-400">vs last month</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 min-h-[320px]">
              <h3 className="font-semibold">Analytics Overview</h3>
              <p className="text-xs text-slate-500 mb-4">
                Student enrollment metrics over time
              </p>

              <div className="flex-1 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center h-[220px]">
                <span className="text-slate-400 text-sm">
                  Chart Area (Recharts / Chart.js)
                </span>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-semibold mb-4">New Registrations</h3>

              <div className="space-y-4">
                {recentStudents.map((student, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold">
                          {student.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          {student.course}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      {student.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
