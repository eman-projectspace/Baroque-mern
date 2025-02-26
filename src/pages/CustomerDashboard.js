import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("my-orders");
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/customers/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Fix token format
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/customers/my-orders", {
          headers: { Authorization: `Bearer ${token}` }, // Ensure token is sent properly
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchProfile();
    fetchOrders();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Dashboard</h2>
      {user ? <p className="text-lg">Welcome, {user.name}!</p> : <p>Loading...</p>}

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b pb-2 mt-4">
        <button
          className={`px-4 py-2 ${activeTab === "my-orders" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("my-orders")}
        >
          My Orders
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </button>
      </div>

      {/* Display Content Based on Active Tab */}
      <div className="mt-4">
        {activeTab === "my-orders" && <MyOrders orders={orders} />}
        {activeTab === "profile" && <p>Profile Section (To be implemented)</p>}
      </div>
    </div>
  );
};

export default CustomerDashboard;