import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8888/api/customer/all");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this customer?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8888/api/customer/delete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to delete customer");
      }

      alert(result.message);
      fetchUsers(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <p className="font-bold text-3xl mb-5">Manage Users</p>
      <table className="border-2 border-blackc w-full h-full bg-slate-200 border-slate-500" >
        <thead>
          <tr className="border-b-2 border-2 border-black">
            <th>No #</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
               <td>{index + 1}</td> {/* Numbering starts from 1 */}
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;