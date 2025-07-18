// Same imports...
import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Nevigation() {
  const { cart, cartNotification } = useCart();
  const navigate = useNavigate();

  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`fixed top-0 left-0 w-full z-50 duration-300 h-14 ${scrolled ? "bg-white shadow-sm" : "bg-transparent mt-8"
            }`}
        >
          <Container fluid className="flex items-center justify-between px-4">
            {/* --- Toggle --- */}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0"
            />

            {/* --- Sidebar --- */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              placement="start"

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>BAROQUE</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="text-left space-y-3">
                  {[
                    ["chantelle", "CHANTELLE"],
                    ["unstitched", "UNSTITCHED"],
                    ["stitched", "STITCHED"],
                    ["readytowear", "READY TO WEAR"],
                    ["specialprices", "SPECIAL PRICES"],
                    ["seperates", "SEPARATES"],
                    ["shawls", "SHAWLS"],
                  ].map(([path, label]) => (
                    <React.Fragment key={path}>
                      <Link to={`/${path}`} className="font-serif">
                        {label}
                      </Link>
                      <hr />
                    </React.Fragment>
                  ))}
                </Nav>

                <NavDropdown title="Dropdown" className="mt-3">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <div className="flex gap-4 mt-4 ml-2">
                  {["20/20837", "1077/1077042", "1384/1384028"].map((icon, i) => (
                    <img
                      key={i}
                      src={`https://cdn-icons-png.flaticon.com/128/${icon}.png`}
                      alt=""
                      className="w-5 h-5"
                    />
                  ))}
                </div>
                <p className="mt-4">PAKISTAN</p>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* --- Center Logo --- */}
            <div className="flex-1 flex justify-center">
              <img
                className="h-10"
                src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=150"
                alt="Baroque Logo"
              />
            </div>

            {/* --- Right Side Icons --- */}
            <div className="flex items-center gap-3 relative">
              {/* Hide on small screen */}
              <p className="hidden md:block text-sm">Pakistan</p>

              <button onClick={() => navigate("/select")} className="hidden md:block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
                  className="w-5 h-5"
                  alt="Location"
                />
              </button>

              <button onClick={() => navigate("/customerSignup")} className="hidden md:block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
                  className="w-5 h-5"
                  alt="User"
                />
              </button>

              <button onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                  className="w-5 h-5"
                  alt="Search"
                />
              </button>

              <button onClick={() => navigate("/cart")} className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png"
                  className="w-5 h-5"
                  alt="Cart"
                />
                {cart.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </div>
                )}
                {cartNotification && (
                  <div className="absolute top-0 right-0 text-xs text-blue-600">!</div>
                )}
              </button>
            </div>
          </Container>
        </Navbar>
      ))}

      {/* --- Search Input --- */}
      {isAvailabilityOpen && (
        <div className="p-4 bg-white shadow-md fixed top-14 w-full z-40">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Search products..."
            />
            <button
              onClick={() => {
                navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
                setAvailabilityOpen(false);
              }}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Search
            </button>
          </div>
        </div>
      )}

      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default Nevigation;
