import { Link } from "react-router-dom";
// import logo from "../img/logo.png";

import {logoutIcon } from "../helper/icons";
import{ Container }from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

function Nav() {
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Container className="navbar navbar-expand-md fixed-top navbar-dark rounded-2 bg-primary bg-opacity-50 text-center">
      <div className="container-fluid" >
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation">BTN
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
          ref={menuRef}>
        <div className="collapse navbar-collapse bg-primary rounded-2" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-2  mb-lg-0 display-6 p-1 text-uppercase fw-bolder " >
            <li className="nav-item ">
              <Link to="/dashboard" className="nav-link text-white font-monospace m-1 pe-4 ps-4" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/dashboard/myprojects" className="nav-link text-white font-monospace m-1 pe-4 ps-4" aria-current="page">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/dashboard/about" className="nav-link text-white font-monospace m-1 pe-4 ps-4" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/contact" className="nav-link text-white font-monospace m-1 pe-4 ps-4" aria-current="page">
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link text-danger font-monospace m-1 pe-4 ps-4" aria-current="page">
              <span className="nav-item-logout">{logoutIcon}</span>
              </Link>
            </li>
          </ul>
        </div>  
        </div>
        
      </div>
    </Container>
  );
}

export default Nav;

