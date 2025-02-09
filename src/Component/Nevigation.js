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
 
<div className="w-full h-15 bg-transparent hover:bg-white transition-all duration-300">
  <div>
    {[false].map((expand) => (
      <Navbar
        key={expand}
        expand={expand}
        className="!bg-transparent hover:!bg-white transition-all duration-300 mb-0 shadow-xl relative w-full 
        after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-full h-15 -mt-3  cursor-pointer"
      >
        <Container fluid className="w-96 inline-block -ml-0 !bg-transparent hover:!bg-white transition-all duration-300 mt-2">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                <Link to="/service" className="font-serif">
                    SERVICE
                </Link>
                <hr />
                <br />
                <Link to="/about">About</Link>
                <hr />
                <br />
                <Link to="/crud">CRUD</Link>
                <hr />
                <br />
                <Link to="/edit">EDIT</Link>
                <hr />
                <br />
                <Link to="/student">Student</Link>
                <hr />
                <br />
                <Link to="/usecallbackhook">Usecallback</Link>
                <hr />
                <br />
                <Link to="/usememohook">Use Memo</Link>
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
        <Container fluid className="w-96 inline-block !bg-transparent hover:!bg-white transition-all duration-300 ml-20 ">
          <div className="flex space-x-3">
            <div>
              <p className="font-serif font-medium mt-3 mr-5 text-black hover:!text-gray-700 ml-40">Pakistan</p></div>
           <div><button className='mt-3' onClick={() => navigate("/service")}><img className='h-5 w-5 mr-20 -ml-4' src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3' onClick={() => navigate("/student")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3' onClick={() => navigate("/usecallback")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt=""></img></button>
           </div>
           <div>
            <button className='mt-3'  onClick={() => navigate("/usememo")}><img className='h-5 w-5 mr-8' src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png" alt=""></img></button>
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