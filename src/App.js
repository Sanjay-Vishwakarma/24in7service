import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Job from "./pages/Job";
import ContactUs from "./pages/ContactUs";
import InquiryModal from "./pages/InquiryModal";
import Feedback from "./components/Feedback";
import { ToastNotification } from "./utils/ToastNotification";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./dashboard/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const location = useLocation();
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  const modalRoutes = ["/pricing", "home","process ", "/feedback"]; // <--- Add this line


  // 🔹 Google Analytics route tracking
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-3QM8WWGMZ6", {
        page_path: location.pathname,
      });
    }
  }, [location]);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const showByQuery = searchParams.get("inquire") === "true";
    const shouldShowModal = sessionStorage.getItem("hasSeenModal") !== "true";

    if (
      (showByQuery || modalRoutes.includes(location.pathname)) &&
      shouldShowModal
    ) {
      const timer = setTimeout(() => {
        setShowInquiryModal(true);
        sessionStorage.setItem("hasSeenModal", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <ToastNotification />
      {/* Modal at root level to appear above everything */}
      {showInquiryModal && (
        <InquiryModal onClose={() => setShowInquiryModal(false)} />
      )}

      {!isDashboardRoute && <Header />}
 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboardRoute && <Footer />}
    </>
  );
}

export default App;
