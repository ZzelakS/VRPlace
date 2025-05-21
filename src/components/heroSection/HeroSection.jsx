import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredItems = [
  {
    title: "Walking Dead: Saints & Sinners VR",
    description: "Fight your way out of the apocalypse in VR.",
    video: "/dead.mp4",
    logo: "/dead.jpg",
    tags: ["Horror", "Shooter", "Multiplayer", "VR"],
    badge: "Top Seller",
  },
  {
    title: "Beat Saber",
    description: "Journey to new galaxies in an immersive VR sim.",
    video: "/beat.mp4",
    logo: "/beat.png",
    tags: ["Adventure", "Sci-Fi", "Exploration", "VR"],
    badge: "New",
  },
  {
    title: "VR Boxing",
    description: "Feel the speed. Drive the future.",
    video: "/creed.mp4",
    logo: "/creed.jpg",
    tags: ["Racing", "Arcade", "Multiplayer", "VR"],
    badge: null,
  },
];

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-navy to-black text-white overflow-x-hidden">
      <section className="relative w-full min-h-screen px-4 pt-24 pb-12">
        <h4 className="text-center mb-12 text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] bg-clip-text text-transparent">
          Featured at VR Place Nigeria
        </h4>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 40,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-full max-w-[95vw] md:max-w-[900px] h-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-sky hover:scale-105"
            >
              <div className="flex flex-col md:flex-row">
                {/* Video */}
                <div className="w-full md:w-2/3 h-[220px] md:h-[280px] relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src={item.video}
                  ></video>
                  <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-xs px-3 py-1 rounded">
                    {item.title}
                  </span>
                </div>

                {/* Info */}
                <div className="w-full md:w-1/3 bg-zinc-800 p-4 flex flex-col justify-between">
                  <div>
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-36 mb-3"
                    />
                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    {item.badge && (
                      <div className="bg-sky text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                        {item.badge}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/2349167417758?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20VR%20session."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-sky text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-[#4f6af3] via-[#c654e1] to-[#f26c92] hover:text-black transition-all duration-300 shadow-lg">
              Book a VR Session
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
