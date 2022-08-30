import React from "react";
import classnames from "classnames";
import "./Navbar.css"
import logo from "../Images/logo.png"

const Navbar = ({ visible }) => (
  <nav
    className={classnames("navbar", {
      "navbar--hidden": !visible
    })}
  >
    <a href="/" style={{ textDecoration: "none" }}>
      <img className="navbar--item logo" src={logo} alt="" />
    </a>
    <div><a href={""} className="navbar--item" >
        Home
    </a>
    <a href={""} className="navbar--item" >
        About us
    </a>
    <a href={""} className="navbar--item" >
        Gallery
    </a>
    <a href={""} className="navbar--item" >
        Contact us
    </a>
    <a href={""} className="navbar--item" >
        Projects
    </a>
    <div>Search</div>
    </div>
  </nav>
);

export default Navbar;
