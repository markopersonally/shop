import Section from "@/components/section.jsx";
import H2 from "@/components/h2.jsx";
import { useCart } from "@/context/CartContext";

export default function Store() {
  const { cart } = useCart();

  return (
    <Section>
      <H2>Your Cart</H2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </Section>
  );
}
