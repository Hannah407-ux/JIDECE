"use client";

import React from "react";
import { Shield, User, Lock, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement login logic here
    router.push("/admin/dashboard"); // Redirect to admin dashboard after successful login
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center p-4 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000')] bg-no-repeat relative">
      {/* Backdrop Blur Overlay */}
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-md"></div>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-4xl bg-[#f8fafc] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[580px]">
        {/* Left Side: Secure Portal Access Banner */}
        <div className="w-full md:w-[42%] bg-[#030f26] text-white p-10 flex flex-col justify-between relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950 via-[#030f26] to-[#010714]">
          {/* Decorative abstract lines overlay matching design feel */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div>
            {/* Shield Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[#6b5a00] flex items-center justify-center mb-8 border border-[#a38a00]/30">
              <Shield className="w-6 h-6 text-[#f5d020]" />
            </div>

            <h2 className="text-2xl font-serif font-semibold tracking-wide mb-4">
              Secure Portal Access
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Authorized personnel only. Please ensure you are connecting from a
              trusted network before authenticating.
            </p>
          </div>

          {/* Bottom Session Security Note */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-8 md:mt-0">
            <div className="w-4 h-4 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              ✓
            </div>
            <span>End-to-End Encrypted Session</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-[58%] p-8 md:p-14 flex flex-col justify-between bg-white">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-[#030f26] font-serif font-bold text-xl mb-8">
              <span>Jidece Academy</span>
            </div>

            <h1 className="text-3xl font-serif font-semibold text-slate-900 mb-2">
              Admin Login
            </h1>
            <p className="text-slate-500 text-sm mb-8">
              Enter your credentials to access the management suite.
            </p>

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Username/Email Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2 tracking-wide">
                  Username or Email
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="admin@jidece.edu"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700 tracking-wide">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    defaultValue="••••••••"
                    className="w-full pl-11 pr-11 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all tracking-widest font-mono"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                // type="submit"
                onClick={() => router.push("/admin/dashboard")}
                className="w-full bg-[#615000] hover:bg-[#4d3f00] text-white py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm mt-4"
              >
                <span>Login</span>
                <LogIn className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
