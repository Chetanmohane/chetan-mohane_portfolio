import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);


// This is the formspree link for the contact form 


    try {
      const response = await fetch("https://formspree.io/f/xwvwwelq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Let's build something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              I'm currently available for freelance work and full-time positions.
              Reach out and let's discuss your project.
            </p>

            <div className="contact-items">
              <div className="contact-item glass-card">
                <div className="contact-icon">📧</div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:Chetanmohane27@gmail.com" className="contact-value" id="email-contact">
                    Chetanmohane27@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item glass-card">
                <div className="contact-icon">📱</div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+918120063755" className="contact-value" id="phone-contact">
                    +91 81200 63755
                  </a>
                </div>
              </div>
              <div className="contact-item glass-card">
                <div className="contact-icon">📍</div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Bhopal, MP 🇮🇳</span>
                </div>
              </div>
              <div className="contact-item glass-card">
                <div className="contact-icon">⏱️</div>
                <div>
                  <span className="contact-label">Response Time</span>
                  <span className="contact-value">Within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="availability-badge">
              <span className="avail-dot" />
              <span>Currently available for new projects</span>
            </div>
          </div>

          <div className="contact-form-wrap glass-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)} id="send-another-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary submit-btn" id="submit-contact-btn" disabled={loading}>
                  {loading ? (
                    <span className="loading-spinner" />
                  ) : (
                    <><span>🚀</span> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
