import React, { useState } from "react";
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import './ContactUs.css';

function ContactUs({ onClose, isModal = false }) {
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
      
        setTimeout(() => {
          if (onClose) onClose();
        }, 1000); // Wait 1 second to allow toast to display
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
      city: "Mumbai(Pan India)",
      address: "Shivaji Chowk, Anand Nagar Appapada, Kurar Village, Malad(East) Mumbai – 400097",
      phones: ["9082295602", "9594013627"],
    },
    {
      city: "Delhi",
      address: "H2, Rishal Garden Near Nangloi Railway Station New Delhi – 110041",
      phones: ["9082295602"],
    },
  ];

  return (
    <div className="contact-container">
      <ToastNotification />
      {isModal && (
        <IconButton
          className="modal-close-btn"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            zIndex: 1,
            color: '#6a0dad',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: '#6a0dad',
              color: 'white'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Send us a message below.</p>
      </div>

      <div className="contact-content">
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

        {/* Address Section */}
        <div className="contact-info">
          <div className="info-card">
            <h2>
              <i className="fas fa-map-marker-alt"></i> Our Offices
            </h2>

            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>9082295602, 9594013627</p>
              </div>
            </div>

            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>24inmaidservice@gmail.com</p>
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
      </div>
    </div>
  );
}

export default ContactUs;