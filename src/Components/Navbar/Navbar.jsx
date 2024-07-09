import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import cart from "../assets/shopping-cart.svg";
import "./Navbar.css";
import "../assets/css/all.min.css";
// import '../assets/css/min.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <div className="navbar-cont">
        <div className="navbar">
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: "none", color: "#1E1E1E" }}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-link">
            <ul className="nav-menu hidden">
              <li>
                {" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#1E1E1E" }}
                >
                  Home
                </Link>{" "}
              </li>
              <li>Category</li>
              <li>Features</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <div className="search">
              <input type="text" placeholder="search" />
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M21.7236 21.5L15.7236 15.5M17.7236 10.5C17.7236 14.366 14.5896 17.5 10.7236 17.5C6.85764 17.5 3.72363 14.366 3.72363 10.5C3.72363 6.63401 6.85764 3.5 10.7236 3.5C14.5896 3.5 17.7236 6.63401 17.7236 10.5Z"
                    stroke="#5F5F5F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="user hidden">
              <p>My Account</p> <img src={user} alt="" />
            </div>
            <div className="cart hidden">
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "#1E1E1E" }}
                id="cart"
              >
                <p>Cart</p>{" "}
                <span>
                  <img src={cart} alt="" />
                </span>
              </Link>
            </div>
            <div className="nav-btn hidden">
              <button>Log IN</button>
            </div>
          </div>
          <div className="mobile-nav">
            <div className="icon-mobile">
            <i
              className="fa fa-bars"
              onClick={toggleMenu}
              style={{ marginTop: "-0px", marginRight:'20px' }}
            ></i>
            <Link
              to="/checkout"
              style={{ textDecoration: "none", color: "#1E1E1E" }}
              id="cart"
            >
              <img src={cart} alt="" />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`side-nav ${isOpen ? "is-open" : ""} `}>
        <ul>
          <li>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "#1E1E1E" }}>
              Home
            </Link>{" "}
          </li>
          <li>Category</li>
          <li>Features</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="mobile-nav-btn">
          <button>Log IN</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <li onClick={() =>{setMenu('shop')}}> <Link to='/' ></Link> Home {menu ==='shop'?<hr />: <></> }</li>
                <li onClick={() =>{setMenu('About')}} >About {menu ==='About'?<hr />: <></> }</li>
                <li onClick={() =>{setMenu('Pricing')}} >Pricing {menu ==='Pricing'?<hr />: <></> }</li>
                <li onClick={() =>{setMenu('Product')}} > <Link to='/cart'>Product</Link>  {menu ==='Product'?<hr />: <></> }</li> */
}
