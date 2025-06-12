// src/pages/Tours.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Tours() {
  return (
    <div className="bg-navy text-white min-h-screen px-6 pt-36 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-sky text-center mb-12 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent"
      >
        Explore Our VR Tours
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Pannellum Tour */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/20 p-6 rounded-3xl shadow-lg border border-sky"
        >
          <img
            src="/360/11.jpg"
            alt="360 Walkaround"
            className="rounded-2xl mb-4 w-full"
          />
          <h2 className="text-2xl font-semibold mb-2 text-sky">Virtual Showroom</h2>
          <p className="text-gray-300 mb-4">
            Take a walk through our immersive VR space using our interactive 360° viewer powered by Pannellum.
          </p>
          <Link
            to="/page1"
            className="inline-block bg-sky text-white px-6 py-2 rounded-full hover:bg-sky/80 transition"
          >
            Start Tour
          </Link>
        </motion.div>

        {/* 360° Video Tour */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/20 p-6 rounded-3xl shadow-lg border border-sky"
        >
          <img
            // src="/tours/vrvideo-thumb.jpg"
            alt="360 Video Tour"
            className="rounded-2xl mb-4 w-full"
          />
          <h2 className="text-2xl font-semibold mb-2 text-sky">360° Video Experience</h2>
          <p className="text-gray-300 mb-4">
            Watch a high-definition 360° video and experience the thrill of being inside our VR arena.
          </p>
          <Link
            to="/vrvideo"
            className="inline-block bg-sky text-white px-6 py-2 rounded-full hover:bg-sky/80 transition"
          >
            Watch Video
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
