"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen?: boolean;
  setMobileOpen?: (v: boolean) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Students", icon: Users, path: "/admin/students" },
    { name: "Courses", icon: BookOpen, path: "/admin/courses" },
  ];

  return (
    <div
      className={`
        fixed lg:relative z-50
        flex flex-col h-screen bg-[#0f172a] text-slate-200
        border-r border-slate-800
        transition-transform duration-300 ease-in-out
        ${isCollapsed ? "lg:w-20" : "lg:w-64"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Collapse button (desktop only) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:flex absolute -right-3 top-7 w-6 h-6 bg-[#615000] rounded-full items-center justify-center"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>

      {/* Header */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <GraduationCap className="w-5 h-5 text-white" />
        {!isCollapsed && (
          <span className="ml-3 font-bold text-white">Jidece Academy</span>
        )}

        {/* Close button (mobile only) */}
        <button
          onClick={() => setMobileOpen?.(false)}
          className="ml-auto lg:hidden text-slate-400"
        >
          ✕
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileOpen?.(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm ${
                isActive
                  ? "bg-[#615000]/20 text-white"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        {!isCollapsed && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold">John Doe</p>
              <p className="text-[10px] text-slate-500">Admin</p>
            </div>
            <LogOut className="w-4 h-4 text-slate-400" />
          </div>
        )}
      </div>
    </div>
  );
}
