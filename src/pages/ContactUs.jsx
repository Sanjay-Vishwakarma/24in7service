import React, { useState } from "react";
import "./ContactUs.css";
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post(API_ENDPOINTS.CONTACT_US, formData);
      if (response.data) {
        showToast("Your message has been sent successfully!", "success");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast(
        error.response?.data?.message || "Failed to send message. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const addressList = [
    {
      city: "Indore (Regd)",
      address:
        "AS 25/ MAHALAXMI NAGAR, Sector A, Vijay Nagar, Indore, Madhya Pradesh 452010",
      phones: ["8855055049", "7987300916", "7084906501"],
    },
    {
      city: "Delhi",
      address:
        "HOUSE NO. 15, RAILWAY ENCLAVE PHASE 2ND, Girdharpur Rd, near ANANT ENTERPRISES, Lal Kuan, Ghaziabad, Uttar Pradesh 201009",
      phones: ["8855055049"],
    },
    {
      city: "Mumbai",
      address:
        "107 OMKAR CHS, Veera Desai Road, near Spots Club, Andheri (W), Mumbai 400053, Maharashtra",
      phones: ["8855055049", "7084906501"],
    },
  ];

  return (
    <div className="contact-container">
      <ToastNotification />
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Send us a message below.</p>
      </div>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h2>
              <i className="fas fa-map-marker-alt"></i> Our Offices
            </h2>

            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>8855055049, 7987300916</p>
              </div>
            </div>

            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>contact@theworkinglady.in</p>
              </div>
            </div>

            {addressList.map((loc, index) => (
              <div key={index} className="address-card">
                <h3>{loc.city}</h3>
                <p>{loc.address}</p>
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <p>{loc.phones.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="10-digit mobile"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">
                Your Message <span className="required">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="How can we help you?"
                required
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;