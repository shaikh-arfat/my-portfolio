import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="section">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3> Email</h3>
            <p>
              <a href="mailto:shaikharfat447@gmail.com">shaikharfat447@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <h3> LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/shaikharfat99/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/shaikharfat99/
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h3> GitHub</h3>
            <p>
              <a href="https://github.com/shaikh-arfat" target="_blank" rel="noopener noreferrer">
                https://github.com/shaikh-arfat
              </a>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message 
          </button>
          {submitted && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;