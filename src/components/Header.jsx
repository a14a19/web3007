import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk"
          alt="website logo"
        />
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
    </nav>
  );
};

export default Header;