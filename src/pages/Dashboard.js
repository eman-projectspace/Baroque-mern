import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("http://localhost:8888/api/accounts/profile", {
        headers: { Authorization: token },
      });
      const data = await response.json();
      setUser(data);
    };

    fetchProfile();
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.name}!</p> : <p>...</p>}
      <button onClick={() => Navigate("/editproduct")}>Edit Product</button>
    </div>
  );
};

export default Dashboard;
