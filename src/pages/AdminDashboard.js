import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import SalesChart from "./SalesChart"; // Import the chart component
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    if (!token) {
      alert("Access Denied! Please log in.");
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      console.log("Stored Token:", token); // Check if the token is retrieved
      try {
        const response = await fetch("http://localhost:8888/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Fixing Authorization format
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("Profile Data:", data); // Log the response to debug
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

  // Fetch total customers count
  useEffect(() => {
    fetch("http://localhost:8888/api/customer/total-customers")
      .then((res) => res.json())
      .then((data) => setTotalCustomers(data.totalCustomers))
      .catch((err) => console.error("Error fetching total customers:", err));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      {user ? (
        <p>Welcome, <strong>{user.name}</strong>!</p>
      ) : (
        <p>Loading...</p>
      )}

      {/* Display total customers */}
      <div className="mt-4 p-4 border shadow-md">
        <h2 className="text-xl font-bold mb-4">Total Logged-In Customers</h2>
        <p className="text-lg font-semibold">{totalCustomers}</p>
      </div>

      {/* Dashboard Chart Section */}
      <div className="mt-8 p-4 border shadow-md">
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <SalesChart />
      </div>

      <div className="w-full h-16">
        <div>
          {[false].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className={`left-0 w-full z-50 duration-300 h-20 flex cursor-pointer border-t-2 mt-8`}
            >
              <Container fluid className="w-20 inline-block -ml-0">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="mt-2" />
                <Navbar.Brand href="#" />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      BAROQUE
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="text-left">
                      <Link to="/home" className="font-serif">
                        Home
                      </Link>
                      <hr />
                      <br />
                      <Link to="manage-users" className="font-serif">
                        MANAGE USERS
                      </Link>
                      <hr />
                      <br />
                      <Link to="manage-orders" className="font-serif">
                        MANAGE ORDERS
                      </Link>
                      <hr />
                      <br />
                      <Link to="manage-products" className="font-serif">
                        Manage Products
                      </Link>
                      <hr />
                      <br />
                      <Link to="manage-more" className="font-serif">
                        Add More Products
                      </Link>
                      <hr />
                      <br />
                      <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <div className="flex gap-4 mt-2 mb-4 ml-4"></div>
                    <hr />
                    <p className="mt-3 cursor-pointer font-mono inline-block">PAKISTAN</p>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;