import { motion } from "framer-motion";
import img1 from "../../assets/gallery/vr1.jpg";
import img2 from "../../assets/gallery/vr2.jpg";
import img3 from "../../assets/gallery/vr3.jpg";
import img4 from "../../assets/gallery/vr4.jpg";
import img5 from "../../assets/gallery/vr5.jpg";
import img6 from "../../assets/gallery/vr6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section className="py-24 px-8 bg-dark">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-14 text-center text-neon"
      >
        🖼️ VR Experience Gallery
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-lg border border-neon"
          >
            <img
              src={src}
              alt={`VR gallery ${index + 1}`}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
