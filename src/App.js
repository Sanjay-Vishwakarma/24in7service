import "./App.css";

import { Routes, Route } from "react-router-dom";

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import OurTeam from "./pages/OurTeam";
import Blog from "./pages/Blog";
import Job from "./pages/Job";
import ContactUs from "./pages/ContactUs";

function App() {


  const contactData = {
    phone: ["8855055049", "7987300916", "7084906501"],
    email: ["contact@theworkinglady.in", "theworkinglady.in@gmail.com"],
    address: [
      "REGD: AS 25/ MAHALAXMI NAGAR, Sector A, Vijay Nagar, Indore, Madhya Pradesh 452010. Contact: 8855055049 / 7987300916 / 7084906501",
      "Delhi: HOUSE NO. 15, RAILWAY ENCLAVE PHASE 2ND, Girdharpur Rd, near ANANT ENTERPRISES, Ghaziabad, UP 201009. Contact: 8855055049",
      "Mumbai: 107 OMKAR CHS, Veera Desai Road, Andheri (W), Mumbai 400053, Maharashtra. Contact: 8855055049 / 7084906501",
    ]
  };


  return (
    <>
      {/* <ToastNotification /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/contactus" contactData={contactData} element={<ContactUs />} />
      </Routes>
      <Footer /> {/* Render Footer globally */}
    </>
  );
}

export default App;
