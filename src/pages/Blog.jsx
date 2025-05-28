import React from "react";
import "./Blog.css";

function Blog() {
  const blogs = [
    {
      title: "Why Hiring a Professional Maid Saves Time and Stress",
      image: "https://source.unsplash.com/800x500/?maid,cleaning",
      excerpt:
        "Discover how a professional maid can transform your daily routine and help maintain a clean, peaceful home environment.",
      link: "#",
    },
    {
      title: "5 Qualities to Look for in a Trusted Domestic Worker",
      image: "https://source.unsplash.com/800x500/?housekeeper,trust",
      excerpt:
        "Learn what characteristics make a domestic worker reliable, skilled, and a perfect fit for your household needs.",
      link: "#",
    },
    {
      title: "How to Build a Healthy Relationship with Your Maid",
      image: "https://source.unsplash.com/800x500/?maid,home",
      excerpt:
        "Building mutual respect and good communication ensures long-term satisfaction and trust with your maid.",
      link: "#",
    },
  ];

  return (
    <div className="container margin-top-40">
      <h2 className="text-center mb-5">Our Latest Blog Posts</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="blog-card shadow-sm h-100">
              <img
                src={blog.image}
                className="img-fluid blog-image"
                alt={blog.title}
              />
              <div className="p-3">
                <h5 className="blog-title">{blog.title}</h5>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href={blog.link} className="btn btn-sm btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
