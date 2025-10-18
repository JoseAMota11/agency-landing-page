import './testimonial-card.css';

export default function TestimonialCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="testimonial-card">{children}</div>;
}

TestimonialCard.Image = function Image({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <img src={src} alt={alt} className="testimonial-card--image" />;
};

TestimonialCard.Description = function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="testimonial-card--description">{children}</p>;
};

TestimonialCard.ClientName = function ClientName({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="testimonial-card--client-name">{children}</p>;
};

TestimonialCard.Div = function Div({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="testimonial-card--div">{children}</div>;
};
