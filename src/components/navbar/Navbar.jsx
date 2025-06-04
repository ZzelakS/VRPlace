import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Store", path: "/store" },
    { name: "Rentals", path: "/rentals" },
    { name: "360 Tours", path: "/tours" },
  ];

  return (
    <nav className="bg-black bg-opacity-80 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 pt-6 h-20 shadow-md relative">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center h-full z-40">
        <img src={logo} alt="VR Place Logo" className="max-h-25 w-24 object-contain" />
      </Link>

      {/* Centered Desktop Menu */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`text-gray-300 hover:text-sky transition-colors duration-300 ${
              location.pathname === item.path ? "text-sky font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1 text-gray-300 hover:text-sky transition-colors duration-300 bg-transparent border-none outline-none focus:outline-none"
          >
            Menu
            <motion.span animate={{ rotate: menuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 right-0 bg-black bg-opacity-90 rounded-lg shadow-lg overflow-hidden"
              >
                <li>
                  <Link
                    to="/games-menu"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-sky-300 hover:text-sky hover:bg-zinc-800 transition"
                  >
                    Games Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/food-menu"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-sky-300 hover:text-sky hover:bg-zinc-800 transition"
                  >
                    Food Menu
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden text-sky cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className={`w-8 h-1 bg-sky mb-1 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-8 h-1 bg-sky mb-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <div className={`w-8 h-1 bg-sky transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-20 left-0 right-0 bg-black bg-opacity-90 flex flex-col items-center space-y-6 py-8 md:hidden"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sky-300 hover:text-sky text-xl transition-colors duration-300 ${
                    location.pathname === item.path ? "text-sky font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1 text-sky-300 hover:text-sky text-xl transition-colors duration-300 bg-transparent border-none"
              >
                Menu
                <motion.span animate={{ rotate: menuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center mt-4 space-y-4"
                  >
                    <li>
                      <Link
                        to="/games-menu"
                        onClick={() => {
                          setIsOpen(false);
                          setMenuOpen(false);
                        }}
                        className="text-sky-300 hover:text-sky transition"
                      >
                        Games Menu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/food-menu"
                        onClick={() => {
                          setIsOpen(false);
                          setMenuOpen(false);
                        }}
                        className="text-sky-300 hover:text-sky transition"
                      >
                        Food Menu
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

