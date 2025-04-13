import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartNotification, setCartNotification] = useState(false); // Notification state

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart and trigger notification
  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartNotification(true); // Show notification when item is added

    // Hide notification after 2 seconds
    setTimeout(() => {
      setCartNotification(false);
    }, 2000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartNotification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);