import './index.css'
import SocialMedia from "../SocialMedia";

function ContactService() {
  return (

      <div className="contact-service-container"  data-aos="fade-left">
        <div className="main-container">
          <div className="service-container">
            <h6 className="footer-head">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="service-container">
            <h6 className="footer-head">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div className="social-media-container">
          <h6 className="social-head">Social</h6>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
  );
}

export default ContactService;
