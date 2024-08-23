import Carousel from "./SpecialsCarousel";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";
import menuImage from "../../../assets/menu.webp";

const Specials = () => (
  <section className="specials">
    <article className="specials-topbar">
      <h1>This week's specials</h1>
      <a
        className="action-button"
        href={menuImage}
        target="_blank"
        rel="noreferrer"
      >
        Online Menu
      </a>
    </article>

    <section className="specials-cards">
      <SpecialCard
        image={GreekSalad}
        name="Greek Salad"
        price="$12.99"
        description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
      />
      <SpecialCard
        image={Bruschetta}
        name="Bruschetta"
        price="$16.99"
        description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
      />
      <SpecialCard
        image={LemonDessert}
        name="Lemon Dessert"
        price="$8.99"
        description="A delicious lemon dessert made with fresh lemons and a hint of mint."
      />
    </section>
  </section>
);

export default Specials;
