import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import NavLogo from "../assets/nav-logo.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav>
      <div className="burger">
        <img src={NavLogo} alt="Little Lemon logo" className="nav-image" />
        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </div>
      <Navigation device="desktop" />
      {navbarOpen && <Navigation device="mobile" />}
    </nav>
  );
};

export default Navbar;
