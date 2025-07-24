import React, { useState, useEffect } from "react";
import "./Process.css";

function StepIndicator({ step, currentStep }) {
  const isActive = step <= currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className={`step-indicator ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}>
      <div className="step-number">{step}</div>
    </div>
  );
}

const steps = [
  {
    title: "1) Post Your Requirements",
    description: "Share your specific requirements with us, outlining the skills, experience, and qualifications you're looking for in a candidate.",
    icon: "📝",
  },
  {
    title: "2) Choose Your Package Plan",
    description: "Select from our flexible package options designed to meet your specific hiring needs and budget.",
    icon: "💼",
  },
  {
    title: "3) See Matching Profiles",
    description: "Discover profiles that align with your criteria. Our platform presents you with a curated selection of candidates tailored to your needs.",
    icon: "👥",
  },
  {
    title: "4) Registration Fees",
    description: "Pay ₹1000 of the total service charge to proceed further with the selected candidate.",
    icon: "💰",
  },
  {
    title: "5) Take Trial Period of Selected Candidate",
    description: "Test the waters with your chosen candidate through a trial period. Evaluate their performance firsthand before making a final commitment.",
    icon: "⏳",
  },
  {
    title: "6) Pay Final Service Charge After Satisfaction",
    description: "Upon being satisfied with the candidate's performance during the trial period, proceed to pay the final service charge for our matchmaking services.",
    icon: "✅",
  },
];

function Process() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="process-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Hiring Process</h2>
          <p>Simple steps to find your perfect candidate</p>
        </div>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step ${index % 2 === 0 ? "left" : "right"} ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              <StepIndicator step={index + 1} currentStep={currentStep} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;