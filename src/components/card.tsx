import './card.css';
import Button from './button';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-container">
      {children}
      <Button>Learn More</Button>
    </div>
  );
}

Card.Image = function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="card-image" />;
};

Card.Description = function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="card-description">{children}</p>;
};

Card.Title = function Title({ children }: { children: React.ReactNode }) {
  return <h4 className="card-title">{children}</h4>;
};
