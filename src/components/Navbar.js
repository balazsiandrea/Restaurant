import React, { useState } from "react";
import Logo from "../assets/burgerlogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import { Button } from "@mui/material";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks); //we can toggle between the image and the links by clicking on the ReorderIcon
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Button onClick={toggleNavbar}>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
}
//the ReorderIcon will appear only at a certain screen size
export default Navbar;
