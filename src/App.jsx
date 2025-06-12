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
import Page3 from "./pages/360/Page3";
import Page4 from "./pages/360/Page4";
import Page5 from "./pages/360/Page5";
import Page6 from "./pages/360/Page6";
import Page7 from "./pages/360/Page7";
import Page8 from "./pages/360/Page8";
import Page9 from "./pages/360/Page9";
import Page10 from "./pages/360/Page10";
import Page11 from "./pages/360/Page11";
import Page12 from "./pages/360/Page12";
import Page13 from "./pages/360/Page13";
import Page14 from "./pages/360/Page14";

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
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} />
      <Route path="/page9" element={<Page9 />} />
      <Route path="/page10" element={<Page10 />} />
      <Route path="/page11" element={<Page11 />} />
      <Route path="/page12" element={<Page12 />} />
      <Route path="/page13" element={<Page13 />} />
      <Route path="/page14" element={<Page14 />} />
        {/* <Route path="/tours" element={<Tours />} />
      <Route path="/admin-login" element={<AdminLogin />} /> */}
        {/* More pages later */}
      </Routes>
      <ChatbaseWidget/>
      <Footer/>
    </>
  );
}

