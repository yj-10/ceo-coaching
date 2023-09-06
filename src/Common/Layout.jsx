import React, { useState } from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      {/* <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/About" className="navigation__link">
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/Services" className="navigation__link">
                Services
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/Contact" className="navigation__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div> */}

      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/About">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/Services">Service</Link>
        </li>
        <li>
          {" "}
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {children}
    </>
  );
}

export default Layout;
