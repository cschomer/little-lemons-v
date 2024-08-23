import { Link } from "react-router-dom";
import foodImage from "../../../assets/food/food1.png";

const Heading = () => (
  <header>
    <article className="call-to-action">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="subsection">
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illinois. We focus on traditional recipes served
          with a modern twist.
        </p>
        <br />
        <Link className="action-button" to="/reservations">
          Reserve a table
        </Link>
      </section>

      <section className="hero-image">
        <img src={foodImage} alt="Little Lemon restaurant cuisine" />
      </section>
    </article>
  </header>
);

export default Heading;
