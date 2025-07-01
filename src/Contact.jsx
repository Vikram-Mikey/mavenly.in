import './styles/contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <section className="contact-hero-section">
        <div className="contact-hero-section-inner">
          <h2 className="contact-hero-section-title">Contact</h2>
          <p className="contact-hero-section-desc">
            Start the conversation to established good relationship and business.
          </p>
        </div>
      </section>
      <section className="contact-details-section">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Get in touch and let us know how we can help.<br />Whether it’s about courses, enrollment, or support, feel free to reach out—we’re here to help!</p>
          <div className="office">
            <span>Office</span><br />
            Come Say hello at our office:<br />
            451, Kamarajar Road, Peelamedu, Lakshmi Ammal Layout, Hopes College, Coimbatore- 641014, Tamil Nadu
          </div>
          <div className="email">
            <span>Email us</span><br />
            hr@mavenly.in
          </div>
          <div className="talk">
            <span>Let's Talk</span><br />
             +91 63808 06142
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <p>Have a question or need assistance? Fill out the form below, and our team will get back to you soon!</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Company" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;