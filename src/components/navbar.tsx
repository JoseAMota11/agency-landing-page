import './navbar.css';
import Logo from '../assets/logo.svg';
import Button from './button';

function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar-header">
        <img src={Logo} alt="Logo" className="navbar-header--logo" />
      </header>
      <div className="navbar-sections">
        <a href="#" className="navbar-sections--link active">
          Home
        </a>
        <a href="#" className="navbar-sections--link">
          About Us
        </a>
        <a href="#" className="navbar-sections--link">
          Our App
        </a>
        <a href="#" className="navbar-sections--link">
          Contacts
        </a>
      </div>
      <div className="navbar-actions">
        <button>Log in</button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
