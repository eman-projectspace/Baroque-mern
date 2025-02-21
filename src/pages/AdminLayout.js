import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-screen p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4"><Link to="/admin/dashboard">Dashboard</Link></li>
          <li className="mb-4"><Link to="/admin/products">Manage Products</Link></li>
          <li className="mb-4"><Link to="/admin/orders">Manage Orders</Link></li>
          <li className="mb-4"><Link to="/admin/users">Manage Users</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
