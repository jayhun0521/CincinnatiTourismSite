import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
  render() {
    return (
      <nav className="navbar navbar-danger bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Cincinnati Tourism
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Attractions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Add Attractions
              </Link>
              </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

