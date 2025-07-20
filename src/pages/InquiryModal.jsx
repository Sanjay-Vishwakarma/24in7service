import React, { useState } from 'react';
import './InquiryModal.css';
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";

function InquiryModal({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        workHours: '',
        maidServiceType: '',
        email: '',
        phone: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceOptions = [
        "House Maid", "Baby Sitters", "Cooks", "Elder Care",
        "Nurse", "Patient Caretaker", "Driver", "Japa", "Nanny"
    ];

    const locationOptions = [
        "Mumbai", "Hyderabad", "Delhi", "Bengaluru", "Pune"
    ];

    const workingHours = [
        { value: "24 Hours", label: "24 Hours" },
        { value: "12 Hours", label: "12 Hours" },
        { value: "10 Hours", label: "10 Hours" },
        { value: "8 Hours", label: "8 Hours" },
        { value: "6 Hours", label: "6 Hours" },
        { value: "4 Hours", label: "4 Hours" },
        { value: "2 Hours", label: "2 Hours" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.workHours) newErrors.workHours = 'Working hours are required';
        if (!formData.maidServiceType) newErrors.maidServiceType = 'Service is required';
        if (!formData.phone) {
            newErrors.phone = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const payload = {
                name: formData.name,
                location: formData.location,
                workHours: formData.workHours,
                maidServiceType: formData.maidServiceType,
                email: formData.email,
                phone: formData.phone,
                description: formData.description
            };

            const response = await axiosInstance.post(API_ENDPOINTS.INQUIRY_DETAILS, payload);    
            if (response.data) {
                console.log('Toast should show now');
                showToast('Thank you for your inquiry! We will contact you soon.', 'success');
                setFormData({
                    name: '',
                    location: '',
                    workHours: '',
                    maidServiceType: '',
                    email: '',
                    phone: '',
                    description: ''
                });
                // Delay the modal closing slightly (let toast render first)
                setTimeout(() => {
                    onClose();
                }, 100); // 100–300ms is enough
            }
        } catch (error) {
            console.error('Submission error:', error);
            showToast(
                error.response?.data?.message || 'There was an error submitting your form. Please try again.',
                'error'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const RequiredAsterisk = () => <span style={{ color: 'red' }}>*</span>;

    return (
        <div className="modal-overlay">
           
            <div className="modal-container">
                <div className="modal-header">
                    <h5 className="modal-title">What service are you looking for?</h5>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                        aria-label="Close"
                        disabled={isSubmitting}
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <input
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name *"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            aria-label="Name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <select
                            className={`form-input ${errors.location ? 'input-error' : ''}`}
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            aria-label="Location"
                        >
                            <option value="" disabled>Select Location *</option>
                            {locationOptions.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </select>
                        {errors.location && <span className="error-message">{errors.location}</span>}
                    </div>

                    <div className="form-group">
                        <select
                            className={`form-input ${errors.workHours ? 'input-error' : ''}`}
                            name="workHours"
                            id="workHours"
                            value={formData.workHours}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            aria-label="Working Hours"
                        >
                            <option value="" disabled>Select Working Hours *</option>
                            {workingHours.map((hour, index) => (
                                <option key={index} value={hour.value}>{hour.label}</option>
                            ))}
                        </select>
                        {errors.workHours && <span className="error-message">{errors.workHours}</span>}
                    </div>

                    <div className="form-group">
                        <select
                            className={`form-input ${errors.maidServiceType ? 'input-error' : ''}`}
                            name="maidServiceType"
                            id="maidServiceType"
                            value={formData.maidServiceType}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            aria-label="Service Type"
                        >
                            <option value="" disabled>Select Service *</option>
                            {serviceOptions.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                        {errors.maidServiceType && <span className="error-message">{errors.maidServiceType}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email *"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            aria-label="Email"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            className={`form-input ${errors.phone ? 'input-error' : ''}`}
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter Mobile Number *"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            maxLength={10}
                            disabled={isSubmitting}
                            aria-label="Phone"
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-input"
                            name="description"
                            id="description"
                            placeholder="Additional Message (Optional)"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            disabled={isSubmitting}
                            aria-label="Description"
                        />
                    </div>

                    <div className="submit-container">
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InquiryModal;