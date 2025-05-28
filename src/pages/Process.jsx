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
    title: "3) Join Our Community",
    description:
      "Register as a client by paying the nominal registration charges. Gain access to our exclusive services and resources.",
  },
  {
    title: "4) Access Your Dashboard",
    description:
      "Enjoy the convenience of our user-friendly dashboard, offering you access to various benefits, updates, and support services from TWL.",
  },
  {
    title: "5) See Matching Profiles",
    description:
      "Discover profiles that align with your criteria. Our platform presents you with a curated selection of candidates tailored to your needs.",
  },
  {
    title: "6) Make Your Selection",
    description:
      "Choose the candidate who best fits your requirements and expectations. You have the freedom to select from a pool of qualified individuals.",
  },
  {
    title: "7) Take Trial Period of Selected Candidate",
    description:
      "Test the waters with your chosen candidate through a trial period. Evaluate their performance firsthand before making a final commitment.",
  },
  {
    title: "8) Pay Final Service Charge After Satisfaction",
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
    <div className="container process-container py-5">
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
