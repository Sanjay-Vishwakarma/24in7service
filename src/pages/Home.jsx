import React, { useState } from "react";
import jobImg from "../assets/images/job.png";
import mgHome from "../assets/images/background.jpg";
import marketImg from "../assets/images/market.png";
import wrhImg from "../assets/images/we-are-hiring.png";
import ContactUs from "./ContactUs";
import Job from "./Job";
import "./Home.css";
import { Helmet } from "react-helmet"; // ✅ Added for SEO


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
  },
];

function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);
  const [openJobModal, setOpenJobModal] = useState(false);

  return (

    <>
      <Helmet>
        <title>24inMaidService - Find Jobs & Hire Domestic Helpers in Mumbai-PAN INDIA</title>
        <meta
          name="description"
          content="Discover the best maid services and job opportunities in Mumbai. Hire trusted domestic helpers or apply for jobs quickly with 24inMaidService."
        />
        <meta
          name="keywords"
          content="maid service Mumbai, housemaid jobs, hire maids online, Mumbai domestic help, part-time maid Mumbai"
        />
        <link rel="canonical" href="https://www.24inmaidservice.in/" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="24inMaidService - Hire or Find Jobs Easily" />
        <meta
          property="og:description"
          content="Whether you need a job or want to hire a maid in Mumbai, 24inMaidService is the platform for you. Apply or post today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.24inmaidservice.in/" />
        <meta property="og:image" content="https://www.24inmaidservice.in/cover-image.jpg" />
      </Helmet>

      <div className="home-container">
        {/* Contact Modal */}
        {openContactModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-btn" onClick={handleCloseContactModal}>&times;</button>
              <ContactUs onClose={handleCloseContactModal} />
            </div>
          </div>
        )}

        {openJobModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-btn" onClick={() => setOpenJobModal(false)}>&times;</button>
              <Job onClose={() => setOpenJobModal(false)} />
            </div>
          </div>
        )}

        {/* Banner Image */}
        <div className="banner-container">
          <img
            src={mgHome}
            alt="Hero"
            className="banner-image img-fluid"
          />
        </div>

        {/* Main Content */}
        <div className="container main-content">
          {/* Heading */}
          <div className="text-center mb-5">
            <h5 className="text-primary">24IN MAID SERVICE</h5>
            <h1 className="main-heading">A Perfect Solution</h1>
          </div>

          {/* Cards Grid - Centered layout */}
          <div className="row justify-content-center custom-card-container">
            {cardData.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card custom-card h-100 mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top mx-auto card-image"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text hindi-text">{item.hindi}</p>
                    <div className="mt-auto pt-3">
                      <button
                        className="btn btn-primary w-100 custom-btn"
                        onClick={
                          item.isContactUs
                            ? handleOpenContactModal
                            : item.isJob
                              ? () => setOpenJobModal(true)
                              : undefined
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;