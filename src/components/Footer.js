import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-address">교회 주소</p>
          <p className="footer-phone"></p>
          <p className="footer-email">www.wordinmotionchurch.ca</p>
        </div>
        <div className="footer-center">
          <p className="footer-privacy"></p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="#youtube" className="social-icon youtube">
              <span className="youtube-icon">▶</span>
            </a>
            <a href="#facebook" className="social-icon facebook">
              <span className="facebook-icon">f</span>
            </a>
            <a href="#instagram" className="social-icon instagram">
              <span className="instagram-icon">📷</span>
            </a>
          </div>
          <p className="footer-copyright">©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
