export default function Navbar() {
  return (
    <nav className="font-inter z-30 mx-auto mt-5 max-w-4xl rounded-full border-2 border-[#414141] bg-black/40 px-10 py-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Soyooye Emmanuel</div>

        <div className="flex items-center gap-8">
          <a
            href="#work"
            className="text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-gray-300 transition-colors duration-200 hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
