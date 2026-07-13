import { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your message has been sent successfully.`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="w-full py-10 px-4 md:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

        {/* Left Sidebar Card */}
        <aside
          className="w-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 flex flex-col gap-6 shadow-2xl shadow-[var(--color-card-shadow)]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-[var(--color-text-body)] text-3xl font-extrabold flex items-center gap-3">
              <FiMail className="text-[var(--color-primary)]" />
              Contact
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-2 font-normal">
              I am actively seeking internship and entry-level opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects.
            </p>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          {/* Contact Details Card */}
          <div className="flex flex-col gap-4 text-xs text-[var(--color-text-muted)] font-normal">
            <div className="flex items-center gap-3 p-3 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl">
              <FiPhone className="text-lg text-[var(--color-primary)] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold text-[var(--color-text-muted)]">Call Me</span>
                <span className="font-semibold text-[var(--color-text-body)]">+8801305282768</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl">
              <FiMail className="text-lg text-[var(--color-primary)] shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] uppercase font-bold text-[var(--color-text-muted)]">Email</span>
                <span className="font-semibold text-[var(--color-text-body)] truncate">zenuilibrary@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl">
              <FiMapPin className="text-lg text-[var(--color-primary)] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold text-[var(--color-text-muted)]">Location</span>
                <span className="font-semibold text-[var(--color-text-body)]">Kulaura, Moulvibazar, Sylhet</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-card-border)]"></div>

          {/* Socials Connection */}
          <div>
            <h3 className="text-[var(--color-text-body)] font-semibold text-xs mb-3 uppercase tracking-wider">
              Social Channels
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-[var(--color-text-body)] transition-all duration-300"
              >
                <FiFacebook className="text-lg" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-[var(--color-text-body)] transition-all duration-300"
              >
                <FiTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-[var(--color-text-body)] transition-all duration-300"
              >
                <FiInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-[var(--color-link-bg)] border border-[var(--color-card-border)] rounded-xl hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-[var(--color-text-body)] transition-all duration-300"
              >
                <FiLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </aside>

        {/* Right Section - Contact Form Card */}
        <main
          className="w-full flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-duration="800"
        >

          <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[var(--color-card-shadow)]">
            <div className="flex flex-col gap-1 mb-5">
              <h1 className="text-[var(--color-text-body)] text-3xl font-extrabold flex items-center gap-3">
                <FiMail className="text-[var(--color-primary)]" />
                Get In Touch
              </h1>
              <p className="text-[var(--color-text-muted)] text-sm font-medium">Feel free to reach out for collaborations, project discussions, or career opportunities.</p>
            </div>

            <div className="border-t border-[var(--color-card-border)]"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-body)]">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-link-bg)]/40 border border-[var(--color-card-border)] text-sm text-[var(--color-text-body)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-body)]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-link-bg)]/40 border border-[var(--color-card-border)] text-sm text-[var(--color-text-body)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-body)]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-link-bg)]/40 border border-[var(--color-card-border)] text-sm text-[var(--color-text-body)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-body)]">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-link-bg)]/40 border border-[var(--color-card-border)] text-sm text-[var(--color-text-body)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-body)]">Write Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-link-bg)]/40 border border-[var(--color-card-border)] text-sm text-[var(--color-text-body)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2.5 px-8 py-3 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-link-bg)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03]"
                >
                  <FiSend className="text-base" />
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </main>

      </div>
    </section>
  );
};

export default Contact;
