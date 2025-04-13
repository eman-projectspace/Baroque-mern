import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";



function Nevigation() {
  const { cart, cartNotification } = useCart(); // Access cart and notification state
  const navigate = useNavigate(); // Hook to navigate
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="w-full h-16">
      <div>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={`fixed top-0 left-0 w-full  z-50 duration-300 h-20 flex 
          cursor-pointer 
         ${scrolled ? "bg-white top-0" : "bg-transparent  border-t-2 mt-8"}`}
          >
            <Container fluid className="w-20 inline-block -ml-0">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='mt-2' />
              <Navbar.Brand href="#" />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    BAROQUE
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="text-left">
                    <Link to="/chantelle" className="font-serif">
                      CHANTELLE
                    </Link>
                    <hr />
                    <br />
                    <Link to="/unstitched" className="font-serif">
                      UNSTITCHED
                    </Link>
                    <hr />
                    <br />
                    <Link to="/stitched" className="font-serif">
                      STITCHED
                    </Link>
                    <hr />
                    <br />
                    <Link to="/readytowear" className="font-serif">
                      READY TO WEAR
                    </Link>
                    <hr />
                    <br />
                    <Link to="/specialprices" className="font-serif">
                      SPECIAL PRICES
                    </Link>
                    <hr />
                    <br />
                    <Link to="/seperates" className="font-serif">
                      SEPARATES
                    </Link>
                    <hr />
                    <br />
                    <Link to="/shawls" className="font-serif">
                      SHAWLS
                    </Link>
                    <hr />
                    <br />
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <div className='flex gap-4 mt-2 mb-4 ml-4'>
                    <img className='w-5 h-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" />
                    <img className='w-5 h-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" />
                    <img className='w-5 h-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" />
                    <img className='w-5 h-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png" alt="" />
                    <img className='w-5 h-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/733/733627.png" alt="" />
                    <img className='w-5 h-5  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="" />
                  </div>
                  <hr></hr>
                  <p className='mt-3 cursor-pointer font-mono inline-block '>PAKISTAN</p>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
            {/* BAROQUE CENTER OF NAV */}
            <div>
              <img className='md:ml-96 mr-28 md:mr-40'
                src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=150"
                alt=""
              />
            </div>
            <Container fluid className="w-72 transition-all duration-300
        mr-38  ">
              <div className="flex space-x-3">
                <div>
                  <p className="font-serif font-medium mr-5 text-black hover:!text-gray-700 hidden md:block
              
             ">Pakistan</p></div>
                <div><button onClick={() => navigate("/select")}><img className='h-5 w-5 mr-10 -ml-4 hidden md:block ' src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt=""></img></button>
                </div>
                <div>
                  <button onClick={() => navigate("/customerSignup")}><img className='h-5 w-5 mr-5 hidden md:block' src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt=""></img></button>
                </div>
                {/* When user click this search bar will open */}
                <div>
                  <button
                    onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}>
                    <img className=' h-5 w-5 md:mr-3 hidden md:block ' src="https://cdn-icons-png.flaticon.com/128/54/54481.png " alt=""></img>
                    <img className=' h-5 w-5 mr-3 ml-64 -mt-14 block md:hidden sm:hidden' src="https://cdn-icons-png.flaticon.com/128/54/54481.png " alt=""></img>
                  </button>

                </div>
                <div>
                  <button onClick={() => navigate("/cart")} className="relative">
                    <img
                      className="h-5 w-5 md:mr-10 hidden sm:block md:block"
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png"
                      alt="Cart"
                    />
                    <img
                      className="h-5 w-5 mr-3 ml-5 -mt-14 block sm:hidden md:hidden"
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png"
                      alt="Cart"
                    />

                    {/* Notification Indicator */}
                    {cartNotification && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        !
                      </div>
                    )}

                    {/* Cart Item Count */}
                    {cart.length > 0 && (
                      <div className="absolute  top-0 right-0 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                        {cart.length}
                      </div>
                    )}
                  </button>

                </div>
              </div>
              {isAvailabilityOpen && (
                <div className="w-full md:w-64 mt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
                      setAvailabilityOpen(false);
                    }}
                    className="mt-2 px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800"
                  >
                    Search
                  </button>
                </div>
              )}

            </Container>
          </Navbar>

        ))}
      </div>

      <Outlet />
    </div>

  )
}

export default Nevigation