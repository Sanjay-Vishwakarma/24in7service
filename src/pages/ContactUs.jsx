import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API logic here
    console.log("Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const addressList = [
    {
      city: "Indore (Regd)",
      address:
        "AS 25/ MAHALAXMI NAGAR, Sector A, Vijay Nagar, Indore, Madhya Pradesh 452010",
      phones: ["8855055049", "7987300916", "7084906501"],
    },
    {
      city: "Delhi",
      address:
        "HOUSE NO. 15, RAILWAY ENCLAVE PHASE 2ND, Girdharpur Rd, near ANANT ENTERPRISES, Lal Kuan, Ghaziabad, Uttar Pradesh 201009",
      phones: ["8855055049"],
    },
    {
      city: "Mumbai",
      address:
        "107 OMKAR CHS, Veera Desai Road, near Spots Club, Andheri (W), Mumbai 400053, Maharashtra",
      phones: ["8855055049", "7084906501"],
    },
  ];

  return (
    <div className="container margin-top-40">
      <div className="row">
        {/* Contact Info */}
        <div className="col-lg-4 mb-4">
          <h3 className="mb-3">
            <i className="icon-feather-map-pin" /> Office Address
          </h3>
          <p><strong>Phone:</strong> 8855055049, 7987300916</p>
          <p><strong>Email:</strong> contact@theworkinglady.in</p>

          {addressList.map((loc, index) => (
            <div key={index} className="contact-card mb-4">
              <h5>{loc.city}</h5>
              <p>{loc.address}</p>
              <p>
                <strong>Contact:</strong> {loc.phones.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="col-lg-8 mb-4">
          <h3 className="mb-3">
            <i className="icon-material-outline-description" /> Contact Form
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="10-digit mobile"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Write your message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary mt-2">
                  Submit Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
