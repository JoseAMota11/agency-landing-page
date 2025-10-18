import './card.css';
import Button from './button';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-container">
      {children}
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi,
        bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor
        nec imperdiet.
      </p>
      <Button>Learn More</Button>
    </div>
  );
}

Card.Image = function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="card-image" />;
};

Card.Title = function Title({ children }: { children: React.ReactNode }) {
  return <h4 className="card-title">{children}</h4>;
};
