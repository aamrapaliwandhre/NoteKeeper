import React from "react";
import "./Footer.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function Footer() {
  return (
    <BrowserRouter>
      <footer className="footer flex-column-center">
        <p>Made with 🤍 by Aamrapali Wandhre</p>
        <ul className="footer-list flex-center">
          <li>
            <Link to="https://twitter.com/rani_wandhre" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/aamrapaliwandhre" target="_blank">
              <i className="fab fa-github"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/aamrapali-wandhre-158a36162/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </BrowserRouter>
  );
}

export default Footer;
