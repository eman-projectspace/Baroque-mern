import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePlaceOrder = () => {
    if (!shippingAddress) {
      alert("Please enter a shipping address.");
      return;
    }

    const orderDetails = {
      items: cart,
      shippingAddress,
      paymentMethod,
      totalAmount,
    };

    console.log("Order Placed:", orderDetails);
    alert("Order placed successfully!");

    clearCart(); // Clear cart after placing order
    navigate("/"); // Redirect to home or confirmation page
  };

  if (cart.length === 0) {
    return <p className="text-center m-52 font-bold text-3xl">Your cart is empty</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-3xl">Checkout</h1>

      {/* Cart Summary */}
      <div className="mt-6">
        {cart.map((product) => (
          <div key={product._id} className="flex justify-between border-b p-4">
            <p>{product.name}</p>
            <p>PKR {product.price}</p>
          </div>
        ))}
        <p className="font-bold mt-4">Total: PKR {totalAmount}</p>
      </div>

      {/* Shipping Address */}
      <div className="mt-6">
        <label className="block font-semibold">Shipping Address:</label>
        <input
          type="text"
          className="w-full p-2 border"
          placeholder="Enter your address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </div>

      {/* Payment Method */}
      <div className="mt-4">
        <label className="block font-semibold">Payment Method:</label>
        <select className="w-full p-2 border" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Credit Card">Credit Card</option>
        </select>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder} className="mt-6 bg-black text-white px-6 py-2 w-full">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
