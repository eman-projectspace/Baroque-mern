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
    return <p className="text-center text-xl font-semibold">Loading users...</p>;
  }

  return (
    <div className="p-6">
      <p className="font-bold text-3xl mb-5 text-orange-500">Manage Users</p>
      <table className="w-full border-collapse border border-gray-400 bg-orange-100">
        <thead>
          <tr className="bg-orange-400 text-white">
            <th className="border border-gray-400 px-4 py-2">No #</th>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="text-center border border-gray-400">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{user._id}</td>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded"
                > Delete</button>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;