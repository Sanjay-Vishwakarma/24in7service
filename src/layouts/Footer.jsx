import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area pt-5 pb-4 bg-light text-dark">
            <div className="container">
                <div className="row g-4">
                    {/* Logo and Description */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-brand mb-3">
                            <h4 className="text-purple fw-bold mb-3">
                                <span className="brand-icon">🧹</span> 24IN MAID SERVICE
                            </h4>
                        </div>
                        <p className="small text-muted mb-4">
                            "24in Maid Service" connects skilled house helps and maids with clients in need of their services. Our platform offers a seamless experience.
                        </p>
                        <div className="social-icons d-flex">
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                            <a href="#" className="social-icon"><FaLinkedinIn /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Quick Links and Job Categories - side by side on all screens */}
                    <div className="col-lg-6 col-md-12 col-12 footer-links-container px-0">
                        <div className="d-flex flex-row flex-nowrap"> {/* Changed to flex row */}
                            <div className="flex-grow-1 pe-2"> {/* First column */}
                                <h6 className="footer-heading">Quick Links</h6>
                                <ul className="list-unstyled footer-links">
                                    {[
                                        { label: 'Home', path: '/' },
                                        { label: 'About Us', path: '/about' },
                                        { label: 'Prices', path: '/pricing' },
                                        { label: 'Contact Us', path: '/contactus' },
                                        { label: 'Privacy Policy', path: '/privacy-policy' },
                                        { label: 'Terms & Conditions', path: '/terms-condition' }
                                    ].map((item, i) => (
                                        <li key={i} className="mb-2">
                                            <Link to={item.path} className="footer-link">
                                                <span className="link-arrow">›</span> {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-grow-1 ps-2"> {/* Second column */}
                                <h6 className="footer-heading">Job Categories</h6>
                                <ul className="list-unstyled footer-links">
                                    {[
                                        'House Helps',
                                        'Expert Cooks',
                                        'Babysitters',
                                        'Newborn Care',
                                        'Elder Care',
                                        'Patient Care',
                                        'Drivers',
                                    ].map((job, i) => (
                                        <li key={i} className="mb-2">
                                            <a href="#" className="footer-link">
                                                <span className="link-arrow">›</span> {job}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-contact">
                            <h6 className="footer-heading mb-3">Contact Us</h6>
                            <ul className="list-unstyled small">
                                <li className="mb-3">
                                    <div className="contact-item">
                                        <MdLocationOn className="text-purple me-2" />
                                        <div>
                                            <strong>Indore (REGD):</strong>
                                            <p className="mb-1">AS 25/ Mahalaxmi Nagar, Vijay Nagar, MP 452010</p>
                                            <span>8855055049 / 7987300916</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="contact-item">
                                        <MdLocationOn className="text-purple me-2" />
                                        <div>
                                            <strong>Delhi:</strong>
                                            <p className="mb-1">House No. 15, Railway Enclave Phase 2nd, Ghaziabad</p>
                                            <span>8855055049</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="contact-item">
                                        <MdLocationOn className="text-purple me-2" />
                                        <div>
                                            <strong>Mumbai:</strong>
                                            <p className="mb-1">107 Omkar CHS, Andheri (W), Mumbai 400053</p>
                                            <span>8855055049 / 7084906501</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom pt-4 mt-4 border-top text-center">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <p className="small text-muted mb-0">
                                Copyright © 2025 24IN MAID SERVICE. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="floating-buttons">
                <a href="tel:9082295602" className="float-btn call" aria-label="Call us">
                    <FaPhoneAlt />
                </a>
                <a href="https://wa.me/9082295602" target="_blank" rel="noreferrer" className="float-btn whatsapp" aria-label="WhatsApp us">
                    <FaWhatsapp />
                </a>
                <a href="#top" className="float-btn to-top" aria-label="Back to top">
                    <FaArrowUp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;