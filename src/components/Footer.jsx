import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg-watermark">KROMA</div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">KROMA<span className="logo-accent">IND.</span></h2>
            <p className="footer-tagline">
              Pushing the boundaries of industrial safety through cutting-edge engineering and uncompromising design.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">FB</a>
            </div>
          </div>

          <div className="footer-nav-group">
            <div className="link-column">
              <h4>Products</h4>
              <a href="#products">Industrial Gear</a>
              <a href="#accessories">Accessories</a>
              <a href="#innovation">Innovation</a>
              <a href="#">Custom Solutions</a>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <a href="#stories">Kroma Stories</a>
              <a href="#">Our Legacy</a>
              <a href="#">Global Impact</a>
              <a href="#">Careers</a>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Product Care</a>
              <a href="#">Dealer Locator</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} KROMA INDUSTRIAL. ENGINEERED FOR EXTREMES.</p>
          </div>
          <div className="footer-bottom-right">
            <div className="legal-links">
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
              <a href="#">COOKIES</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
