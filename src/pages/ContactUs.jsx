import React, { useState } from "react";
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";
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
        }, 1000);
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
      phones: ["+91 9082295602", "+91 9594013627"],
    },
    {
      city: "Delhi",
      address: "H2, Rishal Garden Near Nangloi Railway Station New Delhi – 110041",
      phones: ["+91 9082295602"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="contact-container mb-2 mt-2"
    >
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
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <motion.div 
        className="contact-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Send us a message below.</p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Form */}
        <motion.div 
          className="contact-form-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <motion.input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                required
                value={formData.fullName}
                onChange={handleChange}
                whileFocus={{ 
                  boxShadow: "0 0 0 2px rgba(106, 13, 173, 0.5)",
                  borderColor: "#6a0dad"
                }}
              />
            </motion.div>

            <motion.div 
              className="form-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Mobile Number <span className="required">*</span>
                </label>
                <motion.input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="10-digit mobile"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(106, 13, 173, 0.5)",
                    borderColor: "#6a0dad"
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(106, 13, 173, 0.5)",
                    borderColor: "#6a0dad"
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="description">
                Your Message <span className="required">*</span>
              </label>
              <motion.textarea
                id="description"
                name="description"
                rows="5"
                placeholder="How can we help you?"
                required
                value={formData.description}
                onChange={handleChange}
                whileFocus={{ 
                  boxShadow: "0 0 0 2px rgba(106, 13, 173, 0.5)",
                  borderColor: "#6a0dad"
                }}
              ></motion.textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isSubmitting ? (
                <motion.span
                  animate={{ 
                    rotate: 360,
                    transition: { 
                      duration: 1, 
                      repeat: Infinity,
                      ease: "linear"
                    } 
                  }}
                >
                  <i className="fas fa-spinner"></i>
                </motion.span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Address Section */}
        <motion.div 
          className="contact-info"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="info-card">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <i className="fas fa-map-marker-alt"></i> Our Offices
            </motion.h2>

            <motion.div 
              className="contact-method"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>9082295602, 9594013627</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-method"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>24inmaidservice@gmail.com</p>
              </div>
            </motion.div>

            {addressList.map((loc, index) => (
              <motion.div 
                key={index} 
                className="address-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3>{loc.city}</h3>
                <p>{loc.address}</p>
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <p>{loc.phones.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactUs;