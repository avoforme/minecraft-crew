import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="side-navbar">
        <ul className="nav-links">
          <Link to={`/`}> Home </Link>
          <Link to={`/create`}> Create crewmate </Link>
          <Link to={`/read`}> See crewmate </Link>
          {/* <Link to={`/contact`}> Contact </Link> */}
        </ul>
      </nav>
      <Outlet />
    </div>

  );
};

export default Navbar;