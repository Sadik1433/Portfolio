import { useState } from "react";
import "./index.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact">
        <div className="contact-container" data-aos="fade-right">
          <div className="contact-para-container ">
            <p className="contact-para">
              I'm skilled in Java, Python, JavaScript, SQL, HTML, CSS, React,
              and Node.js. I specialize in building full-stack web applications
              with clean UI and efficient backend services. Have a project in
              mind or need help with your website or app? Feel free to reach out
              through the form below!
            </p>
          </div>
        </div>
        <div className="form-container" data-aos="slide-left">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Me!</h2>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-note">
        <div className="contact-info">
          I'll get back to you as soon as possible. Thank you for reaching out!
          <br />
          Based in India 🌐 | Available for freelance & full-time work
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
