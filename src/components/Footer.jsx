import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/company/threeonezeroseven/";
  return (
    <div>
      <div className="follow-us-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="follow-us-section-heading">Follow Us</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="follow-us-icon-container">
                  <FaTwitter className="icon" />
                </div>
                <div className="follow-us-icon-container">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                </div>
                <div className="follow-us-icon-container">
                  <FaFacebook className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk"
                className="website-logo"
                alt="website logo"
              />
              <h1 className="footer-section-mail-id">{linkedinUrl}</h1>
              <p className="footer-section-address">
                WeWork, Bengaluru North, Karnataka, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;