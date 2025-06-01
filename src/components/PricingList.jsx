import React from 'react';
import './Pricing.css';

function PricingList({ pricingData, onGetStartedClick }) {
    return (
        <div className="pricing-container">
            <h2 className="pricing-title">Our Pricing Plans</h2>
            <div className="pricing-grid">
                {pricingData.map((plan, index) => (
                    <div key={index} className="pricing-card">
                        <div className="pricing-card-header">
                            <h3 className="pricing-card-title">{plan.work}</h3>
                        </div>
                        <div className="pricing-card-body">
                            <div className="pricing-feature">
                                <span className="pricing-feature-icon">⏱️</span>
                                <span className="pricing-feature-text">
                                    <strong>Working Time:</strong> {plan.workingTime}
                                </span>
                            </div>

                            <div className="pricing-price">
                                ₹{plan.price}
                                {plan.priceDuration && <span>/{plan.priceDuration}</span>}
                            </div>

                            <p className="pricing-description">{plan.description}</p>

                            <button className="pricing-button" onClick={onGetStartedClick}>
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

PricingList.defaultProps = {
    pricingData: [
        {
            work: "House Maid",
            workingTime: "8 hours/day",
            price: "8000",
            priceDuration: "month",
            description: "Professional house cleaning with all basic chores included."
        },
        {
            work: "Baby Sitter",
            workingTime: "12 hours/day",
            price: "12000",
            priceDuration: "month",
            description: "Experienced caregivers for your little ones with safety training."
        },
        {
            work: "Cook",
            workingTime: "2 meals/day",
            price: "10000",
            priceDuration: "month",
            description: "Skilled cooks specializing in various cuisines for your family."
        },
        {
            work: "Elder Care",
            workingTime: "24 hours",
            price: "15000",
            priceDuration: "month",
            description: "Compassionate care for elderly family members with medical knowledge."
        },
        {
            work: "Driver",
            workingTime: "8 hours/day",
            price: "12000",
            priceDuration: "month",
            description: "Professional drivers with clean records for your daily commutes."
        },
        {
            work: "Patient Caretaker",
            workingTime: "12 hours/day",
            price: "14000",
            priceDuration: "month",
            description: "Trained attendants for post-operative or chronic illness care."
        }
    ]
};

export default PricingList;
