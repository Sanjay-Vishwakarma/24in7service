import React from "react";
import "./Pricing.css";

function PricingList({ pricingData, onGetStartedClick }) {
  return (
    <div className="pricing">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <div className="pricing-grid">
        {pricingData.map((plan, index) => (
          <div key={index} className="pricing-card">
            {[2, 5].includes(index) && (
              <div className="popular-tag">Most Popular</div>
            )}

            {/* {index === 2 && <div className="popular-tag">Most Popular</div>} */}
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
                {plan.price}
                {plan.priceDuration && <span>/{plan.priceDuration}</span>}
              </div>

              <p className="pricing-description">{plan.description}</p>

              <button
                className="pricing-button"
                onClick={() => onGetStartedClick(plan.work)}
              >
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
    { work: "House Maid", workingTime: "8 hours/day", price: "10,000", priceDuration: "month", description: "Professional house cleaning with all basic chores included." },
    { work: "Baby Sitter", workingTime: "12 hours/day", price: "12,000", priceDuration: "month", description: "Experienced caregivers for your little ones with safety training." },
    { work: "Cook", workingTime: "2 meals/day", price: "10,000", priceDuration: "month", description: "Skilled cooks specializing in various cuisines for your family." },
    { work: "Elder Care", workingTime: "24 hours", price: "20,000", priceDuration: "month", description: "Compassionate care for elderly family members with medical knowledge." },
    { work: "Driver", workingTime: "8 hours/day", price: "14,000", priceDuration: "month", description: "Professional drivers with clean records for your daily commutes." },
    { work: "Patient Caretaker", workingTime: "12 hours/day", price: "15,000", priceDuration: "month", description: "Trained attendants for post-operative or chronic illness care." },
    { work: "Japa", workingTime: "12 hours/day", price: "15,000", priceDuration: "month", description: "Experienced Japa maid specializing in newborn baby care, massage, and postpartum recovery support." },
    { work: "Nanny", workingTime: "12 hours/day", price: "16,000", priceDuration: "month", description: "Caring nanny trained in child development, hygiene, and engaging activities for toddlers and young children." },
  ],
};

export default PricingList;
