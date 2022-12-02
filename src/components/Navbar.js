import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
         <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          Welcome to Cincinnati
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/attractions" className="nav-link">
                Attractions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/addattractions" className="nav-link">
                Add Attractions
              </Link>
              </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

