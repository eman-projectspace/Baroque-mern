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
    <div>
      <h2 className="text-3xl font-bold mb-4 ">Manage Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="border-2 border-red-400 h-auto w-auto">
          <thead className="border-2 border-red-400 h-auto w-auto">
            <tr>
              <th>No#</th>
              <th>Order ID</th>
              <th>Items</th>
              <th>Shipping Address</th>
              <th>Payment Method</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,index) => (
              <tr key={order._id}>
                 <td>{index}</td>
                <td>{order._id}</td>
                <td className="text-sm ">
                  {order.items.map((item, index) => (
                    <div key={index}>
                      {item.name} (Qty: {item.quantity})
                    </div>
                  ))}
                </td>
                <td>{order.shippingAddress}</td>
                <td>{order.paymentMethod}</td>
                <td>PKR {order.totalAmount}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleStatusChange(order._id, "Shipped")}>Mark as Shipped</button>
                  <button onClick={() => handleStatusChange(order._id, "Delivered")}>Mark as Delivered</button>
                </td>
                <td>
              <button onClick={() => handleDeleteOrder(order._id)} style={{ color: "red" }}> Delete</button>
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