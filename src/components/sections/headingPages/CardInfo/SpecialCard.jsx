import { Link } from "react-router-dom";

const SpecialCard = ({ image, name, price, description }) => (
  <article className="menu-card">
    <img src={image} alt="Special Menu" />
    <section className="menu-card-content">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
      <Link className="special-button" to="/order">
        Order for Delivery
      </Link>
    </section>
  </article>
);

export default SpecialCard;
