import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SalesChart from "./SalesChart";
import React from "react";

  const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [totalSales, setTotalSales] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [salesData, setSalesData] = useState([]); // State for sales chart data

  useEffect(() => {
    if (!token) {
      alert("Access Denied! Please log in.");
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      console.log("Stored Token:", token);
      try {
        const response = await fetch("http://localhost:8888/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("Profile Data:", data);
        if (!data.isAdmin) {
          alert("Access Denied! Admins Only.");
          navigate("/");
          return;
        }

        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Session expired, please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [token, navigate]);

  useEffect(() => {
    fetch("http://localhost:8888/api/customer/total-customers")
      .then((res) => res.json())
      .then((data) => setTotalCustomers(data.totalCustomers))
      .catch((err) => console.error("Error fetching total customers:", err));
  }, []);

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/orders/total-sales");
        const data = await response.json();
        setTotalSales(data.totalSales);
      } catch (error) {
        console.error("Error fetching total sales:", error);
      }
    };

    fetchTotalSales();
  }, []);

  // Fetch sales data for the chart
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/orders/sales-data");
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };
  
    fetchSalesData();
  }, []);


  return (
    <div>
      <div className="h-full w-2/12 bg-black fixed top-0">
        <div>
          <p className="font-bold text-white mt-10 mb-2">ADMIN DASHBOARD</p>
          {user ? (
            <p className="text-white">
              Welcome, <strong>{user.name}</strong>!
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="text-white mt-5 text-left ml-5">
          <Link to="/">&middot; Home</Link><br />
          <Link to="/stitched">&middot;Stitched</Link><br />
          <Link to="/unstitched">&middot;Unstitched</Link><br />
          <Link to="/chantelle">&middot;Chantelle</Link><br />
          <Link to="/readytowear">&middot;Ready to Wear</Link><br />
          <Link to="/seperates">&middot;Separates</Link><br />
          <Link to="/shawls">&middot;Shawls</Link><br />
          <Link to="/specialprices">&middot;Special Prices</Link><br />
        </div>
        <div>
          <p className="text-white mt-5 mb-3">ADD New Admin</p>
          <Link to="/signup" className="text-black bg-white rounded-lg p-2">
            New Admin
          </Link>
        </div>
        <div className="text-white mt-5">
          <Link to="display-admins">&middot; See Admins</Link>
        </div>
      </div>

      <div className="h-auto w-auto gap-5 mt-5 mb-10 ml-56 flex">
        <button className="h-24 w-52 bg-orange-400 text-white font-bold">
          <Link to="manage-users" className="font-serif">LOGIN USERS</Link><br />
          {totalCustomers}
        </button>
        <button className="h-24 w-52 bg-green-400 text-white font-bold">
          <Link to="manage-orders" className="font-serif">ORDERS</Link>
        </button>
        <button className="h-24 w-52 bg-pink-400 text-white font-bold">
          <Link to="manage-products" className="font-serif">Products</Link>
        </button>
        <button className="h-24 w-52 bg-blue-400">
          <Link to="manage-more" className="font-serif text-white font-bold">Add More</Link>
        </button>
      </div>

      {/* Sales Chart */}
      <div className="w-3/4 ml-72 mt-8 p-4 border shadow-md">
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <SalesChart data={salesData} /> {/* Pass sales data to the chart */}
      </div>

      <div className="mt-4 p-4 bg-blue-100 border border-blue-300 rounded-lg">
        <h3 className="text-xl font-semibold">Total Sales</h3>
        <p className="text-lg font-bold">PKR {totalSales.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;