"use client";

import React, { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import {
  Users,
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Mail,
  BookOpen,
  Calendar,
  Menu,
} from "lucide-react";

// Mock Data
const INITIAL_STUDENTS = [
  {
    id: "1",
    matricNo: "JID/2026/001",
    name: "Amara Okafor",
    email: "a.okafor@jidece.edu",
    course: "Computer Science",
    joinDate: "Jan 12, 2026",
  },
  {
    id: "2",
    matricNo: "JID/2026/042",
    name: "Tunde Bakare",
    email: "t.bakare@jidece.edu",
    course: "Data Analytics",
    joinDate: "Feb 05, 2026",
  },
  {
    id: "3",
    matricNo: "JID/2026/109",
    name: "Chidi Benson",
    email: "c.benson@jidece.edu",
    course: "Cybersecurity",
    joinDate: "Mar 19, 2026",
  },
];

export default function AdminStudentsPage() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");

  // MOBILE SIDEBAR STATE
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  // Form Fields
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCourse, setFormCourse] = useState("");
  const [formMatric, setFormMatric] = useState("");

  const openModal = (mode: "add" | "edit" | "delete", student: any = null) => {
    setModalMode(mode);
    setSelectedStudent(student);

    if (mode === "edit" && student) {
      setFormName(student.name);
      setFormEmail(student.email);
      setFormCourse(student.course);
      setFormMatric(student.matricNo);
    } else {
      setFormName("");
      setFormEmail("");
      setFormCourse("");
      setFormMatric("");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (modalMode === "add") {
      const newStudent = {
        id: Date.now().toString(),
        matricNo:
          formMatric || `JID/2026/${Math.floor(100 + Math.random() * 900)}`,
        name: formName,
        email: formEmail,
        course: formCourse,
        joinDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      setStudents([...students, newStudent]);
    } else if (modalMode === "edit" && selectedStudent) {
      setStudents(
        students.map((s) =>
          s.id === selectedStudent.id
            ? {
                ...s,
                name: formName,
                email: formEmail,
                course: formCourse,
                matricNo: formMatric,
              }
            : s,
        ),
      );
    } else if (modalMode === "delete" && selectedStudent) {
      setStudents(students.filter((s) => s.id !== selectedStudent.id));
    }

    closeModal();
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.matricNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden text-slate-900">
      {/* SIDEBAR */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* MOBILE BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
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
                Student Directory
              </h1>
              <p className="text-xs text-slate-700 font-medium">
                Manage student records and enrollment
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal("add")}
            className="flex items-center gap-2 bg-[#615000] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#4d3f00] transition-colors"
          >
            <Plus className="w-4 h-4 text-white" />
            Add Student
          </button>
        </header>

        {/* CONTENT */}
        <div className="p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* SEARCH */}
          <div className="flex items-center max-w-md bg-white border border-slate-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-slate-500 transition-colors">
            <Search className="w-4 h-4 text-slate-800 mr-2 shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students..."
              className="w-full outline-none text-sm text-slate-900 bg-white placeholder-slate-500 font-medium"
            />
          </div>

          {/* TABLE WRAPPER */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
            <table className="min-w-[900px] w-full text-sm text-slate-900">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left">Student</th>
                  <th className="px-6 py-4 text-left">Matric No</th>
                  <th className="px-6 py-4 text-left">Course Program</th>
                  <th className="px-6 py-4 text-left">Date Enrolled</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900">
                            {student.name}
                          </span>
                          <span className="text-xs text-slate-700 font-semibold flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3 text-slate-600" />
                            {student.email}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-mono text-xs font-bold text-slate-800">
                        {student.matricNo}
                      </td>

                      <td className="px-6 py-4">
                        <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 w-fit">
                          <BookOpen className="w-3 h-3 text-slate-600" />
                          {student.course}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-xs font-semibold text-slate-800">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-600" />
                          {student.joinDate}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openModal("edit", student)}
                            className="p-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900 rounded transition-colors"
                            title="Edit Student"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => openModal("delete", student)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete Student"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-20 text-slate-800 font-medium bg-white rounded-2xl"
                    >
                      <Users className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                      No students found matching your query
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
                {modalMode === "add" && "Add New Student"}
                {modalMode === "edit" && "Edit Student Record"}
                {modalMode === "delete" && "Confirm Deletion"}
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
                  Are you absolutely sure you want to remove{" "}
                  <b className="text-black font-extrabold">
                    {selectedStudent?.name}
                  </b>{" "}
                  from the database directory? This cannot be undone.
                </p>
              ) : (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Full Name
                    </label>
                    <input
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Institutional Email Address
                    </label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. j.doe@jidece.edu"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                      Course Program
                    </label>
                    <input
                      value={formCourse}
                      onChange={(e) => setFormCourse(e.target.value)}
                      placeholder="e.g. Computer Science"
                      required
                      className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-medium focus:outline-none focus:border-slate-500 placeholder-slate-400"
                    />
                  </div>
                  {modalMode === "edit" && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 tracking-wider">
                        Matric Number
                      </label>
                      <input
                        value={formMatric}
                        onChange={(e) => setFormMatric(e.target.value)}
                        placeholder="JID/2026/000"
                        className="w-full border border-slate-300 p-2.5 rounded-lg text-sm text-black bg-white font-mono focus:outline-none focus:border-slate-500 placeholder-slate-400"
                      />
                    </div>
                  )}
                </>
              )}

              {/* ACTION FOOTER */}
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
