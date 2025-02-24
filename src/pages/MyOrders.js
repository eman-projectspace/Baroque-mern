import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/orders/my-orders", {
          headers: { Authorization: token },
        });

        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]); // Ensure it's always an array
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="border p-4 rounded shadow">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
              <p><strong>Ordered on:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;