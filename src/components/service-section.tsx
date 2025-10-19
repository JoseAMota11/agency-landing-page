import './service-section.css';
import Image2 from '../assets/image-2.jpg';
import Card from './card';
import Icon2 from '../assets/icon-2.svg';
import Icon3 from '../assets/icon-3.svg';
import Icon4 from '../assets/icon-4.svg';

function ServiceSection() {
  return (
    <section className="service-section">
      <h3 className="service-section--title">SERVICE</h3>
      <h2 className="service-section--description">Our Vision And Our Goal</h2>
      <div className="service-section--cards-container">
        <Card>
          <Card.Image src={Icon2} alt="Icon 2" />
          <Card.Title>Graphic Design</Card.Title>
          <Card.Description>
            We create modern and eye-catching visuals that bring your brand’s
            identity to life and connect with your audience.
          </Card.Description>
        </Card>
        <Card>
          <Card.Image src={Icon3} alt="Icon 3" />
          <Card.Title>Video Editing</Card.Title>
          <Card.Description>
            From concept to final cut, we craft engaging videos that capture
            attention and tell your story with impact.
          </Card.Description>
        </Card>
        <Card>
          <Card.Image src={Icon4} alt="Icon 4" />
          <Card.Title>Digital Marketing</Card.Title>
          <Card.Description>
            Boost your online presence with targeted campaigns designed to
            increase visibility, engagement, and conversions.
          </Card.Description>
        </Card>
      </div>
      <div className="service-section--container">
        <div>
          <h3 className="service-section--subtitle">
            Many Blocks and Components
          </h3>
          <p className="service-section--subtitle__description">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design.
          </p>
          <button>Explore</button>
        </div>
        <img src={Image2} alt="Image2" className="service-section--image" />
      </div>
    </section>
  );
}

export default ServiceSection;
