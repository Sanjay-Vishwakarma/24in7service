import React, { useEffect } from "react";
import flag from "../assets/images/flag.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const sections = [
  {
    title: "Our Vision",
    content: [
      "To become India’s most trusted and accessible platform for connecting homes with reliable, trained, and background-verified domestic helpers — including maids, cooks, babysitters, drivers, and elder care providers.",
      "We aim to simplify the hiring process by partnering with trusted maid bureaus and offering a seamless experience through digital convenience, transparency, and ongoing support.",
      "By addressing the challenges of finding dependable domestic help across urban and semi-urban India, we envision building a nationwide ecosystem that empowers households and creates dignified job opportunities for domestic workers.",
    ],
    image: flag,
  },
  {
    title: "Need for 24IN MAID SERVICE",
    content: [
      {
        detail: `In today's fast-paced world, finding reliable domestic help or securing a fulfilling domestic job can be a daunting task. This is where "24IN MAID SERVICE" steps in, revolutionizing the way job seekers and employers connect in the domestic job market.`,
      },
    ],
  },
  {
    title: "Why 24IN MAID SERVICE is Essential",
    content: [
      {
        title: "Trust and Reliability",
        detail:
          "24IN MAID SERVICE verifies both job listings and job seekers for a safe experience.",
      },
      {
        title: "Time and Effort Saving",
        detail:
          "Our platform is easy to use for both job seekers and employers.",
      },
      {
        title: "Quality Matches",
        detail: "Smart matching ensures the right people find the right jobs.",
      },
      {
        title: "Supportive Environment",
        detail:
          "We offer guidance throughout the job search and hiring journey.",
      },
    ],
  },
  {
    title: "For Job Seekers",
    content: [
      {
        title: "Access to Verified Opportunities",
        detail:
          "24IN MAID SERVICE ensures that all job listings are verified, providing job seekers.",
      },
      {
        title: "Effortless Application Process",
        detail:
          "Easily create profiles and apply to multiple jobs with just a few clicks.",
      },
      {
        title: "Flexible Work Options",
        detail:
          "Choose from full-time, part-time, or freelance jobs to match your lifestyle.",
      },
    ],
  },
  {
    title: "For Employers",
    content: [
      {
        title: "Efficient Hiring Process",
        detail: "Receive applications from qualified candidates quickly.",
      },
      {
        title: "Candidate Screening",
        detail:
          "Review resumes and credentials to make informed hiring decisions.",
      },
      {
        title: "Customized Filters",
        detail:
          "Use advanced search filters to find the right candidate faster.",
      },
      {
        title: "Transparent Communication",
        detail: "Discuss job details clearly and efficiently with applicants.",
      },
    ],
  },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container about-container">
      {/* First Section */}
      <div className="row align-items-center mb-5" data-aos="fade-up">
        <div className="col-lg-6">
          <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
            <h3 className="fw-bold text-uppercase">{sections[0].title}</h3>
          </div>
          <div className="utf-card-content">
            {sections[0].content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={sections[0].image}
            className="img-fluid rounded-10 shadow"
            alt="Origin Story"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="row" data-aos="fade-right">
        <div className="col-12 mb-4">
          <div className="utf-sidebar-widget-item card-shadow">
            <div className="utf-section-headline-item centered margin-top-0 margin-bottom-20">
              <h3>{sections[1].title}</h3>
            </div>
            <div className="utf-card-content">
              {sections[1].content.map((item, index) => (
                <p key={index}>{item.detail}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Sections */}
      <div className="row">
        {sections.slice(2).map((section, index) => (
          <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">
            <div className="utf-sidebar-widget-item card-shadow h-100">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-20">
                <h3>{section.title}</h3>
              </div>
              <div className="utf-card-content">
                {Array.isArray(section.content) ? (
                  section.content.map((item, i) => (
                    <ul key={i} className="list-unstyled">
                      <li>
                        <strong>{item.title}:</strong> {item.detail}
                      </li>
                    </ul>
                  ))
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
