import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // Function to clear the cart (fixing your issue)
  const clearCart = () => {
    setCart([]); // Reset cart to an empty array
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);