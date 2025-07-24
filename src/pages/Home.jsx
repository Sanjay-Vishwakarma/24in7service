import React, { useState, useEffect } from "react";
import jobImg from "../assets/images/job.png";
import mgHome from "../assets/images/background.jpg";
import marketImg from "../assets/images/market.png";
import ContactUs from "./ContactUs";
import Job from "./Job";
import "./Home.css";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServiceCarousel from "./ServiceCarousel";

const cardData = [
  {
    id: 1,
    title: "I need a Job/ मुझे नौकरी चाहिए",
    image: jobImg,
    description:
      "Submit your applications easily and stay updated on new job openings. Your next job could be just a click away. Join now!",
    hindi:
      "अपने आवेदन आसानी से सबमिट करें और नई नौकरी के अवसरों के बारे में अपडेट रहें। आपकी अगली नौकरी बस एक क्लिक दूर हो सकती है। अभी जुड़ें!",
    isExternal: false,
    isJob: true,
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "JOIN US AS A HIRING PARTNER/ हमसे जुड़ें",
    image: marketImg,
    description:
      "If you're a local maid agency and align with our vision & mission of being a trusted and reliable partner for our clients seeking our help in hiring domestic helpers, you're a right fit to work with us.",
    hindi:
      "यदि आप एक स्थानीय एजेंसी हैं और हमारे मिशन से जुड़े हैं, तो आप घरेलू सहायकों के काम पर रखने में हमारी मदद के लिए बिल्कुल उपयुक्त हैं।",
    isExternal: false,
    isContactUs: true,
    color: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
  },
];

function Home() {
  const [openJobModal, setOpenJobModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();

  const handleOpenJobModal = () => setOpenJobModal(true);
  const handleCloseJobModal = () => setOpenJobModal(false);

  return (
    <>
      <Helmet>
        <title>
          24inMaidService - Find Jobs & Hire Domestic Helpers in Mumbai-PAN
          INDIA
        </title>
        <meta
          name="description"
          content="Discover the best maid services and job opportunities in Mumbai. Hire trusted domestic helpers or apply for jobs quickly with 24inMaidService."
        />
        <meta
          name="keywords"
          content="maid service Mumbai, housemaid jobs, hire maids online, Mumbai domestic help, part-time maid Mumbai"
        />
        <link rel="canonical" href="https://www.24inmaidservice.in/" />
        <meta
          property="og:title"
          content="24inMaidService - Hire or Find Jobs Easily"
        />
        <meta
          property="og:description"
          content="Whether you need a job or want to hire a maid in Mumbai, 24inMaidService is the platform for you. Apply or post today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.24inmaidservice.in/" />
        <meta
          property="og:image"
          content="https://www.24inmaidservice.in/cover-image.jpg"
        />
      </Helmet>

      <div className="home-container">
        {/* Job Modal */}
        <Job
          hideButton={true}
          open={openJobModal}
          onClose={handleCloseJobModal}
        />

        {/* Hero Banner */}
        <motion.div
          className="banner-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={mgHome}
            alt="Hero"
            className="banner-image img-fluid"
            loading="eager"
          />
          <div className="banner-overlay">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="banner-title"
            >
              24IN MAID SERVICE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="banner-subtitle"
            >
              Connecting Domestic Helpers with Opportunities
            </motion.p>
          </div>
        </motion.div>

        {/* Main Section */}
        <div className="container main-content">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h5 className="text-primary mt-5">YOUR TRUSTED PARTNER</h5>
            <motion.h1
              className="main-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              style={{
                background: "linear-gradient(90deg, #7b2cbf, #c77dff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 8px rgba(123, 44, 191, 0.3)",
                lineHeight: 1.3,
                position: "relative",
                display: "inline-block",
              }}
            >
              Hire Verified Maids in Minutes
              <motion.span
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  marginTop: "0.5rem",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Trusted by 1000+ Homes in Mumbai & Delhi
              </motion.span>
            </motion.h1>
            <motion.div
              className="heading-underline"
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.div>

          <div className="row justify-content-center custom-card-container">
            {cardData.map((item, index) => (
              <motion.div
                key={item.id}
                className="col-12 col-md-6 col-lg-5 mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="card custom-card h-100 mx-auto"
                  style={{ background: item.color }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top mx-auto card-image"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text hindi-text">{item.hindi}</p>
                    <div className="mt-auto pt-3">
                      <motion.button
                        className="btn btn-light w-100 custom-btn"
                        onClick={() => {
                          if (item.isContactUs) {
                            navigate("/contactus");
                          } else if (item.isJob) {
                            handleOpenJobModal();
                          }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <ServiceCarousel />
        </div>
      </div>
    </>
  );
}

export default Home;
