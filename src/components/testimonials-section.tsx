import './testimonials-section.css';
import TestimonialCard from './testimonial-card';
import Avatar1 from '../assets/avatar-1.png';
import Avatar2 from '../assets/avatar-2.png';
import Avatar3 from '../assets/avatar-3.png';
import Avatar4 from '../assets/avatar-4.png';

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h3 className="testimonials-section--title">TESTIMONIALS</h3>
      <h2 className="testimonials-section--description">
        What clients say about us
      </h2>
      <div className="testimonials-section--card-container">
        <TestimonialCard>
          <TestimonialCard.Image src={Avatar1} alt="Avatar 1" />
          <TestimonialCard.Div>
            <TestimonialCard.Description>
              Get a fully retina ready site when you build with Startup
              Framework. Websites look sharper and more gorgeous on devices with
              retina display support
            </TestimonialCard.Description>
            <TestimonialCard.ClientName>
              Rayhan Curran
            </TestimonialCard.ClientName>
          </TestimonialCard.Div>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialCard.Image src={Avatar2} alt="Avatar 2" />
          <TestimonialCard.Div>
            <TestimonialCard.Description>
              As a business targeting high net worth individuals, we were
              looking for a slick, cool and mini-malistic design for our website
            </TestimonialCard.Description>
            <TestimonialCard.ClientName>
              Kayley Frame
            </TestimonialCard.ClientName>
          </TestimonialCard.Div>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialCard.Image src={Avatar3} alt="Avatar 3" />
          <TestimonialCard.Div>
            <TestimonialCard.Description>
              The most important part of the Startup Framework is the samples
            </TestimonialCard.Description>
            <TestimonialCard.ClientName>
              Gene Whitfield
            </TestimonialCard.ClientName>
          </TestimonialCard.Div>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialCard.Image src={Avatar4} alt="Avatar 4" />
          <TestimonialCard.Div>
            <TestimonialCard.Description>
              I’ve built my website with Startup just in one day, and it was
              ready-to-go.
            </TestimonialCard.Description>
            <TestimonialCard.ClientName>Allan Kim</TestimonialCard.ClientName>
          </TestimonialCard.Div>
        </TestimonialCard>
      </div>
    </section>
  );
}

export default TestimonialsSection;
