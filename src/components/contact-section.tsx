import './contact-section.css';
import Image3 from '../assets/image-3.png';
import Button from './button';

function ContactSection() {
  return (
    <section className="contact-section">
      <h3 className="contact-section--title">CONTACT</h3>
      <h2 className="contact-section--description">Subscribe Our Newsletter</h2>
      <div className="contact-section--content-container">
        <img src={Image3} alt="Image 3" className="contact-section--image" />
        <div className="contact-section--content">
          <p className="contact-section--paragraph">
            Join our community and be the first to know about new updates,
            special promotions, and useful tips every week.
          </p>
          <input
            type="text"
            placeholder="Your E-mail here..."
            className="contact-section--input"
          />
          <Button>Subscribe Our Newsletter</Button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
