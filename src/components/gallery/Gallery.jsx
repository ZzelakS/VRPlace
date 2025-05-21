import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/gallery/vr1.jpg";
import img2 from "../../assets/gallery/vr2.jpg";
import img3 from "../../assets/gallery/vr3.jpg";
import img4 from "../../assets/gallery/vr4.jpg";
import img5 from "../../assets/gallery/vr5.jpg";
import img6 from "../../assets/gallery/vr6.jpg";
import img7 from "../../assets/gallery/vr7.jpg";
import img8 from "../../assets/gallery/vr8.jpg";
import img9 from "../../assets/gallery/vr9.jpeg";
import img10 from "../../assets/gallery/vr10.jpeg";
import img11 from "../../assets/gallery/vr11.jpeg";
import img12 from "../../assets/gallery/vr12.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width only once on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedImages = isMobile && !showAll ? images.slice(0, 5) : images;

  return (
    <section className="py-18 px-8 bg-navy">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent" 
      >
        VR Experience Gallery
      </motion.h2>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {displayedImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-lg border border-sky break-inside-avoid"
          >
            <img
              src={src}
              alt={`VR gallery ${index + 1}`}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Show toggle button only on mobile */}
      {isMobile && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-sky text-black font-semibold px-6 py-2 rounded-full hover:bg-sky-dark transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
}
