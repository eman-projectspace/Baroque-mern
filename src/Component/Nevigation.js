import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet,Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Nevigation() {
  const navigate = useNavigate(); // Hook to navigate
  return (
 
<div className="w-full h-16">
  <div>
    {[false].map((expand) => (
      <Navbar
        key={expand}
        expand={expand}
        className="fixed top-0 z-50 bg-transparent duration-300 shadow-xl w-full h-20 flex items-center
        after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-full mt-8 cursor-pointer
       hover:!bg-white scroll-mt-0"
      >
        <Container fluid className="max-w-96 inline-block -ml-0">
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
              <div className="flex gap-4 mt-2 mb-4 ml-4"></div>
              <hr />
              <p className="mt-3 cursor-pointer font-mono inline-block">PAKISTAN</p>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <div className="text-center">
          <img className='mt-3'
            src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=150"
            alt=""
          />
        </div>
        <Container fluid className="w-96 inline-block !bg-transparent transition-all duration-300 ml-20 ">
          <div className="flex space-x-3">
            <div>
              <p className="font-serif font-medium mt-3 mr-5 text-black hover:!text-gray-700 ml-40">Pakistan</p></div>
           <div><button className='mt-3' onClick={() => navigate("/crud")}><img className='h-5 w-5 mr-20 -ml-4' src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3' onClick={() => navigate("/customerlogin")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3' onClick={() => navigate("/customerSignup")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3'  onClick={() => navigate("/cart")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png" alt=""></img></button>
           </div>
          </div>
        </Container>
      </Navbar>
    ))}
  </div>

  <Outlet />
</div>

  )
}

export default Nevigation