import React, { useState } from "react";
import { useEffect } from "react";

import "./InquiryModal.css";
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from "./../config/apiEndpoints";
import { showToast } from "./../utils/ToastNotification";

function InquiryModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    workHours: "",
    maidServiceType: "",
    email: "",
    phone: "",
    description: "",
  });

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "House Maid",
    "Baby Sitters",
    "Cooks",
    "Elder Care",
    "Nurse",
    "Patient Caretaker",
    "Driver",
    "Japa",
    "Nanny",
  ];
  const locationOptions = ["Mumbai", "Hyderabad", "Delhi", "Bengaluru", "Pune"];
  const workingHours = [
    "24 Hours",
    "12 Hours",
    "10 Hours",
    "8 Hours",
    "6 Hours",
    "4 Hours",
    "2 Hours",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.location) newErrors.location = "Required";
    if (!formData.workHours) newErrors.workHours = "Required";
    if (!formData.maidServiceType) newErrors.maidServiceType = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axiosInstance.post(API_ENDPOINTS.INQUIRY_DETAILS, formData);
      showToast("Thank you! We will contact you soon.", "success");
      setFormData({
        name: "",
        location: "",
        workHours: "",
        maidServiceType: "",
        email: "",
        phone: "",
        description: "",
      });
      if (onClose) onClose();
      if (onSuccess) onSuccess();
    } catch (error) {
      showToast("Submission error. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>What service are you looking for ?</h3>
          <button
            className="close-button"
            onClick={onClose}
            disabled={isSubmitting}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form ">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? "error" : ""}`}
              placeholder="Name *"
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`form-input ${errors.location ? "error" : ""}`}
              disabled={isSubmitting}
            >
              <option value="">Location *</option>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.location && (
              <span className="error-message">{errors.location}</span>
            )}
          </div>

          <div className="form-group">
            <select
              name="workHours"
              value={formData.workHours}
              onChange={handleChange}
              className={`form-input ${errors.workHours ? "error" : ""}`}
              disabled={isSubmitting}
            >
              <option value="">Hours *</option>
              {workingHours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            {errors.workHours && (
              <span className="error-message">{errors.workHours}</span>
            )}
          </div>

          <div className="form-group">
            <select
              name="maidServiceType"
              value={formData.maidServiceType}
              onChange={handleChange}
              className={`form-input ${errors.maidServiceType ? "error" : ""}`}
              disabled={isSubmitting}
            >
              <option value="">Service *</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.maidServiceType && (
              <span className="error-message">{errors.maidServiceType}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "error" : ""}`}
              placeholder="Email *"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? "error" : ""}`}
              placeholder="Phone *"
              maxLength={10}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input"
              placeholder="Additional details (optional)"
              rows="2"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InquiryModal;
