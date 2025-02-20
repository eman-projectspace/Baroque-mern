import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SalesChart from "./SalesChart"; // Import the chart component

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Access Denied! Please log in.");
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      console.log("Stored Token:", token);  // ✅ Check if the token is retrieved
      try {
        const response = await fetch("http://localhost:8888/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Fixing Authorization format
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("Profile Data:", data);  // ✅ Log the response to debug
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

  return (
    <div>
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      {user ? (
        <p>Welcome, <strong>{user.name}</strong>!</p>
      ) : (
        <p>Loading...</p>
      )}
    
        {/* Dashboard Chart Section */}
        <div className="mt-8 p-4 border shadow-md ">
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <SalesChart /> 
      </div>

    
    </div>
  );
};

export default AdminDashboard;