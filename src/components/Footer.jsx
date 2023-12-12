import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {

  const linkedinUrl = "https://www.linkedin.com/company/threeonezeroseven/";

  return (
    <footer className="p-5 position-relative">
      <div className="up-arrow d-none">
        <BsArrowUp />
      </div>
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row ">
          <div className="col-lg-6 mb-4">
            <img
              src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk"
              className="website-logo"
              alt="website logo"
            />
            <p className="text-white my-3">
              How can we help? <br />Let's work together.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-evenly justify-content-between align-items-start flex-md-row flex-column">
            <div>
              <h4>
                Ready for action
              </h4>
              <p className="footer-section-address">
                <a href="mailto:hello@iuxd.agency">
                  hi@3007.live
                </a>
              </p>
              <h4>
                Find us at
              </h4>
              <p className="footer-section-address">
                WeWork, Bengaluru North, Karnataka, India.
              </p>
            </div>
            <div>
              <h4 className="mb-3">Follow Us</h4>
              <div className="d-flex">
                <div className="follow-us-icon-container me-3">
                  <FaTwitter className="icon" />
                </div>
                <div className="follow-us-icon-container me-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                </div>
                <div className="follow-us-icon-container me-3">
                  <FaFacebook className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;