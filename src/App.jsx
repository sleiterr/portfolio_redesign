import { useEffect } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { loadGoogleAnalytics } from "./utils/gtag.js";
import Header from "./components/Header/Header.jsx";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash.jsx";
import CookieModal from "./components/CookieModal/CookieModal.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";

function App() {
  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <>
      <CookieModal />
      <Header />
      <main className="bg-projects-gradient min-h-screen">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
