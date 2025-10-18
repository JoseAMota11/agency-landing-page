import OurTeamCard from './our-team-card';
import './our-team-section.css';
import Avatar5 from '../assets/avatar-5.png';
import Avatar6 from '../assets/avatar-6.png';
import Avatar7 from '../assets/avatar-7.png';

function OurTeamSection() {
  return (
    <section className="our-team-section">
      <h3 className="our-team-section--title">OUR TEAM</h3>
      <h2 className="our-team-section--description">Meet The Team</h2>
      <div className="our-team-section--cards-container">
        <OurTeamCard>
          <OurTeamCard.Image src={Avatar5} alt="Avatar 5" />
          <OurTeamCard.Name>Vanessa Laird</OurTeamCard.Name>
          <OurTeamCard.Profession>UI Designer</OurTeamCard.Profession>
        </OurTeamCard>
        <OurTeamCard>
          <OurTeamCard.Image src={Avatar6} alt="Avatar 6" />
          <OurTeamCard.Name>Mason Campbell</OurTeamCard.Name>
          <OurTeamCard.Profession>UI Designer</OurTeamCard.Profession>
        </OurTeamCard>
        <OurTeamCard>
          <OurTeamCard.Image src={Avatar7} alt="Avatar 7" />
          <OurTeamCard.Name>Irea Evans</OurTeamCard.Name>
          <OurTeamCard.Profession>Client Manager</OurTeamCard.Profession>
        </OurTeamCard>
      </div>
    </section>
  );
}

export default OurTeamSection;
