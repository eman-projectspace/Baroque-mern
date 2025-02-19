import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="p-6">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      {user ? (
        <p>Welcome, <strong>{user.name}</strong>!</p>
      ) : (
        <p>Loading...</p>
      )}

      {/* Admin Sections */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="border p-4 shadow-md">
          <h2 className="text-xl font-bold">Manage Products</h2>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Products</button>
        </div>

        <div className="border p-4 shadow-md">
          <h2 className="text-xl font-bold">Manage Orders</h2>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">View Orders</button>
        </div>

        <div className="border p-4 shadow-md">
          <h2 className="text-xl font-bold">Manage Customers</h2>
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">View Customers</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;