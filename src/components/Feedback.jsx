import React, { useState } from 'react';
import './Feedback.css';
import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast } from './../utils/ToastNotification';

function Feedback() {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        rating: 0,
        feedbackMessage: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({
            ...prev,
            [name]: value
        }));
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
                rating: feedback.rating.toString(),
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
            <div className="feedback-card">
                <div className="feedback-header">
                    <h2 className="feedback-title">Share Your Feedback</h2>
                    <p className="feedback-subtitle">We value your opinion and would love to hear about your experience</p>
                    <div className="divider"></div>
                </div>

                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="form-group" style={{ animationDelay: '0.1s' }}>
                        <div className="input-container">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={feedback.name}
                                onChange={handleChange}
                                className={errors.name ? 'input-error' : ''}
                                placeholder=" "
                                disabled={isSubmitting}
                            />
                            <label htmlFor="name">Your Name <span className="required">*</span></label>
                        </div>
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group" style={{ animationDelay: '0.2s' }}>
                        <div className="input-container">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={feedback.email}
                                onChange={handleChange}
                                className={errors.email ? 'input-error' : ''}
                                placeholder=" "
                                disabled={isSubmitting}
                            />
                            <label htmlFor="email">Email Address <span className="required">*</span></label>
                        </div>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group" style={{ animationDelay: '0.3s' }}>
                        <label>Your Rating <span className="required">*</span></label>
                        <div className="rating-container">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    className={`rating-star ${star <= (hoverRating || feedback.rating) ? 'active' : ''}`}
                                    onClick={() => !isSubmitting && handleRatingChange(star)}
                                    onMouseEnter={() => !isSubmitting && setHoverRating(star)}
                                    onMouseLeave={() => !isSubmitting && setHoverRating(0)}
                                    disabled={isSubmitting}
                                >
                                    <svg viewBox="0 0 24 24" width="28" height="28">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                </button>
                            ))}
                        </div>
                        {errors.rating && <span className="error-message">{errors.rating}</span>}
                    </div>

                    <div className="form-group" style={{ animationDelay: '0.4s' }}>
                        <div className="input-container">
                            <textarea
                                id="feedbackMessage"
                                name="feedbackMessage"
                                value={feedback.feedbackMessage}
                                onChange={handleChange}
                                className={errors.feedbackMessage ? 'input-error' : ''}
                                placeholder=" "
                                rows="4"
                                disabled={isSubmitting}
                            />
                            <label htmlFor="feedbackMessage">Your Feedback <span className="required">*</span></label>
                        </div>
                        {errors.feedbackMessage && <span className="error-message">{errors.feedbackMessage}</span>}
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                        style={{ animationDelay: '0.5s' }}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Submitting...
                            </>
                        ) : 'Submit Feedback'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Feedback;