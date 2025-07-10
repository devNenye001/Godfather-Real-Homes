import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img
            src="/LIGHT-GODFATHER-LOGO.png"
            alt="Logo"
            style={{
              width: "130px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </Link>

        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/listings">All Listings</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* Burger Icon */}
        <div className="burger" onClick={() => setSidebarOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <span className="close" onClick={() => setSidebarOpen(false)}>
          &times;
        </span>
        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
        <Link to="/listings" onClick={() => setSidebarOpen(false)}>All Listings</Link>
        <Link to="/projects" onClick={() => setSidebarOpen(false)}>Projects</Link>
        <Link to="/about" onClick={() => setSidebarOpen(false)}>About Us</Link>
        <Link to="/contact-us" onClick={() => setSidebarOpen(false)}>Contact Us</Link>
      </div>
    </>
  );
}

export default NavBar;
