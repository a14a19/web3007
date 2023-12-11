import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {

  const [btn, setBtn] = useState(true)

  const btnclicked = (e) => {
    e.preventDefault()
    setBtn(current => !current)
  }

  return (
    <header className="nav-header navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <div className="website-logo">
          <Link className="navbar-brand" to="/">
            <img
              className="w-full h-full"
              id="logo"
              src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk"
              alt="website logo"
            />
          </Link>
        </div>
        <button
          className={btn ? "navbar-toggler collapsed" : "navbar-toggler"}
          onClick={btnclicked}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={btn ? "false" : "true"}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={btn ? "collapse navbar-collapse" : "collapse navbar-collapse show"} id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
          </div>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <NavLink className="nav-link" to="/">About Us</NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink className="nav-link" to="/expertise">Our Expertise</NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink className="nav-link" to="/team">Our Team</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// ! old code 
{/* <nav className="nav-header">
  <div className="nav-content">
    <div className="website-logo">
      <img
        className="w-full h-full"
        src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk"
        alt="website logo"
      />
    </div>
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/ourexpertise" className="nav-link">
          Our Expertise
        </Link>
      </li>
      <li>
        <Link to="/ourteam" className="nav-link">
          Our Team
        </Link>
      </li>
    </ul>
  </div>
</nav> */}