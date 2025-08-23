import React, { useState } from "react";

export default function UploadForm({ onResult, jobDescription, selectedDomain }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // <-- for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    if (!file) {
      setError("⚠️ Please upload a resume (PDF only).");
      return;
    }
    if (!jobDescription || !jobDescription.trim()) {
      setError("⚠️ Please enter a job description before analyzing.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_description", jobDescription.trim());
    formData.append("domain", selectedDomain);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      onResult(data);
    } catch (err) {
      setError("❌ Error connecting to the server. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 w-full text-white bg-transparent border border-gray-600 p-2 rounded"
      />

      {/* Error Message (below input) */}
      {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 rounded w-full transition-all 
          ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"}`}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </form>
  );
}
