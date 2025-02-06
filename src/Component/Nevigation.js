import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet,Link } from 'react-router-dom';
function Nevigation() {
  return (
 
    <div>
       
 <>
      {[false, ].map((expand) => (
     <Navbar key={expand} expand={expand} className="bg-transparent mb-0 mt-0 shadow-xl relative w-full 
     after:content-[''] after:absolute after:left-0 after:bottom-4 after:w-full 
     after:h-2">
          <Container fluid>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BAROQUE</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                <Link to="/chantelle" className="font-serif">CHANTELLE</Link>
                  <hr></hr>
                  <br/>
                 <Link to="/unstitched" className="font-serif">UNSTITCHED</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/stitched" className="font-serif">STITCHED</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/readytowear" className="font-serif">READY TO WEAR </Link>
                 <hr></hr>
                 <br/>
                 <Link to="/specialprices" className="font-serif">SPECIAL PRICES</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/seperates" className="font-serif">SEPERATES</Link>
                 <hr></hr>
                 <br/>
                 <Link to="shawls" className="font-serif">SHAWLS</Link>
                 <hr></hr>
                 <br/>
                  <Link to="/service" className="font-serif">Hooks</Link>
                  <hr></hr>
                  <br/>
                 <Link to="/about">About</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/crud">CRUD</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/edit">EDIT</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/student">Student</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/usecallbackhook">Usecallback</Link>
                 <hr></hr>
                 <br/>
                 <Link to="/usememohook">Use Memo</Link>
                 <hr></hr>
                 <br/>
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
                {/* <img className='w-5 h-5 cursor-pointer' src="" alt=""/>
                <img  className='w-5 h-5  cursor-pointer' src="" alt=""/>
                <img  className='w-5 h-5  cursor-pointer' src="" alt=""/>
                <img  className='w-5 h-5  cursor-pointer' src="" alt=""/>
                <img  className='w-5 h-5  cursor-pointer' src="" alt=""/>
                <img  className='w-5 h-5  cursor-pointer' src="" alt=""/> */}
                </div>
                <hr></hr>
                <p className='mt-3 cursor-pointer font-mono inline-block '>PAKISTAN</p>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    <Outlet/>
    </div>
  )
}

export default Nevigation