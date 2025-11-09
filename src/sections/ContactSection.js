import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_glbajrh",   
        "template_2k1ky6o",   
        form.current,
        "4UbhdpEZ8XIibz2Le"  
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          alert("Failed to send message ❌");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Your Name" 
          required 
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Your Email" 
          required 
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {/* Social Links */}
      <div className="social-links">
        <a href="mailto:poorvisahu975@gmail.com" target="_blank" rel="noreferrer">📧</a>
        <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">🔗</a>
        <a href="https://github.com/Poorvi-tech" target="_blank" rel="noreferrer">🖥</a>
      </div>
    </section>
  );
};

export default ContactSection;
