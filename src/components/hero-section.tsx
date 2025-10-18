import './hero-section.css';
import Button from './button';
import Icon1 from '../assets/icon-1.svg';
import Image1 from '../assets/image-1.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section--content">
        <h1 className="hero-section--title">
          <span>We boost</span>
          <span>growth for your</span>
          <span>startup business</span>
        </h1>
        <p className="hero-section--description">
          Our goal is top at the heart of creativity services industry as a
          digital creator. It has a comment after it
        </p>
        <div className="hero-section--actions">
          <Button>Get Started</Button>
          <div className="hero-section--learn-more">
            <img src={Icon1} alt="Icon 1" />
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <img src={Image1} alt="Image 1" className="hero-section--image" />
    </section>
  );
}

export default HeroSection;
