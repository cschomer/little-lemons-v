import Star from "../../../../assets/star.png";

const TestimonialCard = ({ name, description }) => (
  <article className="testimonial-card">
    <img src={Star} alt="delivery Icon" />
    <h3>{name}</h3>
    <p>{description}</p>
  </article>
);

export default TestimonialCard;
