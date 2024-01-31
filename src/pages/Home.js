import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Meating</h1>
        <p>THE BEST IN THE TOWN</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
