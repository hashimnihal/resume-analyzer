import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import robot from "../assets/robot.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c111d] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#0c111d] via-[#0f172a] to-[#0c111d] border border-cyan-500/20 rounded-3xl shadow-2xl p-10">

        {/* Left Side - Text */}
        <div className="text-left order-1 md:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-6 leading-tight drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            SMART AI RESUME ANALYZER
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
            Upload your resume and let AI analyze it for ATS compatibility, skill match, and more!
          </p>
        </div>

        {/* Right Side - Robot Image */}
        <div className="flex flex-col justify-center items-center order-2 md:order-2">
          <img
            src={robot}
            alt="AI Robot"
            className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(0,255,255,0.25)] mb-6 md:mb-0"
          />

          {/* Button below image on mobile */}
          <Link
            to="/analyze"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 md:hidden"
          >
            🚀 Get Started
          </Link>
        </div>

        {/* Button next to text on larger screens */}
        <div className="hidden md:flex order-3 md:order-3">
          <Link
            to="/analyze"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all duration-300"
          >
            🚀 Get Started
          </Link>
        </div>

      </div>
    </div>
  );
}
