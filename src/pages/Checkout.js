import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePlaceOrder = async () => {
    if (!shippingAddress || !shippingName) {
      alert("Please fill the information.");
      return;
    }
  
    const orderDetails = {
      items: cart.map(item => ({
        id: item._id,
        name: item.name,
        price: item.price,
        selectedSize: item.selectedSize, // Include size
        quantity: item.quantity,         // Include quantity
      })),
      shippingName, 
      shippingAddress,
      paymentMethod,
      totalAmount,
    };
    
  
    try {
      const response = await fetch("http://localhost:8888/api/orders/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
        clearCart(); // Clear cart after successful order
        navigate("/"); // Redirect to home or order confirmation page
      } else {
        alert("Error placing order: " + data.error);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Failed to place order. Please try again.");
    }
  };
  

  return (
    <div className="pt-10 pl-10 pr-10 pb-5 ml-5 mr-5 shadow-lg border-2 border-black">
      <h1 className="text-center font-bold text-3xl">Checkout</h1>

      {/* Cart Summary */}
      {cart.map((product) => (
  <div key={product._id} className="flex justify-between border-b-2">
    <div>
      <p className="font-semibold">{product.name}</p>
      <p>Size: <span className="font-bold">{product.selectedSize}</span></p>
      <p>Quantity: <span className="font-bold">{product.quantity}</span></p>
    </div>
    <p>PKR {product.price}</p>
  </div>
))}


      {/* Shipping Address */}
      <div>
        <label className="block font-semibold">Shipping Details:</label>
        <input type="text" className={`w-full p-2 border ${!shippingName && "border-red-500"}`}
         placeholder="Enter your Name" value={shippingName} onChange={(e) => setShippingName(e.target.value)}/>
         <br/> <br/>
        <input
          type="text" className={`w-full p-2 border ${!shippingAddress && "border-red-500"}`}
          placeholder="Enter your address"value={shippingAddress}onChange={(e) => setShippingAddress(e.target.value)}/>
         
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