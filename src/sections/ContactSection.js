import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_glbajrh",
        "template_2k1ky6o",
        form.current,
        "4UbhdpEZ8XIibz2Le"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      )
      .finally(() => setIsSending(false));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section" id="contact">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaEnvelope /></span>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <FaEnvelope className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href="mailto:poorvisahu975@gmail.com" className="contact-detail-value">poorvisahu975@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Sagar, MP, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306" target="_blank" rel="noreferrer" className="contact-social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Poorvi-tech" target="_blank" rel="noreferrer" className="contact-social-btn">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Full Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your name"
                required
                value={formData.user_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email Address</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="you@example.com"
                required
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                required
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? (
                <>Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>

            {status === "success" && (
              <div className="form-status form-status-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-status form-status-error">
                ✕ Failed to send. Please try emailing me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
