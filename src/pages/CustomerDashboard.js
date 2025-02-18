import React from 'react'
import { useEffect, useState } from "react";

   const CustomerDashboard = () => {
      const [user, setUser] = useState(null);
      const token = localStorage.getItem("token");
    
      useEffect(() => {
        const fetchProfile = async () => {
          const response = await fetch("http://localhost:8888/api/customers/profile", {
            headers: { Authorization: token },
          });
          const data = await response.json();
          setUser(data);
        };
    
        fetchProfile();
      }, [token]);
    
      return (
        <div>
          <h2>Customer Dashboard</h2>
          {user ? <p>Welcome, {user.name}!</p> : <p>...</p>}
        </div>
    
    
  );
};

export default CustomerDashboard