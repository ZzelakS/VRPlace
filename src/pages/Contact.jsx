// src/pages/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-navy text-white min-h-screen px-6 pt-36 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent"
      >
        Contact VR Place Nigeria
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-zinc-800 p-8 rounded-3xl shadow-lg border border-sky">
          <h2 className="text-2xl font-semibold mb-6 text-sky">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-sky"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-sky"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-sky"
            ></textarea>
            <button
              type="submit"
              className="bg-sky text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-sky transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map & Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-sky mb-2">Our Location</h3>
            <iframe
              title="VR Place Nigeria Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.73751799082!2d3.4231864749921024!3d6.427758493563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf531e7a16f9d%3A0x52d18e2cff43f10d!2s14B%20Karimu%20Kotun%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746466652526!5m2!1sen!2sng" // Replace with your actual Google Maps embed URL
              width="100%"
              height="300"
              className="rounded-lg border-2 border-sky"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky mb-2">Contact Info</h3>
            <p className="text-gray-300 mb-2">📍 14B, Karimu Kotun, VI, Lagos, Nigeria</p>
            <p className="text-gray-300 mb-2">📞 +234 916 741 7758</p>
            <p className="text-gray-300">✉️ vrplacenigeria@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
