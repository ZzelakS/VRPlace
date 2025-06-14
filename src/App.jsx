import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar"; // adjust path if needed
import Footer from "./components/footer/Footer"; // adjust path if needed
import ChatbaseWidget from "./components/chatbaseWidget/ChatbaseWidget"; // adjust path if needed
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/GiftCardStore";
import Rentals from "./pages/Rentals";
import Tour from "./pages/Tours";
import Glo from "./pages/Video360";
// import Tours from "./pages/Tours";
// import AdminLogin from "./pages/AdminLogin";
// import GamesMenu from "./pages/GamesMenu"; // NEW
// import FoodMenu from "./pages/FoodMenu"; // NEW
import FlipbookViewer from "./components/menuViewer/MenuViewer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Page1 from "./pages/360/Page1";
import Page2 from "./pages/360/Page2";

export default function App() {
  const foodMenuUrl = "https://online.fliphtml5.com/gndyj/ryyz/"; // replace with your actual flipbook URL
  const gamesMenuUrl = "https://online.fliphtml5.com/gndyj/aymo/"; // Replace with actual URL
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/food-menu"
          element={<FlipbookViewer flipbookUrl={foodMenuUrl} />} // Passing URL to FlipbookViewer
        />
        <Route
          path="/games-menu"
          element={<FlipbookViewer flipbookUrl={gamesMenuUrl} />} // Passing URL to FlipbookViewer
        />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/store" element={<Store />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/tours" element={<Tour />} />
      <Route path="/360" element={<Glo />} />
      <Route path="/vrtour" element={<Page1 />} />
      <Route path="/glotour" element={<Page2 />} />
      
        {/* <Route path="/tours" element={<Tours />} />
      <Route path="/admin-login" element={<AdminLogin />} /> */}
        {/* More pages later */}
      </Routes>
      <ChatbaseWidget/>
      <Footer/>
    </>
  );
}

