import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoCarousel from "../components/logoCarousel/LogoCarousel";
import Gallery from "../components/gallery/Gallery";
import HeroSection from "../components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen min-w-0 bg-navy text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6">
        <HeroSection />
      </section>

      {/* Featured Games */}
      <section className="py-24 px-8 bg-navy">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent"
        >
          Featured Games
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "9D Warzone", video: "/9D1.mp4" },
            { title: "VR Rollercoaster", video: "/3601.mp4" },
            { title: "Mixed Reality", video: "/mixed1.mp4" },
          ].map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-4 rounded-3xl shadow-lg hover:shadow-sky transition-all duration-300 text-center overflow-hidden"
            >
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                <video
                  src={game.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <h3 className="text-2xl font-semibold text-sky mb-2">
                {game.title}
              </h3>
              <p className="text-gray-400">
                Experience the {game.title} — fully immersive, totally unreal.
              </p>
              <button className="mt-4 text-sky underline hover:text-sky">
                Preview
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-24 px-8 bg-navy">
        <LogoCarousel />
      </section>
      <section className="py-24 px-8 bg-navy">
        <Gallery />
      </section>

      {/* How it Works */}
      <section className="py-24 px-8 bg-gradient-to-b from-navy via-zinc-900 to-dark">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent"
        >
          How It Works
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
                <div className="text-6xl mb-6 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
                  {i + 1}
                </div>
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
      <section
        className="py-20 text-navy text-center px-6 bg-[url('/header.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: ` url('/header.jpeg')`,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
            Ready to play?
          </h2>
          <p className="text-lg mb-8 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
            The VR experience of a lifetime awaits you.
          </p>
          <a
            href="https://wa.me/2349167417758?text=Hi%2C%20I'd%20like%20to%20book%20a%20VR%20session%20at%20VR%20Place%20Nigeria."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-navy text-sky px-8 py-4 rounded-full text-lg hover:bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] hover:text-navy transition-all duration-300 shadow-md">
              Book Now
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
