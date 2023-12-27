import React from "react";
import "./navbar.css";
import { logo, avatar } from "../index";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="netflix-logo" />
      <img src={avatar} alt="avatar" />
    </nav>
  );
};

export default Navbar;
