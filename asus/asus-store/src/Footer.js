import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-social">
            <li><a href="#" className="social-icon">Facebook</a></li>
            <li><a href="#" className="social-icon">Twitter</a></li>
            <li><a href="#" className="social-icon">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
