import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoCarousel from "../components/logoCarousel/LogoCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen min-w-0 bg-navy text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="/vr.mp4"
        ></video>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-neon mb-6 leading-tight">
            Welcome to <span className="text-neon">VR Place Nigeria!</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-300">
            Step into the future — immersive VR games, tournaments & more.
          </p>
          <Link to="/booking">
            <button className="bg-neon text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-neon transition-all duration-300 shadow-lg">
              Book a VR Session
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Games */}
      <section className="py-24 px-8 bg-navy">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
        >
          🎮 Featured Games
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {["Cyber Raid", "Zombie Escape", "VR Karting"].map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-8 rounded-3xl shadow-lg border border-neon hover:shadow-neon transition-all duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-neon mb-4">{game}</h3>
              <p className="text-gray-400">
                Experience {game.toLowerCase()} like never before.
              </p>
              <button className="mt-6 text-neon underline hover:text-neon">
                Preview
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 bg-navy">
      <LogoCarousel />
      </section>

      {/* How it Works */}
      <section className="py-24 px-8 bg-gradient-to-b from-navy via-zinc-900 to-dark">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
        >
          ⚙️ How It Works
        </motion.h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 text-center">
          {["Choose Your Game", "Book a Time", "Enter the VR World"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="max-w-xs"
              >
                <div className="text-6xl mb-6 text-neon">{i + 1}</div>
                <h3 className="text-2xl font-semibold mb-3">{step}</h3>
                <p className="text-gray-400">
                  Simple. Fast. Fun. Get started in minutes.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-neon text-navy text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to play?
          </h2>
          <p className="text-lg mb-8">
            The VR experience of a lifetime is waiting for you.
          </p>
          <Link to="/booking">
            <button className="bg-navy text-neon px-8 py-4 rounded-full text-lg hover:text-neon transition-all duration-300 shadow-md">
              Book Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VR Place Nigeria. All rights reserved.
      </footer>
    </div>
  );
}
