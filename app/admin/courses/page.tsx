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
} from "lucide-react";

// Initial Mock Data
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

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  // Form Field States
  const [formCode, setFormCode] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formDept, setFormDept] = useState("");
  const [formDuration, setFormDuration] = useState("");
  const [formInstructor, setFormInstructor] = useState("");

  // Open Modal Handler
  const openModal = (mode: "add" | "edit" | "delete", course: any = null) => {
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

  // Close Modal Handler
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // Submit Logic
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

  // Filter courses based on search query
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Unit */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Course Management
            </h1>
            <p className="text-xs text-slate-500">
              View, add, edit, or terminate curriculum courses.
            </p>
          </div>

          <button
            onClick={() => openModal("add")}
            className="flex items-center gap-2 bg-[#615000] hover:bg-[#4d3f00] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Course</span>
          </button>
        </header>

        {/* Workspace Area */}
        <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* Action Row: Search Filters */}
          <div className="flex items-center max-w-md bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-sm focus-within:border-slate-400 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search by course title, code, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                        {course.code}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <Layers className="w-3 h-3" /> {course.department}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-2">
                        <User className="w-3.5 h-3.5 text-slate-400" />{" "}
                        {course.instructor}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border-t border-slate-100 px-6 py-3.5 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />{" "}
                      {course.duration}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openModal("edit", course)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-md transition-all"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => openModal("delete", course)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-16 text-center max-w-xl mx-auto mt-12">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-base font-semibold text-slate-800">
                No courses match your criteria
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Try adjusting your search parameters or register a brand new
                module class asset above.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* ================= MODAL DIALOG LAYER ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 "
            onClick={closeModal}
          ></div>

          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-900">
                {modalMode === "add" && "Add New Course"}
                {modalMode === "edit" && "Edit Course Details"}
                {modalMode === "delete" && "Confirm Deletion"}
              </h2>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {modalMode === "delete" ? (
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">
                    Are you absolutely certain you wish to delete{" "}
                    <span className="font-semibold text-slate-900">
                      ({selectedCourse?.code}) {selectedCourse?.title}
                    </span>
                    ? This action is permanent.
                  </p>
                  <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-100 font-medium">
                    Warning: Purging this component breaks systemic paths tied
                    directly to linked student schedules.
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5 tracking-wider">
                        Course Code
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="CSC 501"
                        value={formCode}
                        onChange={(e) => setFormCode(e.target.value)}
                        className="w-full text-sm text-slate-900 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400 bg-white"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5 tracking-wider">
                        Department
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Computer Science"
                        value={formDept}
                        onChange={(e) => setFormDept(e.target.value)}
                        className="w-full text-sm text-slate-900 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5 tracking-wider">
                      Course Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Advanced Machine Learning"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full text-sm text-slate-900 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5 tracking-wider">
                      Assigned Instructor
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. W.O. Ismaila"
                      value={formInstructor}
                      onChange={(e) => setFormInstructor(e.target.value)}
                      className="w-full text-sm text-slate-900 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1.5 tracking-wider">
                      Term Duration
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 4 Months"
                      value={formDuration}
                      onChange={(e) => setFormDuration(e.target.value)}
                      className="w-full text-sm text-slate-900 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-slate-400 bg-white"
                    />
                  </div>
                </>
              )}

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2.5 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 text-white rounded-lg text-sm font-medium transition-colors ${
                    modalMode === "delete"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-[#615000] hover:bg-[#4d3f00]"
                  }`}
                >
                  {modalMode === "add" && "Save Course"}
                  {modalMode === "edit" && "Update Class"}
                  {modalMode === "delete" && "Delete Permanently"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
