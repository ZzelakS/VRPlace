import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Rentals() {
  const [expandedGame, setExpandedGame] = useState(null);

  useEffect(() => {
    if (expandedGame !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expandedGame]);

  const rentals = [
    {
      title: "Outdoor VR Package",
      features: [
        "VR Setup",
        "Power Supply",
        "On-site Attendant",
        "3-6 Hour Booking Options",
        "Ideal for Carnivals, Birthdays, Corporate Events",
      ],
      image: "/outdoor1.jpg",
    },
    {
      title: "Indoor VR Party Pack",
      features: [
        "Up to 4 VR Stations",
        "Multiplayer Game Options",
        "Room-scale Experiences",
        "Setup & Teardown Included",
        "Perfect for House Parties & Game Nights",
      ],
      image: "/outdoor3.jpg",
    },
  ];

  const vrGames = [
    {
      image: "/outdoor3.jpg",
      title: "VR Car Race",
      description:
        "Experience high-speed thrills and tight turns in an immersive VR car race!",
    },
    {
      image: "/outdoor2.jpg",
      title: "VR Experience",
      description: "Enjoy immersive adventures with VR Experience and a diverse selection of action-packed games.",
    },
    {
      image: "/outdoor7.jpeg",
      title: "VR Kids",
      description: "A fun-packed VR arcade just for kids, with exciting games and adventures!",
    },
    {
      image: "/outdoor1.jpg",
      title: "PlayStation 5",
      description: "PS5 with EAFC, Mortal Kombat & more—great for parties and game nights.",
    },
    {
      image: "/about-vr1.jpeg",
      title: "VR Boxing",
      description: "Step into the ring and throw punches in thrilling VR boxing matches.",
    },
    {
      image: "/outdoor8.jpeg",
      title: "Mixed Reality",
      description: "VR Mixed Reality: The pro-level experience blending virtual and real worlds.",
    },
  ];

  return (
    <div className="bg-navy text-white min-h-screen pt-32 px-6 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-sky text-center mb-16 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent"
      >
        VR Rentals for Every Occasion
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {rentals.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-zinc-800 rounded-3xl shadow-lg p-6"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="rounded-2xl w-full h-64 object-cover mb-6"
            />
            <h2 className="text-2xl font-semibold text-sky mb-4 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
              {pkg.title}
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {pkg.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-sky text-center mb-8 bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
          Available VR Games
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {vrGames.map((game, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setExpandedGame((prev) => (prev === idx ? null : idx))
              }
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="text-center py-2 px-2">
                <h4 className="text-base font-semibold text-sky">
                  {game.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expanded Game Modal */}
      {expandedGame !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setExpandedGame(null)}
        >
          <motion.div
            key={expandedGame}
            layout
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 border border-sky rounded-2xl shadow-2xl p-6 w-[90%] max-w-[600px] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={vrGames[expandedGame].image}
              alt={vrGames[expandedGame].title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h4 className="text-2xl font-bold text-sky mb-2">
              {vrGames[expandedGame].title}
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              {vrGames[expandedGame].description}
            </p>
            <div className="flex justify-center">
              <a
                href={`/contact?game=${encodeURIComponent(
                  vrGames[expandedGame].title
                )}`}
                className="inline-block bg-sky text-black font-bold py-2 px-6 rounded-full hover:bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] transition text-sm"
              >
                Book Game
              </a>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl text-white mb-4">
          Ready to Book a VR Experience for Your Event?
        </h3>
        <a
          href="/contact"
          className="inline-block bg-sky text-black font-bold py-3 px-6 rounded-full hover:bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] transition"
        >
          Contact Us Now
        </a>
      </motion.div>
    </div>
  );
}
