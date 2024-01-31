import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebooIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebooIcon /> <LinkedIn />
      </div>
      <p> &copy; 2023 meating.com </p>
    </div>
  );
}

export default Footer;
