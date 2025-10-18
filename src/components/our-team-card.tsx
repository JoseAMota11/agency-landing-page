import './our-team-card.css';
import TwitterIcon from '../assets/fa-twitter.svg';
import FacebookIcon from '../assets/fa-facebook-square.svg';
import DribbbleIcon from '../assets/fa-dribbble.svg';

export default function OurTeamCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="our-team-card">
      <div className="our-team-card--content">{children}</div>
      <div className="our-team-card--icons-container">
        <button type="button" className="twitter">
          <img src={TwitterIcon} alt="Twitter icon" />
        </button>
        <button type="button" className="facebook">
          <img src={FacebookIcon} alt="Facebook icon" />
        </button>
        <button type="button" className="dribbble">
          <img src={DribbbleIcon} alt="Dribbble icon" />
        </button>
      </div>
    </div>
  );
}

OurTeamCard.Image = function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="our-team-card--image" />;
};

OurTeamCard.Name = function Name({ children }: { children: React.ReactNode }) {
  return <h4 className="our-team-card--name">{children}</h4>;
};

OurTeamCard.Profession = function Profession({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="our-team-card--profession">{children}</p>;
};
