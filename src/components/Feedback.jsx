import React, { useState } from 'react';
import './Feedback.css';
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from './../utils/ToastNotification';

function Feedback() {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        rating: 0,
        feedbackMessage: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleRatingChange = (rating) => {
        setFeedback(prev => ({ ...prev, rating }));
        if (errors.rating) {
            setErrors(prev => ({ ...prev, rating: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!feedback.name.trim()) newErrors.name = 'Name is required';
        if (!feedback.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(feedback.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (feedback.rating === 0) newErrors.rating = 'Please select a rating';
        if (!feedback.feedbackMessage.trim()) newErrors.feedbackMessage = 'Feedback message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const payload = {
                name: feedback.name,
                email: feedback.email,
                rating: feedback.rating.toString(), // Convert to string if your API expects it
                feedbackMessage: feedback.feedbackMessage
            };

            const response = await axiosInstance.post(API_ENDPOINTS.ADD_FEEDBACK, payload);

            if (response.data) {
                showToast('Thank you for your feedback!', 'success');
                setFeedback({
                    name: '',
                    email: '',
                    rating: 0,
                    feedbackMessage: '',
                });
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            showToast(
                error.response?.data?.message || 'Failed to submit feedback. Please try again.',
                'error'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="feedback-container">
            <ToastNotification />
            <h2 className="feedback-title">Share Your Feedback</h2>
            <p className="feedback-subtitle">We'd love to hear about your experience</p>

            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name <span className="required">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedback.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Your Rating <span className="required">*</span></label>
                    <div className="rating-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`rating-star ${star <= feedback.rating ? 'active' : ''}`}
                                onClick={() => !isSubmitting && handleRatingChange(star)}
                                style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {errors.rating && <span className="error-message">{errors.rating}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="feedbackMessage">Your Feedback <span className="required">*</span></label>
                    <textarea
                        id="feedbackMessage"
                        name="feedbackMessage"
                        value={feedback.feedbackMessage}
                        onChange={handleChange}
                        className={errors.feedbackMessage ? 'input-error' : ''}
                        placeholder="Share your thoughts..."
                        rows="5"
                        disabled={isSubmitting}
                    />
                    {errors.feedbackMessage && <span className="error-message">{errors.feedbackMessage}</span>}
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
}

export default Feedback;