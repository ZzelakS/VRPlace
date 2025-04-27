import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar"; // adjust path if needed
// import Booking from "./pages/Booking";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import AdminLogin from "./pages/AdminLogin";
// import GamesMenu from "./pages/GamesMenu"; // NEW
// import FoodMenu from "./pages/FoodMenu"; // NEW
import FlipbookViewer from "./components/menuViewer/MenuViewer";

export default function App() {
  const flipbookUrl = "https://online.fliphtml5.com/gndyj/ryyz/"; // replace with your actual flipbook URL
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/food-menu"
          element={<FlipbookViewer flipbookUrl={flipbookUrl} />} // Passing URL to FlipbookViewer
        />
        {/* <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-login" element={<AdminLogin />} /> */}
      {/* <Route path="/games-menu" element={<GamesMenu />} /> */}
        {/* More pages later */}
      </Routes>
    </>
  );
}
