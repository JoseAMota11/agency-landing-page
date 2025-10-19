import './footer.css';
import Logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container">
        <img src={Logo} alt="Logo" className="footer--logo" />
        <p className="footer--copyright">
          &copy; {new Date().getFullYear()} Epixelab. All rights reserved.
        </p>
        <div className="footer-link--container">
          <a href="#" className="footer-link--item">
            Portfolio
          </a>
          <a href="#" className="footer-link--item">
            How it Works
          </a>
          <a href="#" className="footer-link--item">
            Pricing
          </a>
          <a href="#" className="footer-link--item">
            About
          </a>
          <a href="#" className="footer-link--item">
            Login
          </a>
        </div>
      </div>
      <div className="footer--divider" />
      <p className="footer--disclaimer">
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>
    </footer>
  );
}

export default Footer;
