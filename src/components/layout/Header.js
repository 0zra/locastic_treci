import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark  mb-3 py-0"
      style={{ backgroundColor: "#61bbe0" }}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <Link className="nav-link" to="/">
              <i className="fas fa-home" /> Home
            </Link>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

Header.defaultProps = {
  branding: "Locastic"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
