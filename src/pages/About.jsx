import React from "react";
import flag from "../assets/images/flag.jpg";
import "./About.css";

// Define dynamic data for each section
const sections = [
  {
    title: "Origin Story",
    content: [
      `Founded with a vision to transform the domestic job market, "The Working Lady" (TWL) has a unique origin story that drives our mission and values.`,
      `It all began with a simple idea – to create a platform that connects job seekers and employers in the domestic sector seamlessly.`,
      `From humble beginnings to a thriving community, TWL has evolved into a trusted and reliable resource for those seeking domestic employment solutions.`,
      `As we continue to grow and expand our reach, our origin story remains at the heart of everything we do.`,
      `Join us on this journey as we write the next chapter of success together!`,
    ],
    image: flag,
  },
  {
    title: "Need for TWL",
    content: [
      {
        detail:
          `In today's fast-paced world, finding reliable domestic help or securing a fulfilling domestic job can be a daunting task. This is where "The Working Lady" (TWL) steps in, revolutionizing the way job seekers and employers connect in the domestic job market.`,
      },
    ],
  },
  {
    title: "Why TWL is Essential",
    content: [
      {
        title: "Trust and Reliability",
        detail:
          "TWL verifies both job listings and job seekers for a safe experience.",
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
          "TWL ensures that all job listings are verified, providing job seekers.",
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

// Card Component for each section
const SectionCard = ({ title, content, image }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="utf-sidebar-widget-item">
        <div className="utf-section-headline-item centered margin-top-0 margin-bottom-20">
          <h3>{title}</h3>
        </div>
        <div className="utf-card-content">
          {image && (
            <img src={image} className="img-fluid rounded-10" alt={title} />
          )}
          {/* Render content based on type */}
          {Array.isArray(content) ? (
            content.map((item, index) =>
              typeof item === "string" ? (
                <p key={index}>{item}</p>
              ) : (
                <ul key={index} className="list-2">
                  <li>
                    <strong>{item.title}:</strong> {item.detail}
                  </li>
                </ul>
              )
            )
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="container">
      <div className="row">
        {/* First Row - Origin Story */}
        <div className="col-lg-6">
          <div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
            <h3>Origin Story</h3>
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
            className="img-fluid rounded-10"
            alt="Origin Story"
          />
        </div>
      </div>

      {/* Second Row - Need for TWL */}
      <div className="row">
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

      {/* Second Row - Three Cards (Job Seekers, Employers, Why TWL) */}
      <div className="row">
        {sections.slice(2).map((section, index) => (
          <div className="col-md-4" key={index}>
            <div className="utf-sidebar-widget-item card-shadow">
              <div className="utf-section-headline-item centered margin-top-0 margin-bottom-20">
                <h3>{section.title}</h3>
              </div>
              <div className="utf-card-content">
                {Array.isArray(section.content) ? (
                  section.content.map((item, i) => (
                    <ul key={i} className="list-2">
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
