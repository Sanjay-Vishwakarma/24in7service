import React, { useState, useEffect } from "react";
import "./Process.css";

function StepIndicator({ step, currentStep }) {
  const isActive = step <= currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="step-circle-wrapper">
      <div
        className={`step-circle ${isActive ? "active" : ""} ${
          isCompleted ? "completed" : ""
        }`}
      >
        <div className="step-number">{step}</div>
        <div className="step-label">Step</div>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "1) Post Your Requirements",
    description:
      "Share your specific requirements with us, outlining the skills, experience, and qualifications you're looking for in a candidate.",
  },
  {
    title: "2) Choose Your Package Plan",
    description:
      "Discover profiles that align with your criteria. Our platform presents you with a curated selection of candidates tailored to your needs.",
  },
 
  {
    title: "3) See Matching Profiles",
    description:
      "Discover profiles that align with your criteria. Our platform presents you with a curated selection of candidates tailored to your needs.",
  },
  {
    title: "4) Registration Fees",
    description:
      "Pay 1000 rs of the total service charge to proceed futher.",
  },

  {
    title: "5) Take Trial Period of Selected Candidate",
    description:
      "Test the waters with your chosen candidate through a trial period. Evaluate their performance firsthand before making a final commitment.",
  },
  {
    title: "6) Pay Final Service Charge After Satisfaction",
    description:
      "Upon being satisfied with the candidate's performance during the trial period, proceed to pay the final service charge for our matchmaking services.",
  },
];

function Process() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="container process-container py-5 pb-5 margin-bottom-30">
      {steps.map((step, index) => (
        <div className="row align-items-center my-5" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="col-md-5 text-end">
                <div className="card-box text-start">
                  {step.title && <h5>{step.title}</h5>}
                  <p>{step.description}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <StepIndicator step={index + 1} currentStep={currentStep} />
              </div>
              <div className="col-md-5 d-none d-md-block"></div>
            </>
          ) : (
            <>
              <div className="col-md-5 d-none d-md-block"></div>
              <div className="col-md-2 d-flex justify-content-center">
                <StepIndicator step={index + 1} currentStep={currentStep} />
              </div>
              <div className="col-md-5 text-start">
                <div className="card-box text-start">
                  {step.title && <h5>{step.title}</h5>}
                  <p>{step.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Process;
