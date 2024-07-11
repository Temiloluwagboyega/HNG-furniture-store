import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./items.css";
import { ShopContext } from "../../context/shop-context";
import { ShoppingCart } from "phosphor-react";
export const Product = (props) => {
  const[detail, setDetail] = useState();
  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  const navigate = useNavigate()


  return (
    <>
      <div className="">
        <div className="Items">
        <Link
                to="/product=1"
                style={{ textDecoration: "none", color: "#1E1E1E" }}
              >
          <img src={productImage} alt="" />
          </Link>
          <div className="item-description">
            <h3><p className="prod">{productName}</p></h3>
            <p>{description}</p>
            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                  />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                  />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
              >
                <path
                  d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                  fill="#3CAE14"
                  />
              </svg>
            </div>
                  <b>
                    <p>${price}</p>
                  </b>
            <div className="item-btn">
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "#1E1E1E" }}
              >
                {" "}
                <button className="" onClick={() =>addToCart(id)}>Buy Now</button>
              </Link>
              <button className="" onClick={() =>addToCart(id)} >
                <ShoppingCart size={20}/> {cartItemAmount > 0 && <sup> {cartItemAmount}  </sup>} 
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
