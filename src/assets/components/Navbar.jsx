import React, { useState } from "react";
import Logo from "../images/cricket_logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/">
            <img src={Logo} alt="Cricket_logo" />
          </Link>
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/clubs">Clubs</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/clubs">Clubs</Link>
            <Link to="/register"> Register</Link>
            <Link to="/contact">About</Link>
            <Link to="/login">Login</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
