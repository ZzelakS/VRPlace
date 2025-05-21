import { motion } from "framer-motion";
import granTurismo from "../../assets/gt.png";
import playstation from "../../assets/ps.png";
import eafc from "../../assets/fc.png";
import mortalKombat from "../../assets/mk.png";
import fortnite from "../../assets/ft.png";
import cod from "../../assets/cod.png";
import meta from "../../assets/meta.png";
import epic from "../../assets/epic.png";
import gta from "../../assets/gta.png";
import roblox from "../../assets/roblox.png";

const logos = [
  granTurismo, playstation, eafc, fortnite, mortalKombat,
  cod, meta, epic, gta, roblox,
];

export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade sides */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-navy via-navy/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-navy via-navy/70 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-20 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-20 w-23 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </motion.div>
    </div>
  );
}
