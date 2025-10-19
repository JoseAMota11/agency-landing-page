import './navbar.css';
import Logo from '../assets/logo.svg';
import Button from './button';
import type { Dispatch, SetStateAction } from 'react';

function Navbar({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="navbar-sections">
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
      </nav>
      <div className="navbar-actions">
        <button type="button">Log in</button>
        <Button>Sign up</Button>
      </div>
      <button
        type="button"
        className="navbar--menu-btn"
        onClick={(e) => {
          e.stopPropagation();

          setIsOpen(true);
        }}
      >
        <MenuIcon />
      </button>
    </header>
  );
}

export default Navbar;

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
