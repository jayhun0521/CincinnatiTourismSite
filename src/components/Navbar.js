import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation () {
    
    return (
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //    <div class="container-fluid">
      // <Link to="/" className="navbar-brand">
      //   Welcome to Cincinnati
      //  </Link>
      //   <div className="collapse navbar-collapse">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="navbar-item">
      // <Link to="/" className="nav-link">
      //   Home
      // </Link>
      //       </li>
      //       <li className="navbar-item">
      // <Link to="/about" className="nav-link">
      //   About
      // </Link>
      //       </li>
      //       <li className="navbar-item">
      // <Link to="/viewattractions" className="nav-link">
      //   Attractions
      // </Link>
      //       </li>
      //       <li className="navbar-item">
      // <Link to="/addattractions" className="nav-link">
      //   Add Attractions
      // </Link>
      //         </li>
      //       <li className="navbar-item">
      // <Link to="/contact" className="nav-link">
      //   Contact Us
      // </Link>
      //       </li>
      //     </ul>
      //   </div>
      //   </div>
      // </nav>
      <Navbar bg="dark" expand="lg" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-light">
              <h2>Welcome to Cincinnati</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/viewattractions" className="nav-link text-light">
                  Attractions
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/addattractions" className="nav-link text-light">
                  Add Attractions
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="nav-link text-light">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Navigation;
