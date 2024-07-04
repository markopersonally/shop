import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const context = useContext(CartContext);

export function useCart() {
  return context;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
