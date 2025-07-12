import React, { useState } from "react";
import jobImg from "../assets/images/job.png";
import mgHome from "../assets/images/background.jpg";
import marketImg from "../assets/images/market.png";
import wrhImg from "../assets/images/we-are-hiring.png";
import ContactUs from "./ContactUs";
import "./Home.css";

const cardData = [
  {
    id: 1,
    title: "I need a Job/ मुझे नौकरी चाहिए",
    image: jobImg,
    link: "https://theworkinglady.in/job-list",
    description:
      "Submit your applications easily and stay updated on new job openings. Your next job could be just a click away. Join now!",
    hindi:
      "अपने आवेदन आसानी से सबमिट करें और नई नौकरी के अवसरों के बारे में अपडेट रहें। आपकी अगली नौकरी बस एक क्लिक दूर हो सकती है। अभी जुड़ें!",
    isExternal: true,
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

  return (
    <div className="home-container">
      {/* Contact Modal */}
      {openContactModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={handleCloseContactModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <ContactUs onClose={handleCloseContactModal} />
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
                        item.isContactUs ? handleOpenContactModal : undefined
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
  );
}

export default Home;