import { Link } from "react-router-dom";
import menuImage from "../assets/menu.webp";
import navLogo from "../assets/nav-logo.png";

const Navigation = ({ device }) => (
  <nav className={`navbar-menu ${device}`}>
    {device !== "mobile" && (
      <Link to="/">
        <img src={navLogo} alt="Little Lemon logo" className="nav-image" />
      </Link>
    )}
    <Link className="hover-effect" to="/">
      <h1>Home</h1>
    </Link>
    <Link className="hover-effect" to="/about">
      <h1>About</h1>
    </Link>
    <a
      className="hover-effect"
      href={menuImage}
      target="_blank"
      rel="noreferrer"
    >
      <h1>Menu</h1>
    </a>
    <Link className="hover-effect" to="/reservations">
      <h1>Reservations</h1>
    </Link>
    <Link className="hover-effect" to="/order">
      <h1>Order</h1>
    </Link>
    <Link className="hover-effect" to="/login">
      <h1>Login</h1>
    </Link>
  </nav>
);

export default Navigation;
