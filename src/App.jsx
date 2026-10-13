import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { useLocation, Route, Routes } from "react-router-dom";
import { loadGoogleAnalytics } from "./utils/gtag.js";
import Header from "./components/Header/Header.jsx";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash.jsx";
import CookieModal from "./components/CookieModal/CookieModal.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";

import ProjectDetail from "./pages/projectDetail/project-detail";

function App() {
  const location = useLocation();

  // Hide header on project detail route and its dynamic children
  const showHeader = !location.pathname.startsWith("/project-detail");

  useEffect(() => {
    if (localStorage.getItem("cookiesConset") === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <>
      <CookieModal />
      {showHeader && <Header />}
      <main className="bg-projects-gradient min-h-screen">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
