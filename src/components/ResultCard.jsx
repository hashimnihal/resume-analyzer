import React from "react";

export default function ResultCard({ analysis }) {
  return (
    <div className="bg-gradient-to-br from-[#1e1e1e] to-[#111111] text-white p-8 mt-6 rounded-2xl shadow-xl space-y-8 border border-gray-700">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-cyan-400 border-b border-gray-700 pb-3">
        🚀 Resume Analysis Result
      </h2>

      {/* Score Section */}
      <div className="flex items-center justify-between bg-gray-900 p-4 rounded-xl shadow-inner">
        <p className="text-2xl font-bold text-cyan-400">
          Score: {analysis.score}%
        </p>
        <p className="text-lg font-semibold">
          Resume Grade:
          <span
            className={`ml-3 px-4 py-1 rounded-full text-white shadow-md ${
              analysis.grade === "A"
                ? "bg-green-500 shadow-green-400/40"
                : analysis.grade === "B"
                ? "bg-yellow-500 shadow-yellow-400/40"
                : analysis.grade === "C"
                ? "bg-orange-400 shadow-orange-400/40"
                : "bg-red-500 shadow-red-400/40"
            }`}
          >
            {analysis.grade}
          </span>
        </p>
      </div>

      {/* Resume Progress Bar */}
      <div>
        <p className="text-lg font-semibold mb-2">Resume Strength:</p>
        <div className="w-full bg-gray-800 h-5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-5 rounded-full transition-all duration-700"
            style={{ width: `${analysis.score}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {analysis.score}% Match with Job Requirements
        </p>
      </div>

      {/* Skills Matched */}
      <div>
        <p className="text-lg font-semibold mb-2 text-green-400">
          ✅ Skills Matched:
        </p>
        <div className="flex flex-wrap gap-2">
          {analysis.skillsMatched.map((skill, index) => (
            <span
              key={index}
              className="bg-green-600/80 hover:bg-green-500 transition px-4 py-1 rounded-full text-sm shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Missing */}
      <div>
        <p className="text-lg font-semibold mb-2 text-red-400">
          ❌ Skills Missing:
        </p>
        <div className="flex flex-wrap gap-2">
          {analysis.skillsMissing.map((skill, index) => (
            <span
              key={index}
              className="bg-red-600/80 hover:bg-red-500 transition px-4 py-1 rounded-full text-sm shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <p className="text-lg font-semibold mb-2 text-yellow-400">
          💡 Suggestions to Improve:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {analysis.suggestions.map((tip, index) => (
            <li
              key={index}
              className="hover:text-white hover:pl-2 transition-all duration-300"
            >
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
