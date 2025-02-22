import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/orders");
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8888/api/orders/update-status/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order status");
      }

      // Update UI after successful status change
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const response = await fetch(`http://localhost:8888/api/orders/delete/${orderId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete order");
      }

      // Remove the deleted order from the UI
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Manage Orders</h2>

      {loading ? (
        <p className="text-center">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-red-300 border border-red-700">
            <tr>
              <th className="border p-2">No#</th>
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Items</th>
              <th className="border p-2">Order Date</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Payment</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className="text-center border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{order._id}</td>
                <td className="border p-2">
                {order.items.map((item, idx) => (
                <div key={idx}>
                {item.name} (Size: {item.size || "N/A"}) (Qty: {item.quantity})
                </div>
                 ))}
                  </td>

                <td className="border p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">{order.shippingName}</td>
                <td className="border p-2">{order.shippingAddress}</td>
                <td className="border p-2">{order.paymentMethod}</td>
                <td className="border p-2">PKR {order.totalAmount}</td>
                <td className="border p-2">
                  <select
                    className="p-1 border rounded"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(order._id, "Shipped")}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Ship
                  </button>
                  <button
                    onClick={() => handleStatusChange(order._id, "Delivered")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Deliver
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOrders;