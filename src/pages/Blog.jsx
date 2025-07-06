import React from "react";
import './Blog.css';

import CleaningServices from "@mui/icons-material/CleaningServices";
import PeopleIcon from "@mui/icons-material/People";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HomeIcon from "@mui/icons-material/Home";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WorkIcon from "@mui/icons-material/Work";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PaymentsIcon from "@mui/icons-material/Payments";


const Blog = () => {
  const blogs = [
    {
      title: "Why Professional Maid Services Are Worth the Investment",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      excerpt: "Discover how professional cleaning services can save you money while giving you back precious time.",
      category: "Benefits",
      date: "May 15, 2023",
      readTime: "4 min read",
      icon: <CleaningServices color="primary" />,
    },
    {
      title: "How to Find Trustworthy Domestic Help for Your Family",
      image: "https://images.unsplash.com/photo-1582731594635-6b6a2498c1a1",
      excerpt: "Essential tips for vetting and selecting reliable household staff you can trust.",
      category: "Hiring Tips",
      date: "June 2, 2023",
      readTime: "6 min read",
      icon: <PeopleIcon color="primary" />,
    },
    {
      title: "Creating a Positive Work Environment for Your Maid",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      excerpt: "Learn how proper treatment leads to long-term, satisfying domestic help relationships.",
      category: "Management",
      date: "June 18, 2023",
      readTime: "5 min read",
      icon: <EmojiPeopleIcon color="primary" />,
    },
    {
      title: "Daily Cleaning Routines Every Busy Home Should Adopt",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      excerpt: "Simple habits that maintain cleanliness between professional maid visits.",
      category: "Cleaning Tips",
      date: "July 5, 2023",
      readTime: "7 min read",
      icon: <HomeIcon color="primary" />,
    },
    {
      title: "Health Benefits of a Consistently Clean Home",
      image: "https://images.unsplash.com/photo-1571902943201-8ec2c1e9c9f1",
      excerpt: "Scientific evidence showing how regular cleaning reduces illness.",
      category: "Health",
      date: "July 22, 2023",
      readTime: "5 min read",
      icon: <HealthAndSafetyIcon color="primary" />,
    },
    {
      title: "Specialized Maid Services for Different Home Needs",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      excerpt: "Understanding the different types of maid services available.",
      category: "Services",
      date: "August 8, 2023",
      readTime: "6 min read",
      icon: <WorkIcon color="primary" />,
    },
    {
      title: "Creating Fair Work Schedules for Domestic Help",
      image: "https://images.unsplash.com/photo-1507679799987-737527159533",
      excerpt: "Establish balanced working hours that respect your maid's time.",
      category: "Management",
      date: "August 25, 2023",
      readTime: "4 min read",
      icon: <ScheduleIcon color="primary" />,
    },
    {
      title: "Understanding Fair Wages for Domestic Workers",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      excerpt: "A guide to competitive compensation packages for quality staff.",
      category: "Hiring Tips",
      date: "September 12, 2023",
      readTime: "8 min read",
      icon: <PaymentsIcon color="primary" />,
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-5">
        Maid Service Insights & Tips
      </h2>
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-12 col-sm-6 col-md-4 d-flex" key={index}>
            <div className="card blog-card h-100 w-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body d-flex flex-column">
                <span className="badge bg-warning mb-2">{blog.category}</span>
                <h5 className="card-title fw-semibold">{blog.title}</h5>
                <p className="card-text text-muted mb-3">{blog.excerpt}</p>
                <div className="mt-auto d-flex justify-content-between small text-secondary">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <div className="card-footer bg-primary text-white text-center fw-medium">
                Read More
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
