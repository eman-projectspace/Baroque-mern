import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8888/api/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

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

      // Remove the deleted order from UI
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-600">Manage Orders</h2>

      {loading ? (
        <p className="text-center text-lg">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-lg">No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-green-300">
            <tr>
              {["No#", "Order ID", "Items", "Order Date", "Customer", "Address", "Payment", "Total", "Status", "Actions", "Delete"].map(
                (header) => (
                  <th key={header} className="border p-2 text-left">{header}</th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {orders.map((order, index) => (
              <tr key={order._id} className="border">
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
   <select className="p-1 border rounded" value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(order._id, "Shipped")}
                    className="bg-purple-500 text-white px-3 py-1 mb-1 rounded hover:bg-purple-600"
                  >Ship</button>
                  <button
                    onClick={() => handleStatusChange(order._id, "Delivered")}
                    className="bg-yellow-300 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >Deliver</button>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >Delete</button>
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