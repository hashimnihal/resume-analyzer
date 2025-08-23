import React, { useState } from "react";
import UploadForm from "../components/Uploadform";
import ResultCard from "../components/ResultCard";

export default function Analyze() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState("software");

  // ✅ Wrapper function to validate before upload
  const handleUpload = (formData) => {
    if (!jobDescription.trim()) {
      alert("⚠️ Please paste the Job Description before uploading your resume.");
      return;
    }
    // proceed if JD is filled
    setResult(null); 
    formData.append("job_description", jobDescription);
    formData.append("domain", selectedDomain);
    // Now call backend API from UploadForm
    fetch("https://resume-analyzerbackend.onrender.com/analyze", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen pt-[80px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#0c111d] border border-cyan-500/10 rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          AI Resume Analyzer
        </h2>

        {/* Domain Selection */}
        <label className="text-cyan-400 font-semibold mb-2 block">Select Your Field/Domain</label>
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="w-full p-3 mb-5 rounded bg-[#1e1e1e] text-white border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">Select Option</option>
          <option value="software">Software / IT</option>
          <option value="accounting">Accounting / Finance</option>
          <option value="medical">Medical / Healthcare</option>
          <option value="education">Education / Teaching</option>
          <option value="design">Graphic / UI Design</option>
          <option value="engineering">Core Engineering</option>
          <option value="law">Law / Legal</option>
          <option value="sales">Sales / Marketing</option>
          <option value="hr">Human Resources</option>
          <option value="management">Business Management</option>
          <option value="civil">Civil Engineering / Construction</option>
          <option value="data">Data Science / AI</option>
        </select>

        {/* Job Description */}
        <label className="text-cyan-400 font-semibold mb-2 block">Paste the Job Description</label>
        <textarea
          rows="6"
          placeholder="Paste the job description here..."
          className="w-full p-4 rounded bg-[#1e1e1e] border border-cyan-500/20 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        {/* File Upload Form (Pass handleUpload instead of backend directly) */}
      <UploadForm
  jobDescription={jobDescription}
  selectedDomain={selectedDomain}
  onResult={setResult}
/>
        {/* Analysis Result */}
        {result && <ResultCard analysis={result} />}
      </div>
    </div>
  );
}
