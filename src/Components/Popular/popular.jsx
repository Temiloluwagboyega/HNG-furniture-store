import React from "react";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import "./popular.css";
import { Link } from "react-router-dom";

export const Popular = () => {
  return (
    <div className="popular-cont">
      <h1>Popular Collections</h1>
      <div className="popular-card">
        <div className="img">
          <img src={popular1} alt="" />
          <Link
            to="/product=1"
            style={{ textDecoration: "none", color: "#1E1E1E" }}
          >
            <p>View Product</p>
          </Link>
        </div>
        <div className="img">
          <img src={popular2} alt="" />
          <Link
            to="/product=1"
            style={{ textDecoration: "none", color: "#1E1E1E" }}
          >
            <p>View Product</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
