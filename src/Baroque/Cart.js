import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();  // Access cart and removeFromCart from context

  if (cart.length === 0) {
    return <p className="text-center m-52 font-bold text-3xl  ">Your cart is empty</p>;
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-4 mb-3">
        Your Cart</h1>
      <div className="flex flex-col md:items-center md:p-10 gap-10 ">
        {cart.map((product) => (
          <div key={product._id} className="flex flex-col md:flex-row items-center justify-between w-full p-4 border-b">
            <img src={product.image} alt={product.name} className="md:w-24 h-auto w-72 " />
            <div className="ml-4">
              <h3 className="text-lg font-semibold mt-3 md:mt-0 mb-2">{product.name}</h3>
              <p >PKR {product.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(product._id)}  // Remove the product from the cart
              className="bg-orange-500 text-white px-4 py-2 mt-2 mb-2 rounded-lg"
                        >
              Remove
            </button>
            <Link to="/checkout" className="bg-purple-500 text-white px-6 py-2 rounded-lg">Proceed to Checkout</Link>

          </div>
          
        ))}
      </div>
      <Link to="/" className="text-blue-500 mt-4">Continue Shopping</Link>
    </div>
  );
};

export default Cart;

