import { useEffect, useState } from "react";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);

  // Fetch all admins
  useEffect(() => {
    fetch("http://localhost:8888/api/admin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is sent
      },
    })
      .then((res) => res.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Error fetching admins:", error));
  }, []);

  // Delete admin function
  const deleteAdmin = async (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      try {
        const response = await fetch(`http://localhost:8888/api/admin/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          alert("Admin deleted successfully!");
          setAdmins(admins.filter((admin) => admin._id !== id)); // Update state
        } else {
          alert("Failed to delete admin.");
        }
      } catch (error) {
        console.error("Error deleting admin:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Admins</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id} className="border">
              <td className="p-2 border">{admin.name}</td>
              <td className="p-2 border">{admin.email}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteAdmin(admin._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAdmins;