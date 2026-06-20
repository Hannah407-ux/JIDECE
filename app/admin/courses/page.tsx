"use client";

import React, { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import {
  BookOpen,
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Layers,
  Clock,
  User,
  Menu,
} from "lucide-react";

// Mock Data
const INITIAL_COURSES = [
  {
    id: "1",
    code: "CSC 501",
    title: "Advanced Machine Learning",
    department: "Computer Science",
    duration: "4 Months",
    instructor: "Prof. W.O. Ismaila",
  },
  {
    id: "2",
    code: "CSC 505",
    title: "Biometric Security Systems",
    department: "Computer Science",
    duration: "3 Months",
    instructor: "Dr. A. Alao",
  },
  {
    id: "3",
    code: "IFT 512",
    title: "Full-Stack Web Development",
    department: "Information Technology",
    duration: "4 Months",
    instructor: "Engr. F. Jewoola",
  },
];

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [searchQuery, setSearchQuery] = useState("");

  // MOBILE SIDEBAR FIX
  const [mobileOpen, setMobileOpen] = useState(false);

  // MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  // FORM STATES
  const [formCode, setFormCode] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formDept, setFormDept] = useState("");
  const [formDuration, setFormDuration] = useState("");
  const [formInstructor, setFormInstructor] = useState("");

  const openModal = (mode: any, course: any = null) => {
    setModalMode(mode);
    setSelectedCourse(course);

    if (mode === "edit" && course) {
      setFormCode(course.code);
      setFormTitle(course.title);
      setFormDept(course.department);
      setFormDuration(course.duration);
      setFormInstructor(course.instructor);
    } else {
      setFormCode("");
      setFormTitle("");
      setFormDept("");
      setFormDuration("");
      setFormInstructor("");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (modalMode === "add") {
      const newCourse = {
        id: Date.now().toString(),
        code: formCode,
        title: formTitle,
        department: formDept,
        duration: formDuration,
        instructor: formInstructor,
      };

      setCourses([...courses, newCourse]);
    } else if (modalMode === "edit" && selectedCourse) {
      setCourses(
        courses.map((c) =>
          c.id === selectedCourse.id
            ? {
                ...c,
                code: formCode,
                title: formTitle,
                department: formDept,
                duration: formDuration,
                instructor: formInstructor,
              }
            : c,
        ),
      );
    } else if (modalMode === "delete" && selectedCourse) {
      setCourses(courses.filter((c) => c.id !== selectedCourse.id));
    }

    closeModal();
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden text-slate-900">
      {/* SIDEBAR */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MAIN */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* HAMBURGER */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 border border-slate-300 rounded-md text-slate-900 bg-white hover:bg-slate-50"
            >
              <Menu className="w-5 h-5 text-slate-900" />
            </button>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Course Management
              </h1>
              <p className="text-xs text-slate-700 font-medium">
                Manage academic course structure
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal("add")}
            className="flex items-center gap-2 bg-[#615000] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#4d3f00] transition-colors"
          >
            <Plus className="w-4 h-4 text-white" />
            Add Course
          </button>
        </header>

        {/* CONTENT */}
        <div className="p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* SEARCH */}
          <div className="flex items-center max-w-md bg-white border border-slate-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-slate-500 transition-colors">
            <Search className="w-4 h-4 text-slate-800 mr-2 shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full outline-none text-sm text-slate-900 bg-white placeholder-slate-500 font-medium"
            />
          </div>

          {/* GRID */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded">
                        {course.code}
                      </span>
                      <span className="text-xs text-slate-800 font-bold flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                        <Layers className="w-3 h-3 text-slate-700" />
                        {course.department}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-800 font-semibold flex items-center gap-1.5 pt-1">
                      <User className="w-3.5 h-3.5 text-slate-700" />
                      {course.instructor}
                    </p>
                  </div>

                  <div className="flex items-center justify-between bg-slate-50 border-t border-slate-100 px-6 py-3.5">
                    <span className="text-xs text-slate-800 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-700" />
                      {course.duration}
                    </span>

                    <div className="flex gap-1">
                      <button
                        onClick={() => openModal("edit", course)}
                        className="p-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900 rounded transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => openModal("delete", course)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-800 font-medium bg-white rounded-2xl border border-dashed border-slate-200">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              No courses found
            </div>
          )}
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative bg-white w-full max-w-md rounded-xl p-6 z-50 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-5 border-b border-slate-100 pb-3">
              <h2 className="font-bold text-slate-900 text-lg">
                {modalMode === "add" && "Add New Course"}
                {modalMode === "edit" && "Edit Course Details"}
                {modalMode === "delete" && "Confirm Course Deletion"}
              </h2>

              <button
                onClick={closeModal}
                className="text-slate-800 hover:text-black p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {modalMode === "delete" ? (
                <p className="text-sm text-slate-900 font-medium py-2">
                  Are you sure you want to delete{" "}
                  <b className="text-black font-extrabold">
                    ({selectedCourse?.code}) {selectedCourse?.title}
                  </b>
                  ? This action cannot be undone.
                </p>
              ) : (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Course Code
                    </label>
                    <input
                      value={formCode}
                      onChange={(e) => setFormCode(e.target.value)}
                      placeholder="e.g. CSC 501"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Course Title
                    </label>
                    <input
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Advanced Machine Learning"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Department
                    </label>
                    <input
                      value={formDept}
                      onChange={(e) => setFormDept(e.target.value)}
                      placeholder="e.g. Computer Science"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Assigned Instructor
                    </label>
                    <input
                      value={formInstructor}
                      onChange={(e) => setFormInstructor(e.target.value)}
                      placeholder="e.g. Prof. W.O. Ismaila"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Term Duration
                    </label>
                    <input
                      value={formDuration}
                      onChange={(e) => setFormDuration(e.target.value)}
                      placeholder="e.g. 4 Months"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 mt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold rounded-lg text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm ${
                    modalMode === "delete"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-[#615000] hover:bg-[#4d3f00]"
                  }`}
                >
                  {modalMode === "delete" ? "Confirm Delete" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
