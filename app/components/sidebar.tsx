"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Students", icon: Users, path: "/admin/students", badge: "12" },
    { name: "Courses", icon: BookOpen, path: "/admin/courses" },
  ];

  return (
    <div
      className={`relative flex flex-col h-screen bg-[#0f172a] text-slate-200 border-r border-slate-800 transition-all duration-300 ease-in-out ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-7 w-6 h-6 bg-[#615000] text-white rounded-full flex items-center justify-center border border-slate-800 hover:bg-[#4d3f00] transition-colors z-50"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>

      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800/60 gap-3 overflow-hidden shrink-0">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#615000] to-[#a38a00] flex items-center justify-center shrink-0 shadow-lg shadow-black/30">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col font-sans transition-opacity duration-200">
            <span className="font-bold text-sm tracking-wide text-white uppercase">
              Jidece Academy
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              Management Portal
            </span>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {!isCollapsed && (
          <span className="block px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Main Menu
          </span>
        )}
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center justify-between rounded-xl px-3 py-3 font-medium text-sm transition-all group relative ${
                isActive
                  ? "bg-[#615000]/15 text-white font-semibold"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#615000] rounded-r-md" />
                )}
                <Icon
                  className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-[#a38a00]" : "text-slate-400 group-hover:text-slate-200"}`}
                />
                {!isCollapsed && <span className="truncate">{item.name}</span>}
              </div>

              {/* Optional Badge */}
              {item.badge && !isCollapsed && (
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-[#615000] text-white"
                      : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Tooltip on Hover when Collapsed */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-950 text-white text-xs font-medium rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-slate-800">
                  {item.name}
                </div>
              )}
            </a>
          );
        })}
      </nav>

      {/* Bottom Profile / Action Footer */}
      <div className="p-4 border-t border-slate-800/60 bg-slate-900/40 shrink-0">
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-3 min-w-0">
            {/* User Avatar Placeholder */}
            <div className="w-9 h-9 rounded-full bg-slate-700 flex-shrink-0 border-2 border-slate-800 overflow-hidden flex items-center justify-center font-bold text-xs text-white">
              JD
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-slate-200 truncate">
                  John Doe
                </span>
                <span className="text-[10px] text-slate-500 truncate">
                  Admin Account
                </span>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <button className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
