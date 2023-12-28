import React, { useEffect, useState } from "react";
import "./navbar.css";
import { logo, avatar } from "../index";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const addScroll = () => {
      if (window.scrollY > 150) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", addScroll);
    return () => {
      window.removeEventListener("scroll", addScroll);
    };
  }, []);
  return (
    <nav className={`nav_bar ${showBackground && "showBackground"}`}>
      <img src={logo} alt="netflix-logo" />
      <img src={avatar} alt="avatar" />
    </nav>
  );
};

export default Navbar;
