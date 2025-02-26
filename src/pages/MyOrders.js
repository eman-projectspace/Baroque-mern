import React from "react";

const MyOrders = ({ orders }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">My Orders</h3>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="border p-4">
          {orders.map((order) => (
            <li key={order._id} className="p-2 border-b">
              <p>Order ID: {order._id}</p>
              <p>Status: {order.status}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Ordered On: {new Date(order.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;