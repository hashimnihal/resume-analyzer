// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#0c111d] text-gray-400 px-6 py-6 border-t border-cyan-500/10 shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Branding */}
        <div className="text-sm text-center md:text-left">
          © 2025 <span className="text-cyan-400 font-semibold">Hashim Nihal</span>. All rights reserved v1.0
        </div>

        {/* Right Side - Links */}
        <div className="flex space-x-4 text-sm">
          <a
            href="https://hashimnihal.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🌐 Portfolio
          </a>
          <a
            href="https://github.com/hashimnihal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
