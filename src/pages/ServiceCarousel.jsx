// ServiceCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ServiceCarousel.css";

const servicesData = [
  {
    id: 2,
    title: "Elder Care",
    description:
      "Caring for aging loved ones requires compassion, patience, and expertise. Our elder care services are designed to support seniors...",
    image: require("../assets/images/eldercare.png"),
  },
  {
    id: 3,
    title: "Newborn Care",
    description:
      "We provide expert Newborn Care, Japa Maid, and Nanny services tailored to meet the unique needs of new parents and growing families...",
    image: require("../assets/images/newborncare.png"),
  },
  {
    id: 4,
    title: "Experienced Cooks",
    description:
      "Hire skilled cooks for daily meals or special occasions. Enjoy healthy, tasty food made just for you.",
    image: require("../assets/images/experiancecook.png"),
  },
  {
    id: 5,
    title: "Driver",
    description:
      "Hire professional drivers for daily commutes, errands, or long-distance travel with complete peace of mind.",
    image: require("../assets/images/driver.png"),
  },
  {
    id: 6,
    title: "Babysitter",
    description:
      "Caring and reliable babysitters for your child’s safety, playtime, and daily routines—just when you need them.",
    image: require("../assets/images/babysitter.png"),
  },
];

function ServiceCarousel() {
  return (
    <div className="service-section container mb-5 mt-2">
      <div className="text-center mb-4">
        <button className="btn btn-outline-primary mb-5">Our Services</button>
        <h2 className="fw-bold">Solution to all your household helper need</h2>
        <p className="text-muted">
          At <strong>24In Maid Service</strong>, we are committed to providing
          reliable, professional, and personalized domestic services that meet
          the everyday needs of Indian households. Whether it’s housekeeping,
          childcare, cooking, or elder care, our goal is to support families
          with trusted and trained helpers who make daily life easier and more
          comfortable.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              className="card service-card text-white"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "360px",
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.5)", // dark overlay for readability
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServiceCarousel;
