import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c111d] border-b border-cyan-500/10 text-white px-6 py-4 flex justify-between items-center shadow-md shadow-cyan-500/5 backdrop-blur-md">
      {/* Logo and title */}
      <div className="flex items-center space-x-2">
        <FaRobot className="text-cyan-400 drop-shadow-[0_0_6px_cyan]" size={28} />
        <h1 className="text-xl font-bold tracking-wide text-cyan-100">Smart AI Analyzer</h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-base font-semibold">
        <Link to="/" className="text-gray-300 hover:text-cyan-400 transition duration-200">
          Home
        </Link>
        <Link to="/analyze" className="text-gray-300 hover:text-cyan-400 transition duration-200">
          Analyze
        </Link>
      </div>
    </nav>
  );
}
