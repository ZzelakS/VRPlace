import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-navy text-white min-h-screen px-6 pt-36 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-sky text-center mb-12"
      >
        About VR Place Nigeria
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/about-vr1.jpeg"
            alt="Immersive VR Setup"
            className="rounded-3xl shadow-lg border border-sky"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-sky mb-4">
            The Future of Entertainment
          </h2>
          <p className="text-gray-300 leading-relaxed">
            VR Place Nigeria is the premier destination for immersive virtual reality experiences. Whether you're battling zombies, racing in hyper-realistic tracks, or simply exploring new worlds, we deliver unforgettable adventures powered by cutting-edge VR technology.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold text-sky mb-4">
            What We Offer
          </h2>
          <ul className="text-gray-300 list-disc pl-6 leading-loose">
            <li>9D VR Simulators</li>
            <li>VR Gaming Tournaments</li>
            <li>Interactive Mixed Reality Zones</li>
            <li>Team Building & Private Bookings</li>
            <li>Kids & Family-Friendly Experiences</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <img
            src="/about-vr2.jpeg"
            alt="VR Experience"
            className="rounded-3xl shadow-lg border border-sky"
          />
        </motion.div>
      </div>

      {/* Opening Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <h2 className="text-3xl font-semibold text-sky mb-4">Opening Hours</h2>
        <p className="text-gray-300 text-lg leading-loose">
          <strong>Mondays - Saturdays:</strong> 11:00 AM – 11:00 PM<br />
          <strong>Sundays:</strong> 12:00 PM – 11:00 PM
        </p>
      </motion.div>
    </div>
  );
}
