import React, { useState } from "react";

function Layout({ children }) {
  return (
    <>
      <div className="navigation">
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
              <a href="#link__header" className="navigation__link">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#link__project" className="navigation__link">
                Project
              </a>
            </li>
            <li className="navigation__item">
              <a href="#link__about" className="navigation__link">
                About
              </a>
            </li>
            <li className="navigation__item">
              <a href="#link__contact" className="navigation__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {children}
    </>
  );
}

export default Layout;
