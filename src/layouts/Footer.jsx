import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area pt-5 pb-4 bg-light text-dark">
            <div className="container">
                <div className="row">
                    {/* Logo and Description */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <img src="" alt="" width="50" className="mb-2" />
                        <h5 className="text-purple fw-bold">24IN MAID SERVICE</h5>
                        <p className="small">
                            "24in Maid Service" connects skilled house helps and maids with clients in need of their services. Our platform offers a seamless experience.
                        </p>
                        <div className="social-icons">
                            <a href="#"><FaInstagram className="me-3" /></a>
                            <a href="#"><FaFacebookF className="me-3" /></a>
                            <a href="#"><FaLinkedinIn className="me-3" /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Quick Links and Job Categories - side by side on mobile */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="row">
                            <div className="col-sm-6 mb-4 mb-sm-0">
                                <h6 className="footer-heading">Quick Links</h6>
                                <ul className="list-unstyled">
                                {[
                                        { label: 'Home', path: '/' },
                                        { label: 'About Us', path: '/about' },
                                        { label: 'Prices', path: '/pricing' },
                                        { label: 'Contact Us', path: '/contactus' },
                                        { label: 'Privacy Policy', path: '/privacy-policy' },
                                        { label: 'Term & Condition', path: '/terms-condition' }
                                    ].map((item, i) => (
                                        <li key={i}>&rsaquo; <Link to={item.path} className="text-dark text-decoration-none">{item.label}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <h6 className="footer-heading">Job Categories</h6>
                                <ul className="list-unstyled">
                                    {[
                                        'Expert HouseHelps',
                                        'Experienced Cooks',
                                        'Trustworthy Babysitters',
                                        'Newborn Care',
                                        'Elder Care',
                                        'Patient Care',
                                        'Experienced Drivers',
                                    ].map((job, i) => (
                                        <li key={i}>&rsaquo; <a href="#" className="text-dark text-decoration-none">{job}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <h6 className="footer-heading">Contact Us</h6>
                        <ul className="list-unstyled small">
                            <li>
                                <MdLocationOn className="text-purple" /> (REGD): AS 25/ MAHALAXMI NAGAR, Sector A, Vijay Nagar, Indore,
                                MP 452010<br />
                                Contact: 8855055049 / 7987300916 / 7084906501
                            </li>
                            <li className="mt-2">
                                <MdLocationOn className="text-purple" /> Delhi: HOUSE NO. 15, RAILWAY ENCLAVE PHASE 2ND, Girdharpur Rd, near ANANT ENTERPRISES, Ghaziabad, UP 201009<br />
                                Contact: 8855055049
                            </li>
                            <li className="mt-2">
                                <MdLocationOn className="text-purple" /> Mumbai: 107 OMKAR CHS, Veera Desai Road, near Spots Club, Andheri (W), Mumbai 400053<br />
                                Contact: 8855055049 / 7084906501
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="row pt-3 border-top text-center">
                <div className="col-sm-3">
                    <small>Copyright © 2025 All Rights Reserved.</small>
                </div>
                <div className="col-sm-3">
                    <small>Design & Development By <span className="text-purple">Sanjay Vishwakarma</span></small>
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="floating-buttons">
                <a href="tel:9082295602" className="float-btn call"><FaPhoneAlt /></a>
                <a href="https://wa.me/9082295602" target="_blank" rel="noreferrer" className="float-btn whatsapp"><FaWhatsapp /></a>
                <a href="#top" className="float-btn to-top"><FaArrowUp /></a>
            </div>
        </footer>
    );
};

export default Footer;