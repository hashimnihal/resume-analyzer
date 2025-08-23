import React, { useState, useRef, useEffect, useCallback } from "react";

// Suggested Questions Component
const SuggestedQuestions = ({ questions, onSend, loading }) => (
  <div className="bg-[#0c111d] px-4 py-3 border-t border-cyan-500/10 space-y-2 rounded-b-xl">
    <p className="text-cyan-400 text-sm font-semibold">Suggested Questions:</p>
    <div className="flex flex-wrap gap-2">
      {Object.keys(questions).map((q, i) => (
        <button
          key={i}
          onClick={() => onSend(q)}
          disabled={loading}
          className={`bg-cyan-800 text-white text-xs px-3 py-1 rounded-full transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-700"}`}
        >
          {q}
        </button>
      ))}
    </div>
  </div>
);

// Chat Message Component
const ChatMessage = ({ message }) => (
  <div className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
    {message.role !== "user" && <span className="text-2xl flex-shrink-0">🤖</span>}
    <div className={`p-3 rounded-xl max-w-[75%] ${message.role === "user" ? "bg-cyan-700 text-white" : "bg-gray-700 text-white shadow-md"}`}>
      {message.content}
    </div>
    {message.role === "user" && <span className="text-xl flex-shrink-0">👤</span>}
  </div>
);

// Main Chatbot Component
export default function HashimChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([
    { role: "bot", content: "👋 Hi! I’m your Resume Guide Bot. Click a question to get started." }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

 const qa = {
  "How can I improve my resume?":
    "✅ Keep it clear, ATS-friendly, use job-specific keywords, quantify achievements, and maintain simple formatting.",
  "Top 5 in-demand software skills?":
    "💻 Python, React, SQL, Cloud Computing, Git. Showcases technical strength and adaptability.",
  "How to write a resume summary?":
    "📝 3-4 lines highlighting key skills, experience, and career goals. Tailor it for each role.",
  "Projects to include as a fresher?":
    "🚀 Academic, internship, or personal projects demonstrating problem-solving and relevant skills.",
  "Tips to pass resume screening?":
    "⚡ Use clear formatting, relevant keywords, measurable results, and tailor your resume for each application.",
  "What skills recruiters look for in a resume?":
    "🔍 Recruiters focus on relevant technical skills, soft skills, measurable achievements, and a clean, easy-to-read format.",
  "How to make my resume ATS-friendly?":
    "📄 Use standard headings, avoid images or graphics, include keywords from the job description, and save as PDF or DOCX.",
  "How long should a resume be?":
    "⏱️ Keep it concise: 1 page for freshers, 1-2 pages for experienced professionals, focusing on relevant accomplishments only."
};


const typeBotMessage = useCallback((text) => {
  if (!text) return;
  setLoading(true);

  const chars = Array.from(text); // handles emojis correctly
  let index = 0;

  setChatLog((prev) => [...prev, { role: "bot_typing", content: "" }]);

  const interval = setInterval(() => {
    setChatLog((prev) => {
      const newLog = [...prev];
      const lastMsg = { ...newLog[newLog.length - 1] };
      if (index < chars.length) {
        lastMsg.content += chars[index];
        newLog[newLog.length - 1] = lastMsg;
      } else {
        clearInterval(interval);
        lastMsg.role = "bot";
        newLog[newLog.length - 1] = lastMsg;
        setLoading(false);
      }
      return newLog;
    });
    index++;
  }, 40); // typing speed in ms
}, []);


  const handleSend = useCallback((question) => {
    if (loading) return; // prevent spam
    const userMessage = { role: "user", content: question };
    setChatLog((prev) => [...prev, userMessage]);

    // Delay bot response
    setTimeout(() => typeBotMessage(qa[question]), 1000);
  }, [typeBotMessage, loading]);

  const handleClear = useCallback(() => {
    setChatLog([
      { role: "bot", content: "👋 Hi! I’m your Resume Guide Bot. Click a question to get started." }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-5 text-5xl rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        title="Open Chatbot"
        aria-label="Open Chatbot"
      >
        🤖
      </button>

      {isOpen && (
        <div className="fixed bottom-12 right-6 w-80 sm:w-96 h-[500px] sm:h-[550px] bg-[#0f172a]/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden transform scale-100 transition-transform duration-300 ease-out">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-4 flex justify-between items-center font-semibold text-lg rounded-t-xl shadow-inner">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              Hashim’s Chatbot
            </span>
            <div className="flex gap-2">
              <button onClick={handleClear} className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity">🗑 Clear</button>
              <button onClick={() => setIsOpen(false)} className="text-sm font-normal opacity-80 hover:opacity-100 transition-opacity">✖</button>
            </div>
          </div>

          <div className="flex-1 h-full overflow-y-auto px-4 py-3 space-y-3 text-sm bg-[#0c111d] scrollbar-thin scrollbar-thumb-cyan-700/50 hover:scrollbar-thumb-cyan-700 scrollbar-track-transparent">
            {chatLog.map((msg, i) => <ChatMessage key={i} message={msg} />)}
            <div ref={chatEndRef}></div>
            {loading && (
              <div className="flex items-center text-cyan-400 text-xs gap-2 animate-pulse">
                <span className="text-lg">🤖</span> Typing...
              </div>
            )}
          </div>

          <SuggestedQuestions questions={qa} onSend={handleSend} loading={loading} />
        </div>
      )}
    </>
  );
}
